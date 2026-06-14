# my-classroom-tools — 我的班級工具總專案

## 對話開始時請先讀
進度與最近更動都在 Obsidian：`OB/10-專案工作筆記/18.OB_my-classroom-tools/18.OB_my-classroom-tools 工作筆記.md`

## 工作模式
- **加新工具**：對 Claude Code 說「我想做一個 XXX 工具」→ 會建 `tools/<工具名>/` 子資料夾、引導完成
- **結束工作**：對 Claude Code 說「**收工**」→ 自動觸發收工 SOP（更新工作筆記 + commit + push）
- **接續工作**：對 Claude Code 說「讀工作筆記、告訴我上次做到哪」

## 工作桌 + 三個家
- 📋 GDrive 工作桌：`/Users/hsiaoyutsai/我的雲端硬碟 (gisele0903@gmail.com)/my-classroom-tools/`
- 🐙 GitHub repo：`astrid0903/my-classroom-tools`（公開）
- 📘 Obsidian 駕駛艙：`OB/10-專案工作筆記/18.OB_my-classroom-tools/18.OB_my-classroom-tools 工作筆記.md`
- 🔥 Firebase 專案：`my-teaching-tools-gisele0903`

## 「收工」觸發規則

當使用者說「收工」、「結束了」、「準備換電腦」、「該同步的同步」、「先到這裡」等收尾語時，**請依照以下 SOP 執行**：

1. 從對話歷史摘要：今天做了什麼（完成檔案、決策、新坑）
2. 找對應的 Obsidian 工作筆記（`OB/10-專案工作筆記/<同名資料夾>/<同名資料夾> 工作筆記.md`）
3. 更新 Obsidian 工作筆記：
   - 「⏯️ 上次做到哪」段：最後動作、完成檔案、對話脈絡
   - 「🗓️ 最近更動紀錄」表格加一行：今天日期 + 摘要 + ✅✅✅
   - 「🕳️ 踩坑筆記」（若有新坑）
4. 執行收工腳本：
   ```bash
   cd "/Users/hsiaoyutsai/我的雲端硬碟 (gisele0903@gmail.com)/my-classroom-tools"
   bash ~/codex-tools/shutdown.sh "<今天工作摘要>"
   ```
5. 回報三勾表格同步狀態

不該做：
- ❌ 沒實質進度的對話也跑同步
- ❌ 把 `.claude/`、`.codex/` commit 進去
- ❌ commit 訊息寫「更新」、「修改」這種沒資訊的字

## 工具清單
（加新工具時自動更新）
- `index.html` + `script.js` + `styles.css` + `styles-dark.css`：Google Slides 教學播放台（主程式，目前 v17）
- `tools/coordinate-hunter/`：直角座標練習遊戲「座標獵人」（規劃中，尚未建立）

---

## 程式碼架構

### 技術棧
- **Frontend**：純 HTML5 + CSS3 + Vanilla JavaScript ES6+（無框架、無 build 步驟）
- **Backend**：Firebase（Firestore 即時資料庫、Anonymous Auth、Hosting）
- **外部 API**：Google Drive API v3、Google OAuth 2.0、Google Slides 嵌入

### 主要檔案

| 檔案 | 大小 | 說明 |
|------|------|------|
| `index.html` | ~58KB | 單頁應用 HTML，所有 UI 結構 |
| `script.js` | ~7,600 行 | 完整應用邏輯（無分模組） |
| `styles.css` | ~4,200 行 | 亮色主題樣式 |
| `styles-dark.css` | ~3,300 行 | 深色主題覆蓋層 |
| `firestore.rules` | ~254 行 | Firestore 安全規則 |
| `firebase.json` | — | Hosting 設定，public dir 為根目錄 `.` |
| `script-v17.js` | — | 版本化副本（用於 Cache Busting） |
| `styles-v17.css` | — | 版本化副本 |
| `styles-dark-v17.css` | — | 版本化副本 |

舊版本存放於 `舊的/versioned-assets/`（v2–v16），已封存。

### 應用程式主要功能區塊

**Home 畫面**
- 佈局存檔清單、載入、匯入/匯出 JSON
- 連接 Google Drive 資料夾

**Studio 編輯器**（主要工作區）
- `#side-rail`：側欄導覽（投影片、頁面、計時器、時鐘、文字、分組、圖片、YouTube、排列）
- Stage 區：Google Slides iframe 嵌入 + 可拖曳 Widget
- Control Tray：工具設定面板
- Tool Dock：快捷按鈕列

**Widget 系統**
- Timer（倒計時），Clock（24h 時鐘），Groups（分組抽籤），Text，Image，YouTube，Slides 額外投影片
- 支援拖曳、縮放（snap-to-grid 12px）、顯示/隱藏

**Post Board（貼文板）**
- 教師端：建立版面、分區（Section）管理、貼文瀏覽、投票
- 學生端：QR Code 進入 `?board=boardId` 路徑、匿名投稿（最多5張圖，每張≤180KB）、投票
- Firebase 即時同步（`onSnapshot()`）

### Firestore 資料結構

```
classroomToolLayouts/{syncCode}         # 教師存檔的 Studio 佈局
classroomPostBoards/{boardId}           # 貼文板 metadata（title, sections, participantMode）
classroomPostBoards/{boardId}/posts/{postId}   # 個別貼文（text, images[], pollVotes）
classroomPostBoardAdmins/{boardId}      # 管理員金鑰（寫入受 adminKey 驗證保護）
```

### CSS 主題變數（亮色 / 深色）

亮色 (`styles.css`)：
- `--ink: #17202a`、`--panel: #ffffff`、`--blue: #2364aa`

深色 (`styles-dark.css`)：
- `--ink: #e8edf2`、`--panel: #11161d`、`--blue: #5fa8ff`

### 版本化資產策略
每次發布新版時：
1. 將 `script.js` / `styles.css` / `styles-dark.css` 各複製一份為 `*-v{N}.js/css`
2. `index.html` 中的 `<script src>` / `<link href>` 指向版本化檔名（Cache Busting）
3. 舊版本定期移入 `舊的/versioned-assets/` 封存

---

## 開發慣例

### 編輯主程式
直接修改 `script.js`、`styles.css`、`styles-dark.css`，**不需要任何 build 指令**。
修改完成後同步更新版本化副本（如 `script-v17.js`）。

### 部署
```bash
firebase deploy --only hosting
```
`firebase.json` 已設定忽略：`.claude/`、`.codex/`、`tools/`、`舊的/`、`播放台存檔/`、敏感設定檔。

### 不 commit 的東西
- `.claude/`、`.codex/`（AI 代理設定）
- `client_secret*.json`、`credentials.*`、`.env`（Google OAuth 金鑰）
- `node_modules/`

### Commit 訊息格式
```
<type>: <具體說明做了什麼、為什麼>
```
type 用：`feat`、`fix`、`style`、`docs`、`chore`

---

## 工作注意事項
- 學生資料一律去識別化（只用座號 + 班級代號，不存姓名）
- 匿名 Firebase Auth 用於學生端，教師端用 adminKey 驗證
- commit 訊息寫清楚做了什麼 + 為什麼
- 收工前說「收工」讓 Claude Code 同步三方

# my-classroom-tools — 我的班級工具總專案

## 對話開始時請先讀
進度與最近更動都在 Obsidian：`OB/10-專案工作筆記/18.my-classroom-tools/18.my-classroom-tools 工作筆記.md`

## 工作模式
- **加新工具**：對 AI（Antigravity / Codex）說「我想做一個 XXX 工具」→ 會建 `tools/<工具名>/` 子資料夾、引導做
- **結束工作**：說「**收工**」→ 自動觸發 `~/codex-tools/shutdown.sh` SOP（commit + push + 更新 Obsidian 工作筆記）
- **接續工作**：說「讀工作筆記、告訴我上次做到哪」

## 工作桌 + 三個家
- 📋 GDrive 工作桌：`/Users/hsiaoyutsai/我的雲端硬碟 (gisele0903@gmail.com)/my-classroom-tools/`
- 🐙 GitHub repo：`astrid0903/my-classroom-tools`（公開）
- 📘 Obsidian 駕駛艙：`OB/10-專案工作筆記/18.my-classroom-tools/18.my-classroom-tools 工作筆記.md`
- 🔥 Firebase 專案：`my-teaching-tools-gisele0903`（Firebase App ID）

## 「收工」觸發規則（給 Codex 讀的）

當使用者說「收工」、「結束了」、「準備換電腦」、「該同步的同步」、「先到這裡」等收尾語時，**請依照以下 SOP 執行**：

1. 從對話歷史摘要：今天做了什麼（完成檔案、決策、新坑）
2. 找到工作目錄（當前 cwd）和對應的 Obsidian 工作筆記（`<vault>/10-專案工作筆記/<同名資料夾>/<同名資料夾> 工作筆記.md`）
3. 更新 Obsidian 工作筆記：
   - 「⏯️ 上次做到哪」段：最後動作、完成檔案、對話脈絡
   - 「🗓️ 最近更動紀錄」表格加一行：今天日期 + 摘要 + ✅✅✅
   - 「🕳️ 踩坑筆記」（若有新坑）
4. Git commit + push：
   ```bash
   cd "<工作目錄>"
   git config windows.appendAtomically false
   git add <今天動到的檔案，不要 add .claude/ 或 .codex/>
   git commit -m "<今天工作摘要>"
   git push origin <branch>
   ```
   - commit 標題：「動詞 + 對象」
   - 正文 3-5 條 bullet 描述變動 + 為什麼
5. 給三勾表格報告同步狀態

不該做：
- ❌ 沒實質進度的對話也跑同步
- ❌ 把 `.claude/`、`.codex/` 進去
- ❌ commit 訊息寫「更新」、「修改」這種沒資訊的字

## 工具清單
（之後加新工具時自動更新）
- `index.html`：Google Slides 教學播放台，可播放指定簡報並疊加計時器與學員分組名單
- `tools/coordinate-hunter/`：直角座標練習遊戲「座標獵人」

## 工作注意事項
- 學生資料一律去識別化（只用座號 + 班級代號）
- commit 訊息寫清楚做了什麼 + 為什麼
- 收工前說「收工」讓 Codex 同步三方

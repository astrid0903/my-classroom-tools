const STORAGE_KEY = "classroomSlidesStudio.v1";
const FIREBASE_CONFIG = {
  apiKey: "AIzaSyD-SgodKqo2X7rsKHNPx7hbAGtrBdQolUU",
  authDomain: "my-teaching-tools-gisele0903.firebaseapp.com",
  projectId: "my-teaching-tools-gisele0903",
  storageBucket: "my-teaching-tools-gisele0903.firebasestorage.app",
  messagingSenderId: "229213858169",
  appId: "1:229213858169:web:9696294fe7e2fbb21ce7a8",
  measurementId: "G-X9V70BGRZH",
};
const FIREBASE_COLLECTION = "classroomToolLayouts";

const els = {
  stage: document.querySelector("#slide-stage"),
  frame: document.querySelector("#slides-frame"),
  slidesUrl: document.querySelector("#slides-url"),
  loadSlides: document.querySelector("#load-slides"),
  clearSlides: document.querySelector("#clear-slides"),
  switchSlidesMode: document.querySelector("#switch-slides-mode"),
  openSlides: document.querySelector("#open-slides"),
  openOnlineApp: document.querySelector("#open-online-app"),
  slidesDebug: document.querySelector("#slides-debug"),
  slidesLoading: document.querySelector("#slides-loading"),
  loadingTitle: document.querySelector("#loading-title"),
  loadingDetail: document.querySelector("#loading-detail"),
  retrySlides: document.querySelector("#retry-slides"),
  loadingOpenSlides: document.querySelector("#loading-open-slides"),
  slidesMessage: document.querySelector("#slides-message"),
  snapGuides: document.querySelector("#snap-guides"),
  fullscreenButton: document.querySelector("#fullscreen-button"),
  showTimer: document.querySelector("#show-timer"),
  timerMinutes: document.querySelector("#timer-minutes"),
  timerSeconds: document.querySelector("#timer-seconds"),
  timerStart: document.querySelector("#timer-start"),
  timerPause: document.querySelector("#timer-pause"),
  timerReset: document.querySelector("#timer-reset"),
  timerTitle: document.querySelector("#timer-title"),
  timerWidget: document.querySelector("#timer-widget"),
  stageTimerTitle: document.querySelector("#stage-timer-title"),
  stageTimer: document.querySelector("#stage-timer"),
  stageTimerNote: document.querySelector("#stage-timer-note"),
  stageTimerStart: document.querySelector("#stage-timer-start"),
  stageTimerPause: document.querySelector("#stage-timer-pause"),
  stageTimerReset: document.querySelector("#stage-timer-reset"),
  showClock: document.querySelector("#show-clock"),
  clockTitle: document.querySelector("#clock-title"),
  clockWidget: document.querySelector("#clock-widget"),
  stageClockTitle: document.querySelector("#stage-clock-title"),
  stageClock: document.querySelector("#stage-clock"),
  showGroups: document.querySelector("#show-groups"),
  groupsTitle: document.querySelector("#groups-title"),
  showTextBox: document.querySelector("#show-text-box"),
  textBoxContent: document.querySelector("#text-box-content"),
  textBoxSize: document.querySelector("#text-box-size"),
  textBoxColor: document.querySelector("#text-box-color"),
  textWidget: document.querySelector("#text-widget"),
  stageTextBox: document.querySelector("#stage-text-box"),
  showImage: document.querySelector("#show-image"),
  imageTitle: document.querySelector("#image-title"),
  imageUrl: document.querySelector("#image-url"),
  imageFile: document.querySelector("#image-file"),
  loadImage: document.querySelector("#load-image"),
  clearImage: document.querySelector("#clear-image"),
  imageMessage: document.querySelector("#image-message"),
  imageWidget: document.querySelector("#image-widget"),
  stageImageTitle: document.querySelector("#stage-image-title"),
  stageImage: document.querySelector("#stage-image"),
  stageImageEmpty: document.querySelector("#stage-image-empty"),
  showYoutube: document.querySelector("#show-youtube"),
  youtubeTitle: document.querySelector("#youtube-title"),
  youtubeUrl: document.querySelector("#youtube-url"),
  loadYoutube: document.querySelector("#load-youtube"),
  clearYoutube: document.querySelector("#clear-youtube"),
  openYoutube: document.querySelector("#open-youtube"),
  youtubeMessage: document.querySelector("#youtube-message"),
  youtubeWidget: document.querySelector("#youtube-widget"),
  stageYoutubeTitle: document.querySelector("#stage-youtube-title"),
  youtubeFrame: document.querySelector("#youtube-frame"),
  stageYoutubeEmpty: document.querySelector("#stage-youtube-empty"),
  layoutName: document.querySelector("#layout-name"),
  saveLayout: document.querySelector("#save-layout"),
  savedLayouts: document.querySelector("#saved-layouts"),
  loadLayout: document.querySelector("#load-layout"),
  deleteLayout: document.querySelector("#delete-layout"),
  exportLayouts: document.querySelector("#export-layouts"),
  importLayouts: document.querySelector("#import-layouts"),
  syncCode: document.querySelector("#sync-code"),
  syncLayouts: document.querySelector("#sync-layouts"),
  loadCloudLayouts: document.querySelector("#load-cloud-layouts"),
  layoutMessage: document.querySelector("#layout-message"),
  studentList: document.querySelector("#student-list"),
  groupCount: document.querySelector("#group-count"),
  shuffleGroups: document.querySelector("#shuffle-groups"),
  makeGroups: document.querySelector("#make-groups"),
  copyGroups: document.querySelector("#copy-groups"),
  buildManualGroups: document.querySelector("#build-manual-groups"),
  applyManualGroups: document.querySelector("#apply-manual-groups"),
  manualGroupsList: document.querySelector("#manual-groups-list"),
  groupsOutput: document.querySelector("#groups-output"),
  groupsWidget: document.querySelector("#groups-widget"),
  stageGroupsTitle: document.querySelector("#stage-groups-title"),
  stageGroups: document.querySelector("#stage-groups"),
  toolDock: document.querySelector(".tool-dock"),
  hideWidgets: document.querySelector("#hide-widgets"),
  collapseDock: document.querySelector("#collapse-dock"),
  expandDock: document.querySelector("#expand-dock"),
  dockItems: document.querySelectorAll(".dock-item[data-tool]"),
  toolPanels: document.querySelectorAll(".tool-section[data-panel]"),
};

let timerTotal = 5 * 60;
let timerRemaining = timerTotal;
let timerId = null;
let groups = [];
let manualGroups = [];
let dragState = null;
let resizeState = null;
let activeTool = "";
let slidesMode = "preview";
let currentSlides = null;
let currentPlayerUrl = "";
let loadingTimerId = null;
let clockTimerId = null;
let dockCollapsed = false;
let imageObjectUrl = "";
let imageSource = "";
let youtubeEmbedUrl = "";
let youtubeWatchUrl = "";
let firebaseApi = null;
let firebaseLoadPromise = null;
let dynamicWidgets = [];
let dynamicWidgetCounter = 0;
const DYNAMIC_WIDGET_TYPES = new Set(["timer", "clock", "groups", "text", "image", "youtube"]);
const SNAP_GRID = 12;
const SNAP_DISTANCE = 8;

function readState() {
  try {
    return JSON.parse(window.localStorage.getItem(STORAGE_KEY)) || {};
  } catch {
    return {};
  }
}

function readSavedLayouts() {
  const layouts = readState().savedLayouts;
  if (!layouts || typeof layouts !== "object" || Array.isArray(layouts)) return {};
  return layouts;
}

function buildState(extra = {}) {
  return {
    slidesUrl: els.slidesUrl.value,
    timerMinutes: els.timerMinutes.value,
    timerSeconds: els.timerSeconds.value,
    timerTitle: els.timerTitle.value,
    showClock: els.showClock.checked,
    clockTitle: els.clockTitle.value,
    showTimer: els.showTimer.checked,
    showGroups: els.showGroups.checked,
    groupsTitle: els.groupsTitle.value,
    showTextBox: els.showTextBox.checked,
    textBoxContent: els.textBoxContent.value,
    textBoxSize: els.textBoxSize.value,
    textBoxColor: els.textBoxColor.value,
    showImage: els.showImage.checked,
    imageTitle: els.imageTitle.value,
    imageUrl: els.imageUrl.value,
    imageSource: imageSource.startsWith("blob:") ? "" : imageSource,
    showYoutube: els.showYoutube.checked,
    youtubeTitle: els.youtubeTitle.value,
    youtubeUrl: els.youtubeUrl.value,
    youtubeEmbedUrl,
    youtubeWatchUrl,
    syncCode: els.syncCode.value,
    studentList: els.studentList.value,
    groupCount: els.groupCount.value,
    shuffleGroups: els.shuffleGroups.checked,
    currentEmbedUrl: els.frame.getAttribute("src") || "",
    slidesMode,
    currentSlides,
    activeTool,
    dockCollapsed,
    groups,
    manualGroups: readManualGroups(),
    dynamicWidgets: serializeDynamicWidgets(),
    savedLayouts: readSavedLayouts(),
    widgets: {
      timer: widgetPosition(els.timerWidget),
      clock: widgetPosition(els.clockWidget),
      groups: widgetPosition(els.groupsWidget),
      text: widgetPosition(els.textWidget),
      image: widgetPosition(els.imageWidget),
      youtube: widgetPosition(els.youtubeWidget),
    },
    ...extra,
  };
}

function writeState(extra = {}) {
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(buildState(extra)));
}

function layoutSnapshot() {
  const snapshot = buildState({
    activeTool: "",
    dockCollapsed,
  });
  delete snapshot.savedLayouts;
  return snapshot;
}

function formatSavedAt(value) {
  if (!value) return "";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "";
  return date.toLocaleString("zh-Hant", {
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  });
}

function renderSavedLayouts(selectedName = "") {
  const layouts = readSavedLayouts();
  const entries = Object.values(layouts).sort((a, b) => String(b.savedAt || "").localeCompare(String(a.savedAt || "")));
  els.savedLayouts.innerHTML = "";

  if (entries.length === 0) {
    const option = document.createElement("option");
    option.value = "";
    option.textContent = "尚未儲存版本";
    els.savedLayouts.appendChild(option);
    els.loadLayout.disabled = true;
    els.deleteLayout.disabled = true;
    els.exportLayouts.disabled = true;
    return;
  }

  entries.forEach((layout) => {
    const option = document.createElement("option");
    option.value = layout.name;
    option.textContent = `${layout.name}${layout.savedAt ? `（${formatSavedAt(layout.savedAt)}）` : ""}`;
    els.savedLayouts.appendChild(option);
  });

  els.savedLayouts.value = selectedName && layouts[selectedName] ? selectedName : entries[0].name;
  els.loadLayout.disabled = false;
  els.deleteLayout.disabled = false;
  els.exportLayouts.disabled = false;
}

function saveCurrentLayout() {
  const name = els.layoutName.value.trim();
  if (!name) {
    els.layoutMessage.textContent = "請先輸入版本名稱。";
    els.layoutMessage.classList.add("error");
    return;
  }

  const layouts = readSavedLayouts();
  layouts[name] = {
    name,
    savedAt: new Date().toISOString(),
    state: layoutSnapshot(),
  };

  writeState({ savedLayouts: layouts });
  renderSavedLayouts(name);
  const imageNote = imageSource.startsWith("blob:") ? " 本機選取的圖片不會寫進版本檔，跨電腦請改用圖片網址。" : "";
  els.layoutMessage.textContent = `已儲存「${name}」。${imageNote}`;
  els.layoutMessage.classList.remove("error");
}

function loadSelectedLayout() {
  const name = els.savedLayouts.value;
  const layout = readSavedLayouts()[name];
  if (!layout?.state) {
    els.layoutMessage.textContent = "請先選擇要載入的版本。";
    els.layoutMessage.classList.add("error");
    return;
  }

  const layouts = readSavedLayouts();
  const nextState = {
    ...layout.state,
    savedLayouts: layouts,
    activeTool: "layouts",
  };
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(nextState));
  window.location.reload();
}

function deleteSelectedLayout() {
  const name = els.savedLayouts.value;
  const layouts = readSavedLayouts();
  if (!name || !layouts[name]) {
    els.layoutMessage.textContent = "請先選擇要刪除的版本。";
    els.layoutMessage.classList.add("error");
    return;
  }

  delete layouts[name];
  writeState({ savedLayouts: layouts });
  renderSavedLayouts();
  els.layoutMessage.textContent = `已刪除本機版本「${name}」。若要同步刪除雲端版本，請再按「同步到雲端」。`;
  els.layoutMessage.classList.remove("error");
}

function exportLayouts() {
  const layouts = readSavedLayouts();
  if (Object.keys(layouts).length === 0) {
    els.layoutMessage.textContent = "目前沒有可匯出的版本。";
    els.layoutMessage.classList.add("error");
    return;
  }

  const payload = {
    type: "classroomSlidesStudio.layouts",
    version: 1,
    exportedAt: new Date().toISOString(),
    layouts,
  };
  const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `classroom-tool-layouts-${new Date().toISOString().slice(0, 10)}.json`;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
  els.layoutMessage.textContent = "已匯出版本檔，可拿到另一台電腦匯入。";
  els.layoutMessage.classList.remove("error");
}

function normalizeImportedLayouts(payload) {
  const source = payload?.layouts || payload;
  if (!source || typeof source !== "object" || Array.isArray(source)) return {};

  return Object.values(source).reduce((result, item) => {
    if (!item?.name || !item?.state) return result;
    result[item.name] = {
      name: String(item.name),
      savedAt: item.savedAt || new Date().toISOString(),
      state: item.state,
    };
    return result;
  }, {});
}

function importLayoutsFromFile(file) {
  if (!file) return;
  const reader = new FileReader();
  reader.addEventListener("load", () => {
    try {
      const imported = normalizeImportedLayouts(JSON.parse(String(reader.result || "")));
      const importedNames = Object.keys(imported);
      if (importedNames.length === 0) throw new Error("empty");

      const layouts = {
        ...readSavedLayouts(),
        ...imported,
      };
      writeState({ savedLayouts: layouts });
      renderSavedLayouts(importedNames[0]);
      els.layoutMessage.textContent = `已匯入 ${importedNames.length} 個版本。`;
      els.layoutMessage.classList.remove("error");
    } catch {
      els.layoutMessage.textContent = "匯入失敗，請確認選到的是播放台版本 JSON 檔。";
      els.layoutMessage.classList.add("error");
    } finally {
      els.importLayouts.value = "";
    }
  });
  reader.readAsText(file);
}

function makeWidgetId() {
  dynamicWidgetCounter += 1;
  return `widget-${Date.now().toString(36)}-${dynamicWidgetCounter.toString(36)}`;
}

function cloneValue(value) {
  return JSON.parse(JSON.stringify(value));
}

function serializeDynamicWidgets() {
  return dynamicWidgets.map((widget) => ({
    id: widget.id,
    type: widget.type,
    state: sanitizeDynamicState(widget.state),
    position: widgetPosition(widget.element),
  }));
}

function sanitizeDynamicState(state) {
  const nextState = cloneValue(state);
  if (typeof nextState.imageSource === "string" && nextState.imageSource.startsWith("blob:")) {
    nextState.imageSource = "";
  }
  return nextState;
}

function defaultDynamicState(type) {
  if (type === "timer") return { title: "Timer", titleSize: "13", minutes: "5", seconds: "0", remaining: 300, settingsOpen: false };
  if (type === "clock") return { title: "Clock", titleSize: "13", settingsOpen: false };
  if (type === "groups") return { title: "Groups", titleSize: "13", studentList: "", groupCount: "4", shuffle: true, groups: [], settingsOpen: true };
  if (type === "text") return { title: "Text", titleSize: "13", content: "文字框", size: "44", color: "#ffffff", settingsOpen: true };
  if (type === "image") return { title: "Image", titleSize: "13", imageUrl: "", imageSource: "", settingsOpen: true };
  if (type === "youtube") return { title: "YouTube", titleSize: "13", youtubeUrl: "", embedUrl: "", watchUrl: "", settingsOpen: true, minimized: false };
  return { title: "Widget", titleSize: "13", settingsOpen: true };
}

function getDynamicWidget(id) {
  return dynamicWidgets.find((widget) => widget.id === id);
}

function createEl(tag, className = "", text = "") {
  const element = document.createElement(tag);
  if (className) element.className = className;
  if (text) element.textContent = text;
  return element;
}

function addLabeledInput(container, labelText, input) {
  const label = createEl("label");
  label.textContent = labelText;
  label.appendChild(input);
  container.appendChild(label);
  return input;
}

function dynamicInput(value = "", type = "text") {
  const input = document.createElement("input");
  input.type = type;
  input.value = value;
  return input;
}

function dynamicTextarea(value = "", rows = 3) {
  const textarea = document.createElement("textarea");
  textarea.rows = rows;
  textarea.value = value;
  return textarea;
}

function createDynamicWidget(type, state = {}, position = null) {
  if (!DYNAMIC_WIDGET_TYPES.has(type)) return null;

  const id = state.id || makeWidgetId();
  const nextState = {
    ...defaultDynamicState(type),
    ...cloneValue(state),
  };
  delete nextState.id;

  const widget = document.createElement("article");
  widget.className = "widget dynamic-widget";
  widget.dataset.widget = type;
  widget.dataset.widgetType = type;
  widget.dataset.dynamicId = id;
  widget.style.left = `${24 + (dynamicWidgets.length % 6) * 28}px`;
  widget.style.top = `${24 + (dynamicWidgets.length % 6) * 28}px`;

  const head = createEl("div", "dynamic-head");
  const drag = createEl("button", "dynamic-drag", "⋮⋮");
  drag.type = "button";
  drag.setAttribute("aria-label", "拖曳小工具");
  const title = createEl("div", "dynamic-title");
  const actions = createEl("div", "dynamic-actions");
  const minimizeButton = type === "youtube" ? createEl("button", "", "▁") : null;
  const copyButton = createEl("button", "", "⧉");
  copyButton.type = "button";
  copyButton.title = "複製小工具";
  const settingsButton = createEl("button", "", "⋯");
  settingsButton.type = "button";
  settingsButton.title = "顯示設定";
  const removeButton = createEl("button", "", "×");
  removeButton.type = "button";
  removeButton.title = "刪除小工具";
  if (minimizeButton) {
    minimizeButton.type = "button";
    minimizeButton.title = "最小化 YouTube";
    actions.appendChild(minimizeButton);
  }
  actions.append(copyButton, settingsButton, removeButton);
  head.append(drag, title, actions);

  const content = createEl("div", "dynamic-content");
  const display = createEl("div", "dynamic-display");
  const settings = createEl("div", "dynamic-settings");
  const resize = createEl("button", "resize-handle");
  resize.type = "button";
  resize.setAttribute("aria-label", "縮放小工具");

  content.append(display, settings);
  widget.append(head, content, resize);
  els.stage.appendChild(widget);

  const instance = {
    id,
    type,
    state: nextState,
    element: widget,
    title,
    display,
    settings,
    minimizeButton,
    timerId: null,
    clockId: null,
  };
  dynamicWidgets.push(instance);

  drag.addEventListener("pointerdown", startDrag);
  if (type === "youtube") {
    head.addEventListener("pointerdown", (event) => {
      if (instance.state.minimized && !event.target.closest("button")) startDrag(event);
    });
  }
  resize.addEventListener("pointerdown", startResize);
  copyButton.addEventListener("click", () => copyDynamicWidget(id));
  minimizeButton?.addEventListener("click", () => {
    const nextMinimized = !instance.state.minimized;
    if (nextMinimized) {
      instance.state.expandedSize = widgetPosition(instance.element);
    }
    instance.state.minimized = nextMinimized;
    renderDynamicWidget(instance);
    writeState();
  });
  settingsButton.addEventListener("click", () => {
    instance.state.settingsOpen = !instance.state.settingsOpen;
    renderDynamicWidget(instance);
    writeState();
  });
  removeButton.addEventListener("click", () => removeDynamicWidget(id));

  buildDynamicSettings(instance);
  renderDynamicWidget(instance);
  applyWidgetPosition(widget, position);
  keepWidgetVisible(widget);
  writeState();
  return instance;
}

function updateDynamicState(instance, patch = {}) {
  instance.state = {
    ...instance.state,
    ...patch,
  };
  renderDynamicWidget(instance);
  writeState();
}

function buildDynamicSettings(instance) {
  const { type, state, settings } = instance;
  settings.innerHTML = "";

  const titleInput = addLabeledInput(settings, "標題", dynamicInput(state.title || ""));
  titleInput.addEventListener("input", () => updateDynamicState(instance, { title: titleInput.value }));
  const titleSize = addLabeledInput(settings, "標題大小", dynamicInput(state.titleSize || "13", "number"));
  titleSize.min = "8";
  titleSize.max = "80";
  titleSize.addEventListener("input", () => updateDynamicState(instance, { titleSize: titleSize.value }));

  if (type === "timer") {
    const grid = createEl("div", "time-grid");
    const minutes = addLabeledInput(grid, "分鐘", dynamicInput(state.minutes || "5", "number"));
    minutes.min = "0";
    minutes.max = "180";
    const seconds = addLabeledInput(grid, "秒", dynamicInput(state.seconds || "0", "number"));
    seconds.min = "0";
    seconds.max = "59";
    settings.appendChild(grid);
    const row = createEl("div", "button-row three");
    const start = createEl("button", "", "開始");
    const pause = createEl("button", "secondary", "暫停");
    const reset = createEl("button", "secondary", "重設");
    start.type = pause.type = reset.type = "button";
    row.append(start, pause, reset);
    settings.appendChild(row);
    minutes.addEventListener("change", () => {
      const total = dynamicTimerTotal(minutes.value, seconds.value);
      updateDynamicState(instance, { minutes: minutes.value, seconds: seconds.value, remaining: total });
    });
    seconds.addEventListener("change", () => {
      const total = dynamicTimerTotal(minutes.value, seconds.value);
      updateDynamicState(instance, { minutes: minutes.value, seconds: seconds.value, remaining: total });
    });
    start.addEventListener("click", () => startDynamicTimer(instance));
    pause.addEventListener("click", () => pauseDynamicTimer(instance));
    reset.addEventListener("click", () => resetDynamicTimer(instance));
  }

  if (type === "groups") {
    const list = addLabeledInput(settings, "名單", dynamicTextarea(state.studentList || "", 5));
    const row = createEl("div", "group-controls");
    const count = addLabeledInput(row, "分成幾組", dynamicInput(state.groupCount || "4", "number"));
    count.min = "1";
    count.max = "20";
    const shuffleLabel = createEl("label", "switch shuffle-switch");
    const shuffle = document.createElement("input");
    shuffle.type = "checkbox";
    shuffle.checked = state.shuffle !== false;
    shuffleLabel.append(shuffle, document.createTextNode("隨機"));
    row.appendChild(shuffleLabel);
    settings.appendChild(row);
    const make = createEl("button", "", "產生分組");
    make.type = "button";
    settings.appendChild(make);
    list.addEventListener("input", () => updateDynamicState(instance, { studentList: list.value }));
    count.addEventListener("change", () => updateDynamicState(instance, { groupCount: count.value }));
    shuffle.addEventListener("change", () => updateDynamicState(instance, { shuffle: shuffle.checked }));
    make.addEventListener("click", () => makeDynamicGroups(instance));
  }

  if (type === "text") {
    const content = addLabeledInput(settings, "文字內容", dynamicTextarea(state.content || "", 4));
    const row = createEl("div", "text-controls");
    const size = addLabeledInput(row, "字體大小", dynamicInput(state.size || "44", "number"));
    size.min = "8";
    size.max = "320";
    const color = addLabeledInput(row, "顏色", dynamicInput(state.color || "#ffffff", "color"));
    settings.appendChild(row);
    content.addEventListener("input", () => updateDynamicState(instance, { content: content.value }));
    size.addEventListener("input", () => updateDynamicState(instance, { size: size.value }));
    color.addEventListener("input", () => updateDynamicState(instance, { color: color.value }));
  }

  if (type === "image") {
    const url = addLabeledInput(settings, "圖片網址", dynamicInput(state.imageUrl || ""));
    const file = addLabeledInput(settings, "或選擇本機圖片", dynamicInput("", "file"));
    file.accept = "image/*";
    const row = createEl("div", "button-row");
    const load = createEl("button", "", "載入圖片");
    const clear = createEl("button", "secondary", "清除圖片");
    load.type = clear.type = "button";
    row.append(load, clear);
    settings.appendChild(row);
    url.addEventListener("input", () => updateDynamicState(instance, { imageUrl: url.value }));
    load.addEventListener("click", () => updateDynamicState(instance, { imageSource: url.value.trim() }));
    clear.addEventListener("click", () => updateDynamicState(instance, { imageUrl: "", imageSource: "" }));
    file.addEventListener("change", () => {
      const selected = file.files?.[0];
      if (!selected || !selected.type.startsWith("image/")) return;
      updateDynamicState(instance, { imageSource: URL.createObjectURL(selected) });
    });
  }

  if (type === "youtube") {
    const url = addLabeledInput(settings, "YouTube 連結或影片 ID", dynamicInput(state.youtubeUrl || ""));
    const row = createEl("div", "button-row");
    const load = createEl("button", "", "載入影片");
    const open = createEl("a", "link-button secondary", "另開影片");
    load.type = "button";
    open.href = state.watchUrl || "#";
    open.target = "_blank";
    open.rel = "noreferrer";
    row.append(load, open);
    settings.appendChild(row);
    url.addEventListener("input", () => updateDynamicState(instance, { youtubeUrl: url.value }));
    load.addEventListener("click", () => {
      const videoId = parseYoutubeInput(url.value);
      if (!videoId) return;
      updateDynamicState(instance, {
        youtubeUrl: url.value,
        embedUrl: buildYoutubeEmbedUrl(videoId),
        watchUrl: buildYoutubeWatchUrl(videoId),
      });
    });
  }
}

function renderDynamicWidget(instance) {
  const { type, state, title, display, settings } = instance;
  title.textContent = state.title || type;
  title.style.fontSize = `${Math.min(80, Math.max(8, Number(state.titleSize) || 13))}px`;
  settings.classList.toggle("collapsed", !state.settingsOpen);

  if (type === "timer") {
    display.textContent = formatTime(Math.max(0, Number(state.remaining) || dynamicTimerTotal(state.minutes, state.seconds)));
    let actions = instance.element.querySelector(".dynamic-stage-actions");
    if (!actions) {
      actions = createEl("div", "dynamic-stage-actions");
      const start = createEl("button", "", "開始");
      const pause = createEl("button", "", "暫停");
      const reset = createEl("button", "", "重設");
      start.type = pause.type = reset.type = "button";
      start.addEventListener("click", () => startDynamicTimer(instance));
      pause.addEventListener("click", () => pauseDynamicTimer(instance));
      reset.addEventListener("click", () => resetDynamicTimer(instance));
      actions.append(start, pause, reset);
      display.after(actions);
    }
  } else if (type === "clock") {
    display.textContent = new Date().toLocaleTimeString("zh-Hant", { hour: "2-digit", minute: "2-digit", hour12: false });
    if (!instance.clockId) instance.clockId = window.setInterval(() => renderDynamicWidget(instance), 1000);
  } else if (type === "groups") {
    display.innerHTML = "";
    const groupsValue = Array.isArray(state.groups) ? state.groups : [];
    if (groupsValue.length === 0) {
      display.textContent = "尚未產生分組";
    } else {
      groupsValue.forEach((group, index) => {
        const item = createEl("div", "dynamic-group");
        const groupTitle = createEl("strong", "", `第 ${index + 1} 組`);
        const names = createEl("span", "", group.join("、"));
        item.append(groupTitle, names);
        display.appendChild(item);
      });
    }
  } else if (type === "text") {
    display.textContent = state.content || "文字框";
    display.style.fontSize = `${Math.min(320, Math.max(8, Number(state.size) || 44))}px`;
    display.style.color = state.color || "#ffffff";
  } else if (type === "image") {
    display.innerHTML = "";
    if (state.imageSource) {
      const image = document.createElement("img");
      image.src = state.imageSource;
      image.alt = state.title || "圖片";
      display.appendChild(image);
    } else {
      display.textContent = "尚未載入圖片";
    }
  } else if (type === "youtube") {
    display.innerHTML = "";
    instance.element.classList.toggle("is-minimized", Boolean(state.minimized));
    if (state.minimized) {
      instance.element.style.height = "44px";
    } else if (state.expandedSize?.height) {
      instance.element.style.height = state.expandedSize.height;
    }
    if (instance.minimizeButton) {
      instance.minimizeButton.textContent = state.minimized ? "▢" : "▁";
      instance.minimizeButton.title = state.minimized ? "還原 YouTube" : "最小化 YouTube";
    }
    let miniControls = instance.element.querySelector(".youtube-mini-controls");
    if (!miniControls) {
      miniControls = createEl("div", "youtube-mini-controls");
      const play = createEl("button", "", "▶");
      const pause = createEl("button", "", "Ⅱ");
      const open = createEl("button", "", "↗");
      play.type = pause.type = "button";
      open.type = "button";
      play.setAttribute("aria-label", "播放");
      pause.setAttribute("aria-label", "暫停");
      open.setAttribute("aria-label", "另開影片");
      play.title = "播放";
      pause.title = "暫停";
      open.title = "另開影片";
      play.addEventListener("click", () => controlDynamicYoutube(instance, "playVideo"));
      pause.addEventListener("click", () => controlDynamicYoutube(instance, "pauseVideo"));
      open.addEventListener("click", () => {
        if (instance.state.watchUrl) window.open(instance.state.watchUrl, "_blank", "noreferrer");
      });
      miniControls.append(play, pause, open);
      instance.element.querySelector(".dynamic-head").appendChild(miniControls);
    }
    if (state.embedUrl) {
      const iframe = document.createElement("iframe");
      iframe.src = state.embedUrl;
      iframe.title = state.title || "YouTube";
      iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
      iframe.allowFullscreen = true;
      display.appendChild(iframe);
    } else {
      display.textContent = "尚未載入影片";
    }
  } else {
    instance.element.classList.remove("is-minimized");
  }
}

function controlDynamicYoutube(instance, command) {
  const iframe = instance.element.querySelector("iframe");
  if (!iframe?.contentWindow) return;
  iframe.contentWindow.postMessage(
    JSON.stringify({
      event: "command",
      func: command,
      args: [],
    }),
    "*",
  );
}

function dynamicTimerTotal(minutesValue, secondsValue) {
  const minutes = clampNumber(minutesValue, 0, 180);
  const seconds = clampNumber(secondsValue, 0, 59);
  return Math.max(1, minutes * 60 + seconds);
}

function startDynamicTimer(instance) {
  if (instance.timerId) return;
  if (!Number.isFinite(Number(instance.state.remaining)) || Number(instance.state.remaining) <= 0) {
    instance.state.remaining = dynamicTimerTotal(instance.state.minutes, instance.state.seconds);
  }
  instance.timerId = window.setInterval(() => {
    instance.state.remaining = Math.max(0, Number(instance.state.remaining) - 1);
    if (instance.state.remaining === 0) pauseDynamicTimer(instance);
    renderDynamicWidget(instance);
    writeState();
  }, 1000);
  renderDynamicWidget(instance);
  writeState();
}

function pauseDynamicTimer(instance) {
  window.clearInterval(instance.timerId);
  instance.timerId = null;
  renderDynamicWidget(instance);
  writeState();
}

function resetDynamicTimer(instance) {
  pauseDynamicTimer(instance);
  updateDynamicState(instance, { remaining: dynamicTimerTotal(instance.state.minutes, instance.state.seconds) });
}

function makeDynamicGroups(instance) {
  const students = splitStudents(instance.state.studentList || "");
  if (students.length === 0) {
    updateDynamicState(instance, { groups: [] });
    return;
  }
  const count = Math.min(students.length, clampNumber(instance.state.groupCount, 1, 20));
  const source = instance.state.shuffle === false ? students : shuffled(students);
  const nextGroups = Array.from({ length: count }, () => []);
  source.forEach((student, index) => nextGroups[index % count].push(student));
  updateDynamicState(instance, { groups: nextGroups });
}

function copyDynamicWidget(id) {
  const source = getDynamicWidget(id);
  if (!source) return;
  const position = widgetPosition(source.element);
  const left = Number.parseFloat(position.left || "24") + 28;
  const top = Number.parseFloat(position.top || "24") + 28;
  createDynamicWidget(source.type, cloneValue(source.state), {
    ...position,
    left: `${left}px`,
    top: `${top}px`,
  });
}

function removeDynamicWidget(id) {
  const widget = getDynamicWidget(id);
  if (!widget) return;
  window.clearInterval(widget.timerId);
  window.clearInterval(widget.clockId);
  widget.element.remove();
  dynamicWidgets = dynamicWidgets.filter((item) => item.id !== id);
  writeState();
}

function clearDynamicWidgets() {
  dynamicWidgets.forEach((widget) => {
    window.clearInterval(widget.timerId);
    window.clearInterval(widget.clockId);
    widget.element.remove();
  });
  dynamicWidgets = [];
}

function normalizeSyncCode(value) {
  return value
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9_-]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 80);
}

async function loadFirebaseApi() {
  if (firebaseApi) return firebaseApi;
  if (!firebaseLoadPromise) {
    firebaseLoadPromise = Promise.all([
      import("https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js"),
      import("https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js"),
    ]).then(([appModule, firestoreModule]) => {
      const app = appModule.initializeApp(FIREBASE_CONFIG);
      const db = firestoreModule.getFirestore(app);
      firebaseApi = {
        db,
        doc: firestoreModule.doc,
        getDoc: firestoreModule.getDoc,
        setDoc: firestoreModule.setDoc,
        serverTimestamp: firestoreModule.serverTimestamp,
      };
      return firebaseApi;
    });
  }
  return firebaseLoadPromise;
}

function cloudDocRef(api, syncCode) {
  return api.doc(api.db, FIREBASE_COLLECTION, syncCode);
}

async function syncLayoutsToCloud() {
  const syncCode = normalizeSyncCode(els.syncCode.value);
  if (!syncCode) {
    els.layoutMessage.textContent = "請先輸入跨電腦同步碼。";
    els.layoutMessage.classList.add("error");
    return;
  }

  const layouts = readSavedLayouts();
  if (Object.keys(layouts).length === 0) {
    els.layoutMessage.textContent = "請先至少儲存一個版本，再同步到雲端。";
    els.layoutMessage.classList.add("error");
    return;
  }

  try {
    els.syncLayouts.disabled = true;
    els.layoutMessage.textContent = "正在同步到 Firebase...";
    els.layoutMessage.classList.remove("error");
    const api = await loadFirebaseApi();
    await api.setDoc(cloudDocRef(api, syncCode), {
      layouts,
      updatedAt: api.serverTimestamp(),
      version: 1,
    });
    els.syncCode.value = syncCode;
    writeState({ syncCode });
    els.layoutMessage.textContent = `已同步到雲端。其他電腦輸入「${syncCode}」即可載入。`;
  } catch (error) {
    els.layoutMessage.textContent = `同步失敗：${error.message || "請確認 Firestore 規則是否允許寫入。"}`;
    els.layoutMessage.classList.add("error");
  } finally {
    els.syncLayouts.disabled = false;
  }
}

async function loadLayoutsFromCloud() {
  const syncCode = normalizeSyncCode(els.syncCode.value);
  if (!syncCode) {
    els.layoutMessage.textContent = "請先輸入跨電腦同步碼。";
    els.layoutMessage.classList.add("error");
    return;
  }

  try {
    els.loadCloudLayouts.disabled = true;
    els.layoutMessage.textContent = "正在從 Firebase 載入...";
    els.layoutMessage.classList.remove("error");
    const api = await loadFirebaseApi();
    const snapshot = await api.getDoc(cloudDocRef(api, syncCode));
    if (!snapshot.exists()) {
      els.layoutMessage.textContent = "找不到這組同步碼的雲端版本。";
      els.layoutMessage.classList.add("error");
      return;
    }

    const imported = normalizeImportedLayouts(snapshot.data()?.layouts || {});
    const importedNames = Object.keys(imported);
    if (importedNames.length === 0) {
      els.layoutMessage.textContent = "雲端資料裡沒有可用版本。";
      els.layoutMessage.classList.add("error");
      return;
    }

    const layouts = {
      ...readSavedLayouts(),
      ...imported,
    };
    els.syncCode.value = syncCode;
    writeState({ savedLayouts: layouts, syncCode });
    renderSavedLayouts(importedNames[0]);
    els.layoutMessage.textContent = `已從雲端載入 ${importedNames.length} 個版本。`;
  } catch (error) {
    els.layoutMessage.textContent = `載入失敗：${error.message || "請確認 Firestore 規則是否允許讀取。"}`;
    els.layoutMessage.classList.add("error");
  } finally {
    els.loadCloudLayouts.disabled = false;
  }
}

function setActiveTool(tool) {
  activeTool = tool;
  els.dockItems.forEach((item) => {
    item.classList.toggle("active", item.dataset.tool === tool);
  });
  els.toolPanels.forEach((panel) => {
    panel.classList.toggle("active", panel.dataset.panel === tool);
  });
  writeState();
}

function toggleActiveTool(tool) {
  if (tool === "timer") {
    els.showTimer.checked = true;
    renderTimer();
  }
  if (tool === "clock") {
    els.showClock.checked = true;
    renderClock();
  }
  if (tool === "text") {
    els.showTextBox.checked = true;
    renderTextBox();
  }
  if (tool === "image") {
    els.showImage.checked = true;
    renderImage();
  }
  if (tool === "youtube") {
    els.showYoutube.checked = true;
    renderYoutube();
  }
  setActiveTool(activeTool === tool ? "" : tool);
}

function setDockCollapsed(isCollapsed) {
  dockCollapsed = isCollapsed;
  els.toolDock.classList.toggle("collapsed", dockCollapsed);
  els.expandDock.classList.toggle("hidden", !dockCollapsed);
  if (dockCollapsed) setActiveTool("");
  writeState();
}

function hideAllWidgets() {
  clearDynamicWidgets();
  els.showTimer.checked = false;
  els.showClock.checked = false;
  els.showGroups.checked = false;
  els.showTextBox.checked = false;
  els.showImage.checked = false;
  els.showYoutube.checked = false;
  pauseTimer();
  renderTimer();
  renderClock();
  renderGroups();
  renderTextBox();
  renderImage();
  renderYoutube();
  setActiveTool("");
  writeState();
}

function widgetPosition(widget) {
  return {
    left: widget.style.left,
    top: widget.style.top,
    right: widget.style.right,
    bottom: widget.style.bottom,
    width: widget.style.width,
    height: widget.style.height,
  };
}

function applyWidgetPosition(widget, position) {
  if (!position) return;
  widget.style.left = position.left || "";
  widget.style.top = position.top || "";
  widget.style.right = position.right || "";
  widget.style.bottom = position.bottom || "";
  widget.style.width = position.width || "";
  widget.style.height = position.height || "";
}

function keepWidgetVisible(widget) {
  if (widget.classList.contains("hidden")) return;

  const stageRect = els.stage.getBoundingClientRect();
  const rect = widget.getBoundingClientRect();
  const minWidth = widget.dataset.widget === "timer" ? 210 : 220;
  const minHeight = widget.dataset.widget === "timer" ? 150 : 110;

  if (rect.width < minWidth) widget.style.width = `${minWidth}px`;
  if (rect.height < minHeight) widget.style.height = `${minHeight}px`;

  const nextRect = widget.getBoundingClientRect();
  const isOutside =
    nextRect.right < stageRect.left + 24 ||
    nextRect.bottom < stageRect.top + 24 ||
    nextRect.left > stageRect.right - 24 ||
    nextRect.top > stageRect.bottom - 24;

  if (isOutside) {
    widget.style.left = "";
    widget.style.top = "24px";
    widget.style.right = "24px";
    widget.style.bottom = "";
  }
}

function visibleWidgets(excludedWidget) {
  return [...els.stage.querySelectorAll(".widget")]
    .filter((widget) => widget !== excludedWidget && !widget.classList.contains("hidden"))
    .filter((widget) => widget.offsetWidth > 0 && widget.offsetHeight > 0);
}

function snapValue(value, targets, distance = SNAP_DISTANCE) {
  let snapped = value;
  let bestDistance = distance + 1;
  let matched = null;

  targets.forEach((target) => {
    const currentDistance = Math.abs(value - target);
    if (currentDistance <= distance && currentDistance < bestDistance) {
      snapped = target;
      bestDistance = currentDistance;
      matched = target;
    }
  });

  return { value: snapped, matched };
}

function snapNumber(value, targets, distance = SNAP_DISTANCE) {
  return snapValue(value, targets, distance).value;
}

function stageSnapTargets(stageRect, excludedWidget) {
  const xTargets = [8, 24, stageRect.width / 2, stageRect.width - 24, stageRect.width - 8];
  const yTargets = [8, 24, stageRect.height / 2, stageRect.height - 24, stageRect.height - 8];

  for (let value = SNAP_GRID; value < stageRect.width; value += SNAP_GRID) xTargets.push(value);
  for (let value = SNAP_GRID; value < stageRect.height; value += SNAP_GRID) yTargets.push(value);

  visibleWidgets(excludedWidget).forEach((widget) => {
    const rect = widget.getBoundingClientRect();
    const left = rect.left - stageRect.left;
    const top = rect.top - stageRect.top;
    const right = left + rect.width;
    const bottom = top + rect.height;
    xTargets.push(left, left + rect.width / 2, right);
    yTargets.push(top, top + rect.height / 2, bottom);
  });

  return { xTargets, yTargets };
}

function snapWidgetPosition(left, top, width, height, stageRect, widget) {
  const { xTargets, yTargets } = stageSnapTargets(stageRect, widget);
  const guides = [];
  const leftSnap = snapValue(left, xTargets);
  const topSnap = snapValue(top, yTargets);
  let nextLeft = leftSnap.value;
  let nextTop = topSnap.value;
  if (leftSnap.matched !== null) guides.push({ axis: "x", value: leftSnap.matched });
  if (topSnap.matched !== null) guides.push({ axis: "y", value: topSnap.matched });

  const centerX = snapValue(left + width / 2, xTargets);
  if (centerX.matched !== null) {
    nextLeft = centerX.value - width / 2;
    guides.push({ axis: "x", value: centerX.matched });
  }

  const right = snapValue(left + width, xTargets);
  if (right.matched !== null) {
    nextLeft = right.value - width;
    guides.push({ axis: "x", value: right.matched });
  }

  const centerY = snapValue(top + height / 2, yTargets);
  if (centerY.matched !== null) {
    nextTop = centerY.value - height / 2;
    guides.push({ axis: "y", value: centerY.matched });
  }

  const bottom = snapValue(top + height, yTargets);
  if (bottom.matched !== null) {
    nextTop = bottom.value - height;
    guides.push({ axis: "y", value: bottom.matched });
  }

  return {
    left: Math.min(Math.max(8, stageRect.width - width - 8), Math.max(8, nextLeft)),
    top: Math.min(Math.max(8, stageRect.height - height - 8), Math.max(8, nextTop)),
    guides,
  };
}

function snapWidgetSize(left, top, width, height, minWidth, minHeight, maxWidth, maxHeight, stageRect, widget) {
  const { xTargets, yTargets } = stageSnapTargets(stageRect, widget);
  const right = snapValue(left + width, xTargets);
  const bottom = snapValue(top + height, yTargets);
  const widthSnap = snapValue(width, xTargets.map((target) => target - left));
  const heightSnap = snapValue(height, yTargets.map((target) => target - top));
  const guides = [];
  const nextWidth = right.matched !== null ? right.value - left : widthSnap.value;
  const nextHeight = bottom.matched !== null ? bottom.value - top : heightSnap.value;
  if (right.matched !== null) guides.push({ axis: "x", value: right.matched });
  if (bottom.matched !== null) guides.push({ axis: "y", value: bottom.matched });
  if (right.matched === null && widthSnap.matched !== null) guides.push({ axis: "x", value: left + widthSnap.matched });
  if (bottom.matched === null && heightSnap.matched !== null) guides.push({ axis: "y", value: top + heightSnap.matched });

  return {
    width: Math.min(maxWidth, Math.max(minWidth, nextWidth)),
    height: Math.min(maxHeight, Math.max(minHeight, nextHeight)),
    guides,
  };
}

function showSnapGuides(guides = []) {
  els.snapGuides.innerHTML = "";
  const seen = new Set();
  guides.forEach((guide) => {
    if (!Number.isFinite(guide.value)) return;
    const key = `${guide.axis}:${Math.round(guide.value)}`;
    if (seen.has(key)) return;
    seen.add(key);

    const line = document.createElement("div");
    line.className = `snap-guide ${guide.axis === "x" ? "vertical" : "horizontal"}`;
    line.style.display = "block";
    if (guide.axis === "x") {
      line.style.left = `${guide.value}px`;
    } else {
      line.style.top = `${guide.value}px`;
    }
    els.snapGuides.appendChild(line);
  });
}

function clearSnapGuides() {
  els.snapGuides.innerHTML = "";
}

function parseSlidesInput(raw) {
  const value = raw.trim();
  if (!value) return null;

  const publishedMatch = value.match(/presentation\/d\/e\/([^/]+)/);
  if (publishedMatch) {
    return {
      id: publishedMatch[1],
      kind: "published",
      slide: "",
      editUrl: value,
    };
  }

  const idMatch = value.match(/[-\w]{25,}/);
  if (!idMatch) return null;

  const id = idMatch[0];
  const start = value.match(/[?&]slide=id\.([^&]+)/);
  return {
    id,
    kind: "standard",
    slide: start ? `id.${start[1]}` : "",
    editUrl: `https://docs.google.com/presentation/d/${id}/edit`,
  };
}

function buildSlidesUrl(slides, mode = slidesMode) {
  if (!slides) return "";

  const params = new URLSearchParams({
    start: "false",
    loop: "false",
    delayms: "60000",
  });

  if (slides.slide) params.set("slide", slides.slide);
  if (slides.kind === "published") {
    return `https://docs.google.com/presentation/d/e/${slides.id}/embed?${params.toString()}`;
  }

  return `https://docs.google.com/presentation/d/${slides.id}/${mode}?${params.toString()}`;
}

function updateOpenSlidesLink() {
  if (!currentSlides) {
    els.openSlides.href = "#";
    els.openSlides.classList.add("disabled");
    els.loadingOpenSlides.href = "#";
    els.loadingOpenSlides.classList.add("disabled");
    return;
  }

  els.openSlides.href = currentSlides.editUrl;
  els.openSlides.classList.remove("disabled");
  els.loadingOpenSlides.href = currentSlides.editUrl;
  els.loadingOpenSlides.classList.remove("disabled");
}

function setSlidesMessage(text, isError = false) {
  els.slidesMessage.textContent = text;
  els.slidesMessage.classList.toggle("error", isError);
}

function isLocalFileMode() {
  return window.location.protocol === "file:";
}

function updateSlidesDebug(playerUrl = "") {
  els.openOnlineApp.classList.toggle("hidden", !isLocalFileMode());
  els.slidesDebug.textContent = playerUrl ? `iframe: ${playerUrl}` : "";
}

function setLoading(isLoading, title = "正在載入簡報", detail = "Google Slides 第一次載入可能需要 10-30 秒。") {
  window.clearTimeout(loadingTimerId);
  els.slidesLoading.classList.toggle("hidden", !isLoading);
  els.loadingTitle.textContent = title;
  els.loadingDetail.textContent = detail;

  if (isLoading) {
    loadingTimerId = window.setTimeout(() => {
      els.loadingTitle.textContent = "仍在等待 Google Slides";
      els.loadingDetail.textContent = "大型簡報可能需要更久。你可以繼續等，或按「重新載入」再試一次。";
    }, 15000);
  }
}

function loadPlayerUrl(playerUrl) {
  currentPlayerUrl = playerUrl;
  els.frame.src = "about:blank";
  window.setTimeout(() => {
    els.frame.src = playerUrl;
  }, 60);
  els.stage.classList.add("has-slides");
  setLoading(true);
}

function loadSlides() {
  const slides = parseSlidesInput(els.slidesUrl.value);
  if (!slides) {
    setSlidesMessage("請貼上 Google Slides 分享連結、embed 連結，或簡報 ID。", true);
    return;
  }

  currentSlides = slides;
  const playerUrl = buildSlidesUrl(slides);
  loadPlayerUrl(playerUrl);
  updateOpenSlidesLink();
  updateSlidesDebug(playerUrl);
  if (isLocalFileMode()) {
    setSlidesMessage("目前是用本機 file:// 開啟，Google Slides 可能不允許嵌入。請點「開啟線上播放台」再載入簡報。", true);
  } else {
    setSlidesMessage(`已用 ${slidesMode} 模式載入。若仍空白，點「切換播放模式」或確認分享權限。`);
  }
  setActiveTool("");
  writeState({ currentEmbedUrl: playerUrl });
}

function clearSlides() {
  els.frame.removeAttribute("src");
  els.stage.classList.remove("has-slides");
  setLoading(false);
  els.slidesUrl.value = "";
  currentSlides = null;
  updateOpenSlidesLink();
  updateSlidesDebug("");
  setSlidesMessage("若一般連結看不到，請先在 Google Slides 設為「知道連結的人可檢視」。");
  writeState({ currentEmbedUrl: "", currentSlides: null });
}

function switchSlidesMode() {
  slidesMode = slidesMode === "preview" ? "embed" : "preview";

  if (!currentSlides) {
    setSlidesMessage(`已切換成 ${slidesMode} 模式。貼上連結後再載入簡報。`);
    writeState();
    return;
  }

  const playerUrl = buildSlidesUrl(currentSlides);
  loadPlayerUrl(playerUrl);
  updateSlidesDebug(playerUrl);
  const modeText = currentSlides.kind === "published" ? "published embed" : slidesMode;
  if (isLocalFileMode()) {
    setSlidesMessage("目前是用本機 file:// 開啟，Google Slides 可能不允許嵌入。請點「開啟線上播放台」再載入簡報。", true);
  } else {
    setSlidesMessage(`已切換成 ${modeText} 模式。若仍空白，請用「另開簡報」確認權限。`);
  }
  writeState({ currentEmbedUrl: playerUrl });
}

function clampNumber(value, min, max) {
  const number = Number(value);
  if (!Number.isFinite(number)) return min;
  return Math.min(max, Math.max(min, Math.floor(number)));
}

function readTimerTotal() {
  const minutes = clampNumber(els.timerMinutes.value, 0, 180);
  const seconds = clampNumber(els.timerSeconds.value, 0, 59);
  els.timerMinutes.value = String(minutes);
  els.timerSeconds.value = String(seconds);
  return Math.max(1, minutes * 60 + seconds);
}

function formatTime(totalSeconds) {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}

function renderTimer() {
  const title = els.timerTitle.value.trim() || "Timer";
  els.stageTimerTitle.textContent = title;
  els.stageTimer.textContent = formatTime(timerRemaining);
  els.timerWidget.classList.toggle("hidden", !els.showTimer.checked);
  keepWidgetVisible(els.timerWidget);
  els.timerWidget.classList.toggle("warning", timerRemaining > 0 && timerRemaining <= 30);
  els.timerWidget.classList.toggle("done", timerRemaining === 0);

  if (timerRemaining === 0) {
    els.stageTimerNote.textContent = "時間到";
  } else if (timerId) {
    els.stageTimerNote.textContent = "進行中";
  } else {
    els.stageTimerNote.textContent = "暫停";
  }
}

function resetTimer() {
  window.clearInterval(timerId);
  timerId = null;
  timerTotal = readTimerTotal();
  timerRemaining = timerTotal;
  renderTimer();
  writeState();
}

function startTimer() {
  if (timerId) return;
  if (timerRemaining <= 0) resetTimer();
  els.showTimer.checked = true;
  renderTimer();
  timerId = window.setInterval(() => {
    timerRemaining = Math.max(0, timerRemaining - 1);
    if (timerRemaining === 0) {
      window.clearInterval(timerId);
      timerId = null;
    }
    renderTimer();
  }, 1000);
  writeState();
}

function pauseTimer() {
  window.clearInterval(timerId);
  timerId = null;
  renderTimer();
  writeState();
}

function renderClock() {
  const now = new Date();
  els.stageClockTitle.textContent = els.clockTitle.value.trim() || "Clock";
  els.stageClock.textContent = now.toLocaleTimeString("zh-Hant", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });
  els.clockWidget.classList.toggle("hidden", !els.showClock.checked);
  keepWidgetVisible(els.clockWidget);
}

function startClock() {
  window.clearInterval(clockTimerId);
  renderClock();
  clockTimerId = window.setInterval(renderClock, 1000);
}

function splitStudents(value) {
  return value
    .split(/[\n,，、]+/)
    .map((name) => name.trim())
    .filter(Boolean);
}

function shuffled(items) {
  const copy = [...items];
  for (let index = copy.length - 1; index > 0; index -= 1) {
    const target = Math.floor(Math.random() * (index + 1));
    [copy[index], copy[target]] = [copy[target], copy[index]];
  }
  return copy;
}

function makeGroups() {
  const students = splitStudents(els.studentList.value);
  if (students.length === 0) {
    els.groupsOutput.textContent = "請先輸入學員名單。";
    groups = [];
    renderGroups();
    writeState();
    return;
  }

  const count = Math.min(students.length, clampNumber(els.groupCount.value, 1, 20));
  const source = els.shuffleGroups.checked ? shuffled(students) : students;
  groups = Array.from({ length: count }, () => []);

  source.forEach((student, index) => {
    groups[index % count].push(student);
  });

  els.showGroups.checked = true;
  renderGroups();
  writeState();
}

function manualGroupCount() {
  return clampNumber(els.groupCount.value, 1, 20);
}

function buildManualGroups(values = manualGroups) {
  const count = manualGroupCount();
  const nextValues = Array.from({ length: count }, (_, index) => values[index] || []);
  manualGroups = nextValues;
  els.manualGroupsList.innerHTML = "";

  manualGroups.forEach((group, index) => {
    const label = document.createElement("label");
    label.className = "manual-group-field";
    label.textContent = `第 ${index + 1} 組`;

    const textarea = document.createElement("textarea");
    textarea.rows = 3;
    textarea.dataset.groupIndex = String(index);
    textarea.placeholder = "一行一位，或用逗號分隔";
    textarea.value = group.join("\n");
    textarea.addEventListener("input", () => {
      manualGroups = readManualGroups();
      writeState();
    });

    label.appendChild(textarea);
    els.manualGroupsList.appendChild(label);
  });

  writeState();
}

function readManualGroups() {
  const fields = [...els.manualGroupsList.querySelectorAll("textarea")];
  if (fields.length === 0) return manualGroups;
  return fields.map((field) => splitStudents(field.value));
}

function applyManualGroups() {
  if (els.manualGroupsList.children.length === 0) {
    buildManualGroups();
  }

  groups = readManualGroups().filter((group) => group.length > 0);
  manualGroups = groups;

  if (groups.length === 0) {
    els.groupsOutput.textContent = "請先在各組欄位填入名單。";
    renderGroups();
    writeState();
    return;
  }

  els.showGroups.checked = true;
  renderGroups();
  writeState();
}

function groupText() {
  return groups
    .map((group, index) => `第 ${index + 1} 組：${group.join("、")}`)
    .join("\n");
}

function renderGroups() {
  els.stageGroupsTitle.textContent = els.groupsTitle.value.trim() || "Groups";
  els.groupsWidget.classList.toggle("hidden", !els.showGroups.checked);
  els.groupsOutput.textContent = groupText();
  els.stageGroups.innerHTML = "";

  groups.forEach((group, index) => {
    const item = document.createElement("section");
    item.className = "stage-group";

    const title = document.createElement("strong");
    title.textContent = `第 ${index + 1} 組`;

    const names = document.createElement("span");
    names.textContent = group.join("、");

    item.append(title, names);
    els.stageGroups.appendChild(item);
  });
  keepWidgetVisible(els.groupsWidget);
}

function readTextBoxSize() {
  const size = Number(els.textBoxSize.value);
  if (!Number.isFinite(size)) return 44;
  return Math.min(320, Math.max(8, size));
}

function normalizeTextBoxSize() {
  els.textBoxSize.value = String(Math.round(readTextBoxSize()));
  renderTextBox();
  writeState();
}

function renderTextBox() {
  const size = readTextBoxSize();
  els.stageTextBox.textContent = els.textBoxContent.value.trim() || "文字框";
  els.stageTextBox.style.fontSize = `${size}px`;
  els.stageTextBox.style.color = els.textBoxColor.value || "#ffffff";
  els.textWidget.classList.toggle("hidden", !els.showTextBox.checked);
  keepWidgetVisible(els.textWidget);
}

function setImageSource(source, message = "") {
  imageSource = source || "";
  els.stageImage.src = imageSource;
  els.stageImage.alt = els.imageTitle.value.trim() || "圖片";
  els.imageMessage.textContent = message;
  renderImage();
}

function loadImageFromUrl() {
  const url = els.imageUrl.value.trim();
  if (!url) {
    els.imageMessage.textContent = "請貼上圖片網址，或選擇本機圖片。";
    return;
  }
  if (imageObjectUrl) {
    URL.revokeObjectURL(imageObjectUrl);
    imageObjectUrl = "";
  }
  els.showImage.checked = true;
  setImageSource(url, "已載入圖片。");
  writeState();
}

function loadImageFromFile(file) {
  if (!file) return;
  if (!file.type.startsWith("image/")) {
    els.imageMessage.textContent = "請選擇圖片檔。";
    return;
  }
  if (imageObjectUrl) URL.revokeObjectURL(imageObjectUrl);
  imageObjectUrl = URL.createObjectURL(file);
  els.showImage.checked = true;
  setImageSource(imageObjectUrl, "已載入本機圖片；重新開啟頁面後需重新選擇。");
  writeState();
}

function clearImage() {
  if (imageObjectUrl) {
    URL.revokeObjectURL(imageObjectUrl);
    imageObjectUrl = "";
  }
  imageSource = "";
  els.imageUrl.value = "";
  els.imageFile.value = "";
  els.stageImage.removeAttribute("src");
  els.imageMessage.textContent = "";
  renderImage();
  writeState();
}

function renderImage() {
  const title = els.imageTitle.value.trim() || "Image";
  els.stageImageTitle.textContent = title;
  els.stageImage.alt = title;
  els.imageWidget.classList.toggle("hidden", !els.showImage.checked);
  els.stageImage.classList.toggle("hidden", !imageSource);
  els.stageImageEmpty.classList.toggle("hidden", Boolean(imageSource));
  keepWidgetVisible(els.imageWidget);
}

function parseYoutubeInput(raw) {
  const value = raw.trim();
  if (!value) return "";

  const idOnly = value.match(/^[a-zA-Z0-9_-]{11}$/);
  if (idOnly) return idOnly[0];

  try {
    const url = new URL(value);
    if (url.hostname.includes("youtu.be")) {
      return url.pathname.split("/").filter(Boolean)[0] || "";
    }
    if (url.hostname.includes("youtube.com")) {
      if (url.pathname.startsWith("/shorts/") || url.pathname.startsWith("/embed/") || url.pathname.startsWith("/live/")) {
        return url.pathname.split("/").filter(Boolean)[1] || "";
      }
      return url.searchParams.get("v") || "";
    }
  } catch {
    const fallback = value.match(/[a-zA-Z0-9_-]{11}/);
    return fallback ? fallback[0] : "";
  }

  return "";
}

function buildYoutubeEmbedUrl(videoId) {
  if (!videoId) return "";
  const params = new URLSearchParams({
    rel: "0",
    modestbranding: "1",
    playsinline: "1",
    enablejsapi: "1",
  });
  if (window.location.origin && window.location.origin !== "null") params.set("origin", window.location.origin);
  return `https://www.youtube-nocookie.com/embed/${videoId}?${params.toString()}`;
}

function buildYoutubeWatchUrl(videoId) {
  return videoId ? `https://www.youtube.com/watch?v=${videoId}` : "";
}

function updateOpenYoutubeLink() {
  if (!youtubeWatchUrl) {
    els.openYoutube.href = "#";
    els.openYoutube.classList.add("disabled");
    return;
  }

  els.openYoutube.href = youtubeWatchUrl;
  els.openYoutube.classList.remove("disabled");
}

function loadYoutube() {
  const videoId = parseYoutubeInput(els.youtubeUrl.value);
  if (!videoId) {
    els.youtubeMessage.textContent = "請貼上 YouTube 連結或 11 碼影片 ID。";
    els.youtubeMessage.classList.add("error");
    return;
  }

  youtubeEmbedUrl = buildYoutubeEmbedUrl(videoId);
  youtubeWatchUrl = buildYoutubeWatchUrl(videoId);
  els.youtubeFrame.src = youtubeEmbedUrl;
  els.showYoutube.checked = true;
  els.youtubeMessage.textContent = isLocalFileMode()
    ? "已載入影片。若本機 file:// 無法播放，請按「另開影片」或改用線上播放台。"
    : "已載入 YouTube 影片。若畫面顯示無法播放，通常是影片作者禁止嵌入。";
  els.youtubeMessage.classList.remove("error");
  updateOpenYoutubeLink();
  renderYoutube();
  writeState();
}

function clearYoutube() {
  youtubeEmbedUrl = "";
  youtubeWatchUrl = "";
  els.youtubeFrame.removeAttribute("src");
  els.youtubeUrl.value = "";
  els.youtubeMessage.textContent = "";
  updateOpenYoutubeLink();
  renderYoutube();
  writeState();
}

function renderYoutube() {
  els.stageYoutubeTitle.textContent = els.youtubeTitle.value.trim() || "YouTube";
  els.youtubeWidget.classList.toggle("hidden", !els.showYoutube.checked);
  if (!els.showYoutube.checked && els.youtubeFrame.getAttribute("src")) {
    els.youtubeFrame.src = "about:blank";
  }
  if (els.showYoutube.checked && youtubeEmbedUrl && els.youtubeFrame.getAttribute("src") !== youtubeEmbedUrl) {
    els.youtubeFrame.src = youtubeEmbedUrl;
  }
  els.youtubeFrame.classList.toggle("hidden", !youtubeEmbedUrl);
  els.stageYoutubeEmpty.classList.toggle("hidden", Boolean(youtubeEmbedUrl));
  updateOpenYoutubeLink();
  keepWidgetVisible(els.youtubeWidget);
}

async function copyGroups() {
  const text = groupText();
  if (!text) {
    els.groupsOutput.textContent = "目前沒有分組結果可複製。";
    return;
  }

  try {
    await navigator.clipboard.writeText(text);
    els.groupsOutput.textContent = `${text}\n\n已複製。`;
  } catch {
    els.groupsOutput.textContent = `${text}\n\n瀏覽器沒有開放自動複製，請手動選取上方文字。`;
  }
}

function startDrag(event) {
  const widget = event.target.closest(".widget");
  if (!widget) return;

  event.preventDefault();
  event.stopPropagation();

  const rect = widget.getBoundingClientRect();
  const stageRect = els.stage.getBoundingClientRect();
  widget.style.left = `${rect.left - stageRect.left}px`;
  widget.style.top = `${rect.top - stageRect.top}px`;
  widget.style.right = "";
  widget.style.bottom = "";

  dragState = {
    widget,
    offsetX: event.clientX - rect.left,
    offsetY: event.clientY - rect.top,
    stageRect,
  };
  event.currentTarget.setPointerCapture?.(event.pointerId);
}

function moveDrag(event) {
  if (!dragState) return;
  event.preventDefault();

  const { widget, offsetX, offsetY, stageRect } = dragState;
  const maxLeft = Math.max(8, stageRect.width - widget.offsetWidth - 8);
  const maxTop = Math.max(8, stageRect.height - widget.offsetHeight - 8);
  const rawLeft = Math.min(maxLeft, Math.max(8, event.clientX - stageRect.left - offsetX));
  const rawTop = Math.min(maxTop, Math.max(8, event.clientY - stageRect.top - offsetY));
  const { left, top, guides } = snapWidgetPosition(rawLeft, rawTop, widget.offsetWidth, widget.offsetHeight, stageRect, widget);

  widget.style.left = `${left}px`;
  widget.style.top = `${top}px`;
  showSnapGuides(guides);
}

function stopDrag() {
  if (!dragState) return;
  dragState = null;
  clearSnapGuides();
  writeState();
}

function startResize(event) {
  const widget = event.target.closest(".widget");
  if (!widget) return;

  event.preventDefault();
  event.stopPropagation();

  const rect = widget.getBoundingClientRect();
  const stageRect = els.stage.getBoundingClientRect();
  widget.style.left = `${rect.left - stageRect.left}px`;
  widget.style.top = `${rect.top - stageRect.top}px`;
  widget.style.right = "";
  widget.style.bottom = "";
  widget.style.width = `${rect.width}px`;
  widget.style.height = `${rect.height}px`;

  resizeState = {
    widget,
    startX: event.clientX,
    startY: event.clientY,
    startWidth: rect.width,
    startHeight: rect.height,
    stageRect,
  };

  event.currentTarget.setPointerCapture?.(event.pointerId);
}

function moveResize(event) {
  if (!resizeState) return;
  event.preventDefault();

  const { widget, startX, startY, startWidth, startHeight, stageRect } = resizeState;
  const rect = widget.getBoundingClientRect();
  const left = rect.left - stageRect.left;
  const top = rect.top - stageRect.top;
  const minWidth =
    widget.dataset.widget === "timer" || widget.dataset.widget === "clock" ? 190 : widget.dataset.widget === "text" ? 180 : widget.dataset.widget === "youtube" ? 280 : 220;
  const minHeight =
    widget.dataset.widget === "timer" || widget.dataset.widget === "clock" ? 118 : widget.dataset.widget === "text" ? 110 : widget.dataset.widget === "youtube" ? 210 : 150;
  const maxWidth = Math.max(minWidth, stageRect.width - left - 8);
  const maxHeight = Math.max(minHeight, stageRect.height - top - 8);
  const rawWidth = Math.min(maxWidth, Math.max(minWidth, startWidth + event.clientX - startX));
  const rawHeight = Math.min(maxHeight, Math.max(minHeight, startHeight + event.clientY - startY));
  const { width, height, guides } = snapWidgetSize(left, top, rawWidth, rawHeight, minWidth, minHeight, maxWidth, maxHeight, stageRect, widget);

  widget.style.width = `${width}px`;
  widget.style.height = `${height}px`;
  showSnapGuides(guides);
}

function stopResize() {
  if (!resizeState) return;
  resizeState = null;
  clearSnapGuides();
  writeState();
}

function restore() {
  const state = readState();
  els.slidesUrl.value = state.slidesUrl || "";
  els.timerMinutes.value = state.timerMinutes || "5";
  els.timerSeconds.value = state.timerSeconds || "0";
  els.timerTitle.value = state.timerTitle || "Timer";
  els.showTimer.checked = Boolean(state.showTimer);
  els.showClock.checked = Boolean(state.showClock);
  els.clockTitle.value = state.clockTitle || "Clock";
  els.showGroups.checked = Boolean(state.showGroups);
  els.groupsTitle.value = state.groupsTitle || "Groups";
  els.showTextBox.checked = Boolean(state.showTextBox);
  els.textBoxContent.value = state.textBoxContent || "文字框";
  els.textBoxSize.value = state.textBoxSize || "44";
  els.textBoxColor.value = state.textBoxColor || "#ffffff";
  els.showImage.checked = Boolean(state.showImage);
  els.imageTitle.value = state.imageTitle || "Image";
  els.imageUrl.value = state.imageUrl || "";
  els.showYoutube.checked = Boolean(state.showYoutube);
  els.youtubeTitle.value = state.youtubeTitle || "YouTube";
  els.youtubeUrl.value = state.youtubeUrl || "";
  els.syncCode.value = state.syncCode || "";
  imageSource = state.imageSource || state.imageUrl || "";
  const restoredYoutubeId = parseYoutubeInput(state.youtubeUrl || "");
  youtubeEmbedUrl = restoredYoutubeId ? buildYoutubeEmbedUrl(restoredYoutubeId) : state.youtubeEmbedUrl || "";
  youtubeWatchUrl = restoredYoutubeId ? buildYoutubeWatchUrl(restoredYoutubeId) : state.youtubeWatchUrl || "";
  if (imageSource) els.stageImage.src = imageSource;
  if (youtubeEmbedUrl) els.youtubeFrame.src = youtubeEmbedUrl;
  els.studentList.value = state.studentList || "";
  els.groupCount.value = state.groupCount || "4";
  els.shuffleGroups.checked = state.shuffleGroups !== false;
  slidesMode = state.slidesMode || "preview";
  currentSlides = state.currentSlides || parseSlidesInput(state.slidesUrl || "");
  activeTool = state.activeTool || "";
  dockCollapsed = Boolean(state.dockCollapsed);
  groups = Array.isArray(state.groups) ? state.groups : [];
  manualGroups = Array.isArray(state.manualGroups) ? state.manualGroups : groups;

  applyWidgetPosition(els.timerWidget, state.widgets?.timer);
  applyWidgetPosition(els.clockWidget, state.widgets?.clock);
  applyWidgetPosition(els.groupsWidget, state.widgets?.groups);
  applyWidgetPosition(els.textWidget, state.widgets?.text);
  applyWidgetPosition(els.imageWidget, state.widgets?.image);
  applyWidgetPosition(els.youtubeWidget, state.widgets?.youtube);

  if (currentSlides) updateOpenSlidesLink();

  if (currentSlides) {
    const playerUrl = buildSlidesUrl(currentSlides);
    loadPlayerUrl(playerUrl);
    updateSlidesDebug(playerUrl);
    writeState({ currentEmbedUrl: playerUrl });
  }

  resetTimer();
  startClock();
  if (manualGroups.length > 0) buildManualGroups(manualGroups);
  if (Array.isArray(state.dynamicWidgets)) {
    clearDynamicWidgets();
    state.dynamicWidgets.forEach((widget) => {
      createDynamicWidget(widget.type, widget.state || {}, widget.position);
    });
  }
  renderGroups();
  renderTextBox();
  renderImage();
  renderYoutube();
  renderSavedLayouts();
  setActiveTool(activeTool);
  setDockCollapsed(dockCollapsed);
}

els.loadSlides.addEventListener("click", loadSlides);
els.clearSlides.addEventListener("click", clearSlides);
els.switchSlidesMode.addEventListener("click", switchSlidesMode);
els.retrySlides.addEventListener("click", () => {
  if (currentPlayerUrl) loadPlayerUrl(currentPlayerUrl);
});
els.frame.addEventListener("load", () => {
  if (els.frame.getAttribute("src") && els.frame.getAttribute("src") !== "about:blank") {
    setLoading(false);
  }
});
els.fullscreenButton.addEventListener("click", () => els.stage.requestFullscreen?.());
els.hideWidgets.addEventListener("click", hideAllWidgets);
els.collapseDock.addEventListener("click", () => setDockCollapsed(true));
els.expandDock.addEventListener("click", () => setDockCollapsed(false));
els.timerStart.addEventListener("click", startTimer);
els.timerPause.addEventListener("click", pauseTimer);
els.timerReset.addEventListener("click", resetTimer);
els.stageTimerStart.addEventListener("click", startTimer);
els.stageTimerPause.addEventListener("click", pauseTimer);
els.stageTimerReset.addEventListener("click", resetTimer);
els.timerMinutes.addEventListener("change", resetTimer);
els.timerSeconds.addEventListener("change", resetTimer);
els.timerTitle.addEventListener("input", () => {
  renderTimer();
  writeState();
});
els.showTimer.addEventListener("change", () => {
  renderTimer();
  writeState();
});
els.showClock.addEventListener("change", () => {
  renderClock();
  writeState();
});
els.clockTitle.addEventListener("input", () => {
  renderClock();
  writeState();
});
els.showGroups.addEventListener("change", () => {
  renderGroups();
  writeState();
});
els.groupsTitle.addEventListener("input", () => {
  renderGroups();
  writeState();
});
els.showTextBox.addEventListener("change", () => {
  renderTextBox();
  writeState();
});
els.textBoxContent.addEventListener("input", () => {
  renderTextBox();
  writeState();
});
els.textBoxSize.addEventListener("input", () => {
  renderTextBox();
  writeState();
});
els.textBoxSize.addEventListener("change", normalizeTextBoxSize);
els.textBoxColor.addEventListener("input", () => {
  renderTextBox();
  writeState();
});
els.showImage.addEventListener("change", () => {
  renderImage();
  writeState();
});
els.imageTitle.addEventListener("input", () => {
  renderImage();
  writeState();
});
els.imageUrl.addEventListener("input", writeState);
els.loadImage.addEventListener("click", loadImageFromUrl);
els.clearImage.addEventListener("click", clearImage);
els.imageFile.addEventListener("change", () => loadImageFromFile(els.imageFile.files?.[0]));
els.showYoutube.addEventListener("change", () => {
  renderYoutube();
  writeState();
});
els.youtubeTitle.addEventListener("input", () => {
  renderYoutube();
  writeState();
});
els.youtubeUrl.addEventListener("input", writeState);
els.loadYoutube.addEventListener("click", loadYoutube);
els.clearYoutube.addEventListener("click", clearYoutube);
els.saveLayout.addEventListener("click", saveCurrentLayout);
els.loadLayout.addEventListener("click", loadSelectedLayout);
els.deleteLayout.addEventListener("click", deleteSelectedLayout);
els.exportLayouts.addEventListener("click", exportLayouts);
els.importLayouts.addEventListener("change", () => importLayoutsFromFile(els.importLayouts.files?.[0]));
els.syncCode.addEventListener("input", writeState);
els.syncLayouts.addEventListener("click", syncLayoutsToCloud);
els.loadCloudLayouts.addEventListener("click", loadLayoutsFromCloud);
els.makeGroups.addEventListener("click", makeGroups);
els.copyGroups.addEventListener("click", copyGroups);
els.buildManualGroups.addEventListener("click", () => buildManualGroups());
els.applyManualGroups.addEventListener("click", applyManualGroups);
els.studentList.addEventListener("input", writeState);
els.groupCount.addEventListener("change", () => {
  if (els.manualGroupsList.children.length > 0) buildManualGroups(readManualGroups());
  writeState();
});
els.shuffleGroups.addEventListener("change", writeState);
els.dockItems.forEach((item) => {
  item.addEventListener("click", () => {
    if (DYNAMIC_WIDGET_TYPES.has(item.dataset.tool)) {
      createDynamicWidget(item.dataset.tool);
      setActiveTool("");
      return;
    }
    toggleActiveTool(item.dataset.tool);
  });
});

document.querySelectorAll(".drag-handle").forEach((handle) => {
  handle.addEventListener("pointerdown", startDrag);
});

document.querySelectorAll(".resize-handle").forEach((handle) => {
  handle.addEventListener("pointerdown", startResize);
});

window.addEventListener("pointermove", (event) => {
  moveDrag(event);
  moveResize(event);
});
window.addEventListener("pointerup", () => {
  stopDrag();
  stopResize();
});
window.addEventListener("pointercancel", () => {
  stopDrag();
  stopResize();
});

restore();

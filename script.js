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
const POST_BOARDS_COLLECTION = "classroomPostBoards";

const els = {
  stage: document.querySelector("#slide-stage"),
  frame: document.querySelector("#slides-frame"),
  slidesUrl: document.querySelector("#slides-url"),
  loadSlides: document.querySelector("#load-slides"),
  clearSlides: document.querySelector("#clear-slides"),
  addSlidesWidget: document.querySelector("#add-slides-widget"),
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
  pageSelect: document.querySelector("#page-select"),
  pageName: document.querySelector("#page-name"),
  addPage: document.querySelector("#add-page"),
  addPostBoardPage: document.querySelector("#add-post-board-page"),
  deletePage: document.querySelector("#delete-page"),
  pageMessage: document.querySelector("#page-message"),
  pageTitleColor: document.querySelector("#page-title-color"),
  clearPageTitleColor: document.querySelector("#clear-page-title-color"),
  pageBgColor: document.querySelector("#page-bg-color"),
  pageBgImageFile: document.querySelector("#page-bg-image-file"),
  clearPageBg: document.querySelector("#clear-page-bg"),
  pageBgStatus: document.querySelector("#page-bg-status"),
  postBoardControls: document.querySelector("#post-board-controls"),
  exportObsidian: document.querySelector("#export-obsidian"),
  postBoardJoinUrl: document.querySelector("#post-board-join-url"),
  copyPostBoardLink: document.querySelector("#copy-post-board-link"),
  openPostBoardLink: document.querySelector("#open-post-board-link"),
  pageTabs: document.querySelector("#page-tabs"),
  emptyStateTitle: document.querySelector("#empty-state strong"),
  emptyStateDetail: document.querySelector("#empty-state span"),
  postBoardStage: document.querySelector("#post-board-stage"),
  postBoardTitle: document.querySelector("#post-board-title"),
  postBoardDetail: document.querySelector("#post-board-detail"),
  postBoardJoinTitle: document.querySelector("#post-board-join-title"),
  postBoardQr: document.querySelector("#post-board-qr"),
  postBoardLink: document.querySelector("#post-board-link"),
  postBoardJoinCard: document.querySelector("#post-board-join-card"),
  postBoardQrToggle: document.querySelector("#post-board-qr-toggle"),
  postBoardQrExpand: document.querySelector("#post-board-qr-expand"),
  postBoardQrModal: document.querySelector("#post-board-qr-modal"),
  postBoardQrModalTitle: document.querySelector("#post-board-qr-modal-title"),
  postBoardQrModalImg: document.querySelector("#post-board-qr-modal-img"),
  postBoardQrModalClose: document.querySelector("#post-board-qr-modal-close"),
  postBoardNote: document.querySelector("#post-board-note"),
  postBoardNoteColor: document.querySelector("#post-board-note-color"),
  postBoardGrid: document.querySelector("#post-board-grid"),
  postBoardMessage: document.querySelector("#post-board-message"),
  participantNote: document.querySelector("#participant-note"),
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
  textBoxAlign: document.querySelector("#text-box-align"),
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
  alignLeftWidgets: document.querySelector("#align-left-widgets"),
  alignCenterWidgets: document.querySelector("#align-center-widgets"),
  alignRightWidgets: document.querySelector("#align-right-widgets"),
  distributeHorizontalWidgets: document.querySelector("#distribute-horizontal-widgets"),
  distributeVerticalWidgets: document.querySelector("#distribute-vertical-widgets"),
  clearWidgetSelection: document.querySelector("#clear-widget-selection"),
  arrangeMessage: document.querySelector("#arrange-message"),
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
  moreTools: document.querySelector("#more-tools"),
  moreToolItems: document.querySelectorAll(".more-tool"),
  collapseDock: document.querySelector("#collapse-dock"),
  expandDock: document.querySelector("#expand-dock"),
  dockItems: document.querySelectorAll(".dock-item[data-tool]"),
  toolPanels: document.querySelectorAll(".tool-section[data-panel]"),
  studio: document.querySelector(".studio"),
  participantView: document.querySelector("#participant-view"),
  participantBoardScreen: document.querySelector("#participant-board-screen"),
  participantFormScreen: document.querySelector("#participant-form-screen"),
  participantBoardBody: document.querySelector("#participant-board-body"),
  participantOpenForm: document.querySelector("#participant-open-form"),
  participantBack: document.querySelector("#participant-back"),
  participantFormTitle: document.querySelector("#participant-form-title"),
  participantTitle: document.querySelector("#participant-title"),
  participantForm: document.querySelector("#participant-form"),
  participantName: document.querySelector("#participant-name"),
  participantSection: document.querySelector("#participant-section"),
  participantSectionRow: document.querySelector("#participant-section-row"),
  participantContent: document.querySelector("#participant-content"),
  participantImage: document.querySelector("#participant-image"),
  participantSubmit: document.querySelector("#participant-submit"),
  participantMessage: document.querySelector("#participant-message"),
  postEditModal: document.querySelector("#post-edit-modal"),
  postEditSection: document.querySelector("#post-edit-section"),
  postEditSectionLabel: document.querySelector("#post-edit-section-label"),
  postEditAuthor: document.querySelector("#post-edit-author"),
  postEditContent: document.querySelector("#post-edit-content"),
  postEditSave: document.querySelector("#post-edit-save"),
  postEditCancel: document.querySelector("#post-edit-cancel"),
  postEditMessage: document.querySelector("#post-edit-message"),
  promptModal: document.querySelector("#prompt-modal"),
  promptModalTitle: document.querySelector("#prompt-modal-title"),
  promptModalInput: document.querySelector("#prompt-modal-input"),
  promptModalOk: document.querySelector("#prompt-modal-ok"),
  promptModalCancel: document.querySelector("#prompt-modal-cancel"),
  confirmModal: document.querySelector("#confirm-modal"),
  confirmModalMessage: document.querySelector("#confirm-modal-message"),
  confirmModalOk: document.querySelector("#confirm-modal-ok"),
  confirmModalCancel: document.querySelector("#confirm-modal-cancel"),
  imageViewer: document.querySelector("#image-viewer"),
  imageViewerImg: document.querySelector("#image-viewer-img"),
  imageViewerDownload: document.querySelector("#image-viewer-download"),
  imageViewerClose: document.querySelector("#image-viewer-close"),
  imageViewerZoom: document.querySelector("#image-viewer-zoom"),
  imageViewerZoomValue: document.querySelector("#image-viewer-zoom-value"),
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
let pages = [];
let activePageId = "main";
let moreToolsOpen = false;
let selectedWidgets = new Set();
let topWidgetZ = 20;
let postBoardUnsubscribe = null;
let postBoardMetadataUnsubscribe = null;
let postBoardPosts = [];
let postBoardSections = [];
let dragPostId = null;
let participantUnsubscribe = null;
let participantBoardSections = [];
let participantBoardPosts = [];
let participantUid = null;
let participantEditingPostId = null;
const DEFAULT_PAGE = { id: "main", name: "主簡報", type: "slides" };
const PAGE_TYPES = new Set(["slides", "dark", "posts"]);
const DYNAMIC_WIDGET_TYPES = new Set(["timer", "clock", "groups", "text", "image", "youtube", "slides", "qr"]);
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
    textBoxAlign: els.textBoxAlign.value,
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
    moreToolsOpen,
    pages,
    activePageId,
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

function normalizePages(value) {
  const source = Array.isArray(value) ? value : [];
  const normalized = source
    .map((page) => {
      const type = PAGE_TYPES.has(page?.type) ? page.type : "slides";
      const normalizedPage = {
        id: String(page?.id || "").trim(),
        name: String(page?.name || "").trim(),
        type,
      };
      if (type === "posts") {
        normalizedPage.boardId = String(page?.boardId || page?.id || makeBoardId()).trim();
        normalizedPage.sections = normalizePostSections(page?.sections);
        normalizedPage.noteHtml = String(page?.noteHtml || "");
      }
      normalizedPage.bgColor = typeof page?.bgColor === "string" ? page.bgColor : "";
      normalizedPage.bgImage = typeof page?.bgImage === "string" ? page.bgImage : "";
      normalizedPage.titleColor = typeof page?.titleColor === "string" ? page.titleColor : "";
      return normalizedPage;
    })
    .filter((page) => page.id && page.name);
  const hasMain = normalized.some((page) => page.id === DEFAULT_PAGE.id);
  return hasMain ? normalized : [DEFAULT_PAGE, ...normalized];
}

function activePage() {
  return pages.find((page) => page.id === activePageId) || pages[0] || DEFAULT_PAGE;
}

function activePageShowsMainSlides() {
  return activePage().type === "slides";
}

function makePageId() {
  return `page-${Date.now().toString(36)}`;
}

function makeBoardId() {
  const random = Math.random().toString(36).slice(2, 8);
  return `board-${Date.now().toString(36)}-${random}`;
}

function makeSectionId() {
  return `section-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 7)}`;
}

function defaultPostSections() {
  return [{ id: "section-a", name: "預設區段" }];
}

function normalizePostSections(value) {
  const source = Array.isArray(value) ? value : [];
  const normalized = source
    .map((section) => ({
      id: String(section?.id || "").trim(),
      name: String(section?.name || "").trim(),
    }))
    .filter((section) => section.id && section.name)
    .slice(0, 12);
  return normalized;
}

function renderPages() {
  els.pageSelect.innerHTML = "";
  els.pageTabs.innerHTML = "";
  pages.forEach((page) => {
    const option = document.createElement("option");
    option.value = page.id;
    option.textContent = page.name;
    els.pageSelect.appendChild(option);

    const tab = document.createElement("button");
    tab.type = "button";
    tab.className = "page-tab";
    tab.textContent = page.name;
    tab.classList.toggle("active", page.id === activePage().id);
    tab.setAttribute("aria-current", page.id === activePage().id ? "page" : "false");
    tab.addEventListener("click", () => switchPage(page.id));
    els.pageTabs.appendChild(tab);
  });
  els.pageSelect.value = activePage().id;
  els.pageName.value = activePage().id === DEFAULT_PAGE.id ? "" : activePage().name;
  els.deletePage.disabled = activePage().id === DEFAULT_PAGE.id;
  const curPage = activePage();
  els.pageTitleColor.value = curPage.titleColor || "#1a2330";
  els.pageBgColor.value = curPage.bgColor || "#080a0e";
  els.pageBgImageFile.value = "";
  els.pageBgStatus.textContent = curPage.bgImage ? "已設定背景圖片。" : curPage.bgColor ? `背景顏色：${curPage.bgColor}` : "";
  updatePostBoardControls();
}

function updateDynamicWidgetVisibility() {
  dynamicWidgets.forEach((widget) => {
    widget.element.classList.toggle("page-hidden", widget.pageId !== activePage().id);
  });
  pruneWidgetSelection();
}

function applyPageBackground(page) {
  if (page.bgImage) {
    els.stage.style.background = `url("${page.bgImage}") center/cover no-repeat`;
  } else if (page.bgColor) {
    els.stage.style.background = page.bgColor;
  } else {
    els.stage.style.background = "";
  }
}

function updateStageForPage() {
  const page = activePage();
  const showMainSlides = page.type === "slides" && Boolean(currentSlides);
  els.stage.classList.toggle("blank-page", page.type === "dark");
  els.stage.classList.toggle("post-page", page.type === "posts");
  els.stage.classList.toggle("has-slides", showMainSlides);
  applyPageBackground(page);
  els.postBoardStage.classList.toggle("hidden", page.type !== "posts");

  if (page.type === "dark") {
    setLoading(false);
    unsubscribePostBoard();
    els.emptyStateTitle.textContent = "";
    els.emptyStateDetail.textContent = "";
  } else if (page.type === "posts") {
    setLoading(false);
    els.emptyStateTitle.textContent = "";
    els.emptyStateDetail.textContent = "";
    renderPostBoard();
    subscribeActivePostBoard();
  } else {
    els.emptyStateTitle.textContent = "Google Slides 教學播放台";
    els.emptyStateDetail.textContent = "從下方 slides 貼上簡報連結。";
    unsubscribePostBoard();
  }

  updateDynamicWidgetVisibility();
  renderPages();
}

function setMoreToolsOpen(isOpen) {
  if (isOpen && activeTool) setActiveTool("");
  moreToolsOpen = isOpen;
  els.toolDock.classList.toggle("more-open", moreToolsOpen);
  els.moreTools.setAttribute("aria-expanded", String(moreToolsOpen));
  els.moreTools.querySelector("span:last-child").textContent = moreToolsOpen ? "less" : "more";
  els.moreToolItems.forEach((item) => item.classList.toggle("hidden", !moreToolsOpen));
  writeState();
}

function widgetSelectionId(widget) {
  return widget.dataset.dynamicId ? `dynamic:${widget.dataset.dynamicId}` : `fixed:${widget.dataset.widget}`;
}

function selectedVisibleWidgets() {
  return visibleWidgets(null).filter((widget) => selectedWidgets.has(widgetSelectionId(widget)));
}

function updateSelectionMessage() {
  const selectedCount = selectedVisibleWidgets().length;
  els.arrangeMessage.textContent =
    selectedCount > 0 ? `已選取 ${selectedCount} 個小工具；Ctrl 或 Command 點擊可多選。` : "點小工具可選取，再點一次取消；按住 Ctrl 或 Command 可多選。";
  els.arrangeMessage.classList.remove("error");
}

function renderWidgetSelection() {
  visibleWidgets(null).forEach((widget) => {
    widget.classList.toggle("selected-widget", selectedWidgets.has(widgetSelectionId(widget)));
  });
  updateSelectionMessage();
}

function pruneWidgetSelection() {
  const visibleIds = new Set(visibleWidgets(null).map(widgetSelectionId));
  selectedWidgets = new Set([...selectedWidgets].filter((id) => visibleIds.has(id)));
  renderWidgetSelection();
}

function clearWidgetSelection() {
  selectedWidgets.clear();
  renderWidgetSelection();
}

function shouldIgnoreWidgetSelection(event) {
  return Boolean(event.target.closest("button, a, input, textarea, select, iframe, .dynamic-settings, .drag-handle, .dynamic-drag, .resize-handle"));
}

function handleWidgetClick(event) {
  const widget = event.target.closest(".widget");
  if (!widget || widget.classList.contains("hidden") || widget.classList.contains("page-hidden")) return;
  if (shouldIgnoreWidgetSelection(event)) return;
  bringWidgetToFront(widget);

  const id = widgetSelectionId(widget);
  const isMulti = event.ctrlKey || event.metaKey;

  if (selectedWidgets.has(id)) {
    selectedWidgets.delete(id);
  } else {
    if (!isMulti) selectedWidgets.clear();
    selectedWidgets.add(id);
  }
  renderWidgetSelection();
}

function bringWidgetToFront(widget) {
  topWidgetZ += 1;
  widget.style.zIndex = String(topWidgetZ);
}

function addDarkPage() {
  const name = els.pageName.value.trim() || `暗色頁面 ${pages.length}`;
  const page = { id: makePageId(), name, type: "dark" };
  pages = [...pages, page];
  activePageId = page.id;
  els.pageMessage.textContent = `已新增「${name}」。`;
  els.pageMessage.classList.remove("error");
  updateStageForPage();
  writeState();
}

function addPostBoardPage() {
  const name = els.pageName.value.trim() || `貼文板 ${pages.filter((page) => page.type === "posts").length + 1}`;
  const page = { id: makePageId(), name, type: "posts", boardId: makeBoardId(), sections: defaultPostSections() };
  pages = [...pages, page];
  activePageId = page.id;
  els.pageMessage.textContent = `已新增「${name}」，QR Code 會連到這一頁的投稿入口。`;
  els.pageMessage.classList.remove("error");
  updateStageForPage();
  ensurePostBoardDoc(page);
  writeState();
}

function switchPage(pageId) {
  if (!pages.some((page) => page.id === pageId)) return;
  activePageId = pageId;
  updateStageForPage();
  writeState();
}

function renameActivePage(name) {
  const page = activePage();
  if (page.id === DEFAULT_PAGE.id) return;
  const nextName = name.trim();
  if (!nextName) return;
  pages = pages.map((item) => (item.id === page.id ? { ...item, name: nextName } : item));
  updateStageForPage();
  if (activePage().type === "posts") ensurePostBoardDoc(activePage());
  writeState();
}

function deleteActivePage() {
  const page = activePage();
  if (page.id === DEFAULT_PAGE.id) {
    els.pageMessage.textContent = "主簡報頁不能刪除。";
    els.pageMessage.classList.add("error");
    return;
  }
  dynamicWidgets
    .filter((widget) => widget.pageId === page.id)
    .forEach((widget) => removeDynamicWidget(widget.id, false));
  pages = pages.filter((item) => item.id !== page.id);
  activePageId = DEFAULT_PAGE.id;
  els.pageMessage.textContent = `已刪除「${page.name}」。`;
  els.pageMessage.classList.remove("error");
  updateStageForPage();
  writeState();
}

function addSlidesWidgetFromInput() {
  const slides = parseSlidesInput(els.slidesUrl.value);
  if (!slides) {
    createDynamicWidget("slides");
    return;
  }
  createDynamicWidget("slides", {
    title: "Slides",
    slidesUrl: els.slidesUrl.value,
    mode: slidesMode,
    embedUrl: buildSlidesUrl(slides),
    editUrl: slides.editUrl,
    settingsOpen: false,
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
    pageId: widget.pageId,
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
  if (type === "text") return { title: "Text", titleSize: "13", content: "文字框", size: "44", color: "#ffffff", align: "center", settingsOpen: true };
  if (type === "image") return { title: "Image", titleSize: "13", imageUrl: "", imageSource: "", imageScale: "100", settingsOpen: true };
  if (type === "youtube") return { title: "YouTube", titleSize: "13", youtubeUrl: "", embedUrl: "", watchUrl: "", settingsOpen: true, minimized: false };
  if (type === "slides") return { title: "Slides", titleSize: "13", slidesUrl: "", embedUrl: "", editUrl: "", mode: "preview", settingsOpen: true };
  if (type === "qr") return { title: "QR Code", titleSize: "13", qrUrl: "", qrImageUrl: "", qrSize: "320", settingsOpen: true };
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

function linkifyText(text) {
  const escaped = text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  return escaped.replace(/https?:\/\/\S+/g, (url) => {
    const clean = url.replace(/[.,;:!?)\]。、！？）】]+$/, "");
    const trailing = url.slice(clean.length);
    return `<a href="${clean}" target="_blank" rel="noreferrer noopener">${clean}</a>${trailing}`;
  });
}

function fileToDataUrl(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.addEventListener("load", () => resolve(String(reader.result || "")));
    reader.addEventListener("error", () => reject(reader.error || new Error("file read failed")));
    reader.readAsDataURL(file);
  });
}

function alignmentSelect(value = "center") {
  const select = document.createElement("select");
  [
    ["left", "靠左"],
    ["center", "置中"],
    ["right", "靠右"],
  ].forEach(([optionValue, label]) => {
    const option = document.createElement("option");
    option.value = optionValue;
    option.textContent = label;
    select.appendChild(option);
  });
  select.value = ["left", "center", "right"].includes(value) ? value : "center";
  return select;
}

function createDynamicWidget(type, state = {}, position = null) {
  if (!DYNAMIC_WIDGET_TYPES.has(type)) return null;

  const id = state.id || makeWidgetId();
  const pageId = state.pageId && pages.some((page) => page.id === state.pageId) ? state.pageId : activePage().id;
  const nextState = {
    ...defaultDynamicState(type),
    ...cloneValue(state),
    pageId,
  };
  delete nextState.id;

  const widget = document.createElement("article");
  widget.className = "widget dynamic-widget";
  widget.dataset.widget = type;
  widget.dataset.widgetType = type;
  widget.dataset.dynamicId = id;
  widget.dataset.pageId = pageId;
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
    pageId,
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
    bringWidgetToFront(widget);
    instance.state.settingsOpen = !instance.state.settingsOpen;
    renderDynamicWidget(instance);
    writeState();
  });
  removeButton.addEventListener("click", () => removeDynamicWidget(id));

  buildDynamicSettings(instance);
  renderDynamicWidget(instance);
  applyWidgetPosition(widget, position);
  keepWidgetVisible(widget);
  updateDynamicWidgetVisibility();
  renderWidgetSelection();
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
    const align = addLabeledInput(settings, "文字對齊", alignmentSelect(state.align || "center"));
    content.addEventListener("input", () => updateDynamicState(instance, { content: content.value }));
    size.addEventListener("input", () => updateDynamicState(instance, { size: size.value }));
    color.addEventListener("input", () => updateDynamicState(instance, { color: color.value }));
    align.addEventListener("change", () => updateDynamicState(instance, { align: align.value }));
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
      fileToDataUrl(selected)
        .then((imageDataUrl) => updateDynamicState(instance, { imageSource: imageDataUrl, imageUrl: "" }))
        .catch(() => updateDynamicState(instance, { imageSource: "" }));
    });
  }

  if (type === "qr") {
    const url = addLabeledInput(settings, "網址連結", dynamicTextarea(state.qrUrl || "", 3));
    const size = addLabeledInput(settings, "QR 圖片尺寸", dynamicInput(state.qrSize || "320", "number"));
    size.min = "120";
    size.max = "900";
    size.step = "20";
    const row = createEl("div", "button-row");
    const load = createEl("button", "", "產生 QR Code");
    const clear = createEl("button", "secondary", "清除");
    load.type = clear.type = "button";
    row.append(load, clear);
    settings.appendChild(row);
    url.addEventListener("input", () => updateDynamicState(instance, { qrUrl: url.value }));
    size.addEventListener("input", () => updateDynamicState(instance, { qrSize: size.value }));
    load.addEventListener("click", () => {
      const qrUrl = url.value.trim();
      if (!qrUrl) return;
      updateDynamicState(instance, {
        qrUrl,
        qrSize: size.value,
        qrImageUrl: buildQrCodeUrl(qrUrl, size.value),
      });
    });
    clear.addEventListener("click", () => updateDynamicState(instance, { qrUrl: "", qrImageUrl: "" }));
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

  if (type === "slides") {
    const url = addLabeledInput(settings, "Google Slides 連結或 ID", dynamicTextarea(state.slidesUrl || "", 3));
    const mode = addLabeledInput(settings, "嵌入模式", document.createElement("select"));
    [
      ["preview", "preview"],
      ["embed", "embed"],
    ].forEach(([value, label]) => {
      const option = document.createElement("option");
      option.value = value;
      option.textContent = label;
      mode.appendChild(option);
    });
    mode.value = state.mode || "preview";
    const row = createEl("div", "button-row");
    const load = createEl("button", "", "載入簡報");
    const open = createEl("a", "link-button secondary", "另開簡報");
    load.type = "button";
    open.href = state.editUrl || "#";
    open.target = "_blank";
    open.rel = "noreferrer";
    open.classList.toggle("disabled", !state.editUrl);
    row.append(load, open);
    settings.appendChild(row);
    url.addEventListener("input", () => updateDynamicState(instance, { slidesUrl: url.value }));
    mode.addEventListener("change", () => updateDynamicState(instance, { mode: mode.value }));
    load.addEventListener("click", () => {
      const slides = parseSlidesInput(url.value);
      if (!slides) return;
      const embedUrl = buildSlidesUrl(slides, mode.value);
      updateDynamicState(instance, {
        slidesUrl: url.value,
        mode: mode.value,
        embedUrl,
        editUrl: slides.editUrl,
      });
      open.href = slides.editUrl;
      open.classList.remove("disabled");
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
    display.style.textAlign = ["left", "center", "right"].includes(state.align) ? state.align : "center";
  } else if (type === "image") {
    display.innerHTML = "";
    if (state.imageSource) {
      const image = document.createElement("img");
      image.src = state.imageSource;
      image.alt = state.title || "圖片";
      image.style.setProperty("--image-scale", `${Math.min(200, Math.max(25, Number(state.imageScale) || 100))}%`);
      const sliderWrap = createEl("div", "image-scale-control");
      const slider = dynamicInput(state.imageScale || "100", "range");
      slider.min = "25";
      slider.max = "200";
      slider.step = "5";
      slider.setAttribute("aria-label", "圖片大小");
      slider.addEventListener("input", () => updateDynamicState(instance, { imageScale: slider.value }));
      sliderWrap.appendChild(slider);
      display.append(image, sliderWrap);
    } else {
      display.textContent = "尚未載入圖片";
    }
  } else if (type === "qr") {
    display.innerHTML = "";
    const qrImageUrl = state.qrImageUrl || (state.qrUrl ? buildQrCodeUrl(state.qrUrl, state.qrSize) : "");
    if (qrImageUrl) {
      const image = document.createElement("img");
      image.className = "qr-code-image";
      image.src = qrImageUrl;
      image.alt = state.qrUrl ? `QR Code: ${state.qrUrl}` : "QR Code";
      display.appendChild(image);
    } else {
      display.textContent = "貼上網址後產生 QR Code";
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
  } else if (type === "slides") {
    display.innerHTML = "";
    if (state.embedUrl) {
      const iframe = document.createElement("iframe");
      iframe.src = state.embedUrl;
      iframe.title = state.title || "Google Slides";
      iframe.allowFullscreen = true;
      display.appendChild(iframe);
    } else {
      display.textContent = "尚未載入簡報";
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

function removeDynamicWidget(id, persist = true) {
  const widget = getDynamicWidget(id);
  if (!widget) return;
  window.clearInterval(widget.timerId);
  window.clearInterval(widget.clockId);
  selectedWidgets.delete(widgetSelectionId(widget.element));
  widget.element.remove();
  dynamicWidgets = dynamicWidgets.filter((item) => item.id !== id);
  renderWidgetSelection();
  if (persist) writeState();
}

function clearDynamicWidgets() {
  dynamicWidgets.forEach((widget) => {
    window.clearInterval(widget.timerId);
    window.clearInterval(widget.clockId);
    selectedWidgets.delete(widgetSelectionId(widget.element));
    widget.element.remove();
  });
  dynamicWidgets = [];
  renderWidgetSelection();
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
      import("https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js"),
    ]).then(([appModule, firestoreModule, authModule]) => {
      const app = appModule.initializeApp(FIREBASE_CONFIG);
      const db = firestoreModule.getFirestore(app);
      const auth = authModule.getAuth(app);
      firebaseApi = {
        auth,
        db,
        doc: firestoreModule.doc,
        collection: firestoreModule.collection,
        addDoc: firestoreModule.addDoc,
        getDoc: firestoreModule.getDoc,
        setDoc: firestoreModule.setDoc,
        updateDoc: firestoreModule.updateDoc,
        deleteDoc: firestoreModule.deleteDoc,
        query: firestoreModule.query,
        orderBy: firestoreModule.orderBy,
        onSnapshot: firestoreModule.onSnapshot,
        serverTimestamp: firestoreModule.serverTimestamp,
        signInAnonymously: authModule.signInAnonymously,
      };
      return firebaseApi;
    });
  }
  return firebaseLoadPromise;
}

async function ensureFirebaseAuth(api) {
  if (api.auth?.currentUser) return;
  try {
    await api.signInAnonymously(api.auth);
  } catch {
    // Some classroom deployments use public Firestore rules and do not enable anonymous auth.
  }
}

function cloudDocRef(api, syncCode) {
  return api.doc(api.db, FIREBASE_COLLECTION, syncCode);
}

function postBoardDocRef(api, boardId) {
  return api.doc(api.db, POST_BOARDS_COLLECTION, boardId);
}

function postBoardPostsRef(api, boardId) {
  return api.collection(api.db, POST_BOARDS_COLLECTION, boardId, "posts");
}

function postBoardJoinUrl(page) {
  if (!page?.boardId) return "";
  const url = new URL(window.location.href);
  url.search = "";
  url.hash = "";
  url.searchParams.set("board", page.boardId);
  url.searchParams.set("title", page.name || "貼文板");
  return url.toString();
}

function postBoardSectionJoinUrl(page, sectionId) {
  const url = new URL(postBoardJoinUrl(page));
  if (sectionId) url.searchParams.set("section", sectionId);
  return url.toString();
}

async function ensurePostBoardDoc(page) {
  if (!page?.boardId) return;
  try {
    const api = await loadFirebaseApi();
    await ensureFirebaseAuth(api);
    await api.setDoc(
      postBoardDocRef(api, page.boardId),
      {
        title: page.name || "貼文板",
        adminUid: api.auth.currentUser?.uid || "",
        sections: normalizePostSections(page.sections),
        note: page.noteHtml || "",
        updatedAt: api.serverTimestamp(),
        kind: "postBoard",
        version: 1,
      },
      { merge: true },
    );
  } catch (error) {
    els.postBoardMessage.textContent = `貼文板雲端連線失敗：${error.message || "請確認 Firestore 規則。"}`;
    els.postBoardMessage.classList.add("error");
  }
}

function updatePostBoardControls() {
  const page = activePage();
  const isPostBoard = page.type === "posts";
  els.postBoardControls.classList.toggle("hidden", !isPostBoard);
  if (!isPostBoard) return;
  const url = postBoardJoinUrl(page);
  els.postBoardJoinUrl.value = url;
  els.openPostBoardLink.href = url || "#";
}

function postImageFilename(post) {
  const source = String(post?.imageDataUrl || "");
  const extension = source.startsWith("data:image/png") ? "png" : source.startsWith("data:image/webp") ? "webp" : "jpg";
  const id = String(post?.id || Date.now()).replace(/[^a-zA-Z0-9_-]+/g, "-").slice(0, 36);
  return `post-image-${id || "download"}.${extension}`;
}

function setImageViewerZoom(value) {
  els.imageViewerImg.style.width = `${value}%`;
  els.imageViewerZoomValue.textContent = `${value}%`;
}

function openImageViewer(imageDataUrl, filename) {
  if (!imageDataUrl) return;
  els.imageViewerImg.src = imageDataUrl;
  els.imageViewerDownload.href = imageDataUrl;
  els.imageViewerDownload.download = filename || "貼文圖片.jpg";
  els.imageViewerZoom.value = 100;
  setImageViewerZoom(100);
  els.imageViewer.classList.remove("hidden");
}

function closeImageViewer() {
  els.imageViewer.classList.add("hidden");
  els.imageViewerImg.removeAttribute("src");
  els.imageViewerDownload.href = "#";
}

function postsForSection(posts, sectionId) {
  return posts.filter((post) => (post.sectionId || "section-a") === sectionId);
}

async function addPostSection() {
  const page = activePage();
  if (page.type !== "posts") return;
  const name = await showPromptModal("新增區段名稱", `新增區段 ${normalizePostSections(page.sections).length + 1}`);
  if (!name?.trim()) return;
  const sections = [...normalizePostSections(page.sections), { id: makeSectionId(), name: name.trim().slice(0, 40) }];
  await savePostSections(sections);
}

async function renamePostSection(sectionId) {
  const page = activePage();
  if (page.type !== "posts") return;
  const sections = normalizePostSections(page.sections);
  const section = sections.find((item) => item.id === sectionId);
  if (!section) return;
  const name = await showPromptModal("重新命名區段", section.name);
  if (!name?.trim()) return;
  await savePostSections(sections.map((item) => (item.id === sectionId ? { ...item, name: name.trim().slice(0, 40) } : item)));
}

async function deletePostSection(sectionId) {
  const page = activePage();
  if (page.type !== "posts") return;
  const sections = normalizePostSections(page.sections);
  const section = sections.find((item) => item.id === sectionId);
  if (!section) return;
  const postCount = postsForSection(postBoardPosts, sectionId).length;
  const confirmed = await showConfirmModal(
    `確定要刪除區段「${section.name}」嗎？` +
    (postCount > 0 ? `\n此區段內有 ${postCount} 則貼文，貼文資料不會被刪除。` : "")
  );
  if (!confirmed) return;
  await savePostSections(sections.filter((item) => item.id !== sectionId));
}

async function savePostSections(sections) {
  const page = activePage();
  if (page.type !== "posts" || !page.boardId) return;
  const nextSections = normalizePostSections(sections);
  pages = pages.map((item) => (item.id === page.id ? { ...item, sections: nextSections } : item));
  postBoardSections = nextSections;
  renderPostBoard();
  writeState();

  try {
    const api = await loadFirebaseApi();
    await ensureFirebaseAuth(api);
    await api.setDoc(
      postBoardDocRef(api, page.boardId),
      {
        title: page.name || "貼文板",
        adminUid: api.auth.currentUser?.uid || "",
        sections: nextSections,
        note: page.noteHtml || "",
        updatedAt: api.serverTimestamp(),
        kind: "postBoard",
        version: 1,
      },
      { merge: true },
    );
  } catch (error) {
    els.postBoardMessage.textContent = `區段儲存失敗：${error.message || "請確認權限。"}`;
    els.postBoardMessage.classList.add("error");
  }
}

function showPromptModal(title, defaultValue = "") {
  return new Promise((resolve) => {
    els.promptModalTitle.textContent = title;
    els.promptModalInput.value = defaultValue;
    els.promptModalInput.maxLength = 40;
    els.promptModal.classList.remove("hidden");
    els.promptModalInput.focus();
    els.promptModalInput.select();

    const cleanup = (value) => {
      els.promptModal.classList.add("hidden");
      els.promptModalOk.removeEventListener("click", onOk);
      els.promptModalCancel.removeEventListener("click", onCancel);
      els.promptModalInput.removeEventListener("keydown", onKey);
      els.promptModal.removeEventListener("click", onBackdrop);
      resolve(value);
    };
    const onOk = () => cleanup(els.promptModalInput.value);
    const onCancel = () => cleanup(null);
    const onKey = (e) => { if (e.key === "Enter") { e.preventDefault(); cleanup(els.promptModalInput.value); } else if (e.key === "Escape") cleanup(null); };
    const onBackdrop = (e) => { if (e.target === els.promptModal) cleanup(null); };
    els.promptModalOk.addEventListener("click", onOk);
    els.promptModalCancel.addEventListener("click", onCancel);
    els.promptModalInput.addEventListener("keydown", onKey);
    els.promptModal.addEventListener("click", onBackdrop);
  });
}

function showConfirmModal(message) {
  return new Promise((resolve) => {
    els.confirmModalMessage.textContent = message;
    els.confirmModal.classList.remove("hidden");
    els.confirmModalOk.focus();

    const cleanup = (result) => {
      els.confirmModal.classList.add("hidden");
      els.confirmModalOk.removeEventListener("click", onOk);
      els.confirmModalCancel.removeEventListener("click", onCancel);
      els.confirmModal.removeEventListener("click", onBackdrop);
      resolve(result);
    };
    const onOk = () => cleanup(true);
    const onCancel = () => cleanup(false);
    const onBackdrop = (e) => { if (e.target === els.confirmModal) cleanup(false); };
    els.confirmModalOk.addEventListener("click", onOk);
    els.confirmModalCancel.addEventListener("click", onCancel);
    els.confirmModal.addEventListener("click", onBackdrop);
  });
}

function editPost(post) {
  const page = activePage();
  if (page.type !== "posts" || !page.boardId || !post?.id) return;

  const pbSections = normalizePostSections(postBoardSections);
  const pgSections = normalizePostSections(page.sections);
  const sections = pbSections.length >= pgSections.length ? pbSections : pgSections;
  const hasSections = sections.length > 0;
  els.postEditSection.innerHTML = "";
  els.postEditSectionLabel.hidden = !hasSections;
  els.postEditSection.hidden = !hasSections;
  if (hasSections) {
    sections.forEach((s) => {
      const opt = document.createElement("option");
      opt.value = s.id;
      opt.textContent = s.name;
      if (s.id === (post.sectionId || "")) opt.selected = true;
      els.postEditSection.appendChild(opt);
    });
  }

  els.postEditAuthor.value = post.author || "";
  els.postEditContent.value = post.content || "";
  els.postEditMessage.textContent = "";
  els.postEditModal.classList.remove("hidden");
  els.postEditContent.focus();

  const cleanup = () => {
    els.postEditModal.classList.add("hidden");
    els.postEditSave.removeEventListener("click", onSave);
    els.postEditCancel.removeEventListener("click", onCancel);
    els.postEditModal.removeEventListener("click", onBackdrop);
  };

  const onCancel = () => cleanup();
  const onBackdrop = (e) => { if (e.target === els.postEditModal) cleanup(); };

  const onSave = async () => {
    const nextAuthor = els.postEditAuthor.value.trim().slice(0, 40);
    const nextContent = els.postEditContent.value.trim().slice(0, 600);
    if (!nextContent && !post.imageDataUrl) {
      els.postEditMessage.textContent = "內容不能為空。";
      return;
    }
    els.postEditSave.disabled = true;
    els.postEditMessage.textContent = "儲存中…";
    try {
      const api = await loadFirebaseApi();
      await ensureFirebaseAuth(api);
      await api.updateDoc(api.doc(api.db, POST_BOARDS_COLLECTION, page.boardId, "posts", post.id), {
        author: nextAuthor || "匿名",
        content: nextContent,
        sectionId: (hasSections ? els.postEditSection.value : null) || post.sectionId || "section-a",
        updatedAt: api.serverTimestamp(),
      });
      cleanup();
    } catch (error) {
      els.postEditMessage.textContent = `儲存失敗：${error.message || "請確認網路與權限。"}`;
    } finally {
      els.postEditSave.disabled = false;
    }
  };

  els.postEditSave.addEventListener("click", onSave);
  els.postEditCancel.addEventListener("click", onCancel);
  els.postEditModal.addEventListener("click", onBackdrop);
}

async function deletePost(post) {
  const page = activePage();
  if (page.type !== "posts" || !page.boardId || !post?.id) return;
  if (!await showConfirmModal("確定要刪除這則貼文？刪除後不能復原。")) return;

  try {
    const api = await loadFirebaseApi();
    await ensureFirebaseAuth(api);
    await api.deleteDoc(api.doc(api.db, POST_BOARDS_COLLECTION, page.boardId, "posts", post.id));
  } catch (error) {
    els.postBoardMessage.textContent = `貼文刪除失敗：${error.message || "請確認權限。"}`;
    els.postBoardMessage.classList.add("error");
  }
}

async function movePostToSection(postId, sectionId) {
  const page = activePage();
  if (page.type !== "posts" || !page.boardId) return;
  const post = postBoardPosts.find((p) => p.id === postId);
  if (!post || post.sectionId === sectionId) return;
  try {
    const api = await loadFirebaseApi();
    await ensureFirebaseAuth(api);
    await api.updateDoc(api.doc(api.db, POST_BOARDS_COLLECTION, page.boardId, "posts", postId), {
      author: post.author || "匿名",
      content: post.content || "",
      sectionId,
      updatedAt: api.serverTimestamp(),
    });
  } catch (error) {
    els.postBoardMessage.textContent = `移動貼文失敗：${error.message || "請確認權限。"}`;
    els.postBoardMessage.classList.add("error");
  }
}

function exportPostBoardToObsidian() {
  const page = activePage();
  if (page.type !== "posts") return;

  const boardName = page.name || "貼文板";
  const sections = normalizePostSections(postBoardSections.length > 0 ? postBoardSections : page.sections);
  const date = new Date().toISOString().slice(0, 10);

  const lines = [`---`, `date: ${date}`, `board: ${boardName}`, `---`, ``];
  function appendPosts(posts) {
    if (posts.length === 0) { lines.push("_（尚無貼文）_", ``); return; }
    posts.forEach((post) => {
      const author = post.author || "匿名";
      lines.push(`**${author}**`);
      if (post.content) lines.push(post.content);
      if (post.imageDataUrl) lines.push(`![](${post.imageDataUrl})`);
      lines.push(``);
    });
  }
  if (sections.length === 0) {
    appendPosts(postBoardPosts);
  } else {
    sections.forEach((section) => {
      lines.push(`# ${section.name}`, ``);
      appendPosts(postsForSection(postBoardPosts, section.id));
    });
    const sectionIds = new Set(sections.map((s) => s.id));
    const orphanPosts = postBoardPosts.filter((post) => !sectionIds.has(post.sectionId || "section-a"));
    if (orphanPosts.length > 0) { lines.push(`# 未分類`, ``); appendPosts(orphanPosts); }
  }

  const md = lines.join("\n");
  const filename = boardName.replace(/[\\/:*?"<>|]/g, "-");

  const blob = new Blob([md], { type: "text/markdown;charset=utf-8" });
  const blobUrl = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = blobUrl;
  a.download = `${filename}.md`;
  a.click();
  URL.revokeObjectURL(blobUrl);
}

function renderPostCards(container, posts, options = {}) {
  container.innerHTML = "";
  if (posts.length === 0) {
    const empty = createEl("div", "post-card empty-post", "目前還沒有貼文");
    container.appendChild(empty);
    return;
  }

  posts.forEach((post) => {
    const card = createEl("article", "post-card");
    if (options.canManage && options.draggable) {
      card.draggable = true;
      card.addEventListener("dragstart", (e) => {
        e.stopPropagation();
        dragPostId = post.id;
        e.dataTransfer.effectAllowed = "move";
        e.dataTransfer.setData("text/plain", post.id);
        setTimeout(() => card.classList.add("dragging"), 0);
      });
      card.addEventListener("dragend", () => {
        dragPostId = null;
        card.classList.remove("dragging");
      });
    }
    const meta = createEl("div", "post-meta");
    const author = createEl("strong", "", post.author || "匿名");
    const time = createEl("span", "", formatPostTime(post.createdAt));
    meta.append(author, time);
    card.appendChild(meta);
    if (options.canManage) {
      const menuBtn = createEl("button", "post-menu-btn", "⋮");
      menuBtn.type = "button";
      menuBtn.title = "貼文選項";
      const menu = createEl("div", "post-menu hidden");
      const editBtn = createEl("button", "", "編輯貼文");
      editBtn.type = "button";
      const removeBtn = createEl("button", "danger", "刪除貼文");
      removeBtn.type = "button";
      editBtn.addEventListener("click", () => { menu.classList.add("hidden"); editPost(post); });
      removeBtn.addEventListener("click", () => { menu.classList.add("hidden"); deletePost(post); });
      menuBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        const wasOpen = !menu.classList.contains("hidden");
        document.querySelectorAll(".post-menu:not(.hidden)").forEach((m) => m.classList.add("hidden"));
        if (!wasOpen) menu.classList.remove("hidden");
      });
      menu.addEventListener("click", (e) => e.stopPropagation());
      menu.append(editBtn, removeBtn);
      card.append(menuBtn, menu);
    }
    if (post.content) {
      const content = createEl("p", "post-content");
      content.innerHTML = linkifyText(post.content);
      card.appendChild(content);
    }
    if (post.imageDataUrl) {
      const filename = postImageFilename(post);
      const imageWrap = createEl("div", "post-image-wrap");
      const image = document.createElement("img");
      image.src = post.imageDataUrl;
      image.alt = post.content ? `貼文圖片：${post.content.slice(0, 24)}` : "貼文圖片";
      image.addEventListener("click", () => openImageViewer(post.imageDataUrl, filename));

      const imageActions = createEl("div", "post-image-actions");
      const expand = createEl("button", "secondary", "展開");
      expand.type = "button";
      expand.addEventListener("click", () => openImageViewer(post.imageDataUrl, filename));
      const download = createEl("a", "link-button secondary", "下載");
      download.href = post.imageDataUrl;
      download.download = filename;
      imageActions.append(expand, download);
      imageWrap.append(image, imageActions);
      card.appendChild(imageWrap);
    }
    container.appendChild(card);
  });
}

function renderPostBoardColumns(page, sections) {
  els.postBoardGrid.innerHTML = "";
  const boardColumns = createEl("div", "post-board-columns");

  if (sections.length === 0 && postBoardPosts.length > 0) {
    const body = createEl("div", "post-section-body");
    renderPostCards(body, postBoardPosts, { canManage: true });
    boardColumns.appendChild(body);
  }

  let dragSrcIdx = null;

  sections.forEach((section, idx) => {
    const column = createEl("section", "post-section");
    column.draggable = true;

    column.addEventListener("dragstart", (e) => {
      dragSrcIdx = idx;
      column.classList.add("dragging");
      e.dataTransfer.effectAllowed = "move";
    });
    column.addEventListener("dragover", (e) => {
      e.preventDefault();
      e.dataTransfer.dropEffect = "move";
      column.classList.add("drag-over");
    });
    column.addEventListener("dragleave", () => {
      column.classList.remove("drag-over");
    });
    column.addEventListener("drop", (e) => {
      e.preventDefault();
      column.classList.remove("drag-over");
      if (dragSrcIdx === null || dragSrcIdx === idx) return;
      const next = [...sections];
      const [moved] = next.splice(dragSrcIdx, 1);
      next.splice(idx, 0, moved);
      dragSrcIdx = null;
      savePostSections(next);
    });
    column.addEventListener("dragend", () => {
      column.classList.remove("dragging");
      boardColumns.querySelectorAll(".post-section").forEach((c) => c.classList.remove("drag-over"));
      dragSrcIdx = null;
    });

    const head = createEl("div", "post-section-head");
    const titleButton = createEl("button", "post-section-title", section.name);
    titleButton.type = "button";
    titleButton.title = "重新命名區段";
    titleButton.addEventListener("click", () => renamePostSection(section.id));
    const addLink = createEl("a", "post-section-add", "+");
    addLink.href = postBoardSectionJoinUrl(page, section.id);
    addLink.target = "_blank";
    addLink.rel = "noreferrer";
    addLink.title = `到「${section.name}」投稿`;
    const deleteBtn = createEl("button", "post-section-delete", "✕");
    deleteBtn.type = "button";
    deleteBtn.title = "刪除區段";
    deleteBtn.addEventListener("click", () => deletePostSection(section.id));
    const sectionActions = createEl("div", "post-section-actions");
    sectionActions.append(addLink, deleteBtn);
    head.append(titleButton, sectionActions);
    const body = createEl("div", "post-section-body");
    renderPostCards(body, postsForSection(postBoardPosts, section.id), { canManage: true, draggable: true });
    body.addEventListener("dragover", (e) => {
      if (!dragPostId) return;
      e.preventDefault();
      e.stopPropagation();
      e.dataTransfer.dropEffect = "move";
      body.classList.add("drop-target");
    });
    body.addEventListener("dragleave", (e) => {
      if (!e.currentTarget.contains(e.relatedTarget)) body.classList.remove("drop-target");
    });
    body.addEventListener("drop", (e) => {
      e.preventDefault();
      e.stopPropagation();
      body.classList.remove("drop-target");
      if (!dragPostId) return;
      const postId = dragPostId;
      dragPostId = null;
      movePostToSection(postId, section.id);
    });
    column.append(head, body);
    boardColumns.appendChild(column);
  });
  if (sections.length > 0) {
    const sectionIds = new Set(sections.map((s) => s.id));
    const orphanPosts = postBoardPosts.filter((post) => !sectionIds.has(post.sectionId || "section-a"));
    if (orphanPosts.length > 0) {
      const column = createEl("section", "post-section");
      const head = createEl("div", "post-section-head");
      const titleEl = createEl("span", "post-section-title", "未分類");
      head.appendChild(titleEl);
      const body = createEl("div", "post-section-body");
      renderPostCards(body, orphanPosts, { canManage: true, draggable: true });
      column.append(head, body);
      boardColumns.insertBefore(column, boardColumns.firstChild);
    }
  }

  const addSection = createEl("button", "post-section-new", "+");
  addSection.type = "button";
  addSection.title = "新增區段";
  addSection.addEventListener("click", addPostSection);
  boardColumns.appendChild(addSection);
  els.postBoardGrid.appendChild(boardColumns);
}

function renderPostBoard() {
  const page = activePage();
  if (page.type !== "posts") return;
  const sections = normalizePostSections(postBoardSections.length > 0 ? postBoardSections : page.sections);
  const joinUrl = postBoardJoinUrl(page);
  const boardName = page.name || "貼文板";
  els.postBoardTitle.textContent = boardName;
  els.postBoardTitle.style.color = page.titleColor || "";
  els.postBoardJoinTitle.textContent = boardName;
  els.postBoardDetail.textContent = "參與者掃描 QR Code 後可以新增文字貼文或上傳圖片。";
  els.postBoardQr.src = buildQrCodeUrl(joinUrl, "260");
  els.postBoardLink.href = joinUrl || "#";
  els.postBoardMessage.textContent = postBoardPosts.length === 0 ? "等待參與者投稿中。" : `已收到 ${postBoardPosts.length} 則貼文。`;
  els.postBoardMessage.classList.remove("error");
  if (document.activeElement !== els.postBoardNote) {
    els.postBoardNote.innerHTML = page.noteHtml || "";
    els.postBoardNote.classList.toggle("is-empty", !els.postBoardNote.textContent.trim());
  }
  renderPostBoardColumns(page, sections);
  updatePostBoardControls();
}

let noteHtmlSaveTimer = null;

function onPostBoardNoteInput() {
  const html = els.postBoardNote.innerHTML;
  const isEmpty = !els.postBoardNote.textContent.trim();
  els.postBoardNote.classList.toggle("is-empty", isEmpty);
  const page = activePage();
  if (page.type !== "posts") return;
  const noteHtml = isEmpty ? "" : html;
  pages = pages.map((p) => (p.id === page.id ? { ...p, noteHtml } : p));
  writeState();
  clearTimeout(noteHtmlSaveTimer);
  noteHtmlSaveTimer = setTimeout(() => syncNoteToFirestore(noteHtml), 800);
}

async function syncNoteToFirestore(noteHtml) {
  const page = activePage();
  if (!page?.boardId) return;
  try {
    const api = await loadFirebaseApi();
    await ensureFirebaseAuth(api);
    await api.setDoc(
      postBoardDocRef(api, page.boardId),
      {
        title: page.name || "貼文板",
        adminUid: api.auth.currentUser?.uid || "",
        sections: normalizePostSections(page.sections),
        note: noteHtml,
        updatedAt: api.serverTimestamp(),
        kind: "postBoard",
        version: 1,
      },
      { merge: true },
    );
  } catch { /* silent */ }
}

function unsubscribePostBoard() {
  if (postBoardUnsubscribe) {
    postBoardUnsubscribe();
    postBoardUnsubscribe = null;
  }
  if (postBoardMetadataUnsubscribe) {
    postBoardMetadataUnsubscribe();
    postBoardMetadataUnsubscribe = null;
  }
}

async function subscribeActivePostBoard() {
  const page = activePage();
  if (page.type !== "posts" || !page.boardId) return;
  unsubscribePostBoard();
  postBoardPosts = [];
  postBoardSections = normalizePostSections(page.sections);
  renderPostBoard();
  await ensurePostBoardDoc(page);
  try {
    const api = await loadFirebaseApi();
    await ensureFirebaseAuth(api);
    postBoardMetadataUnsubscribe = api.onSnapshot(postBoardDocRef(api, page.boardId), (snapshot) => {
      const nextSections = normalizePostSections(snapshot.data()?.sections || page.sections);
      postBoardSections = nextSections;
      pages = pages.map((item) => (item.id === page.id ? { ...item, sections: nextSections } : item));
      renderPostBoard();
      writeState();
    });
    const postsQuery = api.query(postBoardPostsRef(api, page.boardId), api.orderBy("createdAt", "desc"));
    postBoardUnsubscribe = api.onSnapshot(
      postsQuery,
      (snapshot) => {
        postBoardPosts = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        renderPostBoard();
      },
      (error) => {
        els.postBoardMessage.textContent = `貼文載入失敗：${error.message || "請確認 Firestore 規則。"}`;
        els.postBoardMessage.classList.add("error");
      },
    );
  } catch (error) {
    els.postBoardMessage.textContent = `貼文板無法連線：${error.message || "請確認網路與 Firestore 設定。"}`;
    els.postBoardMessage.classList.add("error");
  }
}

function formatPostTime(value) {
  const date = value?.toDate ? value.toDate() : value ? new Date(value) : null;
  if (!date || Number.isNaN(date.getTime())) return "剛剛";
  return date.toLocaleTimeString("zh-Hant", { hour: "2-digit", minute: "2-digit" });
}

function sortPosts(posts) {
  return [...posts].sort((a, b) => Number(b.createdAt || 0) - Number(a.createdAt || 0));
}

function isParticipantMode() {
  return Boolean(new URLSearchParams(window.location.search).get("board"));
}

function setParticipantMessage(text, isError = false) {
  els.participantMessage.textContent = text;
  els.participantMessage.classList.toggle("error", isError);
}

function showParticipantBoard() {
  participantEditingPostId = null;
  els.participantFormTitle.textContent = "新增貼文";
  els.participantBoardScreen.classList.remove("hidden");
  els.participantFormScreen.classList.add("hidden");
}

function showParticipantForm(sectionId) {
  if (sectionId) els.participantSection.value = sectionId;
  els.participantMessage.textContent = "";
  els.participantMessage.classList.remove("error");
  els.participantBoardScreen.classList.add("hidden");
  els.participantFormScreen.classList.remove("hidden");
  els.participantContent.focus();
}

function showParticipantEditForm(post) {
  participantEditingPostId = post.id;
  els.participantFormTitle.textContent = "編輯貼文";
  els.participantName.value = post.author || "";
  els.participantContent.value = post.content || "";
  if (els.participantSection && post.sectionId) els.participantSection.value = post.sectionId;
  els.participantMessage.textContent = "";
  els.participantMessage.classList.remove("error");
  els.participantBoardScreen.classList.add("hidden");
  els.participantFormScreen.classList.remove("hidden");
  els.participantContent.focus();
}

async function deleteParticipantPost(postId) {
  const params = new URLSearchParams(window.location.search);
  const boardId = params.get("board");
  if (!boardId) return;
  try {
    const api = await loadFirebaseApi();
    await ensureFirebaseAuth(api);
    const ref = api.doc(postBoardPostsRef(api, boardId), postId);
    await api.deleteDoc(ref);
  } catch (error) {
    setParticipantMessage(error.message || "刪除失敗，請稍後再試。", true);
  }
}

function sanitizeNoteHtml(html) {
  const div = document.createElement("div");
  div.innerHTML = html;
  div.querySelectorAll("script,style,[onclick],[onload],[onerror],[onmouseover]").forEach((el) => el.remove());
  return div.innerHTML;
}

function renderParticipantNote(html) {
  const safe = sanitizeNoteHtml(html);
  els.participantNote.innerHTML = safe;
  els.participantNote.classList.toggle("hidden", !safe.trim());
}

function renderParticipantPostCards(container, posts) {
  container.innerHTML = "";
  if (posts.length === 0) {
    container.appendChild(createEl("div", "post-card empty-post", "目前還沒有貼文"));
    return;
  }
  posts.forEach((post) => {
    const card = createEl("article", "post-card");
    const meta = createEl("div", "post-meta");
    meta.append(createEl("strong", "", post.author || "匿名"), createEl("span", "", formatPostTime(post.createdAt)));
    card.appendChild(meta);
    if (post.content) card.appendChild(createEl("p", "post-content", post.content));
    if (post.imageDataUrl) {
      const img = document.createElement("img");
      img.src = post.imageDataUrl;
      img.className = "post-thumb";
      img.alt = "";
      card.appendChild(img);
    }
    if (participantUid && post.authorUid === participantUid) {
      const actions = createEl("div", "participant-post-actions");
      const editBtn = createEl("button", "participant-post-edit", "編輯");
      editBtn.type = "button";
      editBtn.addEventListener("click", () => showParticipantEditForm(post));
      const delBtn = createEl("button", "participant-post-delete", "刪除");
      delBtn.type = "button";
      delBtn.addEventListener("click", async () => {
        if (await showConfirmModal("確定要刪除這則貼文嗎？")) deleteParticipantPost(post.id);
      });
      actions.append(editBtn, delBtn);
      card.appendChild(actions);
    }
    container.appendChild(card);
  });
}

function postsNotInSections(posts, sections) {
  const ids = new Set(sections.map((s) => s.id));
  return posts.filter((p) => !p.sectionId || !ids.has(p.sectionId));
}

function renderParticipantBoard(sections, posts) {
  els.participantBoardBody.innerHTML = "";
  els.participantOpenForm.classList.remove("hidden");
  if (sections.length === 0) {
    const body = createEl("div", "post-section-body");
    renderParticipantPostCards(body, posts);
    els.participantBoardBody.appendChild(body);
    return;
  }
  const columns = createEl("div", "participant-board-columns");
  sections.forEach((section) => {
    const column = createEl("section", "post-section");
    const head = createEl("div", "post-section-head");
    const titleEl = createEl("div", "post-section-title participant-section-title", section.name);
    const addBtn = createEl("button", "post-section-add", "+");
    addBtn.type = "button";
    addBtn.title = `投稿到「${section.name}」`;
    addBtn.addEventListener("click", () => showParticipantForm(section.id));
    head.append(titleEl, addBtn);
    const body = createEl("div", "post-section-body");
    renderParticipantPostCards(body, postsForSection(posts, section.id));
    column.append(head, body);
    columns.appendChild(column);
  });
  const uncategorized = postsNotInSections(posts, sections);
  if (uncategorized.length > 0) {
    const column = createEl("section", "post-section");
    const head = createEl("div", "post-section-head");
    const titleEl = createEl("div", "post-section-title participant-section-title", "未分類");
    head.append(titleEl);
    const body = createEl("div", "post-section-body");
    renderParticipantPostCards(body, uncategorized);
    column.append(head, body);
    columns.appendChild(column);
  }
  els.participantBoardBody.appendChild(columns);
}

function renderParticipantSections(sections, selectedId = "") {
  const normalized = normalizePostSections(sections);
  els.participantSectionRow.classList.toggle("hidden", normalized.length === 0);
  els.participantSection.innerHTML = "";
  normalized.forEach((section) => {
    const option = document.createElement("option");
    option.value = section.id;
    option.textContent = section.name;
    els.participantSection.appendChild(option);
  });
  if (normalized.length > 0) {
    els.participantSection.value = normalized.some((s) => s.id === selectedId) ? selectedId : normalized[0].id;
  }
}

async function imageFileToPostDataUrl(file) {
  if (!file) return "";
  if (!file.type.startsWith("image/")) throw new Error("請選擇圖片檔。");

  const source = await fileToDataUrl(file);
  const image = await new Promise((resolve, reject) => {
    const img = new Image();
    img.addEventListener("load", () => resolve(img));
    img.addEventListener("error", () => reject(new Error("圖片讀取失敗。")));
    img.src = source;
  });
  const maxSide = 1280;
  const scale = Math.min(1, maxSide / Math.max(image.naturalWidth, image.naturalHeight));
  const canvas = document.createElement("canvas");
  canvas.width = Math.max(1, Math.round(image.naturalWidth * scale));
  canvas.height = Math.max(1, Math.round(image.naturalHeight * scale));
  const context = canvas.getContext("2d");
  context.drawImage(image, 0, 0, canvas.width, canvas.height);
  return canvas.toDataURL("image/jpeg", 0.78);
}

async function submitParticipantPost(event) {
  event.preventDefault();
  const params = new URLSearchParams(window.location.search);
  const boardId = params.get("board");
  const author = els.participantName.value.trim().slice(0, 40);
  const sectionId = els.participantSection.value || params.get("section") || "section-a";
  const content = els.participantContent.value.trim().slice(0, 600);
  const file = els.participantImage.files?.[0] || null;
  if (!boardId) return;
  if (!content && !file) {
    setParticipantMessage("請先輸入內容或選擇圖片。", true);
    return;
  }

  try {
    els.participantSubmit.disabled = true;
    setParticipantMessage("正在送出...");
    const imageDataUrl = file ? await imageFileToPostDataUrl(file) : "";
    if (imageDataUrl.length > 950000) {
      throw new Error("圖片太大，請換一張較小的圖片。");
    }
    const api = await loadFirebaseApi();
    await ensureFirebaseAuth(api);
    participantUid = api.auth.currentUser?.uid || null;
    if (participantEditingPostId) {
      const ref = api.doc(postBoardPostsRef(api, boardId), participantEditingPostId);
      await api.updateDoc(ref, {
        author,
        sectionId,
        content,
        updatedAt: api.serverTimestamp(),
      });
      participantEditingPostId = null;
    } else {
      await api.addDoc(postBoardPostsRef(api, boardId), {
        author,
        sectionId,
        content,
        imageDataUrl,
        createdAt: api.serverTimestamp(),
        authorUid: participantUid || "",
      });
    }
    els.participantContent.value = "";
    els.participantImage.value = "";
    els.participantFormTitle.textContent = "新增貼文";
    showParticipantBoard();
  } catch (error) {
    setParticipantMessage(error.message || "送出失敗，請稍後再試。", true);
  } finally {
    els.participantSubmit.disabled = false;
  }
}

async function initParticipantMode() {
  const params = new URLSearchParams(window.location.search);
  const boardId = params.get("board");
  const title = params.get("title") || "貼文板";
  const selectedSectionId = params.get("section") || "";
  if (!boardId) return;

  els.studio.classList.add("hidden");
  els.participantView.classList.remove("hidden");
  els.participantTitle.textContent = title;
  document.title = title;
  els.participantForm.addEventListener("submit", submitParticipantPost);
  els.participantOpenForm.addEventListener("click", () => showParticipantForm());
  els.participantBack.addEventListener("click", showParticipantBoard);

  try {
    const api = await loadFirebaseApi();
    await ensureFirebaseAuth(api);
    participantUid = api.auth.currentUser?.uid || null;
    const boardSnapshot = await api.getDoc(postBoardDocRef(api, boardId));
    if (boardSnapshot.exists() && boardSnapshot.data()?.title) {
      els.participantTitle.textContent = boardSnapshot.data().title;
      document.title = boardSnapshot.data().title;
    }
    participantBoardSections = normalizePostSections(boardSnapshot.data()?.sections || []);
    renderParticipantNote(boardSnapshot.data()?.note || "");
    renderParticipantSections(participantBoardSections, selectedSectionId);
    renderParticipantBoard(participantBoardSections, participantBoardPosts);

    api.onSnapshot(postBoardDocRef(api, boardId), (snapshot) => {
      participantBoardSections = normalizePostSections(snapshot.data()?.sections || []);
      renderParticipantNote(snapshot.data()?.note || "");
      renderParticipantSections(participantBoardSections, els.participantSection.value || selectedSectionId);
      renderParticipantBoard(participantBoardSections, participantBoardPosts);
    });

    const postsQuery = api.query(postBoardPostsRef(api, boardId), api.orderBy("createdAt", "desc"));
    participantUnsubscribe = api.onSnapshot(
      postsQuery,
      (snapshot) => {
        participantBoardPosts = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        renderParticipantBoard(participantBoardSections, participantBoardPosts);
      },
      (error) => {
        setParticipantMessage(`貼文載入失敗：${error.message || "請確認連線。"}`, true);
      },
    );
  } catch (error) {
    setParticipantMessage(`貼文板無法連線：${error.message || "請確認網路。"}`, true);
  }
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
    await ensureFirebaseAuth(api);
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
    await ensureFirebaseAuth(api);
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
  if (tool && moreToolsOpen) setMoreToolsOpen(false);
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
  clearWidgetSelection();
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
  if (widget.classList.contains("hidden") || widget.classList.contains("page-hidden")) return;

  const stageRect = els.stage.getBoundingClientRect();
  const rect = widget.getBoundingClientRect();
  const minWidth = widget.dataset.widget === "timer" ? 210 : widget.dataset.widget === "slides" ? 320 : 220;
  const minHeight = widget.dataset.widget === "timer" ? 150 : widget.dataset.widget === "slides" ? 220 : 110;

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
    .filter((widget) => widget !== excludedWidget && !widget.classList.contains("hidden") && !widget.classList.contains("page-hidden"))
    .filter((widget) => widget.offsetWidth > 0 && widget.offsetHeight > 0);
}

function currentWidgetBoxes() {
  const stageRect = els.stage.getBoundingClientRect();
  const selected = selectedVisibleWidgets();
  const widgets = selected.length > 0 ? selected : visibleWidgets(null);
  return widgets.map((widget) => {
    const rect = widget.getBoundingClientRect();
    const box = {
      widget,
      left: Math.round(rect.left - stageRect.left),
      top: Math.round(rect.top - stageRect.top),
      width: Math.round(rect.width),
      height: Math.round(rect.height),
    };
    box.right = box.left + box.width;
    box.bottom = box.top + box.height;
    widget.style.left = `${box.left}px`;
    widget.style.top = `${box.top}px`;
    widget.style.right = "";
    widget.style.bottom = "";
    widget.style.width = `${box.width}px`;
    widget.style.height = `${box.height}px`;
    return box;
  });
}

function selectionBounds(boxes) {
  return {
    left: Math.min(...boxes.map((box) => box.left)),
    top: Math.min(...boxes.map((box) => box.top)),
    right: Math.max(...boxes.map((box) => box.right)),
    bottom: Math.max(...boxes.map((box) => box.bottom)),
  };
}

function moveWidgetBox(box, left, top) {
  const stageRect = els.stage.getBoundingClientRect();
  const nextLeft = Math.round(Math.min(Math.max(8, stageRect.width - box.width - 8), Math.max(8, left)));
  const nextTop = Math.round(Math.min(Math.max(8, stageRect.height - box.height - 8), Math.max(8, top)));
  box.widget.style.left = `${nextLeft}px`;
  box.widget.style.top = `${nextTop}px`;
  box.widget.style.right = "";
  box.widget.style.bottom = "";
}

function setArrangeMessage(text, isError = false) {
  els.arrangeMessage.textContent = text;
  els.arrangeMessage.classList.toggle("error", isError);
}

function arrangeWidgets(mode) {
  const boxes = currentWidgetBoxes();
  if (boxes.length < 2) {
    setArrangeMessage("至少需要 2 個小工具才能排列。請先選取，或讓目前頁面有 2 個以上可見小工具。", true);
    return;
  }
  const scopeText = selectedVisibleWidgets().length > 0 ? "選取的" : "目前頁面可見的";

  const bounds = selectionBounds(boxes);
  if (mode === "left") {
    boxes.forEach((box) => moveWidgetBox(box, bounds.left, box.top));
    setArrangeMessage(`已將 ${scopeText} ${boxes.length} 個小工具靠左對齊。`);
  }
  if (mode === "center") {
    const center = (bounds.left + bounds.right) / 2;
    boxes.forEach((box) => moveWidgetBox(box, center - box.width / 2, box.top));
    setArrangeMessage(`已將 ${scopeText} ${boxes.length} 個小工具置中對齊。`);
  }
  if (mode === "right") {
    boxes.forEach((box) => moveWidgetBox(box, bounds.right - box.width, box.top));
    setArrangeMessage(`已將 ${scopeText} ${boxes.length} 個小工具靠右對齊。`);
  }
  if (mode === "horizontal") {
    if (boxes.length < 3) {
      setArrangeMessage("水平平均分配至少需要 3 個小工具。", true);
      return;
    }
    const sorted = boxes.slice().sort((a, b) => a.left - b.left);
    const totalWidth = sorted.reduce((sum, box) => sum + box.width, 0);
    const gap = (bounds.right - bounds.left - totalWidth) / (sorted.length - 1);
    let nextLeft = bounds.left;
    sorted.forEach((box) => {
      moveWidgetBox(box, nextLeft, box.top);
      nextLeft += box.width + gap;
    });
    setArrangeMessage(`已將 ${scopeText} ${boxes.length} 個小工具水平平均分配。`);
  }
  if (mode === "vertical") {
    if (boxes.length < 3) {
      setArrangeMessage("垂直平均分配至少需要 3 個小工具。", true);
      return;
    }
    const sorted = boxes.slice().sort((a, b) => a.top - b.top);
    const totalHeight = sorted.reduce((sum, box) => sum + box.height, 0);
    const gap = (bounds.bottom - bounds.top - totalHeight) / (sorted.length - 1);
    let nextTop = bounds.top;
    sorted.forEach((box) => {
      moveWidgetBox(box, box.left, nextTop);
      nextTop += box.height + gap;
    });
    setArrangeMessage(`已將 ${scopeText} ${boxes.length} 個小工具垂直平均分配。`);
  }

  writeState();
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

function normalizeSnapTargets(targets, max) {
  return [...new Set(targets.map((target) => Math.round(target)).filter((target) => target >= 0 && target <= max))];
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

  return {
    xTargets: normalizeSnapTargets(xTargets, stageRect.width),
    yTargets: normalizeSnapTargets(yTargets, stageRect.height),
  };
}

function bestEdgeSnap(edges, targets) {
  let best = null;

  edges.forEach((edge) => {
    targets.forEach((target) => {
      const distance = Math.abs(edge.value - target);
      if (distance > SNAP_DISTANCE) return;
      if (!best || distance < best.distance) {
        best = {
          distance,
          target,
          origin: edge.origin,
          value: edge.value,
        };
      }
    });
  });

  return best;
}

function snapWidgetPosition(left, top, width, height, stageRect, widget) {
  const { xTargets, yTargets } = stageSnapTargets(stageRect, widget);
  const guides = [];
  const xSnap = bestEdgeSnap(
    [
      { origin: "start", value: left },
      { origin: "center", value: left + width / 2 },
      { origin: "end", value: left + width },
    ],
    xTargets,
  );
  const ySnap = bestEdgeSnap(
    [
      { origin: "start", value: top },
      { origin: "center", value: top + height / 2 },
      { origin: "end", value: top + height },
    ],
    yTargets,
  );
  let nextLeft = left;
  let nextTop = top;

  if (xSnap) {
    if (xSnap.origin === "start") nextLeft = xSnap.target;
    if (xSnap.origin === "center") nextLeft = xSnap.target - width / 2;
    if (xSnap.origin === "end") nextLeft = xSnap.target - width;
    guides.push({ axis: "x", value: xSnap.target });
  }

  if (ySnap) {
    if (ySnap.origin === "start") nextTop = ySnap.target;
    if (ySnap.origin === "center") nextTop = ySnap.target - height / 2;
    if (ySnap.origin === "end") nextTop = ySnap.target - height;
    guides.push({ axis: "y", value: ySnap.target });
  }

  return {
    left: Math.round(Math.min(Math.max(8, stageRect.width - width - 8), Math.max(8, nextLeft))),
    top: Math.round(Math.min(Math.max(8, stageRect.height - height - 8), Math.max(8, nextTop))),
    guides,
  };
}

function snapWidgetSize(left, top, width, height, minWidth, minHeight, maxWidth, maxHeight, stageRect, widget) {
  const { xTargets, yTargets } = stageSnapTargets(stageRect, widget);
  const right = snapValue(left + width, xTargets);
  const bottom = snapValue(top + height, yTargets);
  const guides = [];
  const nextWidth = right.matched !== null ? right.value - left : width;
  const nextHeight = bottom.matched !== null ? bottom.value - top : height;
  if (right.matched !== null) guides.push({ axis: "x", value: right.matched });
  if (bottom.matched !== null) guides.push({ axis: "y", value: bottom.matched });

  return {
    width: Math.round(Math.min(maxWidth, Math.max(minWidth, nextWidth))),
    height: Math.round(Math.min(maxHeight, Math.max(minHeight, nextHeight))),
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
  updateStageForPage();
  if (activePageShowsMainSlides()) setLoading(true);
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
  setLoading(false);
  els.slidesUrl.value = "";
  currentSlides = null;
  updateOpenSlidesLink();
  updateSlidesDebug("");
  updateStageForPage();
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
  els.stageTextBox.style.textAlign = els.textBoxAlign.value || "center";
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

async function loadImageFromFile(file) {
  if (!file) return;
  if (!file.type.startsWith("image/")) {
    els.imageMessage.textContent = "請選擇圖片檔。";
    return;
  }
  if (imageObjectUrl) URL.revokeObjectURL(imageObjectUrl);
  imageObjectUrl = "";
  els.showImage.checked = true;
  try {
    const imageDataUrl = await fileToDataUrl(file);
    setImageSource(imageDataUrl, "已載入本機圖片，重新整理後仍會保留。");
    writeState();
  } catch {
    setImageSource("", "圖片讀取失敗，請重新選擇圖片檔。");
  }
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

function buildQrCodeUrl(value, sizeValue = "320") {
  const size = clampNumber(sizeValue, 120, 900);
  const params = new URLSearchParams({
    size: `${size}x${size}`,
    margin: "16",
    data: value,
  });
  return `https://api.qrserver.com/v1/create-qr-code/?${params.toString()}`;
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
  bringWidgetToFront(widget);

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
    widget.dataset.widget === "timer" || widget.dataset.widget === "clock"
      ? 190
      : widget.dataset.widget === "text"
      ? 180
      : widget.dataset.widget === "youtube" || widget.dataset.widget === "slides"
      ? 280
      : 220;
  const minHeight =
    widget.dataset.widget === "timer" || widget.dataset.widget === "clock"
      ? 118
      : widget.dataset.widget === "text"
      ? 110
      : widget.dataset.widget === "youtube" || widget.dataset.widget === "slides"
      ? 210
      : 150;
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
  pages = normalizePages(state.pages);
  activePageId = pages.some((page) => page.id === state.activePageId) ? state.activePageId : DEFAULT_PAGE.id;
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
  els.textBoxAlign.value = ["left", "center", "right"].includes(state.textBoxAlign) ? state.textBoxAlign : "center";
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
  moreToolsOpen = Boolean(state.moreToolsOpen);
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
      createDynamicWidget(widget.type, { ...(widget.state || {}), pageId: widget.pageId || widget.state?.pageId }, widget.position);
    });
  }
  renderGroups();
  renderTextBox();
  renderImage();
  renderYoutube();
  renderSavedLayouts();
  setActiveTool(activeTool);
  setDockCollapsed(dockCollapsed);
  setMoreToolsOpen(moreToolsOpen);
  updateStageForPage();
}

els.loadSlides.addEventListener("click", loadSlides);
els.clearSlides.addEventListener("click", clearSlides);
els.addSlidesWidget.addEventListener("click", addSlidesWidgetFromInput);
els.switchSlidesMode.addEventListener("click", switchSlidesMode);
els.pageSelect.addEventListener("change", () => switchPage(els.pageSelect.value));
els.pageName.addEventListener("change", () => renameActivePage(els.pageName.value));
els.addPage.addEventListener("click", addDarkPage);
els.addPostBoardPage.addEventListener("click", addPostBoardPage);
els.deletePage.addEventListener("click", deleteActivePage);
els.pageTitleColor.addEventListener("change", () => {
  const page = activePage();
  pages = pages.map((p) => (p.id === page.id ? { ...p, titleColor: els.pageTitleColor.value } : p));
  els.postBoardTitle.style.color = els.pageTitleColor.value;
  writeState();
});
els.clearPageTitleColor.addEventListener("click", () => {
  const page = activePage();
  pages = pages.map((p) => (p.id === page.id ? { ...p, titleColor: "" } : p));
  els.pageTitleColor.value = "#1a2330";
  els.postBoardTitle.style.color = "";
  writeState();
});
els.pageBgColor.addEventListener("change", () => {
  const page = activePage();
  pages = pages.map((p) => (p.id === page.id ? { ...p, bgColor: els.pageBgColor.value, bgImage: "" } : p));
  applyPageBackground(activePage());
  els.pageBgStatus.textContent = `背景顏色：${els.pageBgColor.value}`;
  writeState();
});
els.pageBgImageFile.addEventListener("change", async () => {
  const file = els.pageBgImageFile.files[0];
  if (!file) return;
  els.pageBgStatus.textContent = "上傳中…";
  try {
    const dataUrl = await fileToDataUrl(file);
    const page = activePage();
    pages = pages.map((p) => (p.id === page.id ? { ...p, bgImage: dataUrl, bgColor: "" } : p));
    applyPageBackground(activePage());
    els.pageBgColor.value = "#080a0e";
    els.pageBgStatus.textContent = "已設定背景圖片。";
    writeState();
  } catch {
    els.pageBgStatus.textContent = "圖片讀取失敗，請再試一次。";
  }
});
els.clearPageBg.addEventListener("click", () => {
  const page = activePage();
  pages = pages.map((p) => (p.id === page.id ? { ...p, bgColor: "", bgImage: "" } : p));
  els.pageBgImageFile.value = "";
  els.pageBgColor.value = "#080a0e";
  els.pageBgStatus.textContent = "";
  applyPageBackground(activePage());
  writeState();
});
els.copyPostBoardLink.addEventListener("click", async () => {
  const url = els.postBoardJoinUrl.value;
  if (!url) return;
  try {
    await navigator.clipboard.writeText(url);
    els.pageMessage.textContent = "已複製貼文板投稿連結。";
    els.pageMessage.classList.remove("error");
  } catch {
    els.pageMessage.textContent = "瀏覽器沒有開放自動複製，請手動複製連結。";
    els.pageMessage.classList.add("error");
  }
});
els.exportObsidian.addEventListener("click", exportPostBoardToObsidian);
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
els.moreTools.addEventListener("click", () => setMoreToolsOpen(!moreToolsOpen));
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
els.textBoxAlign.addEventListener("change", () => {
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
els.alignLeftWidgets.addEventListener("click", () => arrangeWidgets("left"));
els.alignCenterWidgets.addEventListener("click", () => arrangeWidgets("center"));
els.alignRightWidgets.addEventListener("click", () => arrangeWidgets("right"));
els.distributeHorizontalWidgets.addEventListener("click", () => arrangeWidgets("horizontal"));
els.distributeVerticalWidgets.addEventListener("click", () => arrangeWidgets("vertical"));
els.clearWidgetSelection.addEventListener("click", clearWidgetSelection);
els.imageViewerClose.addEventListener("click", closeImageViewer);
els.imageViewer.addEventListener("click", (event) => {
  if (event.target === els.imageViewer) closeImageViewer();
});
els.imageViewerZoom.addEventListener("input", () => {
  setImageViewerZoom(Number(els.imageViewerZoom.value));
});
els.postBoardQrToggle.addEventListener("click", () => {
  els.postBoardJoinCard.classList.toggle("expanded");
});
els.postBoardQrExpand.addEventListener("click", () => {
  const page = activePage();
  const joinUrl = postBoardJoinUrl(page);
  els.postBoardQrModalTitle.textContent = page.name || "貼文板";
  els.postBoardQrModalImg.src = buildQrCodeUrl(joinUrl, "480");
  els.postBoardQrModal.classList.remove("hidden");
});
els.postBoardQrModalClose.addEventListener("click", () => els.postBoardQrModal.classList.add("hidden"));
document.querySelectorAll(".note-cmd-btn").forEach((btn) => {
  btn.addEventListener("mousedown", (e) => {
    e.preventDefault();
    document.execCommand(btn.dataset.cmd, false, null);
  });
});
document.querySelectorAll(".note-size-btn").forEach((btn) => {
  btn.addEventListener("mousedown", (e) => {
    e.preventDefault();
    document.execCommand("fontSize", false, btn.dataset.size);
  });
});
els.postBoardNoteColor.addEventListener("input", (e) => {
  document.execCommand("foreColor", false, e.target.value);
  els.postBoardNote.focus();
});
els.postBoardNote.addEventListener("input", onPostBoardNoteInput);
els.postBoardNote.addEventListener("focus", () => {
  els.postBoardNote.classList.remove("is-empty");
});
els.postBoardNote.addEventListener("blur", () => {
  els.postBoardNote.classList.toggle("is-empty", !els.postBoardNote.textContent.trim());
});
els.postBoardQrModal.addEventListener("click", (event) => {
  if (event.target === els.postBoardQrModal) els.postBoardQrModal.classList.add("hidden");
});
document.addEventListener("click", () => {
  document.querySelectorAll(".post-menu:not(.hidden)").forEach((m) => m.classList.add("hidden"));
});
window.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    if (!els.postBoardQrModal.classList.contains("hidden")) {
      els.postBoardQrModal.classList.add("hidden");
    } else if (!els.imageViewer.classList.contains("hidden")) {
      closeImageViewer();
    }
  }
});
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
els.stage.addEventListener("click", handleWidgetClick);
els.dockItems.forEach((item) => {
  item.addEventListener("click", () => {
    if (item.dataset.tool === "slides") {
      toggleActiveTool("slides");
      return;
    }
    if (item.dataset.tool === "slides-widget") {
      addSlidesWidgetFromInput();
      setActiveTool("");
      return;
    }
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

if (isParticipantMode()) {
  initParticipantMode();
} else {
  restore();
}

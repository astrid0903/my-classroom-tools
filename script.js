const STORAGE_KEY = "classroomSlidesStudio.v1";
const FILE_META_KEY = "classroomSlidesStudio.fileMeta.v1";
const PLAYBACK_DIRECTORY_DB_NAME = "classroomSlidesStudio.directory.v1";
const PLAYBACK_DIRECTORY_STORE_NAME = "handles";
const PLAYBACK_DIRECTORY_HANDLE_KEY = "playbackDirectory";
const DEFAULT_SLIDES_URL = "https://docs.google.com/presentation/d/e/2PACX-1vRRH1JQUUujy7boeq3EJuDSAzPJOEWjPt3u-qilhtKb5LEOHmWzWvNjpfqV__3AuzwQ26mjhiT5nRS7/pub?start=false&loop=false&delayms=3000";
const STUDIO_FILE_TYPE = "classroomSlidesStudio.file";
const LEGACY_LAYOUTS_FILE_TYPE = "classroomSlidesStudio.layouts";
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
const POST_BOARD_BACKGROUND_IMAGE_LIMIT = 850000;
const POST_IMAGE_MAX_COUNT = 5;
const POST_IMAGE_MAX_TOTAL_LENGTH = 950000;
const POST_IMAGE_MAX_ITEM_LENGTH = 180000;
const GOOGLE_DRIVE_CLIENT_ID = "229213858169-5tp9f6rjp8a45irarko8432h39uagt5a.apps.googleusercontent.com";
const GOOGLE_DRIVE_SCOPE = "https://www.googleapis.com/auth/drive";
const GOOGLE_DRIVE_DISCOVERY_SRC = "https://accounts.google.com/gsi/client";
const GOOGLE_DRIVE_UPLOAD_URL = "https://www.googleapis.com/upload/drive/v3/files";
const GOOGLE_DRIVE_FILE_URL = "https://www.googleapis.com/drive/v3/files";
const GOOGLE_DRIVE_STUDIO_FOLDER_ID = "1u1aXfQ1ESmXTW0OAXiTvkzFNGExr4AuK";
const GOOGLE_DRIVE_STUDIO_FOLDER_NAME = "固定播放台資料夾";

const els = {
  homeView: document.querySelector("#home-view"),
  homeEnterStudio: document.querySelector("#home-enter-studio"),
  homeNewStudio: document.querySelector("#home-new-studio"),
  homeLayoutName: document.querySelector("#home-layout-name"),
  homeSaveLayout: document.querySelector("#home-save-layout"),
  homeSyncCode: document.querySelector("#home-sync-code"),
  homeSyncLayouts: document.querySelector("#home-sync-layouts"),
  homeLoadCloudLayouts: document.querySelector("#home-load-cloud-layouts"),
  homeExportLayouts: document.querySelector("#home-export-layouts"),
  homeImportLayouts: document.querySelector("#home-import-layouts"),
  homeDriveOpen: document.querySelector("#home-drive-open"),
  homeDriveNew: document.querySelector("#home-drive-new"),
  homeChooseFolder: document.querySelector("#home-choose-folder"),
  homeRefreshFolder: document.querySelector("#home-refresh-folder"),
  homeFolderStatus: document.querySelector("#home-folder-status"),
  homeFolderImport: document.querySelector("#home-folder-import"),
  homeFileStatus: document.querySelector("#home-file-status"),
  homeVersionMessage: document.querySelector("#home-version-message"),
  homeVersionCount: document.querySelector("#home-version-count"),
  homeLayoutGrid: document.querySelector("#home-layout-grid"),
  studioFileStatus: document.querySelector("#studio-file-status"),
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
  pageBgOpacityRow: document.querySelector("#page-bg-opacity-row"),
  pageBgOpacity: document.querySelector("#page-bg-opacity"),
  pageBgOpacityValue: document.querySelector("#page-bg-opacity-value"),
  clearPageBg: document.querySelector("#clear-page-bg"),
  pageBgStatus: document.querySelector("#page-bg-status"),
  postBoardControls: document.querySelector("#post-board-controls"),
  exportObsidian: document.querySelector("#export-obsidian"),
  exportPdf: document.querySelector("#export-pdf"),
  exportAllFiles: document.querySelector("#export-all-files"),
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
  editorFileStatus: document.querySelector("#editor-file-status"),
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
  hiddenWidgetsButton: document.querySelector("#hidden-widgets-button"),
  hiddenWidgetPopover: document.querySelector("#hidden-widget-popover"),
  hiddenWidgetList: document.querySelector("#hidden-widget-list"),
  showAllCreatedWidgets: document.querySelector("#show-all-created-widgets"),
  hideAllCreatedWidgets: document.querySelector("#hide-all-created-widgets"),
  moreToolItems: document.querySelectorAll(".more-tool"),
  collapseDock: document.querySelector("#collapse-dock"),
  expandDock: document.querySelector("#expand-dock"),
  dockItems: document.querySelectorAll(".dock-item[data-tool]"),
  toolPanels: document.querySelectorAll(".tool-section[data-panel]"),
  settingsBackdrop: document.querySelector("#settings-backdrop"),
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
  participantImagePreview: document.querySelector("#participant-image-preview"),
  participantImagePreviewImg: document.querySelector("#participant-image-preview-img"),
  participantImageClear: document.querySelector("#participant-image-clear"),
  participantSubmit: document.querySelector("#participant-submit"),
  participantMessage: document.querySelector("#participant-message"),
  participantPostModal: document.querySelector("#participant-post-modal"),
  participantPostModalClose: document.querySelector("#participant-post-modal-close"),
  participantPostModalMeta: document.querySelector("#participant-post-modal-meta"),
  participantPostModalContent: document.querySelector("#participant-post-modal-content"),
  participantPostModalImage: document.querySelector("#participant-post-modal-image"),
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
  imageViewerPrev: document.querySelector("#image-viewer-prev"),
  imageViewerNext: document.querySelector("#image-viewer-next"),
  imageViewerNavCounter: document.querySelector("#image-viewer-nav-counter"),
  imageViewerRotateLeft: document.querySelector("#image-viewer-rotate-left"),
  imageViewerRotateRight: document.querySelector("#image-viewer-rotate-right"),
  imageViewerRotateReset: document.querySelector("#image-viewer-rotate-reset"),
  imageViewerSaveRotation: document.querySelector("#image-viewer-save-rotation"),
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
let hiddenWidgetsOpen = false;
let selectedWidgets = new Set();
let topWidgetZ = 60;
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
let participantImagePreviewUrls = [];
let imageViewerRotation = 0;
let imageViewerPost = null;
let imageViewerIndex = 0;
let imageViewerCanSaveRotation = false;
let currentFileHandle = null;
let currentFileName = "";
let currentFileSavedAt = "";
let currentFileAutoSave = false;
let currentDriveFileId = "";
let currentDriveModifiedTime = "";
let googleDriveAccessToken = "";
let googleDriveTokenClient = null;
let googleDriveScriptPromise = null;
let fileSaveTimerId = null;
let fileSaveInProgress = false;
let fileSaveQueued = false;
let suppressFileAutoSave = false;
let folderLayoutFiles = [];
let playbackDirectoryHandle = null;
let nativePickerInProgress = false;
const DEFAULT_PAGE = { id: "main", name: "主簡報", type: "slides" };
const PAGE_TYPES = new Set(["slides", "dark", "posts"]);
const DYNAMIC_WIDGET_TYPES = new Set(["timer", "clock", "groups", "text", "image", "youtube", "slides", "qr"]);
const SNAP_GRID = 12;
const SNAP_DISTANCE = 8;
const PAGE_TEXT_DARK = "#111820";
const PAGE_TEXT_LIGHT = "#f8fafc";
const pageImageLuminanceCache = new Map();

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

function readFileMeta() {
  try {
    return JSON.parse(window.localStorage.getItem(FILE_META_KEY)) || {};
  } catch {
    return {};
  }
}

function writeFileMeta(extra = {}) {
  const next = {
    ...readFileMeta(),
    ...extra,
  };
  window.localStorage.setItem(FILE_META_KEY, JSON.stringify(next));
  currentFileName = next.name || "";
  currentFileSavedAt = next.savedAt || "";
  currentFileAutoSave = Boolean(next.autoSave);
  currentDriveFileId = next.driveFileId || "";
  currentDriveModifiedTime = next.driveModifiedTime || "";
}

function clearFileMeta() {
  window.localStorage.removeItem(FILE_META_KEY);
  currentFileName = "";
  currentFileSavedAt = "";
  currentFileAutoSave = false;
  currentFileHandle = null;
  currentDriveFileId = "";
  currentDriveModifiedTime = "";
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
    syncCode: "",
    studentList: els.studentList.value,
    groupCount: els.groupCount.value,
    shuffleGroups: els.shuffleGroups.checked,
    currentEmbedUrl: els.frame.getAttribute("src") || "",
    slidesMode,
    currentSlides,
    activeTool,
    dockCollapsed,
    moreToolsOpen,
    hiddenWidgetsOpen,
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
  scheduleFileAutoSave();
}

function patchStoredState(extra = {}) {
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify({ ...readState(), ...extra }));
  scheduleFileAutoSave();
}

function layoutSnapshot() {
  const snapshot = buildState({
    activeTool: "",
    dockCollapsed,
  });
  delete snapshot.savedLayouts;
  return snapshot;
}

function currentFileSnapshotFromStorage() {
  const state = readState();
  const snapshot = {
    ...state,
    activeTool: "",
    dockCollapsed: false,
    moreToolsOpen: false,
    hiddenWidgetsOpen: false,
  };
  delete snapshot.savedLayouts;
  return Object.keys(snapshot).length > 0 ? snapshot : { pages: [DEFAULT_PAGE], activePageId: DEFAULT_PAGE.id, slidesUrl: DEFAULT_SLIDES_URL, activeTool: "", dockCollapsed: false };
}

function buildStudioFilePayload(state = layoutSnapshot()) {
  return {
    type: STUDIO_FILE_TYPE,
    version: 1,
    savedAt: new Date().toISOString(),
    state,
  };
}

function fileSystemAccessSupported() {
  return Boolean(window.isSecureContext && window.showOpenFilePicker && window.showSaveFilePicker);
}

function directoryAccessSupported() {
  return Boolean(window.isSecureContext && window.showDirectoryPicker && window.indexedDB);
}

function directoryFileInputSupported() {
  return Boolean(els.homeFolderImport && "files" in els.homeFolderImport);
}

function sanitizeFileName(value) {
  const cleaned = String(value || "")
    .replace(/\.json$/i, "")
    .replace(/[\\/:*?"<>|]+/g, "-")
    .trim();
  return `${cleaned || "classroom-studio"}.json`;
}

function preferredFileName() {
  return sanitizeFileName(els.layoutName.value || els.homeLayoutName.value || currentFileName || `classroom-studio-${new Date().toISOString().slice(0, 10)}`);
}

function setFileInputs(name = currentFileName) {
  const displayName = name || preferredFileName();
  els.layoutName.value = displayName;
  els.homeLayoutName.value = displayName;
}

function formatFileSavedAt(value) {
  if (!value) return "";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "";
  return date.toLocaleString("zh-Hant", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  });
}

function currentFileStatusText() {
  const savedText = formatFileSavedAt(currentFileSavedAt);
  const suffix = savedText ? `｜最新存檔：${savedText}` : "｜最新存檔：尚未存檔";
  if (currentDriveFileId && currentFileName) {
    return `${currentFileAutoSave ? "Google Drive 自動存檔中" : "Google Drive 已載入（自動存檔暫停）"}｜檔名：${currentFileName}${suffix}`;
  }
  if (currentFileHandle && currentFileName) return `本機自動存檔中｜檔名：${currentFileName}${suffix}`;
  if (currentFileName) return `已載入檔案（需手動另存）｜檔名：${currentFileName}${suffix}`;
  return `尚未連結檔案｜檔名：未命名${suffix}`;
}

function setFileStatusInputs() {
  const text = currentFileStatusText();
  els.syncCode.value = text;
  els.homeSyncCode.value = text;
  if (els.editorFileStatus) els.editorFileStatus.textContent = text;
  if (els.homeFileStatus) els.homeFileStatus.textContent = text;
  if (els.studioFileStatus) {
    els.studioFileStatus.textContent = text;
    els.studioFileStatus.title = text;
  }
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

function savedAtTime(value) {
  if (!value) return 0;
  const date = new Date(value);
  return Number.isNaN(date.getTime()) ? 0 : date.getTime();
}

function setVersionMessage(text, isError = false) {
  [els.homeVersionMessage, els.layoutMessage].forEach((element) => {
    if (!element) return;
    element.textContent = text;
    element.classList.toggle("error", isError);
  });
}

function setFolderStatus(text, isError = false) {
  if (!els.homeFolderStatus) return;
  els.homeFolderStatus.textContent = text;
  els.homeFolderStatus.classList.toggle("error", isError);
}

function setNativePickerControlsDisabled(disabled) {
  [
    els.homeChooseFolder,
    els.homeEnterStudio,
    els.homeNewStudio,
    els.homeSaveLayout,
    els.homeLoadCloudLayouts,
    els.loadCloudLayouts,
    els.saveLayout,
  ].forEach((button) => {
    if (button) button.disabled = disabled;
  });
}

function nativePickerBusyMessage(actionName) {
  return `已有檔案或資料夾選擇視窗開啟，請先完成或關閉它，再${actionName}。`;
}

function isNativePickerBusyError(error) {
  return error?.name === "InvalidStateError" || String(error?.message || "").includes("File picker already active");
}

async function runNativePicker(actionName, picker, reportBusy = setVersionMessage) {
  if (nativePickerInProgress) {
    reportBusy(nativePickerBusyMessage(actionName), true);
    return { cancelled: true };
  }
  nativePickerInProgress = true;
  setNativePickerControlsDisabled(true);
  try {
    return { value: await picker() };
  } catch (error) {
    if (isNativePickerBusyError(error)) {
      reportBusy(nativePickerBusyMessage(actionName), true);
      return { cancelled: true };
    }
    throw error;
  } finally {
    nativePickerInProgress = false;
    setNativePickerControlsDisabled(false);
  }
}

function loadGoogleDriveScript() {
  if (window.google?.accounts?.oauth2) return Promise.resolve();
  if (!googleDriveScriptPromise) {
    googleDriveScriptPromise = new Promise((resolve, reject) => {
      const existing = document.querySelector(`script[src="${GOOGLE_DRIVE_DISCOVERY_SRC}"]`);
      if (existing) {
        existing.addEventListener("load", resolve, { once: true });
        existing.addEventListener("error", reject, { once: true });
        return;
      }
      const script = document.createElement("script");
      script.src = GOOGLE_DRIVE_DISCOVERY_SRC;
      script.async = true;
      script.defer = true;
      script.onload = resolve;
      script.onerror = () => reject(new Error("Google Drive 登入元件載入失敗。"));
      document.head.appendChild(script);
    });
  }
  return googleDriveScriptPromise;
}

function googleDriveErrorMessage(error) {
  const text = String(error?.message || error?.error || "");
  if (text.includes("popup")) return "Google Drive 登入視窗被瀏覽器阻擋，請允許彈出視窗後再試。";
  if (text.includes("origin") || text.includes("unauthorized")) return "目前網址尚未加入 Google OAuth 授權來源，請改用正式網址或更新 OAuth 設定。";
  return text || "Google Drive 操作失敗。";
}

async function requestGoogleDriveToken() {
  if (googleDriveAccessToken) return googleDriveAccessToken;
  await loadGoogleDriveScript();
  return new Promise((resolve, reject) => {
    googleDriveTokenClient = window.google.accounts.oauth2.initTokenClient({
      client_id: GOOGLE_DRIVE_CLIENT_ID,
      scope: GOOGLE_DRIVE_SCOPE,
      callback: (response) => {
        if (response?.error) {
          reject(new Error(response.error));
          return;
        }
        googleDriveAccessToken = response?.access_token || "";
        if (!googleDriveAccessToken) {
          reject(new Error("沒有取得 Google Drive 授權。"));
          return;
        }
        resolve(googleDriveAccessToken);
      },
      error_callback: (error) => reject(error),
    });
    googleDriveTokenClient.requestAccessToken({ prompt: googleDriveAccessToken ? "" : "consent" });
  });
}

function extractDriveFileId(value) {
  const text = String(value || "").trim();
  if (!text) return "";
  const match = text.match(/\/file\/d\/([^/]+)/) || text.match(/[?&]id=([^&]+)/);
  return decodeURIComponent(match?.[1] || text).replace(/[^a-zA-Z0-9_-]/g, "");
}

async function driveFetch(url, options = {}) {
  const token = await requestGoogleDriveToken();
  const response = await fetch(url, {
    ...options,
    headers: {
      ...(options.headers || {}),
      Authorization: `Bearer ${token}`,
    },
  });
  if (response.status === 401) {
    googleDriveAccessToken = "";
    const retryToken = await requestGoogleDriveToken();
    const retry = await fetch(url, {
      ...options,
      headers: {
        ...(options.headers || {}),
        Authorization: `Bearer ${retryToken}`,
      },
    });
    if (retry.ok) return retry;
    const retryDetail = await retry.text().catch(() => "");
    throw new Error(retryDetail || `Google Drive 回應錯誤：${retry.status}`);
  }
  if (!response.ok) {
    const detail = await response.text().catch(() => "");
    throw new Error(detail || `Google Drive 回應錯誤：${response.status}`);
  }
  return response;
}

async function getDriveFileMetadata(fileId) {
  const fields = "id,name,mimeType,modifiedTime,version,webViewLink";
  const params = new URLSearchParams({ fields, supportsAllDrives: "true" });
  const response = await driveFetch(`${GOOGLE_DRIVE_FILE_URL}/${fileId}?${params}`);
  return response.json();
}

function escapeDriveQueryText(value) {
  return String(value || "").replace(/\\/g, "\\\\").replace(/'/g, "\\'");
}

async function listDriveStudioFiles(folderId = "root", searchText = "") {
  const clauses = [
    "trashed = false",
    "(mimeType = 'application/json' or name contains '.json')",
    `'${escapeDriveQueryText(folderId || "root")}' in parents`,
  ];
  const search = escapeDriveQueryText(searchText.trim());
  if (search) clauses.push(`name contains '${search}'`);
  const params = new URLSearchParams({
    pageSize: "100",
    orderBy: "modifiedTime desc",
    fields: "nextPageToken,files(id,name,mimeType,modifiedTime,webViewLink)",
    includeItemsFromAllDrives: "true",
    supportsAllDrives: "true",
    q: clauses.join(" and "),
  });
  const files = [];
  do {
    const response = await driveFetch(`${GOOGLE_DRIVE_FILE_URL}?${params}`);
    const data = await response.json();
    files.push(...(Array.isArray(data.files) ? data.files : []));
    if (!data.nextPageToken) break;
    params.set("pageToken", data.nextPageToken);
  } while (true);
  return files;
}

async function driveLayoutFromFileMeta(file) {
  const { metadata, payload, state } = await readDriveStudioFile(file.id);
  return {
    name: metadata.name || file.name || "未命名播放台",
    fileName: metadata.name || file.name || "",
    savedAt: payload.savedAt || metadata.modifiedTime || file.modifiedTime || "",
    modifiedTime: metadata.modifiedTime || file.modifiedTime || "",
    state,
    driveFileId: metadata.id || file.id,
    driveMeta: metadata,
    source: "drive",
  };
}

async function scanDriveStudioFolder({ silent = false } = {}) {
  try {
    setFolderStatus(`正在讀取 Google Drive「${GOOGLE_DRIVE_STUDIO_FOLDER_NAME}」...`);
    const files = await listDriveStudioFiles(GOOGLE_DRIVE_STUDIO_FOLDER_ID);
    const layouts = [];
    for (const file of files) {
      try {
        layouts.push(await driveLayoutFromFileMeta(file));
      } catch {
        // Ignore JSON files that are not playback files.
      }
    }
    layouts.sort((a, b) => String(b.modifiedTime || b.savedAt || "").localeCompare(String(a.modifiedTime || a.savedAt || "")));
    folderLayoutFiles = layouts;
    setFolderStatus(`已連結 Google Drive「${GOOGLE_DRIVE_STUDIO_FOLDER_NAME}」｜${layouts.length} 個播放台檔案`);
    renderHomeVersions();
    if (!silent) setVersionMessage(`已更新 Drive 預覽：${layouts.length} 個檔案。`);
  } catch (error) {
    folderLayoutFiles = [];
    setFolderStatus(`讀取 Google Drive 資料夾失敗：${googleDriveErrorMessage(error)}`, true);
    renderHomeVersions();
  }
}

async function readDriveStudioFile(fileId) {
  const [metadata, contentResponse] = await Promise.all([
    getDriveFileMetadata(fileId),
    driveFetch(`${GOOGLE_DRIVE_FILE_URL}/${fileId}?${new URLSearchParams({ alt: "media", supportsAllDrives: "true" })}`),
  ]);
  const payload = JSON.parse(await contentResponse.text());
  const state = normalizeStudioFilePayload(payload);
  if (!state) throw new Error("Drive 檔案內容不是可用的播放台 JSON。");
  return { metadata, payload, state };
}

function driveMultipartBody(metadata, payload) {
  const boundary = `classroom_studio_${Date.now()}`;
  const body = [
    `--${boundary}`,
    "Content-Type: application/json; charset=UTF-8",
    "",
    JSON.stringify(metadata),
    `--${boundary}`,
    "Content-Type: application/json; charset=UTF-8",
    "",
    JSON.stringify(payload, null, 2),
    `--${boundary}--`,
    "",
  ].join("\r\n");
  return { boundary, body };
}

async function createDriveStudioFile(payload, name) {
  const { boundary, body } = driveMultipartBody({
    name: sanitizeFileName(name),
    mimeType: "application/json",
    parents: [GOOGLE_DRIVE_STUDIO_FOLDER_ID],
  }, payload);
  const response = await driveFetch(`${GOOGLE_DRIVE_UPLOAD_URL}?uploadType=multipart&supportsAllDrives=true&fields=id,name,modifiedTime,version,webViewLink`, {
    method: "POST",
    headers: { "Content-Type": `multipart/related; boundary=${boundary}` },
    body,
  });
  return response.json();
}

async function updateDriveStudioFile(fileId, payload, name = currentFileName) {
  const { boundary, body } = driveMultipartBody({
    name: sanitizeFileName(name),
    mimeType: "application/json",
  }, payload);
  const response = await driveFetch(`${GOOGLE_DRIVE_UPLOAD_URL}/${fileId}?uploadType=multipart&supportsAllDrives=true&fields=id,name,modifiedTime,version,webViewLink`, {
    method: "PATCH",
    headers: { "Content-Type": `multipart/related; boundary=${boundary}` },
    body,
  });
  return response.json();
}

async function renameDriveStudioFile(fileId, name) {
  const response = await driveFetch(`${GOOGLE_DRIVE_FILE_URL}/${fileId}?supportsAllDrives=true&fields=id,name,modifiedTime,version,webViewLink`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json; charset=UTF-8" },
    body: JSON.stringify({ name }),
  });
  return response.json();
}

function folderLayoutName(layout) {
  return sanitizeFileName(layout.fileName || layout.name || "");
}

function openPlaybackDirectoryDb() {
  return new Promise((resolve, reject) => {
    const request = window.indexedDB.open(PLAYBACK_DIRECTORY_DB_NAME, 1);
    request.onupgradeneeded = () => {
      request.result.createObjectStore(PLAYBACK_DIRECTORY_STORE_NAME);
    };
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error || new Error("無法開啟播放台資料夾記錄。"));
  });
}

async function readPlaybackDirectoryHandle() {
  if (!directoryAccessSupported()) return null;
  const db = await openPlaybackDirectoryDb();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(PLAYBACK_DIRECTORY_STORE_NAME, "readonly");
    const request = tx.objectStore(PLAYBACK_DIRECTORY_STORE_NAME).get(PLAYBACK_DIRECTORY_HANDLE_KEY);
    request.onsuccess = () => resolve(request.result || null);
    request.onerror = () => reject(request.error || new Error("無法讀取播放台資料夾記錄。"));
    tx.oncomplete = () => db.close();
  });
}

async function writePlaybackDirectoryHandle(handle) {
  const db = await openPlaybackDirectoryDb();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(PLAYBACK_DIRECTORY_STORE_NAME, "readwrite");
    tx.objectStore(PLAYBACK_DIRECTORY_STORE_NAME).put(handle, PLAYBACK_DIRECTORY_HANDLE_KEY);
    tx.oncomplete = () => {
      db.close();
      resolve();
    };
    tx.onerror = () => {
      db.close();
      reject(tx.error || new Error("無法保存播放台資料夾授權。"));
    };
  });
}

async function clearPlaybackDirectoryHandle() {
  if (!directoryAccessSupported()) return;
  playbackDirectoryHandle = null;
  try {
    const db = await openPlaybackDirectoryDb();
    await new Promise((resolve, reject) => {
      const tx = db.transaction(PLAYBACK_DIRECTORY_STORE_NAME, "readwrite");
      tx.objectStore(PLAYBACK_DIRECTORY_STORE_NAME).delete(PLAYBACK_DIRECTORY_HANDLE_KEY);
      tx.oncomplete = () => {
        db.close();
        resolve();
      };
      tx.onerror = () => {
        db.close();
        reject(tx.error || new Error("無法清除播放台資料夾授權。"));
      };
    });
  } catch {
    // If IndexedDB cleanup fails, still drop the in-memory handle for this session.
  }
}

async function hasHandlePermission(handle, { request = false, mode = "readwrite" } = {}) {
  if (!handle) return false;
  const options = { mode };
  if (typeof handle.queryPermission === "function") {
    const permission = await handle.queryPermission(options);
    if (permission === "granted") return true;
    if (!request) return false;
  }
  if (request && typeof handle.requestPermission === "function") {
    return (await handle.requestPermission(options)) === "granted";
  }
  return false;
}

async function layoutFromFileHandle(handle) {
  const file = await handle.getFile();
  return layoutFromFile(file, handle);
}

async function layoutFromFile(file, handle = null) {
  if (!file.name.toLowerCase().endsWith(".json")) return null;
  const payload = JSON.parse(await file.text());
  const state = normalizeStudioFilePayload(payload);
  if (!state) return null;
  const modifiedTime = file.lastModified ? new Date(file.lastModified).toISOString() : "";
  return {
    name: file.name,
    fileName: file.name,
    savedAt: payload.savedAt || modifiedTime,
    state,
    handle,
    file: handle ? null : file,
    modifiedTime,
  };
}

async function scanPlaybackFolder({ silent = false } = {}) {
  if (!directoryAccessSupported()) {
    if (folderLayoutFiles.length) {
      setFolderStatus(`已用預覽模式載入本機播放台資料夾｜${folderLayoutFiles.length} 個播放台檔案；若資料夾有更新，請重新選擇資料夾。`);
    } else {
      setFolderStatus("這個瀏覽器不支援自動連結本機資料夾；請按「選擇資料夾」用預覽模式載入 JSON。", false);
    }
    renderHomeVersions();
    return;
  }
  if (!playbackDirectoryHandle) {
    playbackDirectoryHandle = await readPlaybackDirectoryHandle();
  }
  if (!playbackDirectoryHandle) {
    folderLayoutFiles = [];
    setFolderStatus("尚未選擇播放台資料夾");
    renderHomeVersions();
    return;
  }
  if (!(await hasHandlePermission(playbackDirectoryHandle, { mode: "read" }))) {
    await clearPlaybackDirectoryHandle();
    folderLayoutFiles = [];
    setFolderStatus("播放台資料夾權限已失效，請按「選擇資料夾」重新連結。", true);
    renderHomeVersions();
    return;
  }

  const layouts = [];
  try {
    for await (const entry of playbackDirectoryHandle.values()) {
      if (entry.kind !== "file" || !entry.name.toLowerCase().endsWith(".json")) continue;
      try {
        const layout = await layoutFromFileHandle(entry);
        if (layout) layouts.push(layout);
      } catch {
        // Ignore JSON files that are not playback files.
      }
    }
  } catch (error) {
    folderLayoutFiles = [];
    setFolderStatus(`讀取資料夾失敗：${error.message || "請重新選擇資料夾。"}`, true);
    renderHomeVersions();
    return;
  }

  layouts.sort((a, b) => String(b.modifiedTime || b.savedAt || "").localeCompare(String(a.modifiedTime || a.savedAt || "")));
  folderLayoutFiles = layouts;
  setFolderStatus(`已連結本機播放台資料夾｜${layouts.length} 個播放台檔案`);
  renderHomeVersions();
  if (!silent) setVersionMessage(`已重新整理播放台預覽：${layouts.length} 個檔案。`);
}

async function importPlaybackFolderFiles(fileList) {
  const files = Array.from(fileList || []).filter((file) => file.name.toLowerCase().endsWith(".json"));
  if (!files.length) {
    folderLayoutFiles = [];
    setFolderStatus("選取的資料夾裡沒有可用的播放台 JSON 檔。", true);
    renderHomeVersions();
    return;
  }

  const layouts = [];
  for (const file of files) {
    try {
      const layout = await layoutFromFile(file);
      if (layout) layouts.push(layout);
    } catch {
      // Ignore JSON files that are not playback files.
    }
  }
  layouts.sort((a, b) => String(b.modifiedTime || b.savedAt || "").localeCompare(String(a.modifiedTime || a.savedAt || "")));
  folderLayoutFiles = layouts;
  setFolderStatus(`已用預覽模式載入本機播放台資料夾｜${layouts.length} 個播放台檔案；這個瀏覽器不支援自動寫回資料夾。`);
  renderHomeVersions();
  setVersionMessage(`已載入播放台預覽：${layouts.length} 個檔案。`);
}

async function choosePlaybackFolder() {
  if (!directoryAccessSupported()) {
    if (directoryFileInputSupported()) {
      els.homeFolderImport.value = "";
      setFolderStatus("請在選擇視窗中選取播放台資料夾；這裡會用預覽模式讀取 JSON。");
      els.homeFolderImport.click();
      return;
    }
    setFolderStatus("這個瀏覽器不支援選擇本機資料夾；請改用 Chrome / Edge。", true);
    return;
  }
  try {
    setFolderStatus("正在選擇播放台資料夾...");
    const picked = await runNativePicker("選擇播放台資料夾", () => window.showDirectoryPicker({ mode: "read" }), setFolderStatus);
    const handle = picked.value;
    if (!handle) return;
    setFolderStatus("正在讀取播放台資料夾...");
    if (!(await hasHandlePermission(handle, { request: true, mode: "read" }))) {
      setFolderStatus("沒有取得本機播放台資料夾讀取權限。", true);
      return;
    }
    playbackDirectoryHandle = handle;
    await writePlaybackDirectoryHandle(handle);
    await scanPlaybackFolder();
  } catch (error) {
    if (error?.name !== "AbortError") {
      setFolderStatus(`選擇資料夾失敗：${error.message || "請再試一次。"}`, true);
    }
  }
}

async function restorePlaybackFolder() {
  folderLayoutFiles = [];
  if (!directoryAccessSupported()) {
    setFolderStatus("尚未選擇播放台資料夾；這個瀏覽器會用預覽模式讀取 JSON，無法自動寫回資料夾。");
    renderHomeVersions();
    return;
  }
  playbackDirectoryHandle = await readPlaybackDirectoryHandle();
  if (!playbackDirectoryHandle) {
    setFolderStatus("尚未選擇播放台資料夾");
    renderHomeVersions();
    return;
  }
  await scanPlaybackFolder({ silent: true });
}

function savedLayoutEntries() {
  return Object.values(readSavedLayouts()).sort((a, b) => String(b.savedAt || "").localeCompare(String(a.savedAt || "")));
}

function layoutPages(layout) {
  return normalizePages(layout?.state?.pages || []);
}

function layoutWidgets(layout) {
  const state = layout?.state || {};
  const dynamic = Array.isArray(state.dynamicWidgets) ? state.dynamicWidgets : [];
  const fixed = [];
  if (state.showTimer) fixed.push({ type: "timer", position: state.widgets?.timer });
  if (state.showClock) fixed.push({ type: "clock", position: state.widgets?.clock });
  if (state.showGroups) fixed.push({ type: "groups", position: state.widgets?.groups });
  if (state.showTextBox) fixed.push({ type: "text", position: state.widgets?.text });
  if (state.showImage) fixed.push({ type: "image", position: state.widgets?.image });
  if (state.showYoutube) fixed.push({ type: "youtube", position: state.widgets?.youtube });
  return [
    ...fixed,
    ...dynamic.map((widget) => ({
      type: widget.type,
      pageId: widget.pageId || widget.state?.pageId,
      position: widget.position,
    })),
  ];
}

function layoutFeatureTags(layout) {
  const pagesForLayout = layoutPages(layout);
  const widgetTypes = new Set(layoutWidgets(layout).map((widget) => widget.type));
  const tags = [];
  if (layout?.state?.currentSlides || layout?.state?.slidesUrl || widgetTypes.has("slides")) tags.push("Slides");
  if (pagesForLayout.some((page) => page.type === "posts")) tags.push("貼文板");
  if (widgetTypes.has("youtube")) tags.push("YouTube");
  if (widgetTypes.has("qr")) tags.push("QR");
  if (widgetTypes.has("groups")) tags.push("分組");
  if (widgetTypes.has("timer")) tags.push("計時");
  return tags.slice(0, 6);
}

function widgetShortLabel(type) {
  return {
    timer: "T",
    clock: "C",
    groups: "G",
    text: "Aa",
    image: "Img",
    youtube: "YT",
    slides: "S",
    qr: "QR",
  }[type] || "W";
}

function appendLayoutPreview(container, layout) {
  const pagesForLayout = layoutPages(layout);
  const widgetsForLayout = layoutWidgets(layout).slice(0, 10);
  const tabs = createEl("div", "home-preview-tabs");
  pagesForLayout.slice(0, 8).forEach((page) => {
    const tab = createEl("span", `home-preview-tab ${page.type === "posts" ? "posts" : page.type === "dark" ? "dark" : ""}`);
    tab.title = page.name;
    tabs.appendChild(tab);
  });
  const stage = createEl("div", "home-preview-stage");
  widgetsForLayout.forEach((widget, index) => {
    const item = createEl("span", "home-preview-widget", widgetShortLabel(widget.type));
    const position = widget.position || {};
    const left = Number.isFinite(Number(position.left)) ? Math.max(4, Math.min(82, (Number(position.left) / 1180) * 100)) : 8 + (index % 4) * 21;
    const top = Number.isFinite(Number(position.top)) ? Math.max(6, Math.min(74, (Number(position.top) / 760) * 100)) : 12 + Math.floor(index / 4) * 24;
    item.style.left = `${left}%`;
    item.style.top = `${top}%`;
    item.title = widget.type;
    stage.appendChild(item);
  });
  container.append(tabs, stage);
}

function openHomeLayout(layout, { folderFile = false } = {}) {
  if (folderFile && layout.driveFileId) {
    return openDriveStudioFile(layout.driveFileId);
  }
  if (folderFile && layout.handle) {
    return layout.handle
      .getFile()
      .then((file) => readStudioFile(file, layout.handle))
      .catch(async (error) => {
        setVersionMessage(`開啟失敗：${error.message || "檔案可能已被移除，請重新整理資料夾。"}`, true);
        await scanPlaybackFolder({ silent: true });
      });
  }
  if (folderFile && layout.file) {
    return readStudioFile(layout.file);
  }
  showStudio();
  return Promise.resolve();
}

function layoutDisplayTime(layout) {
  return savedAtTime(layout?.savedAt) || savedAtTime(layout?.modifiedTime);
}

function sameLayoutName(a, b) {
  return Boolean(a && b && sanitizeFileName(a) === sanitizeFileName(b));
}

function sameLayoutHandle(layout) {
  if (layout?.driveFileId && currentDriveFileId) return layout.driveFileId === currentDriveFileId;
  return Boolean(layout?.handle && currentFileHandle && layout.handle === currentFileHandle);
}

function layoutVersionState(layout, currentLayout) {
  if (!currentLayout?.name || !sameLayoutName(layout?.fileName || layout?.name, currentLayout.name)) return "";
  if (sameLayoutHandle(layout)) return "same";
  const folderTime = layoutDisplayTime(layout);
  const currentTime = layoutDisplayTime(currentLayout);
  if (folderTime && currentTime && folderTime > currentTime) return "newer";
  if (folderTime && currentTime && folderTime < currentTime) return "older";
  return "same-name";
}

function normalizeDriveStudioFileName(value, fallback = preferredFileName()) {
  const name = sanitizeFileName(value || fallback || preferredFileName());
  return /\.json$/i.test(name) ? name : `${name}.json`;
}

async function renameHomeLayout(layout, nextValue) {
  const nextName = normalizeDriveStudioFileName(nextValue, layout.name);
  const oldName = sanitizeFileName(layout.name || "");
  if (!nextName || nextName === oldName) return;
  const fileId = layout.driveFileId || (layout.current ? currentDriveFileId : "");
  if (!fileId) {
    setVersionMessage("目前只有 Google Drive 檔案可以直接在預覽區改檔名。", true);
    renderHomeVersions();
    return;
  }
  try {
    setVersionMessage(`正在將「${oldName || layout.name}」改名為「${nextName}」...`);
    const updated = await renameDriveStudioFile(fileId, nextName);
    const updatedName = sanitizeFileName(updated.name || nextName);
    if (currentDriveFileId === fileId) {
      writeFileMeta({
        name: updatedName,
        driveFileId: updated.id || fileId,
        driveModifiedTime: updated.modifiedTime || currentDriveModifiedTime,
      });
      setFileInputs(updatedName);
      setFileStatusInputs();
    }
    const folderItem = folderLayoutFiles.find((item) => item.driveFileId === fileId);
    if (folderItem) {
      folderItem.name = updatedName;
      folderItem.fileName = updatedName;
      folderItem.modifiedTime = updated.modifiedTime || folderItem.modifiedTime;
      folderItem.driveMeta = { ...(folderItem.driveMeta || {}), ...updated };
    }
    renderHomeVersions();
    setVersionMessage(`已改名為「${updatedName}」。`);
  } catch (error) {
    setVersionMessage(`Drive 改名失敗：${googleDriveErrorMessage(error)}`, true);
    renderHomeVersions();
  }
}

function appendHomeLayoutCard(layout, { current = false, folderFile = false, versionState = "" } = {}) {
  const card = createEl("article", `home-layout-card${folderFile ? " folder-layout-card" : ""}`);
  const sourceLabel = layout.source === "drive" ? "Drive 檔案" : "本機檔案";
  layout.current = current;
  if (versionState) card.dataset.versionState = versionState;
  card.tabIndex = 0;
  card.setAttribute("role", "button");
  card.setAttribute("aria-label", folderFile ? `開啟舊檔案：${layout.name}` : `開啟播放台：${layout.name}`);
  card.addEventListener("click", () => openHomeLayout(layout, { folderFile }));
  card.addEventListener("keydown", (event) => {
    if (event.key !== "Enter" && event.key !== " ") return;
    event.preventDefault();
    openHomeLayout(layout, { folderFile });
  });
  const title = createEl("div", "home-layout-title");
  const titleRow = createEl("div", "home-layout-title-row");
  const nameInput = createEl("input", "home-layout-name-edit");
  const renameButton = createEl("button", "secondary home-layout-rename", "改名");
  nameInput.type = "text";
  nameInput.value = layout.name || "";
  nameInput.setAttribute("aria-label", `檔名：${layout.name || ""}`);
  renameButton.type = "button";
  const canRename = Boolean(layout.driveFileId || (current && currentDriveFileId));
  nameInput.disabled = !canRename;
  renameButton.disabled = !canRename;
  [nameInput, renameButton].forEach((element) => {
    element.addEventListener("click", (event) => event.stopPropagation());
    element.addEventListener("keydown", (event) => event.stopPropagation());
  });
  nameInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      renameHomeLayout(layout, nameInput.value);
    }
  });
  nameInput.addEventListener("change", () => renameHomeLayout(layout, nameInput.value));
  renameButton.addEventListener("click", () => renameHomeLayout(layout, nameInput.value));
  titleRow.append(nameInput, renameButton);
  const savedText = layout.savedAt ? `最近存檔 ${formatSavedAt(layout.savedAt)}` : "尚未存成檔案";
  const badges = createEl("div", "home-layout-badges");
  if (current) title.appendChild(createEl("div", "home-current-label", "正在編輯"));
  if (current) badges.appendChild(createEl("span", "home-layout-badge current", "目前開啟中"));
  if (folderFile) badges.appendChild(createEl("span", "home-layout-badge folder", layout.source === "drive" ? "Drive 資料夾" : "資料夾版本"));
  if (versionState === "newer") badges.appendChild(createEl("span", "home-layout-badge newer", "較新版本"));
  else if (versionState === "older") badges.appendChild(createEl("span", "home-layout-badge muted", "較舊版本"));
  else if (versionState === "same-name") badges.appendChild(createEl("span", "home-layout-badge muted", "同名檔案"));
  else if (versionState === "same") badges.appendChild(createEl("span", "home-layout-badge muted", "同一檔案"));
  title.append(titleRow, createEl("span", "", folderFile ? `${sourceLabel}｜${savedText}` : savedText));
  if (badges.childElementCount > 0) title.appendChild(badges);

  const preview = createEl("div", "home-preview");
  appendLayoutPreview(preview, layout);

  const pagesForLayout = layoutPages(layout);
  const widgetsForLayout = layoutWidgets(layout);
  const meta = createEl("div", "home-layout-meta");
  meta.append(createEl("span", "", `${pagesForLayout.length} 頁`), createEl("span", "", `${widgetsForLayout.length} 個小工具`));
  layoutFeatureTags(layout).forEach((tag) => {
    const span = createEl("span", "", tag);
    if (tag === "Slides") span.dataset.tagType = "slides";
    else if (tag === "貼文板") span.dataset.tagType = "posts";
    meta.appendChild(span);
  });

  const actions = createEl("div", "home-layout-actions");
  if (folderFile) {
    const openFolderFile = createEl("button", "", current ? "回到編輯" : versionState === "newer" ? "開啟較新檔案" : `開啟${layout.source === "drive" ? "Drive" : "資料夾"}檔案`);
    openFolderFile.type = "button";
    openFolderFile.addEventListener("click", (event) => {
      event.stopPropagation();
      if (current) showStudio();
      else openHomeLayout(layout, { folderFile: true });
    });
    actions.appendChild(openFolderFile);
  } else {
    const enter = createEl("button", "", "開啟播放台");
    enter.type = "button";
    enter.addEventListener("click", (event) => {
      event.stopPropagation();
      showStudio();
    });
    const save = createEl("button", "secondary", (currentFileHandle || currentDriveFileId) ? "立即存檔" : "另存檔案");
    save.type = "button";
    save.addEventListener("click", (event) => {
      event.stopPropagation();
      saveCurrentFile();
    });
    actions.append(enter, save);
  }

  if (current) card.dataset.currentLayout = "true";
  card.append(title, preview, meta, actions);
  els.homeLayoutGrid.appendChild(card);
}

function renderHomeVersions() {
  const folderLayouts = [...folderLayoutFiles];
  const visibleCount = folderLayouts.length;
  els.homeLayoutGrid.innerHTML = "";
  els.homeVersionCount.textContent = `${visibleCount} 個播放台檔案`;
  setFileStatusInputs();
  setFileInputs(currentFileName || els.homeLayoutName.value || els.layoutName.value);
  folderLayouts.forEach((folderLayout) => {
    const isCurrentDriveFile = Boolean(currentDriveFileId && folderLayout.driveFileId === currentDriveFileId);
    appendHomeLayoutCard(folderLayout, {
      current: isCurrentDriveFile,
      folderFile: true,
      versionState: isCurrentDriveFile ? "same" : "",
    });
  });
  if (!visibleCount) {
    els.homeLayoutGrid.appendChild(createEl("div", "home-empty", "按「載入 Drive 預覽」後，這裡會出現可開啟的播放台。"));
  }
  if (visibleCount > 0 && /資料夾權限已失效/.test(els.homeVersionMessage?.textContent || "")) {
    setVersionMessage("");
  }
}

function currentLayoutSnapshotFromStorage() {
  return currentFileSnapshotFromStorage();
}

function saveHomeLayout() {
  saveCurrentFileAs();
}

function loadLayoutByName(name) {
  const layout = readSavedLayouts()[name];
  if (!layout?.state) {
    setVersionMessage("找不到這個舊版設定。請改用「開啟檔案」載入 JSON。", true);
    return;
  }
  applyStudioFileState(layout.state, layout.name ? `${layout.name}.json` : "");
}

function deleteLayoutByName(name) {
  const layouts = readSavedLayouts();
  if (name && layouts[name]) {
    delete layouts[name];
    patchStoredState({ savedLayouts: layouts });
  }
  renderSavedLayouts();
  renderHomeVersions();
  setVersionMessage("已移除舊版設定紀錄。");
}

function blankStudioState() {
  const state = readState();
  return {
    savedLayouts: readSavedLayouts(),
    syncCode: "",
    pages: [DEFAULT_PAGE],
    activePageId: DEFAULT_PAGE.id,
    slidesUrl: DEFAULT_SLIDES_URL,
    currentSlides: parseSlidesInput(DEFAULT_SLIDES_URL),
    activeTool: "",
    dockCollapsed: false,
    moreToolsOpen: false,
    hiddenWidgetsOpen: false,
  };
}

function showHome() {
  closeAllWidgetSettings();
  setActiveTool("");
  els.studio.classList.add("hidden");
  els.studioFileStatus.classList.add("hidden");
  els.homeView.classList.remove("hidden");
  document.body.classList.add("home-mode");
  document.body.classList.remove("studio-mode");
  renderHomeVersions();
  if (!folderLayoutFiles.length) setFolderStatus(`按「載入 Drive 預覽」讀取 Google Drive「${GOOGLE_DRIVE_STUDIO_FOLDER_NAME}」。`);
  window.scrollTo({ top: 0, behavior: "instant" });
}

function showStudio() {
  patchStoredState({ activeTool: "", moreToolsOpen: false, hiddenWidgetsOpen: false });
  els.homeView.classList.add("hidden");
  els.studio.classList.remove("hidden");
  els.studioFileStatus.classList.remove("hidden");
  document.body.classList.remove("home-mode");
  document.body.classList.add("studio-mode");
  restore();
}

async function createBlankStudio() {
  const state = blankStudioState();
  const payload = buildStudioFilePayload(state);
  const name = sanitizeFileName(`classroom-studio-${new Date().toISOString().slice(0, 10)}`);

  if (!playbackDirectoryHandle && directoryAccessSupported()) {
    playbackDirectoryHandle = await readPlaybackDirectoryHandle();
  }
  if (playbackDirectoryHandle && directoryAccessSupported()) {
    try {
      if (!(await hasHandlePermission(playbackDirectoryHandle, { request: true }))) {
        await clearPlaybackDirectoryHandle();
        setFolderStatus("播放台資料夾權限已失效，請按「選擇資料夾」重新連結。", true);
        setVersionMessage("已移除失效的資料夾授權；請重新選擇資料夾後再建立新播放台。", true);
        renderHomeVersions();
        return;
      }
      const handle = await createUniquePlaybackFile(name);
      await writePayloadToHandle(handle, payload);
      applyStudioFileState(state, handle.name || name, handle, payload.savedAt);
      await scanPlaybackFolder({ silent: true });
      setVersionMessage(`已建立「${handle.name || name}」，接下來編輯會自動存檔。`);
      return;
    } catch (error) {
      setVersionMessage(`建立檔案失敗：${error.message || "請再試一次。"}`, true);
      return;
    }
  }

  if (!fileSystemAccessSupported()) {
    downloadStudioFile(payload, name);
    applyStudioFileState(state, name, null, payload.savedAt);
    setVersionMessage("已建立並下載新播放台檔案；若要自動存檔，請使用 Chrome / Edge 選擇播放台資料夾。");
    return;
  }

  try {
    const picked = await runNativePicker("建立新播放台檔案", () => window.showSaveFilePicker({
      suggestedName: name,
      types: [
        {
          description: "播放台 JSON 檔",
          accept: { "application/json": [".json"] },
        },
      ],
    }));
    const handle = picked.value;
    if (!handle) return;
    await writePayloadToHandle(handle, payload);
    applyStudioFileState(state, handle.name || name, handle, payload.savedAt);
    setVersionMessage(`已建立「${handle.name || name}」，接下來編輯會自動存檔。`);
  } catch (error) {
    if (error?.name !== "AbortError") setVersionMessage(`建立檔案失敗：${error.message || "請再試一次。"}`, true);
  }
}

function initHomeMode() {
  const meta = readFileMeta();
  currentFileName = meta.name || "";
  currentFileSavedAt = meta.savedAt || "";
  currentFileAutoSave = Boolean(meta.autoSave);
  currentDriveFileId = meta.driveFileId || "";
  currentDriveModifiedTime = meta.driveModifiedTime || "";
  els.homeView.classList.remove("hidden");
  els.studio.classList.add("hidden");
  els.studioFileStatus.classList.add("hidden");
  document.body.classList.add("home-mode");
  document.body.classList.remove("studio-mode");
  renderSavedLayouts();
  renderHomeVersions();
  setFolderStatus(`按「載入 Drive 預覽」讀取 Google Drive「${GOOGLE_DRIVE_STUDIO_FOLDER_NAME}」。`);
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
      normalizedPage.bgOpacity = typeof page?.bgOpacity === "number" ? page.bgOpacity : 60;
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

function isPermissionError(error) {
  const code = String(error?.code || "").toLowerCase();
  const message = String(error?.message || "").toLowerCase();
  return code.includes("permission-denied") || message.includes("missing or insufficient permissions");
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
      description: String(section?.description || "").trim(),
    }))
    .filter((section) => section.id && section.name)
    .slice(0, 12);
  return normalized;
}

function renderPages() {
  els.pageSelect.innerHTML = "";
  els.pageTabs.innerHTML = "";
  pages.forEach((page, i) => {
    const option = document.createElement("option");
    option.value = page.id;
    option.textContent = page.name;
    els.pageSelect.appendChild(option);

    const tab = document.createElement("button");
    tab.type = "button";
    tab.className = "page-tab";
    tab.dataset.pageType = page.type || "slides";
    const idx = String(i + 1).padStart(2, "0");
    tab.innerHTML = `<span class="page-tab-dot" data-page-type="${page.type || 'slides'}" aria-hidden="true"></span><span class="page-tab-idx">${idx}</span><span class="page-tab-name"></span>`;
    tab.querySelector(".page-tab-name").textContent = page.name;
    tab.classList.toggle("active", page.id === activePage().id);
    tab.setAttribute("aria-current", page.id === activePage().id ? "page" : "false");
    tab.addEventListener("click", () => switchPage(page.id));
    els.pageTabs.appendChild(tab);
  });
  els.pageSelect.value = activePage().id;
  els.pageName.value = activePage().name;
  els.deletePage.disabled = activePage().id === DEFAULT_PAGE.id;
  const curPage = activePage();
  els.pageTitleColor.value = curPage.titleColor || "#1a2330";
  els.pageBgColor.value = curPage.bgColor || "#080a0e";
  els.pageBgImageFile.value = "";
  const hasImg = Boolean(curPage.bgImage);
  els.pageBgOpacityRow.classList.toggle("hidden", !hasImg);
  const opacityVal = curPage.bgOpacity ?? 60;
  els.pageBgOpacity.value = opacityVal;
  els.pageBgOpacityValue.textContent = opacityVal;
  els.pageBgStatus.textContent = curPage.bgImage ? "已設定背景圖片。" : curPage.bgColor ? `背景顏色：${curPage.bgColor}` : "";
  updateSwatchActive(curPage.bgColor || "");
  updatePostBoardControls();
}

function updateDynamicWidgetVisibility() {
  dynamicWidgets.forEach((widget) => {
    widget.element.classList.toggle("page-hidden", widget.pageId !== activePage().id || Boolean(widget.state.hidden));
  });
  pruneWidgetSelection();
  renderHiddenWidgetsList();
}

function widgetTypeLabel(type) {
  return {
    timer: "計時器",
    clock: "現在時間",
    groups: "學員分組",
    text: "文字框",
    image: "圖片",
    youtube: "YouTube",
    slides: "簡報",
    qr: "QR Code",
  }[type] || "小工具";
}

function widgetListLabel(widget) {
  const page = pages.find((item) => item.id === widget.pageId);
  const title = String(widget.state.title || widgetTypeLabel(widget.type)).trim();
  return `${title || widgetTypeLabel(widget.type)}${page ? ` · ${page.name}` : ""}`;
}

function setHiddenWidgetsOpen(isOpen) {
  hiddenWidgetsOpen = isOpen;
  if (hiddenWidgetsOpen && moreToolsOpen) setMoreToolsOpen(false);
  els.hiddenWidgetPopover.classList.toggle("hidden", !hiddenWidgetsOpen);
  els.hiddenWidgetsButton.classList.toggle("active", hiddenWidgetsOpen);
  els.hiddenWidgetsButton.setAttribute("aria-expanded", String(hiddenWidgetsOpen));
  renderHiddenWidgetsList();
  writeState();
}

function setDynamicWidgetHidden(widget, hidden) {
  widget.state.hidden = hidden;
  if (hidden) {
    widget.state.settingsOpen = false;
    if (!dynamicWidgets.some((item) => item.id !== widget.id && item.state.settingsOpen)) {
      els.settingsBackdrop.classList.add("hidden");
    }
  }
  renderDynamicWidget(widget);
  updateDynamicWidgetVisibility();
  writeState();
}

function setAllDynamicWidgetsHidden(hidden) {
  dynamicWidgets.forEach((widget) => {
    widget.state.hidden = hidden;
    if (hidden) widget.state.settingsOpen = false;
    renderDynamicWidget(widget);
  });
  if (hidden) els.settingsBackdrop.classList.add("hidden");
  updateDynamicWidgetVisibility();
  writeState();
}

function renderHiddenWidgetsList() {
  if (!els.hiddenWidgetList) return;
  els.hiddenWidgetList.innerHTML = "";
  els.showAllCreatedWidgets.disabled = dynamicWidgets.length === 0 || dynamicWidgets.every((widget) => !widget.state.hidden);
  els.hideAllCreatedWidgets.disabled = dynamicWidgets.length === 0 || dynamicWidgets.every((widget) => widget.state.hidden);
  if (dynamicWidgets.length === 0) {
    els.hiddenWidgetList.appendChild(createEl("div", "hidden-widget-empty", "尚未建立小工具"));
    return;
  }
  dynamicWidgets.forEach((widget) => {
    const row = createEl("div", "hidden-widget-row");
    const meta = createEl("div", "hidden-widget-meta");
    meta.append(createEl("strong", "", widgetListLabel(widget)), createEl("span", "", widget.state.hidden ? "已隱藏" : "顯示中"));
    const toggle = createEl("button", widget.state.hidden ? "" : "secondary", widget.state.hidden ? "顯示" : "隱藏");
    toggle.type = "button";
    toggle.addEventListener("click", () => setDynamicWidgetHidden(widget, !widget.state.hidden));
    row.append(meta, toggle);
    els.hiddenWidgetList.appendChild(row);
  });
}

function hexToRgb(value) {
  const normalized = String(value || "").trim().replace(/^#/, "");
  if (!/^[\da-f]{3}$|^[\da-f]{6}$/i.test(normalized)) return null;
  const hex = normalized.length === 3
    ? normalized.split("").map((ch) => ch + ch).join("")
    : normalized;
  return {
    r: parseInt(hex.slice(0, 2), 16),
    g: parseInt(hex.slice(2, 4), 16),
    b: parseInt(hex.slice(4, 6), 16),
  };
}

function rgbLuminance({ r, g, b }) {
  const channel = (value) => {
    const normalized = value / 255;
    return normalized <= 0.03928
      ? normalized / 12.92
      : ((normalized + 0.055) / 1.055) ** 2.4;
  };
  return 0.2126 * channel(r) + 0.7152 * channel(g) + 0.0722 * channel(b);
}

function pageBaseLuminance(page) {
  const explicit = hexToRgb(page.bgColor);
  if (explicit) return rgbLuminance(explicit);
  if (page.type === "posts" || page.type === "dark") return 0.02;
  return 0.08;
}

function estimateImageLuminance(dataUrl) {
  if (!dataUrl || pageImageLuminanceCache.has(dataUrl)) {
    return Promise.resolve(pageImageLuminanceCache.get(dataUrl));
  }
  return new Promise((resolve) => {
    const image = new Image();
    image.onload = () => {
      try {
        const canvas = document.createElement("canvas");
        const size = 24;
        canvas.width = size;
        canvas.height = size;
        const context = canvas.getContext("2d", { willReadFrequently: true });
        context.drawImage(image, 0, 0, size, size);
        const { data } = context.getImageData(0, 0, size, size);
        let total = 0;
        let count = 0;
        for (let i = 0; i < data.length; i += 4) {
          const alpha = data[i + 3] / 255;
          if (alpha <= 0.05) continue;
          total += rgbLuminance({ r: data[i], g: data[i + 1], b: data[i + 2] }) * alpha;
          count += alpha;
        }
        const luminance = count ? total / count : undefined;
        pageImageLuminanceCache.set(dataUrl, luminance);
        resolve(luminance);
      } catch {
        pageImageLuminanceCache.set(dataUrl, undefined);
        resolve(undefined);
      }
    };
    image.onerror = () => {
      pageImageLuminanceCache.set(dataUrl, undefined);
      resolve(undefined);
    };
    image.src = dataUrl;
  });
}

function pageTextPalette(page, imageLuminance = pageImageLuminanceCache.get(page.bgImage)) {
  const opacity = Math.max(0, Math.min(1, Number(page.bgOpacity ?? 60) / 100));
  const base = pageBaseLuminance(page);
  const luminance = page.bgImage && typeof imageLuminance === "number"
    ? imageLuminance * opacity + base * (1 - opacity)
    : base;
  const useDarkText = luminance > 0.48;
  return {
    text: useDarkText ? PAGE_TEXT_DARK : PAGE_TEXT_LIGHT,
    title: page.titleColor || (useDarkText ? PAGE_TEXT_DARK : PAGE_TEXT_LIGHT),
    muted: useDarkText ? "rgba(17, 24, 32, 0.74)" : "rgba(248, 250, 252, 0.78)",
    kicker: useDarkText ? "rgba(17, 24, 32, 0.66)" : "rgba(248, 250, 252, 0.68)",
    isLight: useDarkText,
  };
}

function applyPageTextPalette(page, imageLuminance) {
  const palette = pageTextPalette(page, imageLuminance);
  els.stage.style.setProperty("--page-text", palette.text);
  els.stage.style.setProperty("--page-title-text", palette.title);
  els.stage.style.setProperty("--page-muted-text", palette.muted);
  els.stage.style.setProperty("--page-kicker-text", palette.kicker);
  els.stage.classList.toggle("page-bg-light", palette.isLight);
  els.stage.classList.toggle("page-bg-dark", !palette.isLight);
  els.postBoardTitle.style.color = palette.title;
  return palette;
}

function applyPageBackground(page) {
  let bgLayer = els.stage.querySelector(".stage-bg-layer");
  if (!bgLayer) {
    bgLayer = document.createElement("div");
    bgLayer.className = "stage-bg-layer";
    els.stage.insertBefore(bgLayer, els.stage.firstChild);
  }
  if (page.bgImage) {
    bgLayer.style.backgroundImage = `url("${page.bgImage}")`;
    bgLayer.style.opacity = ((page.bgOpacity ?? 60) / 100).toFixed(2);
    bgLayer.style.display = "";
    els.stage.style.background = "";
  } else {
    bgLayer.style.backgroundImage = "";
    bgLayer.style.display = "none";
    els.stage.style.background = page.bgColor || "";
  }
  applyPageTextPalette(page);
  if (page.bgImage) {
    estimateImageLuminance(page.bgImage).then((luminance) => {
      if (activePage().id === page.id) applyPageTextPalette(activePage(), luminance);
    });
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
  if (isOpen && hiddenWidgetsOpen) setHiddenWidgetsOpen(false);
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
  topWidgetZ = Math.max(topWidgetZ, 60) + 1;
  widget.style.zIndex = String(topWidgetZ);
}

function placeDynamicSettings(instance) {
  if (!instance.state.settingsOpen) return;
  const rect = instance.element.getBoundingClientRect();
  const width = Math.min(320, Math.max(220, window.innerWidth - 32));
  const left = Math.min(Math.max(16, rect.right - width), Math.max(16, window.innerWidth - width - 16));
  const top = Math.min(Math.max(16, rect.top + 48), Math.max(16, window.innerHeight - 220));
  instance.settings.style.position = "fixed";
  instance.settings.style.width = `${width}px`;
  instance.settings.style.left = `${left}px`;
  instance.settings.style.right = "auto";
  instance.settings.style.top = `${top}px`;
}

function addDarkPage() {
  const whiteboardCount = pages.filter((page) => page.type === "dark").length + 1;
  const name = els.pageName.value.trim() || (whiteboardCount === 1 ? "白板" : `白板 ${whiteboardCount}`);
  const page = { id: makePageId(), name, type: "dark", bgColor: "#ffffff" };
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

function normalizeStudioFilePayload(payload) {
  if (!payload || typeof payload !== "object") return null;
  if (payload.type === STUDIO_FILE_TYPE && payload.state && typeof payload.state === "object") return payload.state;
  if (payload.type === LEGACY_LAYOUTS_FILE_TYPE || payload.layouts) {
    const imported = normalizeImportedLayouts(payload);
    const latest = Object.values(imported).sort((a, b) => String(b.savedAt || "").localeCompare(String(a.savedAt || "")))[0];
    return latest?.state || null;
  }
  if (payload.state && typeof payload.state === "object") return payload.state;
  if (payload.pages || payload.dynamicWidgets || payload.currentSlides || payload.slidesUrl) return payload;
  return null;
}

function applyStudioFileState(state, name = "", handle = null, savedAt = "", driveMeta = null) {
  if (!state || typeof state !== "object") {
    setVersionMessage("檔案內容不是可用的播放台設定。", true);
    return;
  }
  clearTimeout(fileSaveTimerId);
  suppressFileAutoSave = true;
  try {
    currentFileHandle = driveMeta ? null : handle;
    const nextName = sanitizeFileName(name || currentFileName || preferredFileName());
    const nextSavedAt = savedAt || new Date().toISOString();
    writeFileMeta({
      name: nextName,
      savedAt: nextSavedAt,
      autoSave: Boolean(handle || driveMeta?.id),
      driveFileId: driveMeta?.id || "",
      driveModifiedTime: driveMeta?.modifiedTime || "",
    });
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify({ ...state, activeTool: "", moreToolsOpen: false, hiddenWidgetsOpen: false }));
    setFileInputs(nextName);
    setFileStatusInputs();
    showStudio();
    if (driveMeta?.id) {
      setVersionMessage(`已從 Google Drive 開啟「${nextName}」，之後編輯會自動存檔。`);
    } else if (handle) {
      setVersionMessage(`已開啟「${nextName}」，之後編輯會自動存檔。`);
    } else {
      setVersionMessage(`已匯入「${nextName}」。若要自動存檔，請按「另存檔案」。`);
    }
  } finally {
    suppressFileAutoSave = false;
  }
}

async function readStudioFile(file, handle = null) {
  if (!file) return;
  try {
    const payload = JSON.parse(await file.text());
    const state = normalizeStudioFilePayload(payload);
    if (!state) throw new Error("invalid");
    applyStudioFileState(state, file.name || currentFileName, handle, payload.savedAt || "");
  } catch {
    setVersionMessage("開啟失敗，請確認選到的是播放台 JSON 檔。", true);
  }
}

async function openDriveStudioFile(fileIdInput = "") {
  const raw = fileIdInput || window.prompt("貼上 Google Drive 播放台 JSON 檔案連結或檔案 ID");
  const fileId = extractDriveFileId(raw);
  if (!fileId) return;
  try {
    setVersionMessage("正在從 Google Drive 開啟播放台...");
    const { metadata, payload, state } = await readDriveStudioFile(fileId);
    applyStudioFileState(state, metadata.name || currentFileName, null, payload.savedAt || metadata.modifiedTime || "", metadata);
  } catch (error) {
    setVersionMessage(`Drive 開啟失敗：${googleDriveErrorMessage(error)}`, true);
  }
}

async function openDriveStudioFilePicker() {
  await scanDriveStudioFolder();
}

async function createDriveBlankStudio() {
  const rawName = window.prompt("新的 Google Drive 播放台檔名", preferredFileName());
  if (rawName === null) return;
  const state = blankStudioState();
  const payload = buildStudioFilePayload(state);
  try {
    setVersionMessage("正在 Google Drive 建立播放台...");
    const metadata = await createDriveStudioFile(payload, sanitizeFileName(rawName || preferredFileName()));
    applyStudioFileState(state, metadata.name || rawName, null, payload.savedAt || metadata.modifiedTime || "", metadata);
    await scanDriveStudioFolder({ silent: true });
  } catch (error) {
    setVersionMessage(`Drive 新建失敗：${googleDriveErrorMessage(error)}`, true);
  }
}

async function openStudioFile() {
  if (!fileSystemAccessSupported()) {
    const input = els.homeView && !els.homeView.classList.contains("hidden") ? els.homeImportLayouts : els.importLayouts;
    input.click();
    setVersionMessage("這個瀏覽器不支援直接寫回檔案。匯入後請用「另存檔案」或「下載備份檔」。");
    return;
  }
  try {
    const picked = await runNativePicker("開啟播放台檔案", () => window.showOpenFilePicker({
      types: [
        {
          description: "播放台 JSON 檔",
          accept: { "application/json": [".json"] },
        },
      ],
      multiple: false,
    }));
    const [handle] = picked.value || [];
    if (!handle) return;
    const file = await handle.getFile();
    await readStudioFile(file, handle);
  } catch (error) {
    if (error?.name !== "AbortError") setVersionMessage(`開啟檔案失敗：${error.message || "請再試一次。"}`, true);
  }
}

async function writePayloadToHandle(handle, payload) {
  const writable = await handle.createWritable();
  await writable.write(new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" }));
  await writable.close();
}

function fileWriteErrorMessage(error, fallback = "請改用另存檔案。") {
  if (error?.name === "NotFoundError") return "檔案已不存在，請另存新檔。";
  if (error?.name === "NotAllowedError") return "沒有檔案寫入權限，請重新開啟或另存新檔。";
  return error?.message || fallback;
}

async function createUniquePlaybackFile(suggestedName) {
  if (!playbackDirectoryHandle) throw new Error("尚未選擇播放台資料夾。");
  const fileName = sanitizeFileName(suggestedName);
  const base = fileName.replace(/\.json$/i, "");
  for (let index = 1; index <= 999; index += 1) {
    const nextName = index === 1 ? fileName : `${base}-${index}.json`;
    try {
      await playbackDirectoryHandle.getFileHandle(nextName);
    } catch (error) {
      if (error?.name === "NotFoundError") {
        return playbackDirectoryHandle.getFileHandle(nextName, { create: true });
      }
      throw error;
    }
  }
  throw new Error("無法建立不重複的播放台檔名。");
}

function downloadStudioFile(payload, name = preferredFileName()) {
  const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = sanitizeFileName(name);
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

async function saveCurrentFileAs() {
  const payload = buildStudioFilePayload(layoutSnapshot());
  const name = preferredFileName();
  if (!fileSystemAccessSupported()) {
    downloadStudioFile(payload, name);
    currentFileHandle = null;
    writeFileMeta({ name, savedAt: payload.savedAt, autoSave: false, driveFileId: "", driveModifiedTime: "" });
    setFileInputs(name);
    setFileStatusInputs();
    renderHomeVersions();
    renderSavedLayouts();
    setVersionMessage("已下載檔案。這個瀏覽器無法自動寫回，後續變更請再下載備份檔。");
    return;
  }

  try {
    const picked = await runNativePicker("另存播放台檔案", () => window.showSaveFilePicker({
      suggestedName: name,
      types: [
        {
          description: "播放台 JSON 檔",
          accept: { "application/json": [".json"] },
        },
      ],
    }));
    const handle = picked.value;
    if (!handle) return;
    await writePayloadToHandle(handle, payload);
    currentFileHandle = handle;
    writeFileMeta({ name: sanitizeFileName(handle.name || name), savedAt: payload.savedAt, autoSave: true, driveFileId: "", driveModifiedTime: "" });
    setFileInputs(currentFileName);
    setFileStatusInputs();
    renderHomeVersions();
    renderSavedLayouts();
    await scanPlaybackFolder({ silent: true });
    setVersionMessage(`已另存「${currentFileName}」，接下來編輯會自動存檔。`);
  } catch (error) {
    if (error?.name !== "AbortError") setVersionMessage(`另存失敗：${error.message || "請再試一次。"}`, true);
  }
}

async function saveCurrentDriveFile({ silent = false } = {}) {
  const fileId = currentDriveFileId;
  if (!fileId) return false;
  const payload = buildStudioFilePayload(layoutSnapshot());
  try {
    const metadata = await getDriveFileMetadata(fileId);
    if (currentDriveFileId !== fileId) return false;
    if (
      currentDriveModifiedTime
      && metadata.modifiedTime
      && savedAtTime(metadata.modifiedTime) > savedAtTime(currentDriveModifiedTime)
    ) {
      const overwrite = await showConfirmModal("Google Drive 上已有較新的版本。要用目前畫面覆蓋雲端版本嗎？\n取消後請重新開啟雲端版本。");
      if (currentDriveFileId !== fileId) return false;
      if (!overwrite) {
        currentFileAutoSave = false;
        writeFileMeta({ autoSave: false });
        setFileStatusInputs();
        setVersionMessage("已取消存檔；請重新開啟 Google Drive 版本以取得最新內容。", true);
        return true;
      }
    }
    const updated = await updateDriveStudioFile(fileId, payload, currentFileName || metadata.name);
    if (currentDriveFileId !== fileId) return false;
    writeFileMeta({
      name: sanitizeFileName(updated.name || currentFileName),
      savedAt: payload.savedAt,
      autoSave: true,
      driveFileId: updated.id || fileId,
      driveModifiedTime: updated.modifiedTime || metadata.modifiedTime || "",
    });
    setFileInputs(currentFileName);
    setFileStatusInputs();
    const folderItem = folderLayoutFiles.find((item) => item.driveFileId === fileId);
    if (folderItem) { folderItem.savedAt = payload.savedAt; folderItem.modifiedTime = updated.modifiedTime || folderItem.modifiedTime; }
    renderHomeVersions();
    renderSavedLayouts();
    if (!silent) setVersionMessage(`已儲存到 Google Drive「${currentFileName}」。`);
    return true;
  } catch (error) {
    if (currentDriveFileId !== fileId) return false;
    currentFileAutoSave = false;
    writeFileMeta({ autoSave: false });
    setFileStatusInputs();
    setVersionMessage(`Drive 存檔失敗：${googleDriveErrorMessage(error)}`, true);
    return true;
  }
}

async function saveCurrentFile() {
  if (currentDriveFileId) {
    await saveCurrentDriveFile();
    return;
  }
  if (!currentFileHandle) {
    await saveCurrentFileAs();
    return;
  }
  const payload = buildStudioFilePayload(layoutSnapshot());
  try {
    await writePayloadToHandle(currentFileHandle, payload);
    writeFileMeta({ name: sanitizeFileName(currentFileHandle.name || currentFileName), savedAt: payload.savedAt, autoSave: true, driveFileId: "", driveModifiedTime: "" });
    setFileInputs(currentFileName);
    setFileStatusInputs();
    renderHomeVersions();
    renderSavedLayouts();
    await scanPlaybackFolder({ silent: true });
    setVersionMessage(`已儲存到「${currentFileName}」。`);
  } catch (error) {
    currentFileAutoSave = false;
    writeFileMeta({ autoSave: false });
    setFileStatusInputs();
    setVersionMessage(`存檔失敗：${fileWriteErrorMessage(error)}`, true);
  }
}

function downloadCurrentFile() {
  const payload = buildStudioFilePayload(layoutSnapshot());
  downloadStudioFile(payload, preferredFileName());
  setVersionMessage("已下載目前播放台備份檔。");
}

function disconnectCurrentFile() {
  clearFileMeta();
  setFileInputs(preferredFileName());
  setFileStatusInputs();
  renderHomeVersions();
  renderSavedLayouts();
  setVersionMessage("已中斷目前檔案連結；之後不會自動寫回檔案。");
}

function scheduleFileAutoSave() {
  if (suppressFileAutoSave || (!currentFileHandle && !currentDriveFileId) || !currentFileAutoSave) return;
  clearTimeout(fileSaveTimerId);
  fileSaveTimerId = setTimeout(autoSaveCurrentFile, 900);
}

async function autoSaveCurrentFile() {
  const handle = currentFileHandle;
  if ((!handle && !currentDriveFileId) || !currentFileAutoSave) return;
  if (fileSaveInProgress) {
    fileSaveQueued = true;
    return;
  }
  fileSaveInProgress = true;
  try {
    if (currentDriveFileId) {
      await saveCurrentDriveFile({ silent: true });
      if (currentFileAutoSave) setVersionMessage(`已自動存檔到 Google Drive「${currentFileName}」。`);
      return;
    }
    const payload = buildStudioFilePayload(currentFileSnapshotFromStorage());
    await writePayloadToHandle(handle, payload);
    if (currentFileHandle !== handle) return;
    writeFileMeta({ name: sanitizeFileName(handle.name || currentFileName), savedAt: payload.savedAt, autoSave: true, driveFileId: "", driveModifiedTime: "" });
    setFileStatusInputs();
    setVersionMessage(`已自動存檔到「${currentFileName}」。`);
  } catch (error) {
    if (currentFileHandle !== handle) return;
    currentFileAutoSave = false;
    writeFileMeta({ autoSave: false });
    setFileStatusInputs();
    setVersionMessage(`自動存檔失敗：${fileWriteErrorMessage(error)}`, true);
  } finally {
    fileSaveInProgress = false;
    if (fileSaveQueued) {
      fileSaveQueued = false;
      scheduleFileAutoSave();
    }
  }
}

function renderSavedLayouts(selectedName = "") {
  els.savedLayouts.innerHTML = "";
  const option = document.createElement("option");
  option.value = currentFileName || "";
  option.textContent = currentFileName || "尚未連結檔案";
  els.savedLayouts.appendChild(option);
  els.savedLayouts.value = option.value;
  els.loadLayout.disabled = false;
  els.deleteLayout.disabled = !currentFileHandle && !currentDriveFileId && !currentFileName;
  els.exportLayouts.disabled = false;
  els.homeExportLayouts.disabled = false;
  els.syncLayouts.disabled = false;
  els.homeSyncLayouts.disabled = false;
  setFileStatusInputs();
}

function saveCurrentLayout() {
  saveCurrentFileAs();
}

function loadSelectedLayout() {
  openStudioFile();
}

function deleteSelectedLayout() {
  disconnectCurrentFile();
}

function exportLayouts() {
  downloadCurrentFile();
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
  readStudioFile(file).finally(() => {
    els.importLayouts.value = "";
    els.homeImportLayouts.value = "";
  });
}

let activeTooltipTarget = null;

function tooltipControlFromEventTarget(target) {
  return target?.closest?.("button, a.link-button, .home-import-button, [role='button']");
}

function tooltipTextForControl(control) {
  if (!control || control.disabled || control.getAttribute("aria-disabled") === "true") return "";
  const raw =
    control.getAttribute("data-tooltip") ||
    control.getAttribute("aria-label") ||
    control.getAttribute("title") ||
    control.textContent ||
    "";
  return raw.replace(/\s+/g, " ").trim();
}

function ensureTooltipElement() {
  let tooltip = document.querySelector("#ui-tooltip");
  if (!tooltip) {
    tooltip = createEl("div", "ui-tooltip");
    tooltip.id = "ui-tooltip";
    tooltip.setAttribute("role", "tooltip");
    document.body.appendChild(tooltip);
  }
  return tooltip;
}

function positionTooltip(control) {
  const tooltip = ensureTooltipElement();
  const rect = control.getBoundingClientRect();
  const margin = 8;
  const tooltipRect = tooltip.getBoundingClientRect();
  const width = tooltipRect.width || 120;
  const height = tooltipRect.height || 32;
  let left = rect.left + rect.width / 2;
  let top = rect.top - height - margin;

  if (top < margin) top = rect.bottom + margin;
  left = Math.min(window.innerWidth - width / 2 - margin, Math.max(width / 2 + margin, left));
  top = Math.min(window.innerHeight - height - margin, Math.max(margin, top));

  tooltip.style.left = `${left}px`;
  tooltip.style.top = `${top}px`;
}

function showControlTooltip(control) {
  const text = tooltipTextForControl(control);
  if (!text) return;

  activeTooltipTarget = control;
  if (control.hasAttribute("title")) {
    control.dataset.tooltipNativeTitle = control.getAttribute("title");
    control.removeAttribute("title");
  }

  const tooltip = ensureTooltipElement();
  tooltip.textContent = text;
  tooltip.classList.add("visible");
  positionTooltip(control);
}

function hideControlTooltip(control = activeTooltipTarget) {
  if (!control) return;
  if (control.dataset.tooltipNativeTitle) {
    control.setAttribute("title", control.dataset.tooltipNativeTitle);
    delete control.dataset.tooltipNativeTitle;
  }
  if (activeTooltipTarget === control) activeTooltipTarget = null;
  const tooltip = document.querySelector("#ui-tooltip");
  if (tooltip) tooltip.classList.remove("visible");
}

function initControlTooltips() {
  document.addEventListener("pointerover", (event) => {
    const control = tooltipControlFromEventTarget(event.target);
    if (!control || control === activeTooltipTarget) return;
    showControlTooltip(control);
  });
  document.addEventListener("pointerout", (event) => {
    if (!activeTooltipTarget) return;
    if (activeTooltipTarget.contains(event.relatedTarget)) return;
    hideControlTooltip(activeTooltipTarget);
  });
  document.addEventListener("focusin", (event) => {
    const control = tooltipControlFromEventTarget(event.target);
    if (control) showControlTooltip(control);
  });
  document.addEventListener("focusout", () => hideControlTooltip());
  document.addEventListener("click", () => hideControlTooltip());
  window.addEventListener("scroll", () => hideControlTooltip(), true);
  window.addEventListener("resize", () => hideControlTooltip());
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
  if (type === "timer") return { title: "計時器", titleSize: "13", minutes: "5", seconds: "0", remaining: 300, settingsOpen: true };
  if (type === "clock") return { title: "現在時間", titleSize: "13", settingsOpen: true };
  if (type === "groups") return { title: "Groups", titleSize: "13", studentList: "", groupCount: "4", shuffle: true, groups: [], checkable: false, checkedStudents: {}, settingsOpen: true };
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

function loadImageElement(src) {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.addEventListener("load", () => resolve(image));
    image.addEventListener("error", () => reject(new Error("圖片讀取失敗。")));
    image.src = src;
  });
}

async function imageFileToJpegDataUrl(file, options = {}) {
  const source = await fileToDataUrl(file);
  const image = await loadImageElement(source);
  const maxSide = options.maxSide || 1600;
  const scale = Math.min(1, maxSide / Math.max(image.naturalWidth || 1, image.naturalHeight || 1));
  const canvas = document.createElement("canvas");
  canvas.width = Math.max(1, Math.round((image.naturalWidth || 1) * scale));
  canvas.height = Math.max(1, Math.round((image.naturalHeight || 1) * scale));
  const context = canvas.getContext("2d");
  context.drawImage(image, 0, 0, canvas.width, canvas.height);

  const qualities = options.qualities || [0.82, 0.74, 0.66, 0.58, 0.5, 0.42];
  let result = canvas.toDataURL("image/jpeg", qualities[0]);
  const maxBytes = options.maxBytes || Infinity;
  for (const quality of qualities) {
    result = canvas.toDataURL("image/jpeg", quality);
    if (result.length <= maxBytes) break;
  }
  return result;
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

function checkedStudentKey(groupIndex, studentIndex) {
  return `${groupIndex}:${studentIndex}`;
}

function normalizedDynamicGroups(groupsValue, groupCountValue) {
  const source = Array.isArray(groupsValue) ? groupsValue : [];
  const groupCount = Math.max(source.length, clampNumber(groupCountValue || "1", 1, 20));
  return Array.from({ length: groupCount }, (_, index) => (Array.isArray(source[index]) ? source[index] : []));
}

function readDynamicGroupFields(container) {
  return [...container.querySelectorAll("textarea[data-group-index]")]
    .map((field) => splitStudents(field.value))
    .filter((group) => group.length > 0);
}

function pruneCheckedStudents(checkedStudents, groupsValue) {
  const source = checkedStudents && typeof checkedStudents === "object" && !Array.isArray(checkedStudents) ? checkedStudents : {};
  const allowed = new Set();
  groupsValue.forEach((group, groupIndex) => {
    group.forEach((_, studentIndex) => allowed.add(checkedStudentKey(groupIndex, studentIndex)));
  });
  return Object.fromEntries(Object.entries(source).filter(([key, value]) => value && allowed.has(key)));
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
  if (type === "timer" && nextState.title === "Timer") nextState.title = "計時器";
  if (type === "clock" && nextState.title === "Clock") nextState.title = "現在時間";
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
  const hideButton = createEl("button", "dynamic-hide-btn");
  hideButton.type = "button";
  hideButton.title = "隱藏小工具";
  hideButton.setAttribute("aria-label", "隱藏小工具");
  const copyButton = createEl("button", "", "⧉");
  copyButton.type = "button";
  copyButton.title = "複製小工具";
  copyButton.setAttribute("aria-label", "複製小工具");
  const settingsButton = createEl("button", "dynamic-settings-btn", "⋯");
  settingsButton.type = "button";
  settingsButton.title = "顯示設定";
  settingsButton.setAttribute("aria-label", "顯示設定");
  const removeButton = createEl("button", "", "×");
  removeButton.type = "button";
  removeButton.title = "刪除小工具";
  removeButton.setAttribute("aria-label", "刪除小工具");
  if (minimizeButton) {
    minimizeButton.type = "button";
    minimizeButton.title = "最小化 YouTube";
    minimizeButton.setAttribute("aria-label", "最小化 YouTube");
    actions.appendChild(minimizeButton);
  }
  actions.append(hideButton, copyButton, settingsButton, removeButton);
  head.append(drag, title, actions);

  const content = createEl("div", "dynamic-content");
  const display = createEl("div", "dynamic-display");
  const settings = createEl("div", "dynamic-settings");
  const resize = createEl("button", "resize-handle");
  resize.type = "button";
  resize.setAttribute("aria-label", "縮放小工具");

  content.append(display);
  widget.append(head, content, resize);
  els.stage.appendChild(widget);
  document.body.appendChild(settings);

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
  hideButton.addEventListener("click", () => setDynamicWidgetHidden(instance, true));
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
    if (instance.state.settingsOpen) {
      dynamicWidgets.forEach((item) => {
        if (item.id !== instance.id && item.state.settingsOpen) {
          item.state.settingsOpen = false;
          renderDynamicWidget(item);
        }
      });
    }
    els.settingsBackdrop.classList.toggle("hidden", !instance.state.settingsOpen);
    renderDynamicWidget(instance);
    writeState();
  });
  removeButton.addEventListener("click", async () => {
    if (await showConfirmModal(`確定要刪除「${widgetListLabel(instance)}」嗎？刪除後不能復原。`)) {
      removeDynamicWidget(id);
    }
  });

  buildDynamicSettings(instance);
  renderDynamicWidget(instance);
  if (instance.state.settingsOpen) {
    dynamicWidgets.forEach((item) => {
      if (item.id !== instance.id && item.state.settingsOpen) {
        item.state.settingsOpen = false;
        renderDynamicWidget(item);
      }
    });
    bringWidgetToFront(widget);
    els.settingsBackdrop.classList.remove("hidden");
  }
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
    const checkLabel = createEl("label", "switch dynamic-check-switch");
    const checkable = document.createElement("input");
    checkable.type = "checkbox";
    checkable.checked = Boolean(state.checkable);
    checkLabel.append(checkable, document.createTextNode("姓名勾選"));
    settings.appendChild(checkLabel);
    const clearChecks = createEl("button", "secondary", "清除勾選");
    clearChecks.type = "button";
    clearChecks.addEventListener("click", () => updateDynamicState(instance, { checkedStudents: {} }));
    settings.appendChild(clearChecks);
    const manualTitle = createEl("div", "dynamic-settings-subtitle", "每組名單");
    const manualList = createEl("div", "dynamic-group-editor");
    normalizedDynamicGroups(state.groups, state.groupCount).forEach((group, index) => {
      const field = createEl("label", "dynamic-group-field");
      field.textContent = `第 ${index + 1} 組`;
      const textarea = dynamicTextarea(group.join("\n"), 3);
      textarea.dataset.groupIndex = String(index);
      textarea.placeholder = "一行一位，或用逗號分隔";
      textarea.addEventListener("input", () => {
        const nextGroups = readDynamicGroupFields(manualList);
        instance.state.groups = nextGroups;
        instance.state.checkedStudents = pruneCheckedStudents(instance.state.checkedStudents, nextGroups);
        renderDynamicWidget(instance);
        writeState();
      });
      field.appendChild(textarea);
      manualList.appendChild(field);
    });
    settings.append(manualTitle, manualList);
    list.addEventListener("input", () => updateDynamicState(instance, { studentList: list.value }));
    count.addEventListener("change", () => updateDynamicState(instance, { groupCount: count.value }));
    shuffle.addEventListener("change", () => updateDynamicState(instance, { shuffle: shuffle.checked }));
    checkable.addEventListener("change", () => updateDynamicState(instance, { checkable: checkable.checked }));
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
    const url = addLabeledInput(settings, "Google Slides 或 Google Drive PDF 連結", dynamicTextarea(state.slidesUrl || "", 3));
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
        sourceKind: slides.kind,
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
  instance.element.classList.toggle("widget-hidden-by-user", Boolean(state.hidden));
  const hideButton = instance.element.querySelector(".dynamic-hide-btn");
  if (hideButton) {
    hideButton.title = state.hidden ? "小工具已隱藏" : "隱藏小工具";
    hideButton.setAttribute("aria-label", state.hidden ? "小工具已隱藏" : "隱藏小工具");
  }
  placeDynamicSettings(instance);

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
        const names = createEl("div", "dynamic-group-names");
        group.forEach((student, studentIndex) => {
          const key = checkedStudentKey(index, studentIndex);
          const isChecked = Boolean(state.checkedStudents?.[key]);
          if (state.checkable) {
            const label = createEl("label", "dynamic-student-check");
            const checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            checkbox.checked = isChecked;
            checkbox.addEventListener("change", () => {
              const checkedStudents = {
                ...(instance.state.checkedStudents || {}),
                [key]: checkbox.checked,
              };
              if (!checkbox.checked) delete checkedStudents[key];
              updateDynamicState(instance, { checkedStudents });
            });
            const name = createEl("span", "", student);
            label.classList.toggle("checked", isChecked);
            label.append(checkbox, name);
            names.appendChild(label);
          } else {
            const name = createEl("span", "dynamic-student-name", student);
            names.appendChild(name);
          }
        });
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
    instance.minimizeButton.setAttribute("aria-label", state.minimized ? "還原 YouTube" : "最小化 YouTube");
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
    instance.state.groups = [];
    instance.state.checkedStudents = {};
    buildDynamicSettings(instance);
    renderDynamicWidget(instance);
    writeState();
    return;
  }
  const count = Math.min(students.length, clampNumber(instance.state.groupCount, 1, 20));
  const source = instance.state.shuffle === false ? students : shuffled(students);
  const nextGroups = Array.from({ length: count }, () => []);
  source.forEach((student, index) => nextGroups[index % count].push(student));
  instance.state.groups = nextGroups;
  instance.state.checkedStudents = {};
  buildDynamicSettings(instance);
  renderDynamicWidget(instance);
  writeState();
}

function copyDynamicWidget(id) {
  const source = getDynamicWidget(id);
  if (!source) return;
  const position = widgetPosition(source.element);
  const left = Number.parseFloat(position.left || "24") + 28;
  const top = Number.parseFloat(position.top || "24") + 28;
  createDynamicWidget(source.type, { ...cloneValue(source.state), hidden: false }, {
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
  widget.settings.remove();
  dynamicWidgets = dynamicWidgets.filter((item) => item.id !== id);
  renderWidgetSelection();
  renderHiddenWidgetsList();
  if (persist) writeState();
}

function clearDynamicWidgets() {
  dynamicWidgets.forEach((widget) => {
    window.clearInterval(widget.timerId);
    window.clearInterval(widget.clockId);
    selectedWidgets.delete(widgetSelectionId(widget.element));
    widget.element.remove();
    widget.settings.remove();
  });
  dynamicWidgets = [];
  renderWidgetSelection();
  renderHiddenWidgetsList();
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

function describeFirebaseAuthError(error) {
  const code = String(error?.code || "");
  if (code.includes("operation-not-allowed")) return "Firebase 匿名登入尚未啟用，請到 Firebase Authentication 開啟 Anonymous 登入。";
  if (code.includes("unauthorized-domain")) return "目前網域未加入 Firebase Authentication 授權網域，請把這個網站網域加入 Authorized domains。";
  return error?.message || "Firebase 匿名登入失敗，請確認 Authentication 設定。";
}

async function ensureFirebaseAuth(api, options = {}) {
  if (api.auth?.currentUser) return api.auth.currentUser;
  try {
    const credential = await api.signInAnonymously(api.auth);
    return credential?.user || api.auth?.currentUser || null;
  } catch (error) {
    // Some classroom deployments use public Firestore rules and do not enable anonymous auth.
    if (options.required) throw new Error(describeFirebaseAuthError(error));
    return null;
  }
}

async function requireFirebaseUser(api) {
  const user = await ensureFirebaseAuth(api, { required: true });
  if (!user?.uid) throw new Error("Firebase 匿名登入尚未完成，請重新整理頁面後再試。");
  return user;
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

function postBoardMetadataPayload(api, page, user, sections = normalizePostSections(page.sections), noteHtml = page.noteHtml || "") {
  return {
    title: page.name || "貼文板",
    adminUid: user.uid,
    sections,
    note: noteHtml,
    bgColor: page.bgColor || "",
    bgImage: page.bgImage || "",
    bgOpacity: Number.isFinite(Number(page.bgOpacity)) ? Number(page.bgOpacity) : 60,
    titleColor: page.titleColor || "",
    updatedAt: api.serverTimestamp(),
    kind: "postBoard",
    version: 1,
  };
}

async function syncActivePostBoardMetadata() {
  const page = activePage();
  if (page.type !== "posts" || !page.boardId) return;
  try {
    const api = await loadFirebaseApi();
    const user = await requireFirebaseUser(api);
    await api.setDoc(
      postBoardDocRef(api, page.boardId),
      postBoardMetadataPayload(api, page, user),
      { merge: true },
    );
  } catch (error) {
    els.pageMessage.textContent = `貼文板外觀同步失敗：${error.message || "請確認 Firestore 設定。"}`;
    els.pageMessage.classList.add("error");
  }
}

async function ensurePostBoardDoc(page) {
  if (!page?.boardId) return;
  try {
    const api = await loadFirebaseApi();
    const user = await requireFirebaseUser(api);
    await api.setDoc(
      postBoardDocRef(api, page.boardId),
      postBoardMetadataPayload(api, page, user),
      { merge: true },
    );
  } catch (error) {
    if (isPermissionError(error)) {
      els.postBoardMessage.textContent = "貼文板雲端建立失敗：目前 Firebase 規則拒絕新建貼文板，請確認 Firestore 規則已部署。";
      els.postBoardMessage.classList.add("error");
      return;
    }
    els.postBoardMessage.textContent = `貼文板雲端建立失敗：${error.message || "請確認 Firebase Authentication 與 Firestore 規則。"}`;
    els.postBoardMessage.classList.add("error");
  }
}

async function recreatePostBoardDoc(api, page, nextSections, noteHtml = "") {
  const user = await requireFirebaseUser(api);
  const nextBoardId = makeBoardId();
  pages = pages.map((item) => (
    item.id === page.id
      ? { ...item, boardId: nextBoardId, sections: nextSections, noteHtml }
      : item
  ));
  const nextPage = pages.find((item) => item.id === page.id);
  await api.setDoc(
    postBoardDocRef(api, nextBoardId),
    postBoardMetadataPayload(api, nextPage, user, nextSections, noteHtml),
    { merge: true },
  );
  postBoardSections = nextSections;
  writeState();
  updatePostBoardControls();
  renderPostBoard();
  unsubscribePostBoard();
  subscribeActivePostBoard();
  return nextPage;
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

function postImageSources(post) {
  const images = Array.isArray(post?.imageDataUrls) ? post.imageDataUrls : [];
  const normalized = images.filter((item) => typeof item === "string" && item.startsWith("data:image/"));
  const legacy = typeof post?.imageDataUrl === "string" && post.imageDataUrl.startsWith("data:image/") ? [post.imageDataUrl] : [];
  return (normalized.length ? normalized : legacy).slice(0, POST_IMAGE_MAX_COUNT);
}

function postImageFilename(post, index = 0, source = postImageSources(post)[index] || "") {
  const extension = source.startsWith("data:image/png") ? "png" : source.startsWith("data:image/webp") ? "webp" : "jpg";
  const id = String(post?.id || Date.now()).replace(/[^a-zA-Z0-9_-]+/g, "-").slice(0, 36);
  const suffix = index > 0 ? `-${index + 1}` : "";
  return `post-image-${id || "download"}${suffix}.${extension}`;
}

function setImageViewerZoom(value) {
  els.imageViewerImg.style.width = `${value}%`;
  els.imageViewerZoomValue.textContent = `${value}%`;
}

function setImageViewerRotation(value) {
  imageViewerRotation = ((value % 360) + 360) % 360;
  els.imageViewerImg.style.transform = `rotate(${imageViewerRotation}deg)`;
}

function rotateImageViewer(delta) {
  setImageViewerRotation(imageViewerRotation + delta);
}

function openImageViewer(imageDataUrl, filename, { post = null, index = 0, canSaveRotation = false } = {}) {
  if (!imageDataUrl) return;
  imageViewerPost = post;
  imageViewerIndex = index;
  imageViewerCanSaveRotation = canSaveRotation;
  els.imageViewerImg.src = imageDataUrl;
  els.imageViewerDownload.href = imageDataUrl;
  els.imageViewerDownload.download = filename || "貼文圖片.jpg";
  els.imageViewerZoom.value = 100;
  setImageViewerZoom(100);
  setImageViewerRotation(0);
  const sources = post ? postImageSources(post) : [];
  const hasMultiple = sources.length > 1;
  els.imageViewerPrev.classList.toggle("hidden", !hasMultiple);
  els.imageViewerNext.classList.toggle("hidden", !hasMultiple);
  els.imageViewerNavCounter.classList.toggle("hidden", !hasMultiple);
  if (hasMultiple) els.imageViewerNavCounter.textContent = `${index + 1} / ${sources.length}`;
  els.imageViewerSaveRotation.classList.toggle("hidden", !canSaveRotation || !post);
  els.imageViewer.classList.remove("hidden");
}

function navigateImageViewer(delta) {
  if (!imageViewerPost) return;
  const sources = postImageSources(imageViewerPost);
  imageViewerIndex = ((imageViewerIndex + delta) + sources.length) % sources.length;
  const source = sources[imageViewerIndex];
  openImageViewer(source, postImageFilename(imageViewerPost, imageViewerIndex, source), {
    post: imageViewerPost,
    index: imageViewerIndex,
    canSaveRotation: imageViewerCanSaveRotation,
  });
}

async function saveImageViewerRotation() {
  if (!imageViewerPost?.id || imageViewerRotation === 0) return;
  const sources = postImageSources(imageViewerPost);
  const source = sources[imageViewerIndex];
  if (!source) return;
  const page = activePage();
  if (page.type !== "posts" || !page.boardId) return;

  const img = new Image();
  img.src = source;
  await new Promise((resolve, reject) => { img.onload = resolve; img.onerror = reject; });

  const radians = (imageViewerRotation * Math.PI) / 180;
  const sin = Math.abs(Math.sin(radians));
  const cos = Math.abs(Math.cos(radians));
  const newW = Math.round(img.width * cos + img.height * sin);
  const newH = Math.round(img.width * sin + img.height * cos);
  const canvas = document.createElement("canvas");
  canvas.width = newW;
  canvas.height = newH;
  const ctx = canvas.getContext("2d");
  ctx.translate(newW / 2, newH / 2);
  ctx.rotate(radians);
  ctx.drawImage(img, -img.width / 2, -img.height / 2);
  const newDataUrl = canvas.toDataURL("image/jpeg", 0.92);

  const newSources = [...sources];
  newSources[imageViewerIndex] = newDataUrl;

  els.imageViewerSaveRotation.disabled = true;
  try {
    const api = await loadFirebaseApi();
    await requireFirebaseUser(api);
    await api.updateDoc(api.doc(api.db, POST_BOARDS_COLLECTION, page.boardId, "posts", imageViewerPost.id), {
      imageDataUrls: newSources,
      imageDataUrl: newSources[0],
      updatedAt: api.serverTimestamp(),
    });
    imageViewerPost.imageDataUrls = newSources;
    openImageViewer(newDataUrl, postImageFilename(imageViewerPost, imageViewerIndex, newDataUrl), {
      post: imageViewerPost,
      index: imageViewerIndex,
      canSaveRotation: imageViewerCanSaveRotation,
    });
    setVersionMessage("已儲存旋轉後的圖片。");
  } catch (error) {
    setVersionMessage(`儲存圖片失敗：${error.message || "請確認網路與權限。"}`, true);
  } finally {
    els.imageViewerSaveRotation.disabled = false;
  }
}

function createPostImageGallery(post, { actions = false, className = "" } = {}) {
  const sources = postImageSources(post);
  if (sources.length === 0) return null;
  let index = 0;
  const wrap = createEl("div", `post-image-wrap${className ? ` ${className}` : ""}`);
  const image = document.createElement("img");
  const counter = createEl("span", "post-image-counter");
  const imageActions = actions ? createEl("div", "post-image-actions") : null;
  const expand = actions ? createEl("button", "secondary", "展開") : null;
  const download = actions ? createEl("a", "link-button secondary", "下載") : null;

  function renderImage() {
    const source = sources[index];
    const filename = postImageFilename(post, index, source);
    image.src = source;
    image.alt = post.content ? `貼文圖片 ${index + 1}：${post.content.slice(0, 24)}` : `貼文圖片 ${index + 1}`;
    image.title = sources.length > 1 ? "點擊切換下一張圖片" : "點擊展開圖片";
    counter.textContent = `${index + 1}/${sources.length}`;
    counter.classList.toggle("hidden", sources.length < 2);
    if (expand) {
      expand.onclick = () => openImageViewer(source, filename, { post, index, canSaveRotation: true });
    }
    if (download) {
      download.href = source;
      download.download = filename;
    }
  }

  image.addEventListener("click", () => {
    if (sources.length > 1) {
      index = (index + 1) % sources.length;
      renderImage();
      return;
    }
    openImageViewer(sources[0], postImageFilename(post, 0, sources[0]), { post, index: 0, canSaveRotation: actions });
  });
  wrap.append(image, counter);
  if (actions && imageActions && expand && download) {
    expand.type = "button";
    imageActions.append(expand, download);
    wrap.appendChild(imageActions);
  }
  renderImage();
  return wrap;
}

function closeImageViewer() {
  els.imageViewer.classList.add("hidden");
  els.imageViewerImg.removeAttribute("src");
  setImageViewerRotation(0);
  els.imageViewerDownload.href = "#";
  imageViewerPost = null;
  imageViewerIndex = 0;
  imageViewerCanSaveRotation = false;
}

function postsForSection(posts, sectionId) {
  return sortPosts(posts.filter((post) => (post.sectionId || "section-a") === sectionId));
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

async function editPostSectionDescription(sectionId) {
  const page = activePage();
  if (page.type !== "posts") return;
  const sections = normalizePostSections(page.sections);
  const section = sections.find((item) => item.id === sectionId);
  if (!section) return;
  const description = await showPromptModal("區段說明文字", section.description || "");
  if (description === null) return;
  await savePostSections(sections.map((item) => (
    item.id === sectionId
      ? { ...item, description: description.trim().slice(0, 120) }
      : item
  )));
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
    const user = await requireFirebaseUser(api);
    await api.setDoc(
      postBoardDocRef(api, page.boardId),
      postBoardMetadataPayload(api, page, user, nextSections),
      { merge: true },
    );
  } catch (error) {
    if (isPermissionError(error)) {
      try {
        await recreatePostBoardDoc(await loadFirebaseApi(), page, nextSections, page.noteHtml || "");
        els.postBoardMessage.textContent = "原貼文板權限已失效，已建立新的投稿連結並完成區段儲存。請使用新的 QR Code。";
        els.postBoardMessage.classList.remove("error");
        return;
      } catch (retryError) {
        els.postBoardMessage.textContent = `區段儲存失敗：${retryError.message || "請確認權限。"}`;
        els.postBoardMessage.classList.add("error");
        return;
      }
    }
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
    if (!nextContent && postImageSources(post).length === 0) {
      els.postEditMessage.textContent = "內容不能為空。";
      return;
    }
    els.postEditSave.disabled = true;
    els.postEditMessage.textContent = "儲存中…";
    try {
      const api = await loadFirebaseApi();
      await requireFirebaseUser(api);
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
    await requireFirebaseUser(api);
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
    await requireFirebaseUser(api);
    await api.updateDoc(api.doc(api.db, POST_BOARDS_COLLECTION, page.boardId, "posts", postId), {
      author: post.author || "匿名",
      content: post.content || "",
      sectionId,
      order: Date.now(),
      updatedAt: api.serverTimestamp(),
    });
  } catch (error) {
    els.postBoardMessage.textContent = `移動貼文失敗：${error.message || "請確認權限。"}`;
    els.postBoardMessage.classList.add("error");
  }
}

async function reorderPostInSection(postId, sectionId, targetPostId = "", placeAfter = false) {
  const page = activePage();
  if (page.type !== "posts" || !page.boardId) return;
  const moved = postBoardPosts.find((post) => post.id === postId);
  if (!moved) return;

  const nextPosts = postsForSection(postBoardPosts, sectionId).filter((post) => post.id !== postId);
  const movedPost = { ...moved, sectionId };
  const targetIndex = targetPostId ? nextPosts.findIndex((post) => post.id === targetPostId) : -1;
  const insertIndex = targetIndex >= 0 ? targetIndex + (placeAfter ? 1 : 0) : nextPosts.length;
  nextPosts.splice(Math.max(0, insertIndex), 0, movedPost);

  postBoardPosts = postBoardPosts
    .filter((post) => (post.sectionId || "section-a") !== sectionId && post.id !== postId)
    .concat(nextPosts.map((post, index) => ({ ...post, sectionId, order: index * 1000 })));
  renderPostBoard();

  try {
    const api = await loadFirebaseApi();
    await requireFirebaseUser(api);
    await Promise.all(nextPosts.map((post, index) => (
      api.updateDoc(api.doc(api.db, POST_BOARDS_COLLECTION, page.boardId, "posts", post.id), {
        author: post.author || "匿名",
        content: post.content || "",
        sectionId,
        order: index * 1000,
        updatedAt: api.serverTimestamp(),
      })
    )));
  } catch (error) {
    els.postBoardMessage.textContent = `排序貼文失敗：${error.message || "請確認權限。"}`;
    els.postBoardMessage.classList.add("error");
  }
}

function sanitizePostFilename(name) {
  return (name || "未命名").replace(/[\\/:*?"<>|]/g, "-").trim() || "未命名";
}

function triggerDownload(blob, filename) {
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
}

async function loadJSZip() {
  if (window.JSZip) return window.JSZip;
  return new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = "https://cdn.jsdelivr.net/npm/jszip@3.10.1/dist/jszip.min.js";
    script.onload = () => resolve(window.JSZip);
    script.onerror = () => reject(new Error("無法載入壓縮工具，請確認網路連線。"));
    document.head.appendChild(script);
  });
}

function buildPostBoardMdLines(posts, imageFolder) {
  const lines = [];
  if (posts.length === 0) { lines.push("_（尚無貼文）_", ""); return lines; }
  posts.forEach((post) => {
    lines.push(`**${post.author || "匿名"}**`);
    if (post.content) lines.push(post.content);
    postImageSources(post).forEach((source, i) => {
      const filename = postImageFilename(post, i, source);
      lines.push(`![[${imageFolder}/${filename}]]`);
    });
    lines.push("");
  });
  return lines;
}

async function exportPostBoardToObsidian() {
  const page = activePage();
  if (page.type !== "posts") return;

  const boardName = page.name || "貼文板";
  const sections = normalizePostSections(postBoardSections.length > 0 ? postBoardSections : page.sections);
  const date = new Date().toISOString().slice(0, 10);
  const filename = sanitizePostFilename(boardName);

  let JSZip;
  try { JSZip = await loadJSZip(); } catch (e) { setVersionMessage(e.message, true); return; }
  const zip = new JSZip();
  const imageEntries = [];

  const lines = [`---`, `date: ${date}`, `board: ${boardName}`, `---`, ``];
  function appendSection(label, posts) {
    if (label) lines.push(`# ${label}`, ``);
    buildPostBoardMdLines(posts, filename).forEach((l) => lines.push(l));
    postBoardPosts.filter((p) => posts.includes(p)).forEach((post) => {
      postImageSources(post).forEach((source, i) => {
        imageEntries.push({ path: `${filename}/${postImageFilename(post, i, source)}`, source });
      });
    });
  }

  if (sections.length === 0) {
    const sorted = sortPosts(postBoardPosts);
    lines.push(...buildPostBoardMdLines(sorted, filename));
    sorted.forEach((post) => {
      postImageSources(post).forEach((source, i) => {
        imageEntries.push({ path: `${filename}/${postImageFilename(post, i, source)}`, source });
      });
    });
  } else {
    sections.forEach((section) => {
      lines.push(`# ${section.name}`, ``);
      const posts = sortPosts(postsForSection(postBoardPosts, section.id));
      lines.push(...buildPostBoardMdLines(posts, filename));
      posts.forEach((post) => {
        postImageSources(post).forEach((source, i) => {
          imageEntries.push({ path: `${filename}/${postImageFilename(post, i, source)}`, source });
        });
      });
    });
    const sectionIds = new Set(sections.map((s) => s.id));
    const orphans = sortPosts(postBoardPosts.filter((p) => !sectionIds.has(p.sectionId || "section-a")));
    if (orphans.length > 0) {
      lines.push(`# 未分類`, ``);
      lines.push(...buildPostBoardMdLines(orphans, filename));
      orphans.forEach((post) => {
        postImageSources(post).forEach((source, i) => {
          imageEntries.push({ path: `${filename}/${postImageFilename(post, i, source)}`, source });
        });
      });
    }
  }

  zip.file(`${filename}.md`, lines.join("\n"));
  imageEntries.forEach(({ path, source }) => {
    zip.file(path, source.split(",")[1], { base64: true });
  });

  const blob = await zip.generateAsync({ type: "blob" });
  triggerDownload(blob, `${filename}.zip`);
}

function buildPostBoardPrintHtml(boardName, sections, allPosts) {
  const date = new Date().toLocaleDateString("zh-TW", { year: "numeric", month: "2-digit", day: "2-digit" });
  const escHtml = (s) => (s || "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/\n/g, "<br>");

  function renderPosts(posts) {
    if (posts.length === 0) return `<p style="color:#888;font-style:italic">（尚無貼文）</p>`;
    return posts.map((post) => {
      const sources = postImageSources(post);
      const hasImage = sources.length > 0;
      const leftHtml = `
        <div class="post-left">
          <div class="post-meta">${escHtml(post.author || "匿名")} &nbsp; ${escHtml(formatPostTime(post.createdAt))}</div>
          <div class="post-author">${escHtml(post.author || "匿名")}</div>
          ${post.content ? `<div class="post-content">${escHtml(post.content)}</div>` : ""}
        </div>`;
      const rightHtml = hasImage ? `<div class="post-images">${sources.map((src) => `<img src="${src}" class="post-img" alt="">`).join("")}</div>` : "";
      return `<div class="post">${leftHtml}${rightHtml}</div>`;
    }).join("");
  }

  let body = "";
  if (sections.length === 0) {
    body += renderPosts(sortPosts(allPosts));
  } else {
    sections.forEach((section, idx) => {
      body += `<h2>${idx + 1}.${escHtml(section.name)}</h2>`;
      body += renderPosts(sortPosts(postsForSection(allPosts, section.id)));
    });
    const sectionIds = new Set(sections.map((s) => s.id));
    const orphans = sortPosts(allPosts.filter((p) => !sectionIds.has(p.sectionId || "section-a")));
    if (orphans.length > 0) {
      body += `<h2>未分類</h2>${renderPosts(orphans)}`;
    }
  }

  const css = `
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body { font-family: "Noto Sans TC", "Microsoft JhengHei", sans-serif; font-size: 13px; color: #111; background: #fff; padding: 32px 40px; }
    .page-header { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 6px; font-size: 11px; color: #555; }
    .page-brand { font-weight: 700; letter-spacing: 0.05em; font-size: 13px; color: #222; }
    h1 { font-size: 2em; font-weight: 900; margin: 8px 0 24px; }
    h2 { font-size: 1.1em; font-weight: 700; margin: 28px 0 0; padding-bottom: 6px; border-bottom: 1.5px solid #222; }
    .post { display: flex; gap: 20px; padding: 16px 0; border-bottom: 1px solid #ddd; align-items: flex-start; }
    .post-left { flex: 1; min-width: 0; }
    .post-meta { font-size: 10px; color: #777; margin-bottom: 4px; }
    .post-author { font-weight: 700; font-size: 1.05em; margin-bottom: 6px; }
    .post-content { white-space: pre-wrap; line-height: 1.6; }
    .post-images { flex-shrink: 0; display: flex; flex-direction: column; gap: 8px; }
    .post-img { max-width: 300px; max-height: 300px; object-fit: contain; border-radius: 4px; }
    @media print {
      body { padding: 16px 20px; }
      .post-img { max-width: 260px; max-height: 260px; }
      h2 { page-break-before: auto; }
      .post { page-break-inside: avoid; }
    }
  `;

  return `<!DOCTYPE html><html lang="zh-TW"><head><meta charset="utf-8">
    <title>${escHtml(boardName)}</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@400;700;900&display=swap" rel="stylesheet">
    <style>${css}</style></head><body>
    <div class="page-header"><span>${date}</span><span class="page-brand">我的班級工具</span></div>
    <h1>${escHtml(boardName)}</h1>
    ${body}
    <script>window.onload=function(){window.print();}<\/script>
    </body></html>`;
}

function exportPostBoardToPdf() {
  const page = activePage();
  if (page.type !== "posts") return;
  const boardName = page.name || "貼文板";
  const sections = normalizePostSections(postBoardSections.length > 0 ? postBoardSections : page.sections);
  const html = buildPostBoardPrintHtml(boardName, sections, postBoardPosts);
  const win = window.open("", "_blank");
  if (!win) { setVersionMessage("瀏覽器封鎖了彈出視窗，請允許後再試。", true); return; }
  win.document.write(html);
  win.document.close();
}

async function exportPostBoardAllFiles() {
  const page = activePage();
  if (page.type !== "posts") return;
  const boardName = page.name || "貼文板";
  const sections = normalizePostSections(postBoardSections.length > 0 ? postBoardSections : page.sections);
  const boardFolder = sanitizePostFilename(boardName);
  const date = new Date().toISOString().slice(0, 10);

  let JSZip;
  try { JSZip = await loadJSZip(); } catch (e) { setVersionMessage(e.message, true); return; }
  const zip = new JSZip();

  function addSectionToZip(folderPath, sectionLabel, posts) {
    const folder = zip.folder(folderPath);
    const imagesFolder = folder.folder("images");
    const lines = [`---`, `date: ${date}`, `section: ${sectionLabel}`, `board: ${boardName}`, `---`, ``];
    lines.push(...buildPostBoardMdLines(posts, "images"));
    folder.file(`${sanitizePostFilename(sectionLabel)}.md`, lines.join("\n"));
    posts.forEach((post) => {
      postImageSources(post).forEach((source, i) => {
        imagesFolder.file(postImageFilename(post, i, source), source.split(",")[1], { base64: true });
      });
    });
  }

  if (sections.length === 0) {
    addSectionToZip(boardFolder, boardName, sortPosts(postBoardPosts));
  } else {
    sections.forEach((section) => {
      const posts = sortPosts(postsForSection(postBoardPosts, section.id));
      addSectionToZip(`${boardFolder}/${sanitizePostFilename(section.name)}`, section.name, posts);
    });
    const sectionIds = new Set(sections.map((s) => s.id));
    const orphans = sortPosts(postBoardPosts.filter((p) => !sectionIds.has(p.sectionId || "section-a")));
    if (orphans.length > 0) addSectionToZip(`${boardFolder}/未分類`, "未分類", orphans);
  }

  setVersionMessage("正在壓縮檔案…");
  const blob = await zip.generateAsync({ type: "blob" });
  triggerDownload(blob, `${boardFolder}.zip`);
  setVersionMessage(`已下載「${boardFolder}.zip」。`);
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
    card.dataset.postId = post.id || "";
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
        document.querySelectorAll(".post-card.drop-before, .post-card.drop-after").forEach((item) => {
          item.classList.remove("drop-before", "drop-after");
        });
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
      menuBtn.setAttribute("aria-label", "貼文選項");
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
    const imageGallery = createPostImageGallery(post, { actions: true });
    if (imageGallery) card.appendChild(imageGallery);
    container.appendChild(card);
  });
}

function renderPostBoardColumns(page, sections) {
  els.postBoardGrid.innerHTML = "";
  const boardColumns = createEl("div", "post-board-columns");

  if (sections.length === 0 && postBoardPosts.length > 0) {
    const body = createEl("div", "post-section-body");
    renderPostCards(body, sortPosts(postBoardPosts), { canManage: true });
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
    const titleRow = createEl("div", "post-section-title-row");
    const titleButton = createEl("button", "post-section-title", section.name);
    titleButton.type = "button";
    titleButton.title = "重新命名區段";
    titleButton.addEventListener("click", () => renamePostSection(section.id));
    const menuBtn = createEl("button", "post-section-menu-btn", "⋮");
    menuBtn.type = "button";
    menuBtn.title = "區段選項";
    menuBtn.setAttribute("aria-label", `${section.name} 區段選項`);
    const menu = createEl("div", "post-section-menu hidden");
    const addLink = createEl("a", "", "增加貼文");
    addLink.href = postBoardSectionJoinUrl(page, section.id);
    addLink.target = "_blank";
    addLink.rel = "noreferrer";
    addLink.title = `到「${section.name}」投稿`;
    const descBtn = createEl("button", "", section.description ? "編輯區段說明" : "增加區段說明文字");
    descBtn.type = "button";
    descBtn.addEventListener("click", () => {
      menu.classList.add("hidden");
      editPostSectionDescription(section.id);
    });
    const deleteBtn = createEl("button", "danger", "刪除區段");
    deleteBtn.type = "button";
    deleteBtn.title = "刪除區段";
    deleteBtn.setAttribute("aria-label", "刪除區段");
    deleteBtn.addEventListener("click", () => {
      menu.classList.add("hidden");
      deletePostSection(section.id);
    });
    menuBtn.addEventListener("click", (event) => {
      event.stopPropagation();
      const wasOpen = !menu.classList.contains("hidden");
      document.querySelectorAll(".post-menu:not(.hidden), .post-section-menu:not(.hidden)").forEach((item) => item.classList.add("hidden"));
      if (!wasOpen) menu.classList.remove("hidden");
    });
    menu.addEventListener("click", (event) => event.stopPropagation());
    menu.append(addLink, descBtn, deleteBtn);
    titleRow.append(titleButton, menuBtn, menu);
    head.appendChild(titleRow);
    if (section.description) head.appendChild(createEl("p", "post-section-description", section.description));
    const body = createEl("div", "post-section-body");
    renderPostCards(body, postsForSection(postBoardPosts, section.id), { canManage: true, draggable: true });
    body.addEventListener("dragover", (e) => {
      if (!dragPostId) return;
      e.preventDefault();
      e.stopPropagation();
      e.dataTransfer.dropEffect = "move";
      body.classList.add("drop-target");
      body.querySelectorAll(".post-card.drop-before, .post-card.drop-after").forEach((card) => {
        card.classList.remove("drop-before", "drop-after");
      });
      const targetCard = e.target.closest(".post-card[data-post-id]");
      if (targetCard && body.contains(targetCard) && targetCard.dataset.postId !== dragPostId) {
        const rect = targetCard.getBoundingClientRect();
        targetCard.classList.add(e.clientY > rect.top + rect.height / 2 ? "drop-after" : "drop-before");
      }
    });
    body.addEventListener("dragleave", (e) => {
      if (!e.currentTarget.contains(e.relatedTarget)) {
        body.classList.remove("drop-target");
        body.querySelectorAll(".post-card.drop-before, .post-card.drop-after").forEach((card) => {
          card.classList.remove("drop-before", "drop-after");
        });
      }
    });
    body.addEventListener("drop", (e) => {
      e.preventDefault();
      e.stopPropagation();
      body.classList.remove("drop-target");
      if (!dragPostId) return;
      const postId = dragPostId;
      const targetCard = e.target.closest(".post-card[data-post-id]");
      const targetPostId = targetCard && body.contains(targetCard) && targetCard.dataset.postId !== postId ? targetCard.dataset.postId : "";
      const rect = targetCard?.getBoundingClientRect();
      const placeAfter = Boolean(rect && e.clientY > rect.top + rect.height / 2);
      dragPostId = null;
      body.querySelectorAll(".post-card.drop-before, .post-card.drop-after").forEach((card) => {
        card.classList.remove("drop-before", "drop-after");
      });
      reorderPostInSection(postId, section.id, targetPostId, placeAfter);
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
  addSection.setAttribute("aria-label", "新增區段");
  addSection.addEventListener("click", addPostSection);
  boardColumns.appendChild(addSection);
  els.postBoardGrid.appendChild(boardColumns);
}

function commitPostBoardTitleEdit() {
  const page = activePage();
  if (page.type !== "posts") return;
  const currentName = page.name || "貼文板";
  const nextName = els.postBoardTitle.textContent.trim().slice(0, 40) || currentName;
  els.postBoardTitle.textContent = nextName;
  if (nextName === currentName) return;
  pages = pages.map((item) => (item.id === page.id ? { ...item, name: nextName } : item));
  els.postBoardJoinTitle.textContent = nextName;
  renderPages();
  updatePostBoardControls();
  writeState();
  syncActivePostBoardMetadata();
}

function renderPostBoard() {
  const page = activePage();
  if (page.type !== "posts") return;
  const sections = normalizePostSections(postBoardSections.length > 0 ? postBoardSections : page.sections);
  const joinUrl = postBoardJoinUrl(page);
  const boardName = page.name || "貼文板";
  if (document.activeElement !== els.postBoardTitle) els.postBoardTitle.textContent = boardName;
  applyPageTextPalette(page);
  els.postBoardJoinTitle.textContent = boardName;
  els.postBoardDetail.textContent = "";
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
    const user = await requireFirebaseUser(api);
    await api.setDoc(
      postBoardDocRef(api, page.boardId),
      postBoardMetadataPayload(api, page, user, normalizePostSections(page.sections), noteHtml),
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
    await requireFirebaseUser(api);
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
        postBoardPosts = sortPosts(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
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

function postTimestampMs(value) {
  if (value?.toMillis) return value.toMillis();
  const date = value?.toDate ? value.toDate() : value ? new Date(value) : null;
  return date && !Number.isNaN(date.getTime()) ? date.getTime() : 0;
}

function sortPosts(posts) {
  return [...posts].sort((a, b) => {
    const aOrder = Number(a.order);
    const bOrder = Number(b.order);
    const aHasOrder = Number.isFinite(aOrder);
    const bHasOrder = Number.isFinite(bOrder);
    if (aHasOrder && bHasOrder && aOrder !== bOrder) return aOrder - bOrder;
    if (aHasOrder !== bHasOrder) return aHasOrder ? -1 : 1;
    return postTimestampMs(b.createdAt) - postTimestampMs(a.createdAt);
  });
}

function isParticipantMode() {
  return Boolean(new URLSearchParams(window.location.search).get("board"));
}

function setParticipantMessage(text, isError = false) {
  els.participantMessage.textContent = text;
  els.participantMessage.classList.toggle("error", isError);
}

function clearParticipantImagePreview({ clearInput = false } = {}) {
  participantImagePreviewUrls.forEach((url) => URL.revokeObjectURL(url));
  participantImagePreviewUrls = [];
  if (clearInput && els.participantImage) els.participantImage.value = "";
  if (els.participantImagePreviewImg) els.participantImagePreviewImg.innerHTML = "";
  if (els.participantImagePreview) els.participantImagePreview.classList.add("hidden");
}

function updateParticipantImagePreview(files) {
  clearParticipantImagePreview();
  const imageFiles = Array.from(files || []).slice(0, POST_IMAGE_MAX_COUNT);
  if (imageFiles.length === 0) return;
  if (imageFiles.some((file) => !file.type.startsWith("image/"))) {
    clearParticipantImagePreview({ clearInput: true });
    setParticipantMessage("請選擇圖片檔，最多 5 張。", true);
    return;
  }
  if ((files?.length || 0) > POST_IMAGE_MAX_COUNT) {
    setParticipantMessage(`最多可上傳 ${POST_IMAGE_MAX_COUNT} 張圖片，已先預覽前 ${POST_IMAGE_MAX_COUNT} 張。`);
  } else {
    els.participantMessage.textContent = "";
    els.participantMessage.classList.remove("error");
  }
  imageFiles.forEach((file, index) => {
    const url = URL.createObjectURL(file);
    participantImagePreviewUrls.push(url);
    const item = createEl("figure", "participant-image-preview-item");
    const img = document.createElement("img");
    img.src = url;
    img.alt = `待上傳圖片預覽 ${index + 1}`;
    item.append(img, createEl("figcaption", "", `${index + 1}/${imageFiles.length}`));
    els.participantImagePreviewImg.appendChild(item);
  });
  els.participantImagePreview.classList.remove("hidden");
}

function showParticipantBoard() {
  participantEditingPostId = null;
  els.participantFormTitle.textContent = "新增貼文";
  clearParticipantImagePreview({ clearInput: true });
  els.participantBoardScreen.classList.remove("hidden");
  els.participantFormScreen.classList.add("hidden");
}

function showParticipantForm(sectionId) {
  if (sectionId) els.participantSection.value = sectionId;
  els.participantMessage.textContent = "";
  els.participantMessage.classList.remove("error");
  clearParticipantImagePreview({ clearInput: true });
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
  clearParticipantImagePreview({ clearInput: true });
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
    await requireFirebaseUser(api);
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

function applyParticipantTextPalette(data = {}, imageLuminance) {
  const palette = pageTextPalette({ type: "posts", ...data }, imageLuminance);
  els.participantView.style.setProperty("--page-text", palette.text);
  els.participantView.style.setProperty("--page-title-text", palette.title);
  els.participantView.style.setProperty("--page-muted-text", palette.muted);
  els.participantView.style.setProperty("--page-kicker-text", palette.kicker);
  els.participantView.classList.toggle("page-bg-light", palette.isLight);
  els.participantView.classList.toggle("page-bg-dark", !palette.isLight);
  els.participantTitle.style.color = palette.title;
}

function applyParticipantAppearance(data = {}) {
  const bgColor = typeof data.bgColor === "string" ? data.bgColor : "";
  const bgImage = typeof data.bgImage === "string" ? data.bgImage : "";
  const opacity = Number.isFinite(Number(data.bgOpacity)) ? Math.max(0, Math.min(100, Number(data.bgOpacity))) : 60;
  const appearance = { type: "posts", bgColor, bgImage, bgOpacity: opacity, titleColor: typeof data.titleColor === "string" ? data.titleColor : "" };
  applyParticipantTextPalette(appearance);
  if (bgImage) {
    const veil = Math.max(0, Math.min(0.75, 1 - opacity / 100));
    els.participantView.style.backgroundColor = bgColor || "#111820";
    els.participantView.style.backgroundImage = `linear-gradient(rgba(255,255,255,${veil}), rgba(255,255,255,${veil})), url("${bgImage}")`;
    els.participantView.style.backgroundSize = "cover";
    els.participantView.style.backgroundPosition = "center";
    els.participantView.style.backgroundAttachment = "fixed";
    estimateImageLuminance(bgImage).then((luminance) => applyParticipantTextPalette(appearance, luminance));
  } else if (bgColor) {
    els.participantView.style.backgroundColor = bgColor;
    els.participantView.style.backgroundImage = "none";
    els.participantView.style.backgroundSize = "";
    els.participantView.style.backgroundPosition = "";
    els.participantView.style.backgroundAttachment = "";
  } else {
    els.participantView.style.backgroundColor = "";
    els.participantView.style.backgroundImage = "";
    els.participantView.style.backgroundSize = "";
    els.participantView.style.backgroundPosition = "";
    els.participantView.style.backgroundAttachment = "";
  }
}

function postContentElement(post, className = "post-content") {
  const content = createEl("p", className);
  content.innerHTML = linkifyText(post.content || "");
  return content;
}

function closeParticipantPostModal() {
  els.participantPostModal.classList.add("hidden");
  els.participantPostModalMeta.innerHTML = "";
  els.participantPostModalContent.innerHTML = "";
  els.participantPostModalImage.innerHTML = "";
}

function openParticipantPostModal(post) {
  els.participantPostModalMeta.innerHTML = "";
  els.participantPostModalMeta.append(
    createEl("strong", "", post.author || "匿名"),
    createEl("span", "", formatPostTime(post.createdAt)),
  );
  els.participantPostModalContent.innerHTML = "";
  if (post.content) {
    els.participantPostModalContent.appendChild(postContentElement(post, "post-content participant-detail-content"));
  } else {
    els.participantPostModalContent.appendChild(createEl("p", "post-content participant-detail-content muted", "這則貼文沒有文字內容。"));
  }
  els.participantPostModalImage.innerHTML = "";
  const imageGallery = createPostImageGallery(post, { className: "participant-detail-image-gallery" });
  if (imageGallery) els.participantPostModalImage.appendChild(imageGallery);
  els.participantPostModal.classList.remove("hidden");
}

function renderParticipantPostCards(container, posts) {
  container.innerHTML = "";
  if (posts.length === 0) {
    container.appendChild(createEl("div", "post-card empty-post", "目前還沒有貼文"));
    return;
  }
  posts.forEach((post) => {
    const card = createEl("article", "post-card participant-post-card");
    const openDetail = (event) => {
      if (event.target.closest("a, button")) return;
      openParticipantPostModal(post);
    };
    card.addEventListener("click", openDetail);
    const meta = createEl("div", "post-meta");
    meta.append(createEl("strong", "", post.author || "匿名"), createEl("span", "", formatPostTime(post.createdAt)));
    card.appendChild(meta);
    if (post.content) card.appendChild(postContentElement(post));
    const imageGallery = createPostImageGallery(post, { className: "participant-card-image-gallery" });
    if (imageGallery) {
      imageGallery.addEventListener("click", (event) => event.stopPropagation());
      card.appendChild(imageGallery);
    }
    const actions = createEl("div", "participant-post-actions");
    const openBtn = createEl("button", "participant-post-open", "查看內容");
    openBtn.type = "button";
    openBtn.addEventListener("click", () => openParticipantPostModal(post));
    actions.appendChild(openBtn);
    if (participantUid && post.authorUid === participantUid) {
      const editBtn = createEl("button", "participant-post-edit", "編輯");
      editBtn.type = "button";
      editBtn.addEventListener("click", () => showParticipantEditForm(post));
      const delBtn = createEl("button", "participant-post-delete", "刪除");
      delBtn.type = "button";
      delBtn.addEventListener("click", async () => {
        if (await showConfirmModal("確定要刪除這則貼文嗎？")) deleteParticipantPost(post.id);
      });
      actions.append(editBtn, delBtn);
    }
    card.appendChild(actions);
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
    renderParticipantPostCards(body, sortPosts(posts));
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
    addBtn.setAttribute("aria-label", `投稿到「${section.name}」`);
    addBtn.addEventListener("click", () => showParticipantForm(section.id));
    head.append(titleEl, addBtn);
    if (section.description) head.appendChild(createEl("p", "post-section-description", section.description));
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

  return imageFileToJpegDataUrl(file, {
    maxSide: 960,
    maxBytes: POST_IMAGE_MAX_ITEM_LENGTH,
    qualities: [0.76, 0.68, 0.6, 0.52, 0.44, 0.36],
  });
}

async function imageFileToBackgroundDataUrl(file) {
  if (!file) return "";
  if (!file.type.startsWith("image/")) throw new Error("請選擇圖片檔。");
  const dataUrl = await imageFileToJpegDataUrl(file, {
    maxSide: 1600,
    maxBytes: POST_BOARD_BACKGROUND_IMAGE_LIMIT,
    qualities: [0.82, 0.74, 0.66, 0.58, 0.5, 0.42, 0.34],
  });
  if (dataUrl.length > POST_BOARD_BACKGROUND_IMAGE_LIMIT) {
    throw new Error("背景圖片壓縮後仍太大，請換一張較小的圖片。");
  }
  return dataUrl;
}

async function submitParticipantPost(event) {
  event.preventDefault();
  const params = new URLSearchParams(window.location.search);
  const boardId = params.get("board");
  const author = els.participantName.value.trim().slice(0, 40);
  const sectionId = els.participantSection.value || params.get("section") || "section-a";
  const content = els.participantContent.value.trim().slice(0, 600);
  const files = Array.from(els.participantImage.files || []).slice(0, POST_IMAGE_MAX_COUNT);
  if (!boardId) return;
  if (!content && files.length === 0) {
    setParticipantMessage("請先輸入內容或選擇圖片。", true);
    return;
  }

  try {
    els.participantSubmit.disabled = true;
    setParticipantMessage("正在送出...");
    const imageDataUrls = [];
    for (const file of files) {
      const imageDataUrl = await imageFileToPostDataUrl(file);
      if (imageDataUrl.length > POST_IMAGE_MAX_ITEM_LENGTH) {
        throw new Error("有圖片太大，請換一張較小的圖片。");
      }
      imageDataUrls.push(imageDataUrl);
    }
    const totalImageLength = imageDataUrls.reduce((sum, source) => sum + source.length, 0);
    if (totalImageLength > POST_IMAGE_MAX_TOTAL_LENGTH) {
      throw new Error("圖片總容量太大，請減少張數或換較小的圖片。");
    }
    const api = await loadFirebaseApi();
    const user = await requireFirebaseUser(api);
    participantUid = user.uid;
    if (participantEditingPostId) {
      const ref = api.doc(postBoardPostsRef(api, boardId), participantEditingPostId);
      const updatePayload = {
        author,
        sectionId,
        content,
        updatedAt: api.serverTimestamp(),
      };
      if (imageDataUrls.length > 0) {
        updatePayload.imageDataUrls = imageDataUrls;
        updatePayload.imageDataUrl = imageDataUrls[0];
      }
      await api.updateDoc(ref, updatePayload);
      participantEditingPostId = null;
    } else {
      await api.addDoc(postBoardPostsRef(api, boardId), {
        author,
        sectionId,
        content,
        imageDataUrl: imageDataUrls[0] || "",
        imageDataUrls,
        order: -Date.now(),
        createdAt: api.serverTimestamp(),
        authorUid: participantUid || "",
      });
    }
    els.participantContent.value = "";
    els.participantImage.value = "";
    clearParticipantImagePreview();
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

  els.homeView.classList.add("hidden");
  els.studio.classList.add("hidden");
  els.participantView.classList.remove("hidden");
  document.body.classList.remove("home-mode", "studio-mode");
  els.participantTitle.textContent = title;
  document.title = title;
  els.participantForm.addEventListener("submit", submitParticipantPost);
  els.participantOpenForm.addEventListener("click", () => showParticipantForm());
  els.participantBack.addEventListener("click", showParticipantBoard);

  try {
    const api = await loadFirebaseApi();
    const user = await requireFirebaseUser(api);
    participantUid = user.uid;
    const boardSnapshot = await api.getDoc(postBoardDocRef(api, boardId));
    if (boardSnapshot.exists() && boardSnapshot.data()?.title) {
      els.participantTitle.textContent = boardSnapshot.data().title;
      document.title = boardSnapshot.data().title;
    }
    applyParticipantAppearance(boardSnapshot.data() || {});
    participantBoardSections = normalizePostSections(boardSnapshot.data()?.sections || []);
    renderParticipantNote(boardSnapshot.data()?.note || "");
    renderParticipantSections(participantBoardSections, selectedSectionId);
    renderParticipantBoard(participantBoardSections, participantBoardPosts);

    api.onSnapshot(postBoardDocRef(api, boardId), (snapshot) => {
      applyParticipantAppearance(snapshot.data() || {});
      participantBoardSections = normalizePostSections(snapshot.data()?.sections || []);
      renderParticipantNote(snapshot.data()?.note || "");
      renderParticipantSections(participantBoardSections, els.participantSection.value || selectedSectionId);
      renderParticipantBoard(participantBoardSections, participantBoardPosts);
    });

    const postsQuery = api.query(postBoardPostsRef(api, boardId), api.orderBy("createdAt", "desc"));
    participantUnsubscribe = api.onSnapshot(
      postsQuery,
      (snapshot) => {
        participantBoardPosts = sortPosts(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
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
  await saveCurrentFile();
}

async function loadLayoutsFromCloud() {
  await openStudioFile();
}

function setActiveTool(tool) {
  if (tool && moreToolsOpen) setMoreToolsOpen(false);
  activeTool = tool;
  els.dockItems.forEach((item) => {
    item.classList.toggle("active", item.dataset.tool === tool);
  });
  document.querySelectorAll(".rail-btn[data-rail]").forEach((item) => {
    item.classList.toggle("active", item.dataset.rail === tool);
  });
  els.toolPanels.forEach((panel) => {
    panel.classList.toggle("active", panel.dataset.panel === tool);
  });
  writeState();
}

function closeActiveToolPanel() {
  if (!activeTool) return false;
  setActiveTool("");
  return true;
}

function isToolPanelSafeTarget(target) {
  if (!(target instanceof Element)) return false;
  return Boolean(target.closest([
    ".tool-section",
    ".dock-item",
    ".dock-mini",
    ".rail-btn",
    ".top-control",
    ".studio-action-bar",
    ".cmdk-modal",
    ".cmdk-backdrop",
    ".prompt-modal",
    ".confirm-modal",
    ".post-edit-modal",
    ".post-board-qr-modal",
    ".image-viewer",
    ".settings-backdrop",
  ].join(",")));
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
  if (dockCollapsed) {
    setActiveTool("");
    setHiddenWidgetsOpen(false);
  }
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

  const drivePdfMatch =
    value.match(/drive\.google\.com\/file\/d\/([^/]+)/) ||
    value.match(/[?&]id=([-\w]{25,})/) ||
    value.match(/uc\?[^#]*id=([-\w]{25,})/);
  if (drivePdfMatch) {
    const id = drivePdfMatch[1];
    return {
      id,
      kind: "drive-pdf",
      slide: "",
      editUrl: `https://drive.google.com/file/d/${id}/view`,
    };
  }

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

  if (slides.kind === "drive-pdf") {
    return `https://drive.google.com/file/d/${slides.id}/preview`;
  }

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
    setSlidesMessage("請貼上 Google Slides 分享連結、embed 連結、簡報 ID，或 Google Drive PDF 分享連結。", true);
    return;
  }

  currentSlides = slides;
  const playerUrl = buildSlidesUrl(slides);
  loadPlayerUrl(playerUrl);
  updateOpenSlidesLink();
  updateSlidesDebug(playerUrl);
  if (slides.kind === "drive-pdf") {
    setSlidesMessage("已載入 Google Drive PDF。若畫面空白，請確認 PDF 分享權限是知道連結的人可檢視。");
  } else if (isLocalFileMode()) {
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
  if (currentSlides?.kind === "drive-pdf") {
    setSlidesMessage("Google Drive PDF 使用固定預覽模式，不需要切換播放模式。");
    return;
  }

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
  const title = els.timerTitle.value.trim() || "計時器";
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
  els.timerWidget.classList.toggle("is-running", Boolean(timerId) && timerRemaining > 0);
  els.timerWidget.classList.toggle("is-done", timerRemaining === 0);
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
  els.stageClockTitle.textContent = els.clockTitle.value.trim() || "現在時間";
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
  const previousSuppressFileAutoSave = suppressFileAutoSave;
  suppressFileAutoSave = true;
  const state = readState();
  pages = normalizePages(state.pages);
  activePageId = pages.some((page) => page.id === state.activePageId) ? state.activePageId : DEFAULT_PAGE.id;
  const restoredSlidesUrl = typeof state.slidesUrl === "string" ? state.slidesUrl : DEFAULT_SLIDES_URL;
  els.slidesUrl.value = restoredSlidesUrl;
  els.timerMinutes.value = state.timerMinutes || "5";
  els.timerSeconds.value = state.timerSeconds || "0";
  els.timerTitle.value = state.timerTitle === "Timer" ? "計時器" : state.timerTitle || "計時器";
  els.showTimer.checked = Boolean(state.showTimer);
  els.showClock.checked = Boolean(state.showClock);
  els.clockTitle.value = state.clockTitle === "Clock" ? "現在時間" : state.clockTitle || "現在時間";
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
  currentSlides = state.currentSlides || parseSlidesInput(restoredSlidesUrl);
  activeTool = state.activeTool || "";
  dockCollapsed = Boolean(state.dockCollapsed);
  moreToolsOpen = Boolean(state.moreToolsOpen);
  hiddenWidgetsOpen = Boolean(state.hiddenWidgetsOpen);
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
  setHiddenWidgetsOpen(hiddenWidgetsOpen);
  updateStageForPage();
  suppressFileAutoSave = previousSuppressFileAutoSave;
}

els.loadSlides.addEventListener("click", loadSlides);
els.homeEnterStudio.addEventListener("click", openStudioFile);
els.homeNewStudio.addEventListener("click", createBlankStudio);
els.homeSaveLayout.addEventListener("click", saveHomeLayout);
els.homeLayoutName.addEventListener("keydown", (event) => {
  if (event.key === "Enter") saveHomeLayout();
});
els.homeLayoutName.addEventListener("input", () => setFileInputs(els.homeLayoutName.value));
els.homeSyncCode.addEventListener("input", () => {
  els.syncCode.value = els.homeSyncCode.value;
  patchStoredState({ syncCode: els.homeSyncCode.value });
});
els.homeSyncLayouts.addEventListener("click", saveCurrentFile);
els.homeLoadCloudLayouts.addEventListener("click", openStudioFile);
els.homeExportLayouts.addEventListener("click", exportLayouts);
els.homeImportLayouts.addEventListener("change", () => importLayoutsFromFile(els.homeImportLayouts.files?.[0]));
els.homeDriveOpen.addEventListener("click", openDriveStudioFilePicker);
els.homeDriveNew.addEventListener("click", createDriveBlankStudio);
els.homeFolderImport.addEventListener("change", () => importPlaybackFolderFiles(els.homeFolderImport.files));
els.homeChooseFolder.addEventListener("click", choosePlaybackFolder);
els.homeRefreshFolder.addEventListener("click", () => scanDriveStudioFolder());
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
  applyPageTextPalette(activePage());
  writeState();
  syncActivePostBoardMetadata();
});
els.clearPageTitleColor.addEventListener("click", () => {
  const page = activePage();
  pages = pages.map((p) => (p.id === page.id ? { ...p, titleColor: "" } : p));
  els.pageTitleColor.value = "#1a2330";
  applyPageTextPalette(activePage());
  writeState();
  syncActivePostBoardMetadata();
});
function applyBgColor(color) {
  const page = activePage();
  pages = pages.map((p) => (p.id === page.id ? { ...p, bgColor: color, bgImage: "" } : p));
  els.pageBgColor.value = color;
  els.pageBgOpacityRow.classList.add("hidden");
  applyPageBackground(activePage());
  els.pageBgStatus.textContent = `背景顏色：${color}`;
  updateSwatchActive(color);
  writeState();
  syncActivePostBoardMetadata();
}

function updateSwatchActive(color) {
  document.querySelectorAll(".swatch").forEach((s) => {
    s.classList.toggle("active", s.dataset.color === color);
  });
}

els.pageBgColor.addEventListener("change", () => applyBgColor(els.pageBgColor.value));

document.querySelectorAll(".swatch").forEach((btn) => {
  btn.addEventListener("click", () => applyBgColor(btn.dataset.color));
});
els.pageBgImageFile.addEventListener("change", async () => {
  const file = els.pageBgImageFile.files[0];
  if (!file) return;
  els.pageBgStatus.textContent = "上傳中…";
  try {
    const dataUrl = await imageFileToBackgroundDataUrl(file);
    const page = activePage();
    const opacity = Number(els.pageBgOpacity.value) || 60;
    pages = pages.map((p) => (p.id === page.id ? { ...p, bgImage: dataUrl, bgColor: "", bgOpacity: opacity } : p));
    applyPageBackground(activePage());
    els.pageBgColor.value = "#080a0e";
    els.pageBgOpacityRow.classList.remove("hidden");
    els.pageBgStatus.textContent = "已設定背景圖片。";
    writeState();
    syncActivePostBoardMetadata();
  } catch (error) {
    els.pageBgStatus.textContent = error.message || "圖片讀取失敗，請再試一次。";
  }
});
els.pageBgOpacity.addEventListener("input", () => {
  const val = Number(els.pageBgOpacity.value);
  els.pageBgOpacityValue.textContent = val;
  const page = activePage();
  pages = pages.map((p) => (p.id === page.id ? { ...p, bgOpacity: val } : p));
  applyPageBackground(activePage());
  writeState();
});
els.pageBgOpacity.addEventListener("change", syncActivePostBoardMetadata);
els.clearPageBg.addEventListener("click", () => {
  const page = activePage();
  pages = pages.map((p) => (p.id === page.id ? { ...p, bgColor: "", bgImage: "" } : p));
  els.pageBgImageFile.value = "";
  els.pageBgColor.value = "#080a0e";
  els.pageBgOpacityRow.classList.add("hidden");
  els.pageBgStatus.textContent = "";
  updateSwatchActive("");
  applyPageBackground(activePage());
  writeState();
  syncActivePostBoardMetadata();
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
els.exportPdf.addEventListener("click", exportPostBoardToPdf);
els.exportAllFiles.addEventListener("click", exportPostBoardAllFiles);
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
els.hiddenWidgetsButton.addEventListener("click", () => setHiddenWidgetsOpen(!hiddenWidgetsOpen));
els.showAllCreatedWidgets.addEventListener("click", () => setAllDynamicWidgetsHidden(false));
els.hideAllCreatedWidgets.addEventListener("click", () => setAllDynamicWidgetsHidden(true));
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
els.layoutName.addEventListener("input", () => setFileInputs(els.layoutName.value));
els.syncCode.addEventListener("input", () => {
  els.homeSyncCode.value = els.syncCode.value;
  writeState();
});
els.syncLayouts.addEventListener("click", saveCurrentFile);
els.loadCloudLayouts.addEventListener("click", openStudioFile);
els.alignLeftWidgets.addEventListener("click", () => arrangeWidgets("left"));
els.alignCenterWidgets.addEventListener("click", () => arrangeWidgets("center"));
els.alignRightWidgets.addEventListener("click", () => arrangeWidgets("right"));
els.distributeHorizontalWidgets.addEventListener("click", () => arrangeWidgets("horizontal"));
els.distributeVerticalWidgets.addEventListener("click", () => arrangeWidgets("vertical"));
els.clearWidgetSelection.addEventListener("click", clearWidgetSelection);
els.imageViewerClose.addEventListener("click", closeImageViewer);
els.imageViewerPrev.addEventListener("click", () => navigateImageViewer(-1));
els.imageViewerNext.addEventListener("click", () => navigateImageViewer(1));
els.imageViewerRotateLeft.addEventListener("click", () => rotateImageViewer(-90));
els.imageViewerRotateRight.addEventListener("click", () => rotateImageViewer(90));
els.imageViewerRotateReset.addEventListener("click", () => setImageViewerRotation(0));
els.imageViewerSaveRotation.addEventListener("click", saveImageViewerRotation);
els.imageViewer.addEventListener("click", (event) => {
  if (event.target === els.imageViewer) closeImageViewer();
});
els.imageViewerZoom.addEventListener("input", () => {
  setImageViewerZoom(Number(els.imageViewerZoom.value));
});
els.participantPostModalClose.addEventListener("click", closeParticipantPostModal);
els.participantPostModal.addEventListener("click", (event) => {
  if (event.target === els.participantPostModal) closeParticipantPostModal();
});
els.participantImage.addEventListener("change", () => updateParticipantImagePreview(els.participantImage.files || []));
els.participantImageClear.addEventListener("click", () => clearParticipantImagePreview({ clearInput: true }));
els.postBoardQrToggle.addEventListener("click", () => {
  els.postBoardJoinCard.classList.toggle("expanded");
});
els.postBoardJoinCard.addEventListener("click", (event) => event.stopPropagation());
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
els.postBoardTitle.addEventListener("focus", () => {
  document.querySelectorAll(".post-menu:not(.hidden), .post-section-menu:not(.hidden)").forEach((menu) => menu.classList.add("hidden"));
});
els.postBoardTitle.addEventListener("blur", commitPostBoardTitleEdit);
els.postBoardTitle.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    els.postBoardTitle.blur();
  }
  if (event.key === "Escape") {
    event.preventDefault();
    els.postBoardTitle.textContent = activePage().name || "貼文板";
    els.postBoardTitle.blur();
  }
});
document.addEventListener("click", () => {
  document.querySelectorAll(".post-menu:not(.hidden), .post-section-menu:not(.hidden)").forEach((m) => m.classList.add("hidden"));
  els.postBoardJoinCard.classList.remove("expanded");
});

function closeAllWidgetSettings() {
  let changed = false;
  dynamicWidgets.forEach((inst) => {
    if (inst.state.settingsOpen) {
      inst.state.settingsOpen = false;
      renderDynamicWidget(inst);
      changed = true;
    }
  });
  els.settingsBackdrop.classList.add("hidden");
  if (changed) writeState();
}

els.settingsBackdrop.addEventListener("mousedown", closeAllWidgetSettings);

document.addEventListener("mousedown", (e) => {
  if (!isToolPanelSafeTarget(e.target)) closeActiveToolPanel();
  if (e.target.closest(".dynamic-settings") || e.target.closest(".dynamic-settings-btn")) return;
  closeAllWidgetSettings();
});
window.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    if (!els.postBoardQrModal.classList.contains("hidden")) {
      els.postBoardQrModal.classList.add("hidden");
    } else if (!els.imageViewer.classList.contains("hidden")) {
      closeImageViewer();
    } else if (!els.participantPostModal.classList.contains("hidden")) {
      closeParticipantPostModal();
    } else if (closeActiveToolPanel()) {
      return;
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
    if (item.dataset.tool === "layouts") {
      showHome();
      return;
    }
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
window.addEventListener("focus", () => {
  if (playbackDirectoryHandle && els.homeView && !els.homeView.classList.contains("hidden")) {
    scanPlaybackFolder({ silent: true });
  }
});

initControlTooltips();

if (isParticipantMode()) {
  initParticipantMode();
} else {
  initHomeMode();
}

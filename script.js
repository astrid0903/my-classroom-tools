const STORAGE_KEY = "classroomSlidesStudio.v1";

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
  showGroups: document.querySelector("#show-groups"),
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
  stageGroups: document.querySelector("#stage-groups"),
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

function readState() {
  try {
    return JSON.parse(window.localStorage.getItem(STORAGE_KEY)) || {};
  } catch {
    return {};
  }
}

function writeState(extra = {}) {
  const state = {
    slidesUrl: els.slidesUrl.value,
    timerMinutes: els.timerMinutes.value,
    timerSeconds: els.timerSeconds.value,
    timerTitle: els.timerTitle.value,
    showTimer: els.showTimer.checked,
    showGroups: els.showGroups.checked,
    studentList: els.studentList.value,
    groupCount: els.groupCount.value,
    shuffleGroups: els.shuffleGroups.checked,
    currentEmbedUrl: els.frame.getAttribute("src") || "",
    slidesMode,
    currentSlides,
    activeTool,
    groups,
    manualGroups: readManualGroups(),
    widgets: {
      timer: widgetPosition(els.timerWidget),
      groups: widgetPosition(els.groupsWidget),
    },
    ...extra,
  };
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
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
  setActiveTool(activeTool === tool ? "" : tool);
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
  const left = Math.min(maxLeft, Math.max(8, event.clientX - stageRect.left - offsetX));
  const top = Math.min(maxTop, Math.max(8, event.clientY - stageRect.top - offsetY));

  widget.style.left = `${left}px`;
  widget.style.top = `${top}px`;
}

function stopDrag() {
  if (!dragState) return;
  dragState = null;
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
  const minWidth = widget.dataset.widget === "timer" ? 190 : 220;
  const minHeight = widget.dataset.widget === "timer" ? 118 : 130;
  const maxWidth = Math.max(minWidth, stageRect.width - left - 8);
  const maxHeight = Math.max(minHeight, stageRect.height - top - 8);
  const width = Math.min(maxWidth, Math.max(minWidth, startWidth + event.clientX - startX));
  const height = Math.min(maxHeight, Math.max(minHeight, startHeight + event.clientY - startY));

  widget.style.width = `${width}px`;
  widget.style.height = `${height}px`;
}

function stopResize() {
  if (!resizeState) return;
  resizeState = null;
  writeState();
}

function restore() {
  const state = readState();
  els.slidesUrl.value = state.slidesUrl || "";
  els.timerMinutes.value = state.timerMinutes || "5";
  els.timerSeconds.value = state.timerSeconds || "0";
  els.timerTitle.value = state.timerTitle || "Timer";
  els.showTimer.checked = Boolean(state.showTimer);
  els.showGroups.checked = Boolean(state.showGroups);
  els.studentList.value = state.studentList || "";
  els.groupCount.value = state.groupCount || "4";
  els.shuffleGroups.checked = state.shuffleGroups !== false;
  slidesMode = state.slidesMode || "preview";
  currentSlides = state.currentSlides || parseSlidesInput(state.slidesUrl || "");
  activeTool = state.activeTool || "";
  groups = Array.isArray(state.groups) ? state.groups : [];
  manualGroups = Array.isArray(state.manualGroups) ? state.manualGroups : groups;

  applyWidgetPosition(els.timerWidget, state.widgets?.timer);
  applyWidgetPosition(els.groupsWidget, state.widgets?.groups);

  if (currentSlides) updateOpenSlidesLink();

  if (currentSlides) {
    const playerUrl = buildSlidesUrl(currentSlides);
    loadPlayerUrl(playerUrl);
    updateSlidesDebug(playerUrl);
    writeState({ currentEmbedUrl: playerUrl });
  }

  resetTimer();
  if (manualGroups.length > 0) buildManualGroups(manualGroups);
  renderGroups();
  setActiveTool(activeTool);
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
els.timerStart.addEventListener("click", startTimer);
els.timerPause.addEventListener("click", pauseTimer);
els.timerReset.addEventListener("click", resetTimer);
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
els.showGroups.addEventListener("change", () => {
  renderGroups();
  writeState();
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
els.dockItems.forEach((item) => {
  item.addEventListener("click", () => toggleActiveTool(item.dataset.tool));
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

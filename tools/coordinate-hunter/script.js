const grid = document.querySelector("#grid");
const form = document.querySelector("#guess-form");
const guessInput = document.querySelector("#guess");
const message = document.querySelector("#message");
const scoreEl = document.querySelector("#score");
const remainingEl = document.querySelector("#remaining");
const timerEl = document.querySelector("#timer");
const restartButton = document.querySelector("#restart");
const foundList = document.querySelector("#found");

const MIN = -5;
const MAX = 5;
const TARGET_COUNT = 10;
const ROUND_SECONDS = 60;

let targets = new Set();
let found = new Set();
let recentHit = "";
let secondsLeft = ROUND_SECONDS;
let timerId = null;
let gameOver = false;

function keyOf(x, y) {
  return `${x},${y}`;
}

function parseGuess(value) {
  const match = value.trim().match(/^(-?\d+)\s*,\s*(-?\d+)$/);
  if (!match) return null;

  const x = Number(match[1]);
  const y = Number(match[2]);
  if (!Number.isInteger(x) || !Number.isInteger(y)) return null;
  if (x < MIN || x > MAX || y < MIN || y > MAX) return null;

  return { x, y, key: keyOf(x, y) };
}

function generateTargets() {
  const next = new Set();
  while (next.size < TARGET_COUNT) {
    const x = Math.floor(Math.random() * (MAX - MIN + 1)) + MIN;
    const y = Math.floor(Math.random() * (MAX - MIN + 1)) + MIN;
    next.add(keyOf(x, y));
  }
  return next;
}

function buildGrid() {
  grid.innerHTML = "";
  for (let y = MAX; y >= MIN; y -= 1) {
    for (let x = MIN; x <= MAX; x += 1) {
      const cell = document.createElement("div");
      const key = keyOf(x, y);
      cell.className = "cell";
      cell.dataset.key = key;
      cell.setAttribute("role", "gridcell");
      cell.setAttribute("aria-label", `座標 ${key}`);

      if (y === 0) cell.classList.add("axis-x");
      if (x === 0) cell.classList.add("axis-y");
      if (x === 0 && y === 0) cell.classList.add("origin");
      if (x === 0 || y === 0) cell.textContent = key;

      grid.appendChild(cell);
    }
  }
}

function render() {
  scoreEl.textContent = found.size;
  remainingEl.textContent = TARGET_COUNT - found.size;
  timerEl.textContent = secondsLeft;

  document.querySelectorAll(".cell").forEach((cell) => {
    const isHit = found.has(cell.dataset.key);
    cell.classList.toggle("hit", isHit);
    cell.classList.toggle("recent", isHit && cell.dataset.key === recentHit);
  });

  foundList.innerHTML = "";
  [...found].sort((a, b) => a.localeCompare(b, "en", { numeric: true })).forEach((coord) => {
    const item = document.createElement("li");
    item.textContent = `(${coord})`;
    foundList.appendChild(item);
  });
}

function setMessage(text, state = "") {
  message.textContent = text;
  message.className = `message ${state}`.trim();
}

function finishRound(text) {
  gameOver = true;
  window.clearInterval(timerId);
  guessInput.disabled = true;
  form.querySelector("button").disabled = true;
  setMessage(text, found.size === TARGET_COUNT ? "good" : "bad");
}

function startTimer() {
  window.clearInterval(timerId);
  timerId = window.setInterval(() => {
    secondsLeft -= 1;
    render();

    if (secondsLeft <= 0) {
      finishRound(`時間到，得分 ${found.size} / ${TARGET_COUNT}。`);
    }
  }, 1000);
}

function resetGame() {
  targets = generateTargets();
  found = new Set();
  recentHit = "";
  secondsLeft = ROUND_SECONDS;
  gameOver = false;
  guessInput.disabled = false;
  form.querySelector("button").disabled = false;
  guessInput.value = "";
  setMessage("找出 10 個隱藏座標。");
  render();
  startTimer();
  guessInput.focus();
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (gameOver) return;

  const guess = parseGuess(guessInput.value);
  if (!guess) {
    setMessage("請輸入 -5 到 5 之間的整數座標，例如 2,-3。", "bad");
    guessInput.select();
    return;
  }

  if (found.has(guess.key)) {
    setMessage(`(${guess.key}) 已經命中了，換一格。`);
    guessInput.select();
    return;
  }

  if (targets.has(guess.key)) {
    found.add(guess.key);
    recentHit = guess.key;
    setMessage(`命中 (${guess.key})，得分 +1。`, "good");
    guessInput.value = "";
    render();

    if (found.size === TARGET_COUNT) {
      finishRound(`全數命中，得分 ${TARGET_COUNT} / ${TARGET_COUNT}。`);
    }
    return;
  }

  setMessage(`(${guess.key}) 沒有目標。`, "bad");
  guessInput.select();
});

restartButton.addEventListener("click", resetGame);

buildGrid();
resetGame();

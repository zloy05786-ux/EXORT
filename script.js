const tg = window.Telegram.WebApp;
tg.ready();
tg.expand();

let value = "";

const valueEl = document.getElementById("value");
const mainScreen = document.getElementById("main-screen");
const errorScreen = document.getElementById("error-screen");

function addDigit(d) {
  if (value.length >= 8) return;
  value += d;
  valueEl.textContent = value;
}

function removeDigit() {
  value = value.slice(0, -1);
  valueEl.textContent = value;
}

function submitID() {
  if (!value) return;

  // ❗ пример: правильный ID
  if (value !== "1234") {
    showError();
    return;
  }

  tg.sendData(JSON.stringify({
    exort_id: value
  }));

  tg.close();
}

function showError() {
  mainScreen.classList.add("hidden");
  errorScreen.classList.remove("hidden");
}

function backToInput() {
  value = "";
  valueEl.textContent = "";
  errorScreen.classList.add("hidden");
  mainScreen.classList.remove("hidden");
}

function openSupport() {
  window.location.href = "https://t.me/TEAM_EXORT";
}

// === Telegram WebApp init ===
const tg = window.Telegram.WebApp;
tg.ready();
tg.expand();

// === STATE ===
let value = "";

// === ELEMENTS ===
const input = document.getElementById("value");
const errorScreen = document.getElementById("error-screen");
const mainScreen = document.getElementById("main-screen");

// === FUNCTIONS ===

// Добавление цифры
function addDigit(digit) {
  if (value.length >= 8) return;

  value += digit;
  input.textContent = value;
}

// Удаление цифры
function removeDigit() {
  value = value.slice(0, -1);
  input.textContent = value;
}

// Кнопка ВОЙТИ
function submitID() {
  if (!value) return;

  tg.sendData(JSON.stringify({
    exort_id: value
  }));

  tg.close();
}

// Показ ошибки
function showError() {
  mainScreen.classList.add("hidden");
  errorScreen.classList.remove("hidden");
}

// Назад к вводу
function backToInput() {
  value = "";
  input.textContent = "";
  errorScreen.classList.add("hidden");
  mainScreen.classList.remove("hidden");
}

// Переход в личку
function openSupport() {
  window.location.href = "https://t.me/TEAM_EXORT";
}

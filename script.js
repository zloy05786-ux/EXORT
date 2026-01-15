const valEl = document.getElementById("val");
const error = document.getElementById("error");
let value = "";

function add(n) {
  if (value.length < 10) {
    value += n;
    valEl.textContent = value;
  }
}

function del() {
  value = value.slice(0, -1);
  valEl.textContent = value;
}

document.querySelector(".enter").onclick = () => {
  if (!value) return;
  error.classList.remove("hidden");
};

function closeError() {
  error.classList.add("hidden");
  value = "";
  valEl.textContent = "";
}

function goBack() {
  if (window.Telegram?.WebApp) {
    Telegram.WebApp.close();
  } else {
    history.back();
  }
}

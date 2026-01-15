let val = "";

function add(n) {
  if (val.length < 8) {
    val += n;
    update();
  }
}

function del() {
  val = val.slice(0, -1);
  update();
}

function update() {
  document.getElementById("value").textContent = val;
}

function check() {
  document.getElementById("error").classList.remove("hidden");
}

function back() {
  document.getElementById("error").classList.add("hidden");
  val = "";
  update();
}

function openChat() {
  window.location.href = "https://t.me/TEAM_EXORT";
}

function check() {
  if (!window.Telegram || !window.Telegram.WebApp) return;

  const tg = window.Telegram.WebApp;

  tg.sendData(JSON.stringify({
    exort_id: val
  }));

  tg.close();
}


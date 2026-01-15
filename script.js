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

function tap(btn) {
  btn.animate(
    [{ transform: "scale(1)" }, { transform: "scale(.9)" }, { transform: "scale(1)" }],
    { duration: 120 }
  );
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

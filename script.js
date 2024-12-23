function checkPassword() {
  const correctPassword = "T.weihnachten24.B";
  const input = document.getElementById("password").value;
  const result = document.getElementById("result");
  const surprise = document.getElementById("surprise");

  if (input === correctPassword) {
    result.textContent = "";
    surprise.classList.remove("hidden");
  } else {
    result.textContent = "Falsches Passwort. Versuch es noch einmal!";
    result.style.color = "red";
  }
}

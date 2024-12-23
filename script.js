// Liste mit Hinweisen
const hints = [
  "Falsches Passwort, versuche es erneut!",
  "Tipp: Ich hab mich an deiner Passwort auswahl inspirieren lassen",
  "Tipp: weihnachten",
  "Tipp: x.weihnachtenxx.x",
  "Tipp: Es beginnt mit einem 'T' und endet mit 'B'.",
  "Das Passwort ist T.weihnachten24.B",
];

// Zähler für die Hinweise
let hintIndex = 0;

function checkPassword() {
  const correctPassword = "T.weihnachten24.B";
  const input = document.getElementById("password").value;
  const result = document.getElementById("result");
  const surprise = document.getElementById("surprise");

  if (input === correctPassword) {
    result.textContent = "";
    surprise.classList.remove("hidden");
  } else {
    result.textContent = hints[hintIndex];
    result.style.color = "orange";

    // Erhöhe den Index, starte bei 0, wenn alle Hinweise gezeigt wurden
    hintIndex = (hintIndex + 1) % hints.length;
  }
}

const flipButtons = document.querySelectorAll(".flipBtn");
const backButtons = document.querySelectorAll(".backBtn");
const cards = document.querySelectorAll(".card");
const popup = document.getElementById("thankYouPopup");
let flippedCount = 0;

// Flip logic
flipButtons.forEach((btn, i) => {
  btn.addEventListener("click", () => {
    if (!cards[i].classList.contains("flip")) flippedCount++;
    cards[i].classList.add("flip");
    createConfetti();
    if (flippedCount === cards.length) showPopup();
  });
});

backButtons.forEach((btn, i) => {
  btn.addEventListener("click", () => {
    cards[i].classList.remove("flip");
    flippedCount--;
  });
});

// Background gradient loop
const colors = [
  "linear-gradient(135deg, #fbc2eb, #a6c1ee)",
  "linear-gradient(135deg, #ffd6a5, #ff9cee)",
  "linear-gradient(135deg, #b5fffc, #ffdee9)",
  "linear-gradient(135deg, #d4fc79, #96e6a1)"
];
let c = 0;
setInterval(() => {
  document.body.style.background = colors[c];
  c = (c + 1) % colors.length;
}, 4000);

// Floating emojis
const floatEmojis = ["🎉", "💖", "🎊", "🌸", "⭐", "🍎", "🎈", "🌷"];
function createEmoji() {
  const e = document.createElement("div");
  e.classList.add("emoji");
  e.textContent = floatEmojis[Math.floor(Math.random() * floatEmojis.length)];
  e.style.left = Math.random() * 100 + "vw";
  e.style.animationDuration = 4 + Math.random() * 6 + "s";
  document.body.appendChild(e);
  setTimeout(() => e.remove(), 9000);
}
setInterval(createEmoji, 300);

// Raining emojis
const rainEmojis = ["💖", "🌟", "🌸", "✨", "💐", "🎈"];
function rainEmoji() {
  const r = document.createElement("div");
  r.classList.add("rain-emoji");
  r.textContent = rainEmojis[Math.floor(Math.random() * rainEmojis.length)];
  r.style.left = Math.random() * 100 + "vw";
  r.style.animation = `rainFall ${3 + Math.random() * 5}s linear`;
  document.body.appendChild(r);
  setTimeout(() => r.remove(), 8000);
}
setInterval(rainEmoji, 150);

// Confetti
function createConfetti() {
  for (let i = 0; i < 20; i++) {
    const confetti = document.createElement("div");
    confetti.textContent = "🎉";
    confetti.classList.add("emoji");
    confetti.style.left = Math.random() * 100 + "vw";
    confetti.style.animationDuration = 2 + Math.random() * 2 + "s";
    document.body.appendChild(confetti);
    setTimeout(() => confetti.remove(), 4000);
  }
}

// Popup
function showPopup() {
  popup.classList.add("show");
  createConfetti();
  setTimeout(() => popup.classList.remove("show"), 5000);
}

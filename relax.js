// ===============================
// RELAXATION – BREATHING LOGIC
// ===============================

const startBtn = document.getElementById("startBreathingBtn");
const breathCircle = document.querySelector(".breath-circle");

let breathing = false;
let interval;

if (startBtn && breathCircle) {
  startBtn.addEventListener("click", () => {

    // Toggle breathing
    if (!breathing) {
      breathing = true;
      startBtn.textContent = "Stop Breathing";

      breathCircle.style.animation = "breathe 6s infinite";

      interval = setInterval(() => {
        // Animation already handles inhale/exhale visually
      }, 6000);

    } else {
      breathing = false;
      startBtn.textContent = "Start Breathing";

      breathCircle.style.animation = "none";
      clearInterval(interval);
    }
  });
}

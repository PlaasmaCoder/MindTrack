// ===============================
// MOOD TRACKER LOGIC
// ===============================

const moodCards = document.querySelectorAll(".mood-card");
const saveBtn = document.getElementById("saveMoodBtn");

let selectedMood = null;

// Select mood
moodCards.forEach(card => {
  card.addEventListener("click", () => {
    // Remove previous selection
    moodCards.forEach(c => c.classList.remove("active"));

    // Mark current as selected
    card.classList.add("active");
    selectedMood = card.dataset.mood;
  });
});

// Save mood
if (saveBtn) {
  saveBtn.addEventListener("click", () => {
    if (!selectedMood) {
      alert("Please select a mood first 🙂");
      return;
    }

    const today = new Date().toLocaleDateString();

    const moodData = {
      date: today,
      mood: selectedMood
    };

    localStorage.setItem("mindtrack-mood", JSON.stringify(moodData));

    alert("Your mood has been saved successfully 🌱");
  });
}

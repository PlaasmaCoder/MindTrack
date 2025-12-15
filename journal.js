// ===============================
// JOURNAL LOGIC (SAVE + RESTORE)
// ===============================

const journalText = document.getElementById("journalText");
const gratitudeInput = document.getElementById("gratitudeInput");
const saveBtn = document.getElementById("saveJournalBtn");
const clearBtn = document.getElementById("clearJournalBtn");

// Load saved journal on page load
window.addEventListener("load", () => {
  const savedJournal = JSON.parse(localStorage.getItem("mindtrack-journal"));

  if (savedJournal) {
    journalText.value = savedJournal.text || "";
    gratitudeInput.value = savedJournal.gratitude || "";
  }
});

// Save journal entry
if (saveBtn) {
  saveBtn.addEventListener("click", () => {
    const journalData = {
      text: journalText.value,
      gratitude: gratitudeInput.value,
      date: new Date().toLocaleString()
    };

    localStorage.setItem("mindtrack-journal", JSON.stringify(journalData));

    alert("Journal entry saved successfully ✨");
  });
}

// Clear journal entry
if (clearBtn) {
  clearBtn.addEventListener("click", () => {
    if (confirm("Are you sure you want to clear your journal entry?")) {
      journalText.value = "";
      gratitudeInput.value = "";
      localStorage.removeItem("mindtrack-journal");
    }
  });
}

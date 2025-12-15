// ===============================
// HOME PAGE ANIMATIONS
// ===============================

// Run when page loads
window.addEventListener("load", () => {
  const animatedElements = document.querySelectorAll(".animate-in");

  animatedElements.forEach((el, index) => {
    setTimeout(() => {
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    }, index * 150);
  });
});

// Animate cards when they enter viewport
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate-in");
      }
    });
  },
  { threshold: 0.2 }
);

// Observe cards
document.querySelectorAll(".card").forEach(card => {
  observer.observe(card);
});

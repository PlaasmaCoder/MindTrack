// ASSESSMENT SCORING

const button = document.querySelector("button");

if (button) {
  button.addEventListener("click", () => {
    const answers = document.querySelectorAll("input[type='radio']:checked");
    let score = answers.length;

    let result = "";

    if (score <= 10) result = "Low stress level";
    else if (score <= 25) result = "Moderate stress level";
    else result = "High stress level";

    alert("Your assessment result: " + result);
  });
}

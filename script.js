const form = document.querySelector("#quiz-form");
const answers = Array.from(document.querySelectorAll(".answer"));
const questions = document.querySelectorAll(".question-item");
const alert = document.querySelector("#alert");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  questions.forEach((questionItem) => {
    questionItem.classList.add("incorrect");
    questionItem.classList.remove("correct");
  });

  const selectedAnswers = answers.filter((answer) => answer.checked);

  selectedAnswers.forEach((answer) => {
    const isCorrect = answer.value === "true";
    const questionItem = answer.closest(".question-item");

    if (isCorrect) {
      questionItem.classList.add("correct");
      questionItem.classList.remove("incorrect");
    } else {
      questionItem.classList.add("incorrect");
      questionItem.classList.remove("correct");
    }

    const allTrue = selectedAnswers.every((answer) => answer.value === "true");
    const allAnswered = selectedAnswers.length === questions.length;

    if (allTrue && allAnswered) {
      alert.classList.add("active");
      setTimeout(() => {
        alert.classList.remove("active");
      }, 1000);
    }
  });
});

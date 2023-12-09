const questionContainers = document.querySelectorAll(".question-container");

questionContainers.forEach((container) => {
  const question = container.querySelector(".question");
  const answer = container.querySelector(".answer");
  const minus = container.querySelector(".minus");
  const plus = container.querySelector(".plus");

  question.addEventListener("click", () => {
    if (answer.classList.contains("show")) {
      // Answer is already active, so close it
      answer.classList.remove("show");
      minus.classList.remove("show");
      plus.classList.remove("hide");
    } else {
      // Close all other open answers and show current one
      questionContainers.forEach((otherContainer) => {
        const otherAnswer = otherContainer.querySelector(".answer");
        const otherMinus = otherContainer.querySelector(".minus");
        const otherPlus = otherContainer.querySelector(".plus");
        if (otherContainer !== container) {
          otherAnswer.classList.remove("show");
          otherMinus.classList.remove("show");
          otherPlus.classList.remove("hide");
        }
      });

      answer.classList.add("show");
      minus.classList.add("show");
      plus.classList.toggle("hide");
    }
  });
});

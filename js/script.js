const questionContainers = document.querySelectorAll(".question-container");

questionContainers.forEach((container) => {
  const question = container.querySelector(".question");
  const answer = container.querySelector(".answer");
  const minus = container.querySelector(".minus");
  const plus = container.querySelector(".plus");

  question.addEventListener("click", () => {
    questionContainers.forEach((otherContainer) => {
      const minus = otherContainer.querySelector(".minus");
      const plus = otherContainer.querySelector(".plus");
      if (otherContainer !== container) {
        otherContainer.querySelector(".answer").classList.remove("show");
        minus.classList.remove("show");
        plus.classList.remove("hide");
      }
    });
    answer.classList.add("show");
    minus.classList.add("show");
    plus.classList.toggle("hide");
  });
});

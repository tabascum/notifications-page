const cards = document.querySelectorAll(".nt-card");
const count = document.querySelector("#header-counter");
const reset = document.querySelector("#read-marks");
const dots = document.querySelectorAll(".fa-circle");

let counter = 0;
const activeColor = "rgb(247, 250, 253)";

cards.forEach((card) => {
  const computedStyle = window.getComputedStyle(card);
  const bgColor = computedStyle.backgroundColor;

  if (bgColor === activeColor) {
    counter++;
    count.innerText = counter;
  }

  reset.addEventListener("click", () => {
    counter = 0;
    card.style.backgroundColor = "transparent";
    count.innerText = counter;
    dots.forEach((card) => {
      card.classList.remove("fa-circle");
    });
  });
});

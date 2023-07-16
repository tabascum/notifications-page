const cards = document.querySelectorAll(".nt-card");
const count = document.querySelector("#header-counter");
const reset = document.querySelector("#read-marks");

let counter = 0;
const activeColor = "rgb(247, 250, 253)";

cards.forEach((card) => {
  const computedStyle = window.getComputedStyle(card);
  const bgColor = computedStyle.backgroundColor;

  if (bgColor === activeColor) {
    counter++;
    count.innerText = counter;
  }
});

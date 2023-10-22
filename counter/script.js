let count = 0;

let number = document.querySelector(".number");
let btns = document.querySelectorAll(".btn");

const inc = document.querySelector(".increase");
const dec = document.querySelector(".decrease");
const reset = document.querySelector(".reset");

btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const btnType = e.currentTarget.classList;
    if (btnType.contains("increase")) {
      count++;
    } else if (btnType.contains("decrease")) {
      count--;
    } else {
      count = 0;
    }
    number.textContent = count;
  });
});

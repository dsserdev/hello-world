const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
  // const randomNumber = getRandomNumber();
  // document.body.style.backgroundColor = colors[randomNumber];
  // color.textContent = colors[randomNumber];

  const hex = getHex();
  document.body.style.backgroundColor = hex;
  color.textContent = hex;
});

function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}

// #FAB234

function getHex() {
  let color = "#";
  for (i = 0; i < 6; i++) {
    let random = Math.floor(Math.random() * hex.length);
    let value = hex[random];
    color += value;
  }
  return color;
}

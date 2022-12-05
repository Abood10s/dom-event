let input = document.getElementById("inputclr");
let button = document.getElementById("button");
let paint = document.getElementById("colored");
let hexaCodes = "0123456789ABCDEF";

function getRandom(colors) {
  let splitted = colors.split("");
  let color = "";
  for (let i = 0; i < 6; i++) {
    color += splitted[Math.floor(splitted.length * Math.random())];
  }
  return color;
}

// input Event

input.addEventListener("input", (e) => {
  paint.style.backgroundColor = `#${e.target.value}`;
});

// Button event

button.addEventListener("click", () => {
  input.value = getRandom(hexaCodes);
  paint.style.backgroundColor = `#${getRandom(hexaCodes)}`;
});

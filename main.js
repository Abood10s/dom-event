const input = document.getElementById("inputclr");
const button = document.getElementById("button");
const paint = document.getElementById("colored");
const sign = document.getElementById("sign");

const hexaCodes = "0123456789ABCDEF";

// getting random color function

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
  paint.style.backgroundColor = `${e.target.value}`;
});

// Button event

button.addEventListener("click", () => {
  input.value = getRandom(hexaCodes);
  paint.style.backgroundColor = `#${getRandom(hexaCodes)}`;
});

// set interval
let theinterval;
paint.addEventListener("mouseover", () => {
  theinterval = setInterval(() => {
    paint.style.backgroundColor = `#${getRandom(hexaCodes)}`;
  }, 500);
});
paint.addEventListener("mouseout", () => {
  clearInterval(theinterval);
});

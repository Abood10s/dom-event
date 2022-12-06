const input = document.getElementById("inputclr");
const button = document.getElementById("button");
const paint = document.getElementById("colored");
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

//  Random Color on ** hover **

const hoverInterval = setInterval(() => {
  paint.style.backgroundColor = `#${getRandom(hexaCodes)}`;
}, 500);

paint.addEventListener("mouseover", (e) => {
  hoverInterval;
});
paint.addEventListener("mouseout", (e) => {
  clearInterval(hoverInterval);
  paint.style.backgroundColor = "transparent";
});

// input Event

input.addEventListener("input", (e) => {
  paint.style.backgroundColor = `#${e.target.value}`;
});

// Button event

button.addEventListener("click", () => {
  input.value = getRandom(hexaCodes);
  paint.style.backgroundColor = `#${getRandom(hexaCodes)}`;
});

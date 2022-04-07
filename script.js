const container = document.querySelector(".container");
const text = document.querySelector(".text");
const circle = document.querySelector(".circle");
const pointer = document.querySelector(".pointer");
const pointerCnt = document.querySelector(".pointer-container");

const totalTime = 7500;
const breatheTime = (totalTime / 5) * 2;
const holdTime = totalTime / 5;

function breatheAnimation() {
  text.innerText = "breathe in";
  container.className = "container grow";
  console.log(container.className);
  setTimeout(function () {
    text.innerText = "hold";
    setTimeout(function () {
      text.innerText = "breathe out";
      container.className = "container shrink";
      console.log(container.className);
    }, holdTime);
  }, breatheTime);
}
breatheAnimation();
setInterval(breatheAnimation, totalTime);

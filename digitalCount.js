// const increment = document.getElementById("increment");
// const decrement = document.getElementById("decrement");
// const reset = document.getElementById("reset");

let counter = document.querySelector(".counter");
let count = 0,
  clear;
document.querySelector(".increment").addEventListener("click", function () {
  clear = setInterval(increment, 1000);
});

function increment() {
  counter.innerHTML = 0 + count;
  count++;
}
document.querySelector(".decrement").addEventListener("click", function () {
  clear = setInterval(decrement, 1000);
});
function decrement() {
  counter.innerHTML = 0 + count;
  count--;
}

function reset() {
  clearInterval(clear);
}

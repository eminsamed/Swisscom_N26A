document.getElementById("first").innerHTML = "Hello World!";

let count = 0;
const button = document.getElementById("increment");
const button2 = document.getElementById("decrement");
const textHolder = document.getElementById("count");
textHolder.innerHTML = count;

button.addEventListener("click", function () {
  textHolder.innerHTML = ++count;
});

button2.addEventListener("click", function () {
  textHolder.innerHTML = --count;
});

const country = [
  "Switzerland",
  "Germany",
  "France",
  "Italy",
];

let list = document.getElementById("myList");

country.forEach((item) => {
  let li = document.createElement("li");
  li.innerText = item;
  list.appendChild(li);
});

console.log(country);

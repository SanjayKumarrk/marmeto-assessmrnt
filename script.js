const counter = document.querySelector(".count");
const dec = document.querySelector(".dec");
const inc = document.querySelector(".inc");

let count = 1;
counter.innerText = count;

inc.addEventListener("click", () => {
  count++;
  counter.innerText = count;
});

dec.addEventListener("click", () => {
  if (count < 2) {
    return;
  }
  count--;
  counter.innerText = count;
});

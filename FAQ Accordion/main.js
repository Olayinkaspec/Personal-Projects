const plus = document.querySelectorAll(".plus-btn");
const minus = document.querySelectorAll(".minus-btn");
const hidden = document.querySelectorAll(".hidden");
const about = document.querySelectorAll(".about");

for (let i = 0; i < plus.length; i++) {
  plus[i].addEventListener("click", function () {
    plus[i].classList.toggle("hidden");
    minus[i].classList.toggle("hidden");
    about[i].classList.toggle("hidden");
  });
}

for (let i = 0; i < minus.length; i++) {
  minus[i].addEventListener("click", function () {
   minus[i].classList.toggle("hidden");
    plus[i].classList.toggle("hidden");
    about[i].classList.toggle("hidden");
  });
}
const burger = document.querySelector(".burger");
const menu = document.querySelector(".nav");

burger.addEventListener("click", (e) => {
  burger.classList.toggle("burger--active"), 
  menu.classList.toggle("nav--active");
});

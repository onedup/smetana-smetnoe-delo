import {disableScroll} from "../functions/disable-scroll";
import {enableScroll} from "../functions/enable-scroll";

const burger = document.querySelector(".burger");
const menu = document.querySelector(".nav");
const overlay = document.querySelector(".overlay");

burger.addEventListener("click", (e) => {
  burger.classList.toggle("burger--active"), menu.classList.toggle("nav--active");
  overlay.classList.toggle("overlay--active");

  if (burger.classList.contains("burger--active")) {
    disableScroll();
  } else {
    enableScroll();
  }
});

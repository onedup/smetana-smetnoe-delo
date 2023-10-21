import Swiper from "swiper/bundle";

let containerOffset = getComputedStyle(document.documentElement).getPropertyValue("--container-offset");

window.addEventListener("DOMContentLoaded", () => {
  const resizableSwiper = (breakpoint, swiperClass, swiperSettings, callback) => {
    let swiper;

    breakpoint = window.matchMedia(breakpoint);

    const enableSwiper = function (className, settings) {
      swiper = new Swiper(className, settings);

      if (callback) {
        callback(swiper);
      }
    };
    const cards = document.querySelectorAll(".level-card");

    const cardHover = (e) => {
      cards.forEach((otherCard) => {
        if (otherCard != e) {
          otherCard.classList.remove("level-card--active");
        }
      });
      if (e.target.closest('.level-card')) e.target.closest('.level-card').classList.add("level-card--active");
    };

    const checker = function () {
      if (breakpoint.matches) {
        cards.forEach((card) => {
          card.removeEventListener("mouseover", cardHover);
        });
        return enableSwiper(swiperClass, swiperSettings);
      } else {
        cards.forEach((card) => {
          card.addEventListener("mouseover", cardHover);
        });
        if (swiper !== undefined) swiper.destroy(true, true);
        return;
      }
    };

    breakpoint.addEventListener("change", checker);
    checker();
  };

  const activeAllCards = (instance) => {
    const cards = document.querySelectorAll(".level-card");
    if (instance) {
      cards.forEach((card) => {
        if (!card.classList.contains("level-card--active")) {
          card.classList.add("level-card--active");
        }
      });
    }
  };

  resizableSwiper(
    "(max-width: 1024px)",
    ".level__swiper",
    {
      slidesPerView: 1.2,
      slidesOffsetBefore: +containerOffset.slice(0, -2),
      slidesOffsetAfter: +containerOffset.slice(0, -2),
      spaceBetween: 12,
      scrollbar: {
        el: ".swiper-scrollbar",
        draggable: true,
      },
      breakpoints: {
        440: {
          slidesPerView: 1.7,
        },
        576: {
          slidesPerView: 2,
          slidesOffsetBefore: 0,
          slidesOffsetAfter: 0,
        },
      },
    },
    activeAllCards
  );
});

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

    const checker = function () {
      if (breakpoint.matches) {
        return enableSwiper(swiperClass, swiperSettings);
      } else {
        if (swiper !== undefined) swiper.destroy(true, true);
        return;
      }
    };

    breakpoint.addEventListener("change", checker);
    checker();
  };

  const someFunc = (instance) => {
    const cards = document.querySelectorAll(".level-card");
    if (instance) {
      instance.on("slideChange", function (e) {
        cards.forEach((card) => {
            card.classList.remove("level-card--active");
          });
        instance.slides[instance.activeIndex].childNodes[1].classList.add("level-card--active");
      });
    }
  };

  resizableSwiper(
    "(max-width: 1024px)",
    ".level__swiper",
    {
      // loop: true,
      watchSlidesProgress: true,
      slidesPerView: 1.2,
      slidesOffsetBefore: +containerOffset.slice(0, -2),
      slidesOffsetAfter: +containerOffset.slice(0, -2),
      rewind: true,
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
    someFunc
  );
});

function changeIconBasedOnWindowSize() {
  const useElement = document.querySelectorAll(".modal__close svg use");

  if (window.innerWidth < 768) {
    useElement.forEach(el => {
      el.setAttribute("xlink:href", "img/sprite.svg#small-close");
    });
      } else {
    useElement.forEach(el => {
      el.setAttribute("xlink:href", "img/sprite.svg#close");
    });
  }
}

changeIconBasedOnWindowSize();

window.addEventListener("resize", changeIconBasedOnWindowSize);

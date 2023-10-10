// Получаем все ссылки с классом smooth-scroll-link
const smoothScrollLinks = document.querySelectorAll(".smooth-scroll-link");

// Обходим каждую ссылку и добавляем обработчик события щелчка
smoothScrollLinks.forEach((link) => {
  link.addEventListener("click", function (event) {
    event.preventDefault(); // Отменяем стандартное действие ссылки

    const btnActive = document.querySelector(".burger--active");
    const menu = document.querySelector(".nav--active");
    if (menu) {
      console.log(menu)
      menu.classList.toggle("nav--active");
      btnActive.classList.toggle("burger--active");
    }

    const targetId = this.getAttribute("href"); // Получаем значение атрибута href (якоря)
    const targetElement = document.querySelector(targetId); // Получаем элемент с соответствующим id

    if (targetElement) {
      // Вычисляем позицию элемента относительно верха страницы
      const targetPosition = targetElement.offsetTop;

      // Плавно прокручиваем страницу к элементу
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth", // Плавный переход
      });
    }
  });
});

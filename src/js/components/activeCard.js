const cards = document.querySelectorAll('.level-card'),
      slides = document.querySelectorAll('.swiper-slide');

      console.log(slides);
slides.forEach(slide => {
  slide.addEventListener('mousedown', (e) => {
  if (e.target.classList.contains("swiper-slide-active")) {
    console.log(slide.firstChild);
  }
  })

});

cards.forEach(card => {
  card.addEventListener('mouseover', (e) => {
    cards.forEach(otherCard => {
      if (otherCard != card) {
        otherCard.classList.remove('level-card--active')
      }
    })
    card.classList.add('level-card--active');
  })
})

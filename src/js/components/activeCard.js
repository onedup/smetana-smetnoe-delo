const cards = document.querySelectorAll('.level-card');

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

const track = document.querySelector('.carousel-track');
const prevBtn = document.querySelector('.carousel-btn.prev');
const nextBtn = document.querySelector('.carousel-btn.next');

const cards = document.querySelectorAll('.card');
const card = cards[0];
let index = 0;

function getCardWidth() {
  const style = getComputedStyle(card);
  return card.offsetWidth + parseInt(style.marginLeft) + parseInt(style.marginRight);
}

function updatePosition() {
  const cardWidth = getCardWidth();
  track.style.transform = `translateX(${-index * cardWidth}px)`;
  updateButtonState();
}

function updateButtonState() {
  const cardWidth = getCardWidth();
  const visibleCards = Math.floor(track.parentElement.offsetWidth / cardWidth);
  const maxIndex = cards.length - visibleCards;

  // Найдём path внутри SVG-кнопок
  const prevPath = prevBtn.querySelector('path');
  const nextPath = nextBtn.querySelector('path');

  if (prevPath && nextPath) {
    // Если нельзя пролистнуть назад
    if (index <= 0) {
      prevPath.setAttribute('fill', '#BABABA');
    } else {
      prevPath.setAttribute('fill', '#141414');
    }

    // Если нельзя пролистнуть вперёд
    if (index >= maxIndex) {
      nextPath.setAttribute('fill', '#BABABA');
    } else {
      nextPath.setAttribute('fill', '#141414');
    }
  }
}

nextBtn.addEventListener('click', () => {
  const visibleCards = Math.floor(track.parentElement.offsetWidth / getCardWidth());
  if (index < cards.length - visibleCards) index++;
  updatePosition();
});

prevBtn.addEventListener('click', () => {
  if (index > 0) index--;
  updatePosition();
});

window.addEventListener('resize', updatePosition);

// Инициализация при загрузке
updatePosition();
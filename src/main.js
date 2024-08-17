document.addEventListener('DOMContentLoaded', () => {
  const viewport = document.querySelector('.cover-section');

  function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top < window.innerHeight &&
      rect.left < window.innerWidth &&
      rect.bottom > 0 &&
      rect.right > 0
    );
  }

  function checkScroll() {
    const isScrolling = isInViewport(viewport);
    if (isScrolling && !viewport.classList.contains('scrolling')) {
      viewport.classList.add('scrolling');
    } else if (!isScrolling && viewport.classList.contains('scrolling')) {
      viewport.classList.remove('scrolling');
    }
  }

  // Debounce function to limit the rate at which checkScroll is called
  function debounce(func, wait) {
    let timeout;
    return function (...args) {
      clearTimeout(timeout);
      timeout = setTimeout(() => func.apply(this, args), wait);
    };
  }

  // Attach debounced checkScroll to the scroll event
  window.addEventListener('scroll', debounce(checkScroll, 100));

  // Initial check in case the element is already in viewport
  checkScroll();

  // script.js

  // Наприклад, змінюємо тривалість анімації в залежності від кількості обкладинок

  const coversList = document.querySelector('.cover-list');
  const coversCount = coversList.children.length;

  // Задаємо тривалість анімації на основі кількості обкладинок
  // Приклад: 15 секунд для 3 обкладинок, ви можете налаштувати за потребою
  const animationDuration = 15 + (coversCount - 3) * 5;
  coversList.style.animationDuration = `${animationDuration}s`;
});

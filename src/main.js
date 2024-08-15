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
    if (isInViewport(viewport)) {
      viewport.classList.add('scrolling');
    } else {
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
});

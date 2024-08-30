const viewport = document.querySelector('.cover-section');

function isCenterInViewport(element) {
  const rect = element.getBoundingClientRect();
  const viewportHeight = window.innerHeight;
  const viewportWidth = window.innerWidth;

  // Обчислюємо центр елемента
  const elementCenterX = rect.left + rect.width / 2;
  const elementCenterY = rect.top + rect.height / 2;

  // Перевіряємо, чи центр елемента в межах вюпорта
  return (
    elementCenterX >= 0 &&
    elementCenterX <= viewportWidth &&
    elementCenterY >= 0 &&
    elementCenterY <= viewportHeight
  );
}

function checkScroll() {
  const isInViewport = isCenterInViewport(viewport);

  if (!isInViewport) {
    if (!viewport.classList.contains('scrolling')) {
      console.log('Section is in viewport.');
      applyTransition('.cover-list li', 500, 300, 'show');
    }
    viewport.classList.add('scrolling');
  } else {
    if (viewport.classList.contains('scrolling')) {
      console.log('Section is out of viewport.');
    }
    viewport.classList.remove('scrolling');
  }
}

function debounce(func, wait) {
  let timeout;
  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), wait);
  };
}

const debouncedCheckScroll = debounce(checkScroll, 100);
window.addEventListener('scroll', debouncedCheckScroll);

checkScroll();

// Animation function
function applyTransition(coverSelector, listDelay, itemDelay, showClass) {
  const coverLists = document.querySelectorAll(coverSelector);

  coverLists.forEach((list, listIndex) => {
    list.style.transitionDelay = `${listIndex * listDelay}ms`;
    list.classList.add(showClass);

    const listItems = list.querySelectorAll('li');

    listItems.forEach((item, itemIndex) => {
      item.style.transitionDelay = `${itemIndex * itemDelay}ms`;
      item.classList.add(showClass);
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  applyTransition('.cover-list li', 500, 300, 'show');
});

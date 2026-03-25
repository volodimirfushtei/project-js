const viewport = document.querySelector('.cover-section');

function isCenterInViewport(element) {
  const rect = element.getBoundingClientRect();
  const viewportHeight = window.innerHeight;
  const viewportWidth = window.innerWidth;

  const elementCenterX = rect.left + rect.width / 2;
  const elementCenterY = rect.top + rect.height / 2;

  return (
    elementCenterX >= 0 &&
    elementCenterX <= viewportWidth &&
    elementCenterY >= 0 &&
    elementCenterY <= viewportHeight
  );
}

function checkScroll() {
  const isInViewport = isCenterInViewport(viewport);

  if (isInViewport) {
    if (!viewport.classList.contains('scrolling')) {
      console.log('Section is in viewport');

      applyTransition('.cover-list', 200, 100, 'show');
      viewport.classList.add('scrolling');
    }
  } else {
    if (viewport.classList.contains('scrolling')) {
      viewport.classList.remove('scrolling');
      const listItems = document.querySelectorAll('.cover-list li');
      listItems.forEach(item => {
        item.classList.remove('show');
        item.style.transitionDelay = '0ms';
      });
    }
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

// ✅ FIXED animation
function applyTransition(coverSelector, listDelay, itemDelay, showClass) {
  const coverLists = document.querySelectorAll(coverSelector);

  coverLists.forEach((list, listIndex) => {
    const listItems = list.querySelectorAll('li');

    listItems.forEach((item, itemIndex) => {
      // Add delays correctly across rows and items
      item.style.transitionDelay = `${(listIndex * listDelay) + (itemIndex * itemDelay)}ms`;
      item.classList.add(showClass);
    });
  });
}

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
    if (!viewport.classList.contains('scrolling')) {
      console.log('Section is in viewport".');
    }
    viewport.classList.add('scrolling');
  } else {
    if (viewport.classList.contains('scrolling')) {
      console.log('Section is out of viewport".');
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

function addDesktopItems() {
  const container = document.querySelector('.cover-section .cover-container');

  if (!document.querySelector('.cover-list.desktop')) {
    const newUl = document.createElement('ul');
    newUl.classList.add('cover-list', 'desktop');

    const newLi = document.createElement('li');
    newLi.innerHTML = `
        <picture class="cover-picture">
          <source srcset="./img/firstscreen-1-1x.jpg 1x, ./img/firstscreen-1-2x.jpg 2x" media="(min-width: 1440px)" />

          <img src="./img/firstscreen-1-1x.jpg" alt="Banking" width="282" class="cover-img" />
        </picture>
      `;
    newUl.appendChild(newLi);
    const existingLists = container.querySelectorAll('.cover-list');
    container.insertBefore(newUl, existingLists[0]);
  }
}
function removeDesktopItems() {
  const desktopList = document.querySelector('.cover-list.desktop');
  if (desktopList) {
    desktopList.remove();
  }
}
function handleResize() {
  if (window.innerWidth >= 1440) {
    addDesktopItems();
  } else {
    removeDesktopItems();
  }
}
window.addEventListener('load', handleResize);
window.addEventListener('resize', handleResize);

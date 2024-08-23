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

document.addEventListener('DOMContentLoaded', () => {
  // Select all the <ul> elements with the class 'cover-list'
  const coverLists = document.querySelectorAll('.cover-list li');

  // Define the delay between each <ul>
  const listDelay = 1000; // Adjust as needed

  // Iterate over each <ul> and apply animation
  coverLists.forEach((list, listIndex) => {
    // Apply a delay to the <ul> to make sure lists appear sequentially
    list.style.transitionDelay = `${listIndex * listDelay}ms`;
    list.classList.add('show');

    // Select all <li> elements within the current <ul>
    const listItems = list.querySelectorAll('li');

    listItems.forEach((item, itemIndex) => {
      // Calculate delay for each <li> to appear sequentially within the <ul>
      const itemDelay = 500; // Adjust as needed
      item.style.transitionDelay = `${itemIndex * itemDelay}ms`;
      item.classList.add('show');
    });
  });
});

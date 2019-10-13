const elements = document.querySelectorAll('.button');
let previousElement = null;

elements.forEach(el => {
  el.addEventListener('click', e => {
    const uniqueID = el.querySelectorAll('.question');
    let currentElement = uniqueID[0].innerHTML;

    if (currentElement != previousElement) {
      // Another element is clicked than previous time
      elements.forEach(el => {
        el.classList.remove('open');
      });
      el.classList.toggle('open');
    } else {
      // The same element is clicked as previous time. Just toggle it.
      el.classList.toggle('open');
    }

    previousElement = currentElement;
  });
});

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
      // The same element is clicked as previous time. Just toggle.
      el.classList.toggle('open');
    }

    let open = el.classList.contains('open');
    let icon = el.querySelectorAll('.fas');

    // Template updates
    // if (open) {
    //   icon.innerHTML = `<i class="fas fa-arrow-down"></i>`;
    // } else {
    //   icon.innerHTML = `<i class="fas fa-arrow-up"></i>`;
    // }

    previousElement = currentElement;
  });
});

// Swift interactive enhancements.
// The production file is minified as script.min.js and loaded with defer.
document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.card');

  // Use event delegation instead of attaching a listener to every card.
  document.addEventListener('mouseover', (event) => {
    const card = event.target.closest('.card');
    if (card) card.classList.add('is-hovered');
  });

  document.addEventListener('mouseout', (event) => {
    const card = event.target.closest('.card');
    if (card) card.classList.remove('is-hovered');
  });

  // Lazy-load enhancement: adds a fade-in class once an image has loaded.
  const images = document.querySelectorAll('img[loading="lazy"]');
  images.forEach((image) => {
    if (image.complete) {
      image.classList.add('is-loaded');
    } else {
      image.addEventListener('load', () => image.classList.add('is-loaded'), { once: true });
    }
  });

  console.info(`Swift initialized with ${cards.length} cards and ${images.length} lazy images.`);
});

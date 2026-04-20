document.querySelectorAll('.instagram-section-card__text').forEach((block) => {
  const readMore = block.querySelector('.read-more');
  const readLess = block.querySelector('.read-less');
  const hiddenText = block.querySelector('.text-hidden');

  if (!readMore || !readLess || !hiddenText) return;

  readMore.addEventListener('click', (e) => {
    e.preventDefault();

    hiddenText.classList.add('visible');
    readLess.classList.add('visible');
    readMore.classList.add('hidden');
    block.classList.toggle('expanded');
  });


  readLess.addEventListener('click', (e) => {
    e.preventDefault();

    hiddenText.classList.remove('visible');
    readLess.classList.remove('visible');
    readMore.classList.remove('hidden');
    block.classList.toggle('expanded');

  });
});

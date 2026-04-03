const langSelects = document.querySelectorAll('.header__nav-lang');

// 🔥 функція оновлення ВСІХ селектів
function updateAllSelects(imgSrc, text) {
  langSelects.forEach((select) => {
    const current = select.querySelector('.header__nav-current');
    const currentImg = current.querySelector('img');
    const currentText = current.querySelector('span');
    const arrow = current.querySelector('.icon-angle-down');

    currentImg.src = imgSrc;
    currentImg.alt = text;
    currentText.textContent = text;

    // закриваємо dropdown
    select.querySelector('.header__nav-dropdown').style.display = 'none';
    arrow.classList.remove('is-open');
  });
}

langSelects.forEach((langSelect) => {
  const current = langSelect.querySelector('.header__nav-current');
  const dropdown = langSelect.querySelector('.header__nav-dropdown');
  const options = langSelect.querySelectorAll('.header__nav-option');
  const arrow = current.querySelector('.icon-angle-down');

  current.addEventListener('click', (e) => {
    e.stopPropagation();

    // закриваємо всі інші
    document.querySelectorAll('.header__nav-dropdown').forEach((d) => {
      if (d !== dropdown) d.style.display = 'none';
    });

    document.querySelectorAll('.icon-angle-down').forEach((icon) => {
      if (icon !== arrow) icon.classList.remove('is-open');
    });

    const isOpen = dropdown.style.display === 'block';
    dropdown.style.display = isOpen ? 'none' : 'block';

    arrow.classList.toggle('is-open', !isOpen);
  });

  options.forEach((option) => {
    option.addEventListener('click', () => {
      const img = option.querySelector('img').src;
      const text = option.querySelector('span').textContent;

      // 🔥 головна магія
      updateAllSelects(img, text);
    });
  });
});

// глобальний клік
document.addEventListener('click', () => {
  document.querySelectorAll('.header__nav-dropdown').forEach((d) => {
    d.style.display = 'none';
  });

  document.querySelectorAll('.icon-angle-down').forEach((icon) => {
    icon.classList.remove('is-open');
  });
});

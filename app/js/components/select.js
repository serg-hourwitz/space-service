const langSelects = document.querySelectorAll('.header__nav-lang');

// 🔥 функція оновлення ВСІХ селектів
function updateAllSelects(imgSrc, text) {
  langSelects.forEach((select) => {
    const current = select.querySelector('.header__nav-current');
    const currentImg = current.querySelector('img');
    const currentText = current.querySelector('span');
    const arrow = current.querySelector('.icon-angle-down');
    const dropdown = select.querySelector('.header__nav-dropdown');

    currentImg.src = imgSrc;
    currentImg.alt = text;
    currentText.textContent = text;

    // закриваємо dropdown
    dropdown.classList.remove('is-open');
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
      if (d !== dropdown) d.classList.remove('is-open');
    });

    document
      .querySelectorAll('.header__nav-lang .icon-angle-down')
      .forEach((icon) => {
        if (icon !== arrow) icon.classList.remove('is-open');
      });

    const isOpen = dropdown.classList.contains('is-open');

    dropdown.classList.toggle('is-open', !isOpen);
    arrow.classList.toggle('is-open', !isOpen);
  });

  options.forEach((option) => {
    option.addEventListener('click', () => {
      const img = option.querySelector('img').src;
      const text = option.querySelector('span').textContent;

      // 🔥 синхронізація
      updateAllSelects(img, text);
    });
  });
});

// ❌ клік поза
document.addEventListener('click', () => {
  document.querySelectorAll('.header__nav-dropdown').forEach((d) => {
    d.classList.remove('is-open');
  });

  document
    .querySelectorAll('.header__nav-lang .icon-angle-down')
    .forEach((icon) => {
      icon.classList.remove('is-open');
    });
});

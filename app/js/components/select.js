const langSelects = document.querySelectorAll('.header__nav-lang');

langSelects.forEach((langSelect) => {
  const current = langSelect.querySelector('.header__nav-current');
  const dropdown = langSelect.querySelector('.header__nav-dropdown');
  const options = langSelect.querySelectorAll('.header__nav-option');

  const currentImg = current.querySelector('img');
  const currentText = current.querySelector('span');
  const arrow = current.querySelector('.icon-angle-down');

  current.addEventListener('click', (e) => {
    e.stopPropagation();

    document.querySelectorAll('.header__nav-dropdown').forEach((d) => {
      if (d !== dropdown) d.style.display = 'none';
    });

    const isOpen = dropdown.style.display === 'block';
    dropdown.style.display = isOpen ? 'none' : 'block';

    // 🔥 додаємо клас для обертання
    arrow.classList.toggle('is-open', !isOpen);
  });

  options.forEach((option) => {
    option.addEventListener('click', () => {
      const img = option.querySelector('img').src;
      const text = option.querySelector('span').textContent;

      currentImg.src = img;
      currentImg.alt = text;
      currentText.textContent = text;

      dropdown.style.display = 'none';
      arrow.classList.remove('is-open');
    });
  });
});

// глобальне закриття
document.addEventListener('click', () => {
  document.querySelectorAll('.header__nav-dropdown').forEach((d) => {
    d.style.display = 'none';
  });

  document.querySelectorAll('.icon-angle-down').forEach((icon) => {
    icon.classList.remove('is-open');
  });
});

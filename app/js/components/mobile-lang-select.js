const mobileSelects = document.querySelectorAll('.mobile-lang-select__container');

mobileSelects.forEach(select => {
  const current = select.querySelector('.mobile-lang-select__container-current');
  const dropdown = select.querySelector('.mobile-lang-select__dropdown');
  const options = select.querySelectorAll('.mobile-lang-select__option');

  const currentImg = current.querySelector('img');
  const currentText = current.querySelector('span');
  const arrow = current.querySelector('.icon-angle-down');

  // 🔽 відкриття / закриття
  current.addEventListener('click', (e) => {
    e.stopPropagation();

    // закриваємо інші селекти
    document.querySelectorAll('.mobile-lang-select__dropdown').forEach(d => {
      if (d !== dropdown) d.classList.remove('is-open');
    });

    document.querySelectorAll('.icon-angle-down').forEach(icon => {
      if (icon !== arrow) icon.classList.remove('is-open');
    });

    const isOpen = dropdown.classList.contains('is-open');

    dropdown.classList.toggle('is-open', !isOpen);
    arrow.classList.toggle('is-open', !isOpen);
  });

  // 🔥 вибір опції
  options.forEach(option => {
    option.addEventListener('click', () => {
      const img = option.querySelector('img').src;
      const text = option.querySelector('span').textContent;

      currentImg.src = img;
      currentImg.alt = text;
      currentText.textContent = text;

      dropdown.classList.remove('is-open');
      arrow.classList.remove('is-open');
    });
  });
});

// ❌ клік поза — закрити
document.addEventListener('click', () => {
  document.querySelectorAll('.mobile-lang-select__dropdown').forEach(d => {
    d.classList.remove('is-open');
  });

  document.querySelectorAll('.icon-angle-down').forEach(icon => {
    icon.classList.remove('is-open');
  });
});
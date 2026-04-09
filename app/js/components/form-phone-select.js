const phoneSelects = document.querySelectorAll('.form-phone-select__lang');

phoneSelects.forEach((select) => {
  const current = select.querySelector('.form-phone-select__current');
  const dropdown = select.querySelector('.form-phone-select__dropdown');
  const options = select.querySelectorAll('.form-phone-select__option');

  const currentImg = current.querySelector('img');
  const currentText = current.querySelector('span');
  const arrow = current.querySelector('.icon-angle-down');

  const hiddenInput = select.querySelector('input[type="hidden"]');

  // 🔎 знаходимо input телефону (поруч у формі)
  const formGroup = select.closest('.request-form-modal__input-group');
  const phoneInput = formGroup.querySelector('input[type="tel"]');

  // 🔽 toggle dropdown
  current.addEventListener('click', (e) => {
    e.stopPropagation();

    document.querySelectorAll('.form-phone-select__dropdown').forEach((d) => {
      if (d !== dropdown) d.style.display = 'none';
    });

    document
      .querySelectorAll('.form-phone-select .icon-angle-down')
      .forEach((icon) => {
        if (icon !== arrow) icon.classList.remove('is-open');
      });

    const isOpen = dropdown.style.display === 'block';
    dropdown.style.display = isOpen ? 'none' : 'block';

    arrow.classList.toggle('is-open', !isOpen);
  });

  // 🔥 вибір країни
  options.forEach((option) => {
    option.addEventListener('click', () => {
      const img = option.querySelector('img').src;
      const text = option.querySelector('span').textContent;
      const value = option.dataset.value;

      // оновлюємо UI
      currentImg.src = img;
      currentImg.alt = text;
      currentText.textContent = text;

      // 🔥 записуємо в hidden input
      hiddenInput.value = value;

      // 🔥 міняємо placeholder
      if (value === '+380') {
        phoneInput.placeholder = '00-000-00-00';
      } else if (value === '+48') {
        phoneInput.placeholder = '000-000-000';
      }

      dropdown.style.display = 'none';
      arrow.classList.remove('is-open');
    });
  });
});

// ❌ клік поза
document.addEventListener('click', () => {
  document.querySelectorAll('.form-phone-select__dropdown').forEach((d) => {
    d.style.display = 'none';
  });

  document
    .querySelectorAll('.form-phone-select .icon-angle-down')
    .forEach((icon) => {
      icon.classList.remove('is-open');
    });
});

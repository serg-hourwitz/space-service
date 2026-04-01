const langSelect = document.querySelector('.header__nav-lang');
const current = langSelect.querySelector('.header__nav-current');
const dropdown = langSelect.querySelector('.header__nav-dropdown');
const options = langSelect.querySelectorAll('.header__nav-option');

// toggle dropdown
current.addEventListener('click', () => {
  dropdown.style.display =
    dropdown.style.display === 'block' ? 'none' : 'block';
});

// вибір опції
options.forEach((option) => {
  option.addEventListener('click', () => {
    const img = option.querySelector('img').src;
    const text = option.querySelector('span').textContent;

    current.innerHTML = `
      <img src="${img}" alt="${text}">
      <span>${text}</span>
      <svg class="icon icon-angle-down"><use xlink:href="#icon-angle-down"></use></svg>
    `;

    dropdown.style.display = 'none';
  });
});

// закриття при кліку поза
document.addEventListener('click', (e) => {
  if (!langSelect.contains(e.target)) {
    dropdown.style.display = 'none';
  }
});

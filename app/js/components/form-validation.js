const form = document.querySelector('.request-form-modal__form');
const modal = document.querySelector('.request-form-modal');
const nameInput = form.querySelector('#name');
const emailInput = form.querySelector('#email');
const phoneInput = form.querySelector('#phone');
const successModal = document.querySelector('.request-success-modal');

// 🔥 регулярки
const patterns = {
  name: /^[A-Za-zА-Яа-яІіЇїЄє\s'-]{2,}$/,
  email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  phoneUA: /^\d{2}-\d{3}-\d{2}-\d{2}$/, // 00-000-00-00
  phonePL: /^\d{3}-\d{3}-\d{3}$/, // 000-000-000
};

// 🔹 створення помилки
function showError(input, message) {
  removeError(input);

  const error = document.createElement('div');
  error.className = 'form-error';
  error.textContent = message;

  input.closest('.request-form-modal__input-group').appendChild(error);

  input.classList.add('input-error');
}

// 🔹 видалення помилки
function removeError(input) {
  const group = input.closest('.request-form-modal__input-group');
  const error = group.querySelector('.form-error');

  if (error) error.remove();
  input.classList.remove('input-error');
}

// 🔥 визначаємо код країни
function getPhonePattern() {
  const code = document.querySelector('input[name="phone_code"]')?.value;

  if (code === '+380') return patterns.phoneUA;
  if (code === '+48') return patterns.phonePL;

  return patterns.phoneUA;
}

// 🔥 сабміт
form.addEventListener('submit', (e) => {
  e.preventDefault();

  let isValid = true;

  // NAME
  if (!patterns.name.test(nameInput.value.trim())) {
    showError(nameInput, 'Enter valid name (min 2 letters)');
    isValid = false;
  } else {
    removeError(nameInput);
  }

  // EMAIL
  if (!patterns.email.test(emailInput.value.trim())) {
    showError(emailInput, 'Enter valid email');
    isValid = false;
  } else {
    removeError(emailInput);
  }

  // PHONE
  const phonePattern = getPhonePattern();

  if (!phonePattern.test(phoneInput.value.trim())) {
    showError(phoneInput, 'Enter valid phone format');
    isValid = false;
  } else {
    removeError(phoneInput);
  }

  // ✅ якщо все ок
  if (isValid) {
    modal.classList.remove('active');
    console.log('Form submitted 🚀');
    successModal.classList.add('active');
    overlay.classList.add('active');
    document.body.classList.add('no-scroll');

    // тут можеш робити fetch / ajax
    form.reset();
  }
});

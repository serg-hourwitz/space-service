document.addEventListener('DOMContentLoaded', () => {
  const bookBtns = document.querySelectorAll('.book__btn');
  const modal = document.querySelector('.request-form-modal');
  const closeBtn = document.querySelector('.request-form-modal__close-btn');
  const overlay = document.querySelector('.modal-overlay');
  
  
  // 🔓 відкрити
  function openModal() {
    modal.classList.add('active');
    overlay.classList.add('active');
    document.body.classList.add('no-scroll');
  }
  
  // 🔒 закрити
  function closeModal() {
    modal.classList.remove('active');
    overlay.classList.remove('active');
    document.body.classList.remove('no-scroll');
  }
  
  // кнопки відкриття
  bookBtns.forEach((btn) => {
    btn.addEventListener('click', openModal);
  });
  
  // кнопка закриття
  closeBtn.addEventListener('click', closeModal);
  
  // клік по overlay
  overlay.addEventListener('click', closeModal);
});


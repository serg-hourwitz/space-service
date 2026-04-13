const successBtn = document.querySelector('.request-success-modal__success-btn');

const closeSuccessBtn = document.querySelector('.request-success-modal__close-btn');

const closeSuccessModal = () => {
  successModal.classList.remove('active');
  overlay.classList.remove('active');
  document.body.classList.remove('no-scroll');
}

closeSuccessBtn.addEventListener('click', closeSuccessModal);

successBtn.addEventListener('click', closeSuccessModal);

overlay.addEventListener('click', closeSuccessModal
);


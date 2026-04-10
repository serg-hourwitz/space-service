const mobileMenu = document.querySelector('.mobile-menu');
const menuBtn = document.querySelector('.burger-menu-btn');
const closeBtn = document.querySelector('.mobile-menu__close-btn');
const mobileLinks = document.querySelectorAll('.mobile-menu__nav-link');
const overlay = document.querySelector('.modal-overlay');

// open mobile menu
menuBtn.addEventListener('click', () => {
  mobileMenu.classList.add('mobile-menu--active');
  overlay.classList.add('active');
  document.body.classList.add('no-scroll');
});

// close mobile menu
closeBtn.addEventListener('click', () => {
  mobileMenu.classList.remove('mobile-menu--active');
  overlay.classList.remove('active');
  document.body.classList.remove('no-scroll');
});

// клік по overlay
overlay.addEventListener('click', () => {
  mobileMenu.classList.remove('mobile-menu--active');
});

mobileLinks.forEach((link) => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('mobile-menu--active');
  });

  // show full number on click
  const showFullNum = document.querySelector('.mobile-menu__contact-sublink');
  const fullNum = document.querySelector('.mobile-menu__contact-link--active');

  showFullNum.addEventListener('click', () => {
    showFullNum.style.display = 'none';
    fullNum.style.display = 'inline';
  });
});

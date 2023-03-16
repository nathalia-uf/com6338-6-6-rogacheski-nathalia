const hamburgerBtn = document.querySelector('.hamburger-btn');
const hamburgerMenu = document.querySelector('.hamburger-menu');

function toggleMenu() {
  const isOpen = hamburgerMenu.classList.contains('show-menu');
  hamburgerMenu.classList.toggle('show-menu');
  hamburgerBtn.setAttribute('aria-expanded', !isOpen);
}

function closeMenu() {
  hamburgerMenu.classList.remove('show-menu');
  hamburgerBtn.setAttribute('aria-expanded', 'false');
  hamburgerBtn.focus();
}

hamburgerBtn.addEventListener('click', toggleMenu);

document.addEventListener('click', (event) => {
  const isOutside = !event.target.closest('.hamburger-menu') && !event.target.closest('.hamburger-btn');
  if (isOutside && hamburgerMenu.classList.contains('show-menu')) {
    closeMenu();
  }
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && hamburgerMenu.classList.contains('show-menu')) {
    closeMenu();
  }
});
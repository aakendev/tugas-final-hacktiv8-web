const nav = document.querySelector('.nav');
const navButton = document.querySelector('.nav-button');

navButton.addEventListener('click', () => {
  nav.classList.toggle('nav-show');
});

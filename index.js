const burger = document.getElementById('burger');
const list = document.querySelector('.nav__list');
const formLinks = document.querySelectorAll('.form-link');

burger.addEventListener('click', () => {
  list.classList.toggle('nav__list--show');
});

formLinks.forEach(function (btn) {
  btn.addEventListener('click', () => {
    window.location = 'index.html#form-link';
  });
});

const headerBurger = document.querySelector('.header__burger');
const headerMenu = document.querySelector('.header__menu');

headerBurger.addEventListener('click', function () {
  headerMenu.classList.toggle('show');
});

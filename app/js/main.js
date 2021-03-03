const burgerMenu = document.querySelector('.burger-menu');
const headerMenu = document.querySelector('.header-menu');
const menuClose = document.querySelector('.menu__close');

burgerMenu.addEventListener('click', () => {
    headerMenu.classList.add('show');
});

menuClose.addEventListener('click', () => {
    headerMenu.classList.remove('show');
});

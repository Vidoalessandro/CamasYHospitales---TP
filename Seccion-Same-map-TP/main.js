const menuBurguer = document.querySelector('.menuHamburg');
const mobileMenu = document.querySelector('.mobileMenu-container');


menuBurguer.addEventListener('click', toggleMobileMenu);

function toggleMobileMenu(){
    mobileMenu.classList.toggle('inactive');
}
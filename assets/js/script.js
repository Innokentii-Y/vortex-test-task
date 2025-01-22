const burger = document.querySelector('.burger__button');
const sideMenu = document.querySelector('.side-menu');

burger.addEventListener('click', function() {
    this.classList.add('burger__button_active');
    sideMenu.classList.add('side-menu_active');
    event.preventDefault()
});

const closeButton = document.querySelector('.side-menu__close-button');

closeButton.addEventListener('click', function(event) {
    sideMenu.classList.remove('side-menu_active');
});

document.addEventListener('click', function(event) {
    if (!sideMenu.contains(event.target)) {
        closeSideMenu();
    }
});
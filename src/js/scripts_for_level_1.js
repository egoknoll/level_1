const hamburger = document.querySelector(".nav__hamburger");
const hamburger_menu = document.querySelector(".nav__hamburger-menu");
hamburger.addEventListener("click", () => {
    hamburger_menu.classList.toggle("nav__hamburger-menu-is-active");
});
new Swiper('.slider__container', {
    direction: 'horizontal',
    loop: true,
    pagination: {
    el: '.swiper-pagination',
    clickable: true,
    },
})
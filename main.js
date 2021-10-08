const nav = document.querySelector(".nav__list");
const header = document.querySelector("#header");

const mo_toggle = document.querySelector(".mo-toggle");
const mo_nav = document.querySelector("#mo-nav");

const mo_toggle_close = document.querySelector(".mo-toggle__close");
const mo_nav_arrow = document.querySelector(".mo-nav__arrow");
const mo_nav_list = document.querySelector(".mo-nav__list");

nav.addEventListener('mouseover', navShowFunc);
nav.addEventListener('mouseleave', navHideFunc);

mo_toggle.addEventListener('click', () => {
    mo_nav.classList.toggle('over');
});
mo_toggle_close.addEventListener('click', () => {
    mo_nav.classList.remove('over');
});
mo_nav_arrow.addEventListener('click', () => {
    mo_nav_list.classList.toggle('over');
});

function navShowFunc() {
    nav.classList.add('over');
    header.classList.add('over');
}

function navHideFunc() {
    nav.classList.remove('over');
    header.classList.remove('over');
}



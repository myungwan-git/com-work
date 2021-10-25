/* 
 *mouse over on pc menu -> display menu items 
 */
const nav = document.querySelector(".nav__list");
const header = document.querySelector("#header");
nav.addEventListener('mouseover', navShowFunc);
nav.addEventListener('mouseleave', navHideFunc);
function navShowFunc() {
    nav.classList.add('over');
    header.classList.add('over');
}
function navHideFunc() {
    nav.classList.remove('over');
    header.classList.remove('over');
}

/* 
 * click on mobile menu -> display menu items 
 */
const mo_toggle = document.querySelector(".mo-toggle");
const mo_toggle_close = document.querySelector(".mo-toggle__close");
const mo_nav = document.querySelector("#mo-nav");
const bg_black = document.querySelector(".bg__black");
mo_toggle.addEventListener('click', () => {
    bg_black.classList.add('on');
    mo_nav.classList.add('over');
});
mo_toggle_close.addEventListener('click', () => {
    bg_black.classList.remove('on');
    mo_nav.classList.remove('over');
});

const mo_nav_list_inner = document.querySelectorAll(".mo-nav__list__inner");
mo_nav_list_inner.forEach(function(eachValue, index, list) {
    eachValue.addEventListener('click', () => {
        const mo_nav_list = document.querySelector(".mo-nav__list.over");
        mo_nav_list.classList.remove("over");
        const mo_nav_list_click = eachValue.closest(".mo-nav__list");
        mo_nav_list_click.classList.add('over');
    });
});






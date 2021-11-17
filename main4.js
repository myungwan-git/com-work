/* 
* mouse over on pc menu -> display menu items 
*/
const headerBorder = document.querySelector('#header');
const navInner = document.querySelector('.nav__inner');
navInner.addEventListener('mouseover', () => {
  headerBorder.classList.add('over');
});
navInner.addEventListener('mouseleave', () => {
  headerBorder.classList.remove('over');
});

/*
* mouse over on pc menu -> display depth1 menu border-bottom red
*/
const depth1 = document.querySelectorAll('.nav__depth1');
const depth2 = document.querySelectorAll('.nav__depth2');
depth1.forEach(function(element) {
  element.addEventListener('mouseover', () => {
    const depth1Parent = element.closest('li');
    depth1Parent.classList.add('on');
  });
  element.addEventListener('mouseleave', () => {
    const depth1Parent = element.closest('li');
    depth1Parent.classList.remove('on');
  });
});
depth2.forEach(function(element) {
  element.addEventListener('mouseover', () => {
    const depth2Parent = element.closest('li');
    depth2Parent.classList.add('on');
  });
  element.addEventListener('mouseleave', () => {
    const depth2Parent = element.closest('li');
    depth2Parent.classList.remove('on');
  });
});


/**
 * moToggle btn click -> show moNav
 */
const moToggle = document.querySelector("#moToggle");
const moNav = document.querySelector("#moNav");
const moToggleClose = document.querySelector("#moToggle__close");
const bgBlack = document.querySelector(".bg__black");
const body = document.querySelector("body");
moToggle.addEventListener('click', () => {
  moNav.classList.add('over');
  bgBlack.classList.add('on');
});
moToggleClose.addEventListener('click', () => {
  moNav.classList.remove('over');
  bgBlack.classList.remove('on');
});
body.addEventListener('click', (event) => {
  const target = event.target;
  if(target == event.currentTarget.querySelector(".bg__black.on")) {
    moNav.classList.remove('over');
    bgBlack.classList.remove('on');
  }
});


/**
 * moNav arrow click -> moNav__list__depth2 show
 */
const moNavListInner = document.querySelectorAll(".moNav__list__inner");
moNavListInner.forEach(function(element) {
  element.addEventListener('click', (event) => {
    const moNavArrowClicked = document.querySelector(".moNav__list.over");
    const moNavArrowNewClicked = event.target.closest('dl');
    if(moNavArrowClicked === moNavArrowNewClicked) {
      return;
    }else {
      moNavArrowNewClicked.classList.add('over');
      moNavArrowClicked.classList.remove('over');
    }
  });
});


/**
 * tab__list click -> show content
 */
const tabList = document.querySelectorAll(".tab__list>li");

tabList.forEach(function(element) {
  element.addEventListener('click', (event) => {
    const tabClicked = document.querySelector(".tab__list>li.on");
    const tab = element.parentNode;
    const tabIndex =  [].indexOf.call(element.parentNode.children, element);

    if(element !== tabClicked) {
      
    }else {
      return;
    }

  });
});










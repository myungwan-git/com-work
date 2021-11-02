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










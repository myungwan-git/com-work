/* 
* mouse over on pc menu -> display menu items 
*/
/* 
const header = document.querySelector("#header");
const nav = document.querySelector("#nav");
nav.addEventListener('mouseover', depth2Show());
//nav.addEventListener('mouseleave', depth2_hide());
function depth2Show() {
  header.classList.add('over');
  console.log("WWW");
}

*/
const header = document.querySelector(".header__inner");
const nav = document.querySelector("#nav");
nav.addEventListener('mouseover', () => {
  header.classList.add('over');
});
nav.addEventListener('mouseleave', () => {
  header.classList.remove('over');
});
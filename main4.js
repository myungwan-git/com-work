function selector(selectName) {
  const result = document.querySelector(selectName);
  return result;
}
function selectorAll(selectName) {
  const result = document.querySelectorAll(selectName);
  return result;
}

function classAdd(event, eventVariable, classVariable, className) {
  eventVariable.addEventListener(event, () => {
    classVariable.classList.add(className);
  });
}
function classRemove(event, eventVariable, classVariable, className) {
  eventVariable.addEventListener(event, () => {
    classVariable.classList.remove(className);
  });
}


/* 
* mouse over on pc menu -> display menu items 
*/
const headerBorder = selector('#header');
const navInner = selector('.nav__inner');
classAdd('mouseover',navInner,headerBorder,'over');
classRemove('mouseleave',navInner,headerBorder,'over');

/*
* mouse over on pc menu -> display depth1 menu border-bottom red
*/
const depth1 = selectorAll('.nav__depth1');
const depth2 = selectorAll('.nav__depth2');
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
const moToggle = selector('#moToggle');
const moNav = selector('#moNav');
const moToggleClose = selector('#moToggle__close');
const bgBlack = selector('.bg__black');
const body = selector('body');
classAdd('click',moToggle,moNav,'over');
classAdd('click',moToggle,bgBlack,'on');
classRemove('click',moToggleClose,moNav,'over');
classRemove('click',moToggleClose,bgBlack,'on');
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
const productList = document.querySelectorAll(".product");
tabList.forEach(function(element) {
  element.addEventListener('click', (event) => {
    const tabClicked = document.querySelector(".tab__list>li.on");
    const tab = element.parentNode;
    const tabIndex =  [].indexOf.call(element.parentNode.children, element);
    const productClicked = document.querySelector(".product.on");
    if(element !== tabClicked) {
      tabClicked.classList.remove("on");
      element.classList.add("on");
      productClicked.classList.remove("on");
      productList[tabIndex].classList.add("on");
    } else {
      return;
    }
  });
});


/**
 * sticky menu
 */
 function scrollSomething(scrollY) {
  const sticky = document.querySelector('.sticky');
  let scroll = scrollY + "px";
  document.querySelector('.sticky').style.top = scroll;
}

window.addEventListener('scroll', function(e) {
  let scrollY = window.scrollY;
  scrollSomething(scrollY);
});































/**
 * call백을 쓰지 않고 비동기코드를 깔끔하게 짜는 법 ( promise )
 */
//비동기적인것을 실행할때 콜백함수 대신에 유용하게 사용이 가능하다.
//가장 중요한 2가지 -> State(상태) / producer와 consumer 의 차이점
// state -> operation이 수행 중 : pending상태 , operation을 성공적으로 끝냄 -> fulfilled 상태 , 파일을 찾을수없거나 네트워크에 문제가 생김 -> rejected
// producer -> 데이터를 만들어 주는 promise객체 , consumer -> 데이터를 소비하는 promise객체
// producer : 
// promise 가 생성될때 자동으로 executor 라는 함수가 실행된다. 따라서 promise 안에 내용이 자동 실행 됨



const getHen = () => new Promise((resolve, reject) => {
  setTimeout(() => resolve('che che che'),1000);
});

const getEgg = hen => new Promise((resolve, reject) => {
  setTimeout(() => resolve(`${hen} => egg egg egg`),1000);
  //setTimeout(() => reject(new Error(` error! ${hen} => egg egg egg`)),1000);
});

const getCook = egg => new Promise((resolve, reject) => {
  setTimeout(() => resolve(`${egg} => cook cook`),1000);
});

getHen()
  .then(hen => getEgg(hen))
  // 에러가 날거같은 부분에 미리 캐치를 한다. 전체흐름을 깨지 않기 위해 리턴한다.
  .catch(error => {return 'ERROR';})
  .then(egg => getCook(egg))
  .then(message => console.log(message))
  // 에러가 났을때 출력
  .catch(errorMsg => console.log(errorMsg));
  



























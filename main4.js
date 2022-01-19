
function getSelector(selectName) {
  return document.querySelector(selectName);
}
function getSelectorAll(selectName) {
  return document.querySelectorAll(selectName);
}

function addClass(event, eventVariable, classVariable, className) {
  eventVariable.addEventListener(event, () => {
    classVariable.classList.add(className);
  });
}
function removeClass(event, eventVariable, classVariable, className) {
  eventVariable.addEventListener(event, () => {
    classVariable.classList.remove(className);
  });
}


/**
 * only javascript ( IIFE )
 */
(function() {
  "use strict";

  /**
   * mouse over on pc menu -> display menu items 
   */
  const headerBorder = getSelector('#header');
  const navInner = getSelector('.nav__inner');
  addClass('mouseover',navInner,headerBorder,'over');
  removeClass('mouseleave',navInner,headerBorder,'over');

  /**
   * mouse over on pc menu -> display depth1 menu border-bottom red 
   */
  const depth1 = getSelectorAll('.nav__depth1');
  const depth2 = getSelectorAll('.nav__depth2');
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
  const moToggle = getSelector('#moToggle');
  const moNav = getSelector('#moNav');
  const moToggleClose = getSelector('#moToggle__close');
  const bgBlack = getSelector('.bg__black');
  const body = getSelector('body');
  addClass('click',moToggle,moNav,'over');
  addClass('click',moToggle,bgBlack,'on');
  removeClass('click',moToggleClose,moNav,'over');
  removeClass('click',moToggleClose,bgBlack,'on');
  body.addEventListener('click', (event) => {
    const target = event.target;
    if(target == event.currentTarget.querySelector(".bg__black.on")) {
      moNav.classList.remove('over');
      bgBlack.classList.remove('on');
    }
  });


  /**
   * moNav__arrow click -> moNav__list__depth2 show
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
   * side sticky menu
   */
  function scrollSomething(scrollY) {
    const sticky = document.querySelector('.sticky');
    let scroll = scrollY + "px";
    document.querySelector('.sticky').style.top = scroll;
  };

  window.addEventListener('scroll', function(e) {
    let scrollY = window.scrollY;
    scrollSomething(scrollY);
  });


})();






































//Selecter
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");

//Event
document.addEventListener("DOMContentLoaded", getTodos);
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteTodo);

//Functions
function addTodo(e) {
  // 새로고침 방지
  e.preventDefault();

  // todo Div 만들기
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");

  // todo li 붙여주기
  const newTodo = document.createElement("li");
  newTodo.innerText = todoInput.value;

  // 로컬스토리지에 저장
  saveLocalTodos(todoInput.value);

  newTodo.classList.add("todo-item");
  todoDiv.appendChild(newTodo);
  todoInput.value = "";

  // 완료버튼 생성
  const completedButton = document.createElement("button");
  completedButton.innerHTML = `<i class="fas fa-check"></i>`;
  completedButton.classList.add("complete-btn");
  todoDiv.appendChild(completedButton);

  // 삭제버튼 생성
  const trashButton = document.createElement("button");
  trashButton.innerHTML = `<i class="fas fa-trash"></i>`;
  trashButton.classList.add("trash-btn");
  todoDiv.appendChild(trashButton);

  todoList.appendChild(todoDiv);
}

function deleteTodo(e) {
  const item = e.target;

  // 삭제버튼일때
  if (item.classList[0] === "trash-btn") {
    const todo = item.parentElement;
    todo.classList.add("fall");

    removeLocalTodos(todo);
    todo.addEventListener("transitionend", e => {
      todo.remove();
    });
  }

  // 완료버튼일때
  if (item.classList[0] === "complete-btn") {
    const todo = item.parentElement;
    todo.classList.toggle("completed");
    console.log(todo);
  }
}

// 로컬스토리지 관려작업
function saveLocalTodos(todo) {
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  todos.push(todo);
  localStorage.setItem("todos", JSON.stringify(todos));
}
function removeLocalTodos(todo) {
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  const todoIndex = todo.children[0].innerText;
  todos.splice(todos.indexOf(todoIndex), 1);
  localStorage.setItem("todos", JSON.stringify(todos));
}

// 실행시에 로컬스토리지에 데이터가있으면 가져온다.
function getTodos() {
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  todos.forEach(function(todo) {

    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");

    const newTodo = document.createElement("li");
    newTodo.innerText = todo;
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);
    todoInput.value = "";

    const completedButton = document.createElement("button");
    completedButton.innerHTML = `<i class="fas fa-check"></i>`;
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);

    const trashButton = document.createElement("button");
    trashButton.innerHTML = `<i class="fas fa-trash"></i>`;
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);
    //attach final Todo
    todoList.appendChild(todoDiv);
  });
}
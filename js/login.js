const loginInput = document.querySelector("#login-form input");
const loginForm = document.querySelector("#login-form");
const helloUsername = document.querySelector("#helloUsername"); //Html에서 가져오기

const CLASSNAME_HIDDEN = "hidden"; //class 변수선언
const USERNAME = "username"; //반복단어 변수선언

function autoGreeting(username) {
  helloUsername.classList.remove(CLASSNAME_HIDDEN);
  helloUsername.innerText = `hello  ${username}`;
} //반복 문장 함수화

const savedUsername = localStorage.getItem(USERNAME);
if (savedUsername === null) {
  loginForm.classList.remove(CLASSNAME_HIDDEN);
} else {
  autoGreeting(savedUsername);
} //조건에 따라 input과 hello username출력

function handleLoginSubmit(event) {
  event.preventDefault();
  const username = loginInput.value;
  console.log(username);
  loginForm.classList.add(CLASSNAME_HIDDEN); //인풋창 숨기기

  autoGreeting(username);

  localStorage.setItem(USERNAME, username); //username저장
}

loginForm.addEventListener("submit", handleLoginSubmit); //submit이 감지되면 함수실행

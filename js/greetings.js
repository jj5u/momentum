const loginForm = document.getElementById("login-form");
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");

const loginLink = document.querySelector("a");
const loginName = document.getElementById("greetings");

const HIDDEN_USRNAME = "hidden";
const USERNAME_KEY = "usernames";

function onLoginSubmit(information) {
  information.preventDefault();
  loginForm.classList.add(HIDDEN_USRNAME);
  const input_value = loginInput.value;
  localStorage.setItem(USERNAME_KEY, input_value);
  paintGreetings(input_value);
}

function paintGreetings(username) {
  loginName.innerText = `Hello ${username}`;
  loginName.classList.remove(HIDDEN_USRNAME);
}

function handleLinkClick(event) {
  event.preventDefault();
  console.log(event);
}

loginLink.addEventListener("click", handleLinkClick);

const savedUsrname = localStorage.getItem(USERNAME_KEY);
console.log(savedUsrname);
// check if there is username in localstorage
if (savedUsrname === null) {
  //show the form
  loginForm.classList.remove(HIDDEN_USRNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  //show greetings
  paintGreetings(savedUsrname);
}

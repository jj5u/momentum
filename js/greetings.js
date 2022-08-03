const loginForm = document.getElementById("login-form");
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");

const loginLink = document.querySelector("a");
const loginName = document.getElementById("greetings");

const HiddenUsrName = "hidden";
const usrNameKey = "usernames";

function onLoginSubmit(information) {
  information.preventDefault();
  loginForm.classList.add(HiddenUsrName);
  const inputValue = loginInput.value;
  localStorage.setItem(usrNameKey, inputValue);
  paintGreetings(inputValue);
}

function paintGreetings(username) {
  loginName.innerText = `Hello ${username}`;
  loginName.classList.remove(HiddenUsrName);
}

function handleLinkClick(event) {
  event.preventDefault();
  console.log(event);
}

loginLink.addEventListener("click", handleLinkClick);

const savedUsrname = localStorage.getItem(usrNameKey);
console.log(savedUsrname);
// check if there is username in localstorage
if (savedUsrname === null) {
  //show the form
  loginForm.classList.remove(HiddenUsrName);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  //show greetings
  paintGreetings(savedUsrname);
}

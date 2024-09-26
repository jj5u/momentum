"use strict";

// JS is synchronous =/ asynchronous
// executes code blocks by order after hoisting
// hoisting: var, function declaration

console.log("1");
// asynchronous, callback
setTimeout((time) => console.log("1"), 1000);
console.log("2");
console.log("3");

// synchronous callback
function printImmediately(print) {
  print();
}

printImmediately(() => console.log("hello"));

// asynchronous callback
function printWithDelay(print, timeout) {
  setTimeout(print, timeout);
}

printWithDelay(() => console.log("Async call back"), 2000);

// Hell of callback
class UserStorage {
  login(id, password, onSuccess, onError) {
    setTimeout(() => {
      if (
        (id === "usermaster" && password === "thisPassword") ||
        (id === "usermater01" && password === "thisPassword")
      ) {
        onSuccess(id);
      } else {
        onError(new Error("not found"));
      }
    }, 2000);
  }

  getRoles(user, onSuccess, onError) {
    setTimeout(() => {
      if (user === "usermaster") {
        onSuccess({ name: "master", role: "admin" });
      } else {
        onError(new Error("no access"));
      }
    }, 1000);
  }
}

const userStorage = new UserStorage();
const id = prompt("enter your id");
const pw = prompt("enter your pw");
userStorage.login(
  id,
  pw,
  (user) => {
    userStorage.getRoles(
      user,
      (userRole) => {
        alert(`hello ${userRole.name}, you are ${userRole.role}`);
      },
      (error) => console.log("no roles")
    );
  },
  (error) => console.log("error")
);

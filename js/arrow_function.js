// Function
// fundamental building block in the program
// subprogram, can be used for multiple times
// performs a task or calculate value

// 1. Function declaration
// function name(para1, para2) { body ... return; }
// one function === one thing
// naming : doSomething, command, verb
// segment to one command
// e.g. createCardAndPoint -> createCard, createPoint
// function is Object in JS
"use strict";
function printHello() {
  console.log("hello");
}
printHello();

function printLog(message) {
  console.log(message);
}
printLog("this is log");

// 2. Parameters
// primitive parameters : passed by value
// object parameters : passed by reference

function changeNames(obj) {
  obj.name = "coder";
}
const julie = { name: "Julie" };
changeNames(julie);
console.log(julie); // expected output: coder

// 3. Default parameters (ES6) : =
function showMessages(message, from = "unknown") {
  console.log(`${message} by ${from}`);
}
showMessages("Hi");

// 4. Rest parameters (ES6) : ...
function printAll(...args) {
  for (let i = 0; i < args.length; i++) {
    console.log(args[i]);
  }
}
printAll("a", "b", "c");

// ..

// make calculate
const calculate = function (doMath, a, b) {
  if (doMath === "add") {
    const add = a + b;
    return add;
  } else if (doMath === "subtract") {
    const subtract = a - b;
    return subtract;
  } else if (doMath === "multiply") {
    const multiply = a * b;
    return multiply;
  } else if (doMath === "divide") {
    const divide = a / b;
    return divide;
  } else {
    return "please use between add, subtract, multiply and divide";
  }
};

// better use switch than if when data is already set
function calculate2(command, a, b) {
  switch (command) {
    case "add":
      return a + b;
    case "subtract":
      return a - b;
    case "multiply":
      return a * b;
    case "divide":
      return a / b;
    default:
      throw Error("unknown command");
  }
}

console.log(calculate("add", 1, 2));
console.log(calculate("subtract", 1, 2));
console.log(calculate("multiply", 1, 2));
console.log(calculate("divide", 1, 2));
console.log(calculate("mega", 1, 2));

console.log(calculate2("add", 1, 2));
console.log(calculate2("subtract", 1, 2));
console.log(calculate2("multiply", 1, 2));
console.log(calculate2("divide", 1, 2));
console.log(calculate2("mega", 1, 2));

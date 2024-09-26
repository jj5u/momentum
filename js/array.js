"use strict";

// Array

// 1. Declaration
const arr1 = new Array();
const arr2 = [1, 2];

// 2. Index position
const fruits = ["🍏", "🍓"];
console.log(fruits);
console.log(fruits.length);
// console.log(fruits['key'])
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]); //undefined
console.log(fruits[fruits.length - 1]); //last item of an array

// 3. Looping over an array
console.clear();
//a. for
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}
//b. for of
for (let fruit of fruits) {
  console.log(fruit);
}
console.clear();
//c. forEach
fruits.forEach((fruit) => console.log(fruit));

// 4. Addition, deletion, copy
// push : add an item to the end.
fruits.push("🍑", "🍒");
console.log(fruits);
// pop : delete an item from the end
fruits.pop();
console.log(fruits);
//unshift : add an item to the beginning
fruits.unshift("🍎", "🌽");
console.log(fruits);
//shift : remove an item from the beginning
fruits.shift();
console.log(fruits);
//shift&unshift are much much slower than pop, push

//splice : remove an item by index position
fruits.push("🍠", "🥔", "🧄");
fruits.splice(0, 2, "🍓", "🍑");
console.log(fruits);

//combine 2 arrays
const fruits2 = ["🥩", "🍕"];
const newFruits = fruits.concat(fruits2, "🍮");
console.log(newFruits);

// 5.Searching
console.clear();
console.log(fruits);
console.log(fruits.indexOf("🍓")); // first index met
console.log(fruits.indexOf("🥒")); // -1: not exists
console.log(fruits.includes("🍎")); // false
console.log(fruits.lastIndexOf("🍓"));

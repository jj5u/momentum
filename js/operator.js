// 1. String concatenation
console.log("my" + " cat");
console.log("1" + 3);
console.log(`string literals:

''''
1+2`);
console.log("jason's book"); //'jason/'s book'
console.log("\n hi"); //enter
console.log("\t hi"); //tab

// 2. Numeric operators
console.log(1 + 1); //add
console.log(2 - 1); //subtract
console.log(4 / 2); //divide
console.log(4 * 2); //multiply
console.log(4 % 3); //remainder
console.log(2 ** 3); //exponentiation

// 3. Increments and Decrements operators
let counter = 2;
preIncrement = ++counter;
// counter = counter + 1;
// preIncrement = counter
console.log(`counter value: ${counter}, preIncrement value: ${preIncrement}`);
postIncrement = counter++;
console.log(`counter value: ${counter}, postIncrement value: ${postIncrement}`);
preDecrement = --counter;
console.log(`counter value: ${counter}, preDecrement value: ${preDecrement}`);
postDecrement = counter--;
console.log(`counter value: ${counter}, postDecrement value: ${postDecrement}`);

// 4. Assignment Operators
let x = 3;
let y = 6;
x += y; //x = x + y/\;
x -= y;
x *= y;
x /= y;

// 5. Comparison Operators
console.log(10 < 6); //less than
console.log(10 <= 6); //less than or equal
console.log(10 > 6); //greater than
console.log(10 >= 6); //greater than or equal

// 6. Logical Operators ⭐️
const value1 = false;
const value2 = 4 < 2;
console.log(`what is value1? : ${value1}`);
console.log(`what is value2? : ${value2}`);

// || (or), find the first truthy value
console.log(`or: ${value1 || value2 || check()}`); // better to put complicated functions, expressions later

// && (and), find the first falsy value
console.log(`and: ${value1 && value2 && check()}`); // better to put complicated functions, expressions later
function check() {
  for (let i = 0; i < 10; i++) {
    console.log("🤦‍♀️");
  }
  return true;
}
// often used to compress long if-statement
// nullableObject && nullableObject.something
const nullableObject = "not null";
if (nullableObject != null) {
  console.log(nullableObject);
}

// ! (not)
console.log(value1);
console.log(!value1);

// 7. Equality
const stringFive = "5";
const numberFive = 5;

// == loose equality, with type conversion
console.log(`loose equality: ${stringFive == numberFive}`); //true
console.log(stringFive != numberFive); //false

// === strict equality, no type conversion
console.log(`strict equality: ${stringFive === numberFive}`); //false
console.log(stringFive !== numberFive); //true

// object equality by reference
const doe1 = { age: 30, name: "Doe" };
const doe2 = { age: 30, name: "Doe" };
const doe3 = doe1;
console.log(doe1 == doe2); //false : different reference
console.log(doe1 === doe2); //false : different reference, different value
console.log(doe1 === doe3); //true : same reference

// equality quiz
console.log(0 == false); //true
console.log(0 === false); //0:type number, false:type boolean : false
console.log("" == false); //true
console.log("" === false); //'':type string, false: type boolean : false
console.log(typeof "");
console.log(null == undefined); //true
console.log(null === undefined); //false
console.log(typeof null);
console.log(typeof undefined);

// 8. Conditional Operators : if
// if, if else, else
const genie = "Genie";
const aladin = "Aladin";
if (genie === "Genie") {
  console.log("Welcome, Genie!");
} else if (genie === "Aladin") {
  console.log("Welcome, Aladin!");
} else {
  console.log("known");
}

// 9. Ternary Operator : ?
// condition ? value : value
// use for simple statement
console.log(genie === "Aladin" ? "Yes" : "No");

// 10. Switch statement
// use for multiple if checks
// use for enum-like value checks (i.e ["Firefox","Chrome"])
// use for multiple type checks in TS
const browser = "Edge";
switch (browser) {
  case "IE":
    console.log("Noooooo...");
    break;
  case "Firefox":
  case "Chrome":
    console.log("good to go");
    break;
  default:
    console.log("checking...");
    break;
}

// 11. Loops
// while : while condition is truthy,
// body code is executed.
let i = 3;
while (i > 0) {
  console.log(`while : ${i}`);
  i--;
}
// do-while : body code is executed first,
// then check the condition.
do {
  console.log(`do while : ${i}`);
  i++;
} while (i < 2);
// for : for(begin; condition; step)
for (i = 4; i > 0; i--) {
  console.log(`for: ${i}`);
}
// inline variable declaration (in block)
for (let i = 4; i > 0; i--) {
  console.log(`inline declaration for: ${i}`);
}
// nested loops(avoid)
for (i = 4; i > 0; i--) {
  for (j = 4; j > 0; j--) console.log(`j: ${j}, i: ${i}`);
}
// break : kill loop
// continue : hold for now, then continue
for (i = 0; i < 11; i++) {
  if (i % 2 !== 0) {
    continue;
  }
  console.log(`even numbers: ${i}`);
}
for (i = 0; i < 11; i++) {
  if (i % 2 !== 0) {
    console.log(`even numbers: ${i}`);
    continue;
  }
}

for (i = 0; i < 11; i++) {
  if (i >= 8) {
    break;
  }
  console.log(`numbers less than 8: ${i}`);
}

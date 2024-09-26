// 'use strict' added in ES5
"use strict";
console.log(age);
// variable r/w(read&write)
// 'let' added in ES6
// mutable data type
let globalName = "user";
{
  let name = "Jane";
  name = "John";
  console.log(globalName);
  console.log(name);
}
console.log(name); // can't see inside {block scope}

// var hoisting (move declaration from bottom to top)
// var ignores block scope
{
  age = 16;
  var age;
}
console.log(age);

// constant r(read only)
// favor immutable data type always.
// reason 1 - security
// reason 2 - thread safety
// reason 1 - reduce human mistakes
const dayInWeeks = 7;
// !NOTE
// Immutable data types : primitive types, frozen object (i.e. object.freeze())
// Mutable data types : all objects by default are mutable in JS

// variable types
// primitive, single item : number, string, boolean, null, undefined, symbol
// object, box container
// function, first-class function
const count = 100; // integer
const size = 7.5; // decimal number
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);

// number with special numeric values : infinity, -infinity, NaN, bigInt
const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = "hello" / 5;
const bigInt = 123456890123456789012345678901n;

console.log(`$(typeof infinity)`);
console.log(`$(typeof negativeInfinity)`);
console.log(`$(typeof nAn)`);
console.log(`value:${bigInt}, ${typeof bigInt}`);

// strings
const alex = "Alex";
const greetings = "Hello" + alex;
console.log(`value: ${greetings}, type: ${typeof greetings}`);
const helloAlex = `Hello ${alex}`; // template literals
console.log(`value: ${helloAlex}, type: ${typeof helloAlex}`);

// boolean
// false : 0, null, undefined, NaN, ''
// true : any other value
const truth = true;
const falsity = 3 > 2; //false
console.log(`value: ${truth}, type: ${typeof truth}`);
console.log(`value: ${falsity}, type: ${typeof falsity}`);

// null
let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`);

// undefined
let x; //undefined
console.log(`value: ${x}, type: ${typeof x}`);

// symbol : create unique identifiers for objects
const symbol1 = Symbol("id");
const symbol2 = Symbol("id");
console.log(symbol1 === symbol2);
const gSymbol1 = Symbol.for("id");
const gSymbol2 = Symbol.for("id");
console.log(gSymbol1 === gSymbol2);
console.log(`value: ${gSymbol1.description}, type: ${typeof gSymbol1}`);

// object, real life object, data structure
const james = { age: 20, name: "Jame" };
console.log(james.age);
james.age = 21;
console.log(james.age);

// Dynamic typing : dynamically type language -> typescript
let text = "hello";
console.log(text.charAt(0)); //h
console.log(`value: ${text}, type: ${typeof text}`);
text = 1;
console.log(`value: ${text}, type: ${typeof text}`);
text = "1" + 7;
console.log(`value: ${text}, type: ${typeof text}`);
text = "1" / "7";
console.log(`value: ${text}, type: ${typeof text}`);
console.log(text.charAt(0)); //!error

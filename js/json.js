// JSON

// 1. Object to JSON
// stringify
let json = JSON.stringify(true);
console.log(json);

json = JSON.stringify(["banana", "apple"]);
console.log(json);

const rabbit = {
  name: "toto",
  age: "2",
  size: null,
  birthDate: new Date(),
  jump: () => {
    console.log("pyooong");
  },
};

json = JSON.stringify(rabbit);
console.log(json);
json = JSON.stringify(rabbit, ["name"]); // just show name
console.log(json);
json = JSON.stringify(rabbit, (key, value) => {
  console.log(`key:${key} and value:${value}`);
  return key === "name" ? "jj5u" : value;
});
console.log(json);

// 2. JSON to Object
console.clear;
json = JSON.stringify(rabbit);
const obj = JSON.parse(json);
console.log(json);
console.log(obj);
rabbit.jump();
// obj.jump() :  error (function is not included when stringify obj)
console.log(obj.name);
console.log(rabbit.birthDate.getDate());
// console.log(obj.birthDate.getDate()) : error, new Date() was stringified
console.log(obj.birthDate);
console.clear;
const newObj = JSON.parse(json, (key, value) => {
  return key === "birthDate" ? new Date() : value;
});

console.log(newObj.birthDate);
console.log(newObj.birthDate.getDate());

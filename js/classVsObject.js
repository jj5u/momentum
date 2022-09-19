"use strict";
// class:
// - template
// - declare once
// - no data in
// i.e ) 붕어빵틀

// Object:
// - instance of a class
// - created many time
// - data in
// i.e ) 슈크림붕어빵

// Javascript classes - introduced in ES6, syntactical sugar over prototype-based inheritance

// 1. Class declaration
class Person {
  // constructor
  constructor(name, age) {
    // fields
    this.name = name;
    this.age = age;
  }
  // method
  speak() {
    console.log(`Hello, I'm ${this.name}!`);
  }
}

const lily = new Person("lily kim", 20);
console.log(lily.name);
console.log(lily.age);
lily.speak();

// 2. Getter & Setters
class User {
  constructor(firstName, nickName, age) {
    this.name = firstName;
    this.nickName = nickName;
    this.age = age;
  }
  get age() {
    return this._age;
  }
  set age(value) {
    this._age = value < 0 ? 1 : value;
  }
}

const user1 = new User("Jobs", "appleman", -1);
console.log(user1.age);
console.log(user1.name);

// 3. Fields (public, private)
class Fields {
  public = "You can see me";
  #private = "You can't see me on the outside";
}

const letsLook = new Fields();
console.log(letsLook.public); // You can see me
console.log(letsLook.private); // undefined

// 4. Static properties and methods
class Article {
  static publisher = "Hello World";
  constructor(articleNumber) {
    this.number = articleNumber;
  }
  static printPublisher() {
    console.log("Hello World Presents");
  }
}

const article1 = new Article(1);
const article2 = new Article(2);
console.log(Article.publisher); // Hello World
console.log(article1.publisher); // undefined
console.log(article1.number); // 1
Article.printPublisher(); // hello world presents
/* article1.printPublisher(); // error */

// 5. Inheritance
class Shape {
  constructor(width, height, color) {
    this.width = width;
    this.height = height;
    this.color = color;
  }
  draw() {
    console.log(`painting with ${this.color}`);
  }
  getArea() {
    return this.height * this.width;
  }
}
// inheriting
class Rectangle extends Shape {
  draw() {
    super.draw(); // get parents method
    console.log("Sponge Bob Square Pants"); // overwriting
  }
}
class Triangle extends Shape {
  getArea() {
    return (this.height * this.width) / 2;
  } // overwriting
}
const triangle = new Triangle(20, 40, "yellow");
const rectangle = new Rectangle(20, 40, "blue");
console.log(rectangle.color);
console.log(rectangle.width);
console.log(rectangle.height);
console.log(triangle.color);
console.log(triangle.width);
console.log(triangle.height);
triangle.draw();
rectangle.draw();
console.log(rectangle.getArea());
console.log(triangle.getArea());

// 6. Class Checking : instanceof
console.log(triangle instanceof Triangle);
console.log(triangle instanceof Rectangle);
console.log(triangle instanceof Shape);
console.log(triangle instanceof Object);

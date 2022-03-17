
const player = {
    name: "Jju",
    age: 93,
}

console.log(player.name); // {name: Jju} --  get property from the player
player.name = "Jjuu"; // update
player.job = "Dev" // add
console.log(player); // {name: Jjuu, age: 93, job:Dev}

function plus() {
    console.log(2 + 2);
};
plus(); // 4

function plus(a, b) {
    console.log(a + b);
};
plus(1, 2); // 3

// calculator
const calculator = {
    add: function(a, b){
        console.log(a + b);
    },
    subtract: function(a, b) {
        console.log(a - b);
    },
    multiply: function(a, b) {
        console.log(a * b);
    },
    divide: function(a, b) {
        console.log(a / b);
    },
    powerOf: function(a, b) {
        console.log( a ** b);
    },
};

let a = 4
let b = 8

calculator.add(a, b); // 12
calculator.subtract(a, b); // -4
calculator.multiply(a, b); // 32
calculator.divide(a, b); // 0.5
calculator.powerOf(a, b); // 65536




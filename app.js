
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
}; // NaN
plus(1, 2); // 3

// calculator
const calculator = {
    add: function(a, b){
        return a + b;
    },
    subtract: function(a, b) {
        return a - b;
    },
    multiply: function(a, b) {
        return a * b;
    },
    divide: function(a, b) {
        return a / b;
    },
    powerOf: function(a, b) {
        return a ** b;
    },
    
};


const plusResult = calculator.add(1 + 2) // 3



// conditionals
const age = prompt("How old are you?"); // <-- Not using anymore because it pauses javascript execution

console.log(typeof "15", parseInt(15)); // string number
console.log(typeof age, parseInt(age)); // string NaN(Not a Number)
// const age = parseInt(prompt("How old are you?")); 
console.log(isNaN(age));

if(isNaN(age) || age < 0){
    /* condition === true
     * condition === boolean
     * isNaN()
     */
    console.log("Please write a real positive number")
 } else if (age < 18) {
    // condition === true
    console.log("you are too young");
 } else if (age >= 18 && age <= 80) {
    /* && and
     * true && true === true
     * false && true === false
     * || or
     * true || true === true
     * true || false === true
     * false || true === true
     * false || false === false
     */
    console.log("you are good to drink")
} else if (age === 100) {
    console.log("Wow You are wise")
} else if (age > 80) {
    // condition === false
    console.log("You can't drink")
    }

 
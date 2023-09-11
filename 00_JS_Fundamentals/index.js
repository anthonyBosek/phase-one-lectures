// "use strict" // use to enforce a stricter set of rules and best-practices

// JS Fundamentals Part 1

// Single Line Comments 
/*
    Multi Line Comments
*/
// Toggle comments using cmd + ? (mac) OR cntr + ? (pc)
// ! Special type of comment!

// Console Logging
// console.log("Hello World!")

// Debugging
// debugger

// Variables
var name = 'Matteo' // ES5, re-declaration: YES, re-assignment: YES, HOISTING!!!!
let nameTwo = 'Matteo' //ES6 re-declaration (WITHIN SAME SCOPE): NO, re-assignment: YES, HOISTING???
const nameThree = 'Matteo' //ES6 re-declaration (WITHIN SAME SCOPE): NO , re-assignment: NO, HOISTING???

// Data Types

// Boolean -> true, false
//! Falsey values: undefined, null, "", false, 0, NaN, -0, 0n

// String -> ', ", ` used only for string interpolation
// Number -> integer, float/decimal, complex
// Object -> array ([]), objects ({key: value})
// Null -> absence of value
// Undefined -> the value has not been assigned YET
// BigInt -> +-(2^53 -1)
// Symbol -> used for memory efficiency and in objects declarations


// Conditional Statements
// if (name == "Matteoh") {
//     console.log("Yes")
// } else if (name == "Matteog") {
//     console.log("Yay")
// } else {
//     console.log("No")
// }

switch (name) {
    case "Matteoh":
        console.log("hello")
        break
    case "Marco":
        console.log("World")
        break
    default:
        console.log("Hello World!")
}

// Ternary Expressions
// expression ? returnValueIfTruthy : returnValueIfFalsey
console.log(name.length > 5 ? 7 : 9)
console.log("🚀 ~ file: index.js:61 ~ const age = name.length > 5 ? 7 : 9:")

// Loops
for (let i = 0; i < 5; i++) {
    console.log(i)
}

let counter = 0

while (counter < 5) {
    console.log(counter)
    counter++
}
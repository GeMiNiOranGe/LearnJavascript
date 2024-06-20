let firstNumber = 20;
let secondNumber = 3.33;

let sum = firstNumber + secondNumber;
let difference = firstNumber - secondNumber;
let product = firstNumber * secondNumber;
let quotient = firstNumber / secondNumber;
console.log("Result:", [sum, difference, product, quotient.toFixed(2)].join(" | "));
console.log();

let numberInt = parseInt('3.61');
let numberFloat = parseFloat('3.61');
console.log("Cast to int  :", numberInt);
console.log("Cast to float:", numberFloat);
console.log();

let number = 1264813.4567895;
console.log("Number to precision:", number.toPrecision(4));
console.log("Number to fixed    :", number.toFixed(4));

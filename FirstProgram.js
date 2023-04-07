// Add "type": "module" to your package.json file
// {
//   // ...
//   "type": "module",
//   // ...
// }
// import {show} from './Exception.js';
// show()

// import { makeHideEachCharOfString, countWord } from "./Miscellaneous.js"

// ---------------------------------------------------------------------------------
const strHello = 'Hello'
// console.log(typeof(strHello))
// ---------------------------------------------------------------------------------
const arr = []
arr.push('array')
arr.push('int')
arr.push(90)
// arr.forEach(element => console.log(element));
// ---------------------------------------------------------------------------------
const number1 = 5
const number2 = 10
const number3 = 3.33
let number4 = number3
number4 = 15
// console.log(number2 - number1);
// console.log(number3, number4)
// console.log(!!undefined);
// ---------------------------------------------------------------------------------
const myObject = {
	a: 1,
	b: 2
}
// console.log(myObject['a'])
// console.log(myObject.b)
// console.log(myObject)
// ---------------------------------------------------------------------------------
// Use spread operator ... to call variadic function
const myArr = [1, 2, 3]
const myStr = 'any string'
let strTemp = myStr.split('')
// console.log(myArr)							// => [ 1, 2, 3 ]
// console.log(myArr[0])						// => 1
// console.log(myArr[0], myArr[2])				// => 1 3
// console.log(...myArr)						// => 1 2 3
// console.log(...[1, 2, 3, 4, 5])				// => 1 2 3 4 5
// console.log(typeof (myArr))					// => object
// console.log('#####################################');
// console.log(...myStr);						// => a n y   s t r i n g
// console.log(strTemp.join(' '.repeat(3)));	// => a   n   y       s   t   r   i   n   g
// ---------------------------------------------------------------------------------
const myObject2 = myObject;
myObject['a'] = 999
// console.log(myObject['a'], myObject2['a']);
// ---------------------------------------------------------------------------------
function sum(...arr) {
	let sum = 0
	arr.forEach(element => sum += element);
	return sum;
}
// console.log(sum(1, 4, 6, 7));
// ---------------------------------------------------------------------------------
function rectArea({
	width = 5,
	height = 5
} = {}) {
	return width * height
}
// console.log(rectArea({ 
// 	width: 5, 
// 	height: 10
// }));
// ---------------------------------------------------------------------------------
var num = 3 // var có thể được định nghĩa lại
// for (let num = 0; num < 2; num++) {
// 	console.log(num);
// }
// {
// 	let num = 999
// 	console.log(num);
// }
// {
// 	console.log(num);
// }
// ---------------------------------------------------------------------------------
let callback1 = (total) => console.log('Oh! already finished! Total: ', total)
let callback2 = (total) => console.log('Wait so long. Boring. Total: ', total)
let process = (cb) => {
	let total = 0
	for (let i = 0; i < 100; i++)
		total += 1;
	cb(total)
}
// process(callback1)
// process(callback2)
// ---------------------------------------------------------------------------------
const recurAdd = (a) => {
	if (a == 0) return 0
	return recurAdd(a - 1) + a
}
// setTimeout(() => console.log(recurAdd(10)), 1000);
// setTimeout(() => console.log(recurAdd(5)), 100);
// setTimeout(() => console.log(recurAdd(1)), 1);
// ---------------------------------------------------------------------------------
let num10 = 10
// toán tử == kiểm tra giá trị
// toán tử === kiểm tra giá trị và cả kiểu dữ liệu
// if (num10 === '10') console.log('=== | hello');
// if (num10 == '10') console.log('== | hello');
// ---------------------------------------------------------------------------------
function concatenateAll(...args) {
	console.log(args[0], args[1]);
	console.log(args);
	console.log(args.length);
	return args.join(' ')
}
// console.log(concatenateAll('Hey', 'I', 'kinda', 'miss', 'you'));
// ---------------------------------------------------------------------------------
let numbers = [1, 2, 3]
// console.log(numbers.map((x) => {
// 	const y = x + 1;
// 	return x * y
// }));

// method 1:
numbers.map(number => `A string containing the ${number}`)
// .forEach(element => console.log(element));
// method 2:
let strNum = numbers.map(number => `A string containing the ${number}`).join('\n')
// console.log(`strNum:\n${strNum}`)
// method 3:
// console.log(`strNum:\n${[1, 2, 3].map(number => `A string containing the ${number}`).join('\n')}`)
// =>	A string containing the 1
// 		A string containing the 2
// 		A string containing the 3
// ---------------------------------------------------------------------------------
let strings = [1, 2, 3].map(number => {
	const newNumber = number + 1
	return `A string containing the ${newNumber}`
})
// console.log(strings);
let objNumCreatedByMap = [1, 2, 3].map((number, index) => ({
	index: number
}))
// console.log(objNumCreatedByMap);
// ---------------------------------------------------------------------------------
let numOut = 1264813.4567895
// console.log(numOut.toPrecision(4));
// console.log(numOut.toFixed(4));
// ---------------------------------------------------------------------------------
// convert string to number
let numOutInt = parseInt('3.61')
let numOutFloat = parseFloat('3.61')
let sumOut = numOutInt + numOutFloat
// console.log(numOutInt);
// console.log(numOutFloat);
// console.log(sumOut);
// console.log(sumOut.toFixed(2));
// ---------------------------------------------------------------------------------
let strApple = 'this is an apple'
// console.log(strApple.indexOf('is'));		// => 2
// console.log(strApple.lastIndexOf('is'));	// => 5
// console.log(strApple.lastIndexOf('mac'));	// => -1

// if you need to use regex
// console.log(strApple.search(/a/));	// => 8

// console.log(strApple.replace(/a/g, 'b'));	// => this is bn bpple
// ---------------------------------------------------------------------------------
let strAppleUpperCase = strApple.toUpperCase()
let strAppleLocaleUpperCase = strApple.toLocaleUpperCase()
// console.log(strApple)
// console.log(strAppleUpperCase)
// console.log(strAppleLocaleUpperCase)
// console.log(strApple)

// console.log(strApple.includes('apple'));	// => true
// console.log(strApple.includes('mac'));		// => false
// ---------------------------------------------------------------------------------
// console.log(strApple.startsWith('this'));	// => true`
// console.log(strApple.startsWith('is'));		// => false

// console.log(strApple.endsWith('apple'));	// => true
// console.log(strApple.endsWith('an'));		// => false
// ---------------------------------------------------------------------------------
var nickSmith = {
	firstName: "Nick",
	lastName: "Smith",
	address: {
		street: "321 Oxford Street",
		city: "London",
		country: "United Kingdom"
	}
};
// ---------------------------------------------------------------------------------

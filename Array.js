let arrMix = [1, 2, 'abc']
// console.log(typeof(arrMix[1]));		// => number
// console.log(typeof(arrMix[2]));		// => string
// console.log(typeof(arrMix));		// => object
// console.log(arrMix);				// => [ 1, 2, 'abc' ]
// console.log(arrMix.length);			// => 3

arrMix[0] = 10
// console.log(arrMix);	// => [ 10, 2, 'abc' ]
arrMix[3] = 11
// console.log(arrMix);	// => [ 10, 2, 'abc', 11 ]

let longArr = []
longArr.push(0)
longArr[10000] = 0
// console.log(longArr);		// => [ 0, <9999 empty items>, 0 ]
// console.log(longArr.length);	// => 10001
// ---------------------------------------------------------------------------------
let arrNum = [1, 2, 3, 4, 5]
delete arrNum[2]
// console.log(arrNum);			// => [ 1, 2, <1 empty item>, 4, 5 ]
// console.log(arrNum.length);	// => 5

arrNum.splice(2, 2)
// console.log(arrNum);	// => [ 1, 2, 5 ]
arrNum.splice(1, 1, 7, 8, 9)
// console.log(arrNum);	// => [ 1, 7, 8, 9, 5 ]

let arrNumTemp = arrNum.slice(1, 3)
// console.log(arrNumTemp);	// => [ 7, 8 ]
// ---------------------------------------------------------------------------------
// Push and unshift, return the size of the array after inserting the element
// console.log(arrNum);
// console.log(arrNum.push(30));
// console.log(arrNum.unshift(20));
// console.log(arrNum);

// Pop and shift, remove the element of the array and return it
// console.log(arrNum);
// console.log(arrNum.pop());
// console.log(arrNum.shift());
// console.log(arrNum);
// ---------------------------------------------------------------------------------
// How to recognize array
// console.log(typeof []);			// => object
// console.log(typeof {});			// => object
// console.log(Array.isArray([]));	// => true
// console.log(Array.isArray({}));	// => false

// console.log(arrNum.indexOf(7));		// => 1

let thisIsAString = 'this is a string'
// console.log(thisIsAString.indexOf('i'));	// => 2
// ---------------------------------------------------------------------------------
function addNumberToArray(array, number) {
	return array.map(element => element + number)
}
// console.log(addNumberToArray([1, 2, 3], 5));	// => [ 6, 7, 8 ]
// console.log(addNumberToArray([1, 2, 3], 1));	// => [ 2, 3, 4 ]
// ---------------------------------------------------------------------------------
let arrNumNew = [2, 3, 1, 10, 4]
arrNumNew.sort()
// console.log(arrNumNew);		// => [ 1, 10, 2, 3, 4 ]
arrNumNew.sort((a, b) => a - b)
// console.log(arrNumNew);		// => [ 1, 2, 3, 4, 10 ]
arrNumNew.sort((a, b) => b - a)
// console.log(arrNumNew);		// => [ 10, 4, 3, 2, 1 ]

let arrMixNew = [0, 2, 1, 'y', 'a', 'b', 'z']
arrMixNew.sort()
// console.log(arrMixNew);		// => [0, 1, 2, 'a', 'b', 'y', 'z']
arrMixNew.reverse()
// console.log(arrMixNew);		// => ['z', 'y', 'b', 'a', 2, 1, 0]
// ---------------------------------------------------------------------------------
// 2D, 3D array
let arr2D = [
	[1, 2, 3],
	[4, 5, 6],
	[7, 8, 9]
]
let arr3D = [
	[
		[1, 2, 3],
		[4, 5, 6],
		[7, 8, 9]
	],
	[
		[0, 0, 0],
		[0, 0, 0],
		[0, 0, 0]
	]
]
arr2D[1] = [10, 11, 12]
arr2D[1][1] = 13
// console.log(arr2D);		// => [ [ 1, 2, 3 ], [ 10, 13, 12 ], [ 7, 8, 9 ] ]
// arr2D.forEach((value, key, arr2D) => {
// 	console.log('value: ', value, '\tkey: ', key, '\tarrary2D: ', arr2D);
// });
// ---------------------------------------------------------------------------------
let arrSpread = [...[1, 2, 3], ...[4, 5, 6]]
let arrSpreadVer2 = [...[1, 2, 3], 10, ...[4, 5, 6]]
// console.log(arrSpread);			// => [ 1, 2, 3, 4, 5, 6 ]
// console.log(arrSpreadVer2);		// => [ 1, 2, 3, 10, 4, 5, 6 ]

// console.log(Array.from(['a', 'b', 'c']));	// => [ 'a', 'b', 'c' ]
// console.log(Array.from('abc'));				// => [ 'a', 'b', 'c' ]

// console.log(Array.of(1));			// => [ 1 ]
// console.log(Array.of(1, 2, 3));		// => [ 1, 2, 3 ]
// console.log(Array.of([1, 2], 3));	// => [ [ 1, 2 ], 3 ]
// ---------------------------------------------------------------------------------
// console.log(new Array(10).fill(1));		// => [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1 ]
let arrFrom1To10 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// console.log(arrFrom1To10.fill('a', 3, 5));	// => [ 1, 2, 3, 'a', 'a', 6, 7, 8, 9, 10 ]

// console.log([1, 2, 10, 20, 30].find(element => element > 2));	// => 10
// console.log([1, 2, 10, 20, 30].findIndex(element => element > 2));	// => 2
// ---------------------------------------------------------------------------------
let arrSource = [1, 2, 3, 4, 5]
const sumReducer = (accumulator, currentValue) => accumulator + currentValue
const multiReducer = (accumulator, currentValue) => accumulator * currentValue
const concatReducer = (accumulator, currentValue) => '' + accumulator + currentValue
// console.log(arrSource.reduce(sumReducer));		// => 15
// console.log(arrSource.reduce(multiReducer));	// => 120
// console.log(arrSource.reduce(concatReducer));	// => 12345

// console.log(arrSource.filter(number => number > 3));	// => [ 4, 5 ]
// ---------------------------------------------------------------------------------
// Destructuring
let [a, b, c] = arrFrom1To10
// console.log(arrFrom1To10, a, b, c);		// => [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ] 1 2 3
// ---------------------------------------------------------------------------------
// console.log([[1, 2], [3, 4], [5, 6]].reduce((memo, item, index) => {
// 	return memo.concat(item)
// }))
// ---------------------------------------------------------------------------------

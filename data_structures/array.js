//#region How to recognize array
console.log("Type of '[]' :", typeof []);
console.log("Type of '{}' :", typeof {});
console.log("'[]' is array:", Array.isArray([]));
console.log("'{}' is array:", Array.isArray({}));
console.log();
//#endregion

//#region destructuring
let messageArr = ["hello", "world", "!!!"];
let [first, second, third] = messageArr;
console.log("Destructuring array:", first, third, second);
console.log();
//#endregion

//#region introduce
// Use spread operator ... to call variadic function
// let myArr = new Array(10, 1, 20, "x", "z", "Hello", "b");
const MY_STRING_ARRAY = ["x", "z", "Hello", "b"];
const MY_MIXED_ARRAY = [10, 1, 20, ...MY_STRING_ARRAY];
MY_MIXED_ARRAY[8] = "World";

console.table({ Values: MY_MIXED_ARRAY });
console.log("Array                       :", MY_MIXED_ARRAY);
console.log("Length                      :", MY_MIXED_ARRAY.length);
console.log("Index of 'Hello'            :", MY_MIXED_ARRAY.indexOf("Hello"));
console.log("Value at index 10           :", MY_MIXED_ARRAY[10]);
console.log("Array with '...'            :", ...MY_MIXED_ARRAY);
console.log("Type of 'Array'             :", typeof MY_MIXED_ARRAY);
console.log("Type at index 5             :", typeof MY_MIXED_ARRAY[5]);
console.log();
//#endregion

//#region modifying
delete MY_MIXED_ARRAY[3];
console.log("Deleted at index 3          :", ...MY_MIXED_ARRAY);
console.log("Length after delete         :", MY_MIXED_ARRAY.length);
console.log();

let slicedArr = MY_MIXED_ARRAY.slice(3, 5);
console.log("Sliced array                :", slicedArr);
console.log("Array after slicing         :", ...MY_MIXED_ARRAY);
console.log();

let start = 5;
let deleteCount = 3;
let splicedArr = MY_MIXED_ARRAY.splice(start, deleteCount, 11, 2, 22, "h");
console.log("Spliced array               :", splicedArr);
console.log("Array after splicing        :", MY_MIXED_ARRAY);
console.log();
//#endregion

//#region inserting
let unshiftValue = 20;
let pushValue = 30;
console.log(`Unshift '${unshiftValue}', length is     :`, MY_MIXED_ARRAY.unshift(unshiftValue));
console.log(`Push '${pushValue}', length is        :`, MY_MIXED_ARRAY.push(pushValue));
console.log("Array after inserting       :", MY_MIXED_ARRAY);
console.log();

console.log("Remove first elem, return is:", MY_MIXED_ARRAY.shift());
console.log("Remove last elem, return is :", MY_MIXED_ARRAY.pop());
console.log("Array after removing        :", MY_MIXED_ARRAY);
console.log();
//#endregion

//#region sorting
let sortedByAscii = MY_MIXED_ARRAY.toSorted();
console.log("Sorted by ascii             :", sortedByAscii);
console.log("Reversed array              :", sortedByAscii.reverse());
console.log();

let normalizedNumbers = [];
MY_MIXED_ARRAY.forEach(element => {
    if (!isNaN(element)) {
        normalizedNumbers.push(element);
    }
});
console.log("Normalized number           :", ...normalizedNumbers);

const increasedCompare = (first, second) => first - second;
let ascendingNumbers = normalizedNumbers.toSorted(increasedCompare);
console.log("Ascending number            :", ...ascendingNumbers);

const decreasedCompare = (first, second) => second - first;
let decreasingNumbers = normalizedNumbers.toSorted(decreasedCompare);
console.log("Decreasing number           :", ...decreasingNumbers);
console.log();
//#endregion

//#region finding
const predicateElem = (element) => element > 10;
console.log("Find elem > 10, return value:", normalizedNumbers.find(predicateElem));
console.log("Find elem > 10, return index:", normalizedNumbers.findIndex(predicateElem));
console.log();
//#endregion

//#region 2d array
let arr2d = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
arr2d[1] = [10, 11, 12];
arr2d[1][1] = 13;
console.log("Array 2d:", arr2d);
arr2d.forEach((value, key, arr2D) => {
    console.log("Value:", value, "\tKey:", key, "\tArray 2d:", arr2D);
});
console.log();
//#endregion

//#region other function
/* 
"Array.of(...otherArr)"
equivalent to
"Array.from(otherArr)"
 */
console.log("Array from string      :", Array.from("abc"));
console.log("Array from other array :", Array.from(["a", "b", "c"]));
console.log();

console.log("Array of '1'           :", Array.of(1));
console.log("Array of '1, 2, 3'     :", Array.of(1, 2, 3));
console.log("Array of '[1, 2], 3'   :", Array.of([1, 2], 3));
console.log();

let arrayToFill = new Array(10).fill(1);
console.log("Fill array             :", ...arrayToFill);
console.log("Fill array with 'a'    :", ...arrayToFill.fill("a", 3, 7));
console.log();

//#region functional tools
let arrForFunctionalTools = [1, 2, 3, 4, 5];
const sumReducer = (accumulator, currentValue) => accumulator + currentValue;
const multiReducer = (accumulator, currentValue) => accumulator * currentValue;
const concatReducer = (accumulator, currentValue) => "" + accumulator + currentValue;
console.log("Sum reduce             :", arrForFunctionalTools.reduce(sumReducer));
console.log("Multi reduce           :", arrForFunctionalTools.reduce(multiReducer));
console.log("Concat reduce          :", arrForFunctionalTools.reduce(concatReducer));
console.log();

const cube = (element) => Math.pow(element, 3);
console.log("Map array              :", arrForFunctionalTools.map(cube));
console.log();

const predicateForFilter = (number) => number > 3;
console.log("Take out value > 3     :", arrForFunctionalTools.filter(predicateForFilter));
console.log();

let multiArr = [[1, 2], [3, 4], [5, 6]];
const arrayReducer = (memo, item, index) => memo.concat(item);
console.log("Reduce array           :", multiArr.reduce(arrayReducer));

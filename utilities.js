//#region count the number of words that are the same
// testcase 1: "Hello world hello hello earth earth"
// 			=> { hello: 3, world: 1, earth: 2 }
// testcase 2: "   Hello    how heLLo    earth hOw aRe You yoU    thIs you THat earth   "
// 			=> { hello: 2, how: 2, earth: 2, are: 1, you: 3, this: 1, that: 1 }
export function countWord(string) {
    let obj = {}
    if (typeof (string) === 'string') {
        let array = string.toLowerCase().match(/(\w+)/g)
        for (let index = 0; index < array.length; index++)
            array[index] in obj ? obj[array[index]]++ : obj[array[index]] = 1
    }
    return obj
}
export function countWordVer2(string) {
    let obj = {}
    if (typeof (string) === 'string') {
        let array = string.toLowerCase().match(/(\w+)/g)
        countDuplicateElements(array)
    }
    return obj
}
function countDuplicateElements(arrIn) {
    let initialValue = {};

    // return Array.isArray(arrIn) && arrIn.reduce(duplicateElementReducer, {})
    if (!Array.isArray(arrIn)) {
        throw new TypeError("input must be an array");
    }

    return arrIn.reduce((accumulator, currentValue) => {
        accumulator[currentValue] = (accumulator[currentValue] ?? 0) + 1;
        return accumulator;
    }, initialValue);
}
// best choice
console.log(countDuplicateElements([11, 21, 11, 19, 46, 46, 19, 21]))
console.log(countDuplicateElements(5))
let testcase2 = "   Hello    how heLLo    earth hOw aRe You yoU    thIs you THat earth   "
// for (let index = 0; index < 10; index++) {
// 	console.log('########################################################################################');
// 	console.time('case 1: ')
// 	countWord(testcase2)
// 	console.timeEnd('case 1: ')
// 	console.log('----------------------------------------------------------------------------------------');
// 	console.time('case 2: ')
// 	countDuplicateElements(testcase2)
// 	console.timeEnd('case 2: ')
// }
//#endregion

//#region sum array
function sumArray(array) {
    let sum = 0
    for (let index = 0; index < array.length; index++) {
        sum += array[index];
    }
    return sum;
}
// console.log(sumArray([12, 3, 4, 1, 2, 3]));
//#endregion

//#region make hide each char of string
export function makeHideEachCharOfString(strIn) {	// around 0.025-0.007ms (main time 0.013-0.016ms)
    let newString = strIn.split('').join('||||')
    return newString.padStart(newString.length + 2, '|').padEnd(newString.length + 4, '|')
}
function makeHideEachCharOfStringArray(strIn) {		// around 0.025-0.007ms (main time 0.013-0.016ms)
    let newString = Array.from(strIn).join('||||')
    return newString.padStart(newString.length + 2, '|').padEnd(newString.length + 4, '|')
}
function makeHideEachCharOfStringVer2(strIn) {
    let newStrings = strIn.split('').join('||||').split('')
    newStrings.push('||')
    newStrings.unshift('||')
    return newStrings.join('')
}
function makeHideEachCharOfStringFour(strIn) {
    let strings
    if (typeof (strIn) === 'string') {
        strings = strIn.split('')
        for (const key in strings) {
            strings[key] = strings[key].padStart(strings[key].length + 2, '|')
            strings[key] = strings[key].padEnd(strings[key].length + 2, '|')
        }
    }
    return strings.join('')
}
let str = 'input any string'
// for (let index = 0; index < 10; index++) {
// 	console.log('########################################################################################');
// 	console.time('case 1: ')
// 	makeHideEachCharOfString(str)
// 	console.timeEnd('case 1: ')
// 	// console.log('----------------------------------------------------------------------------------------');
// 	// console.time('case 2: ')
// 	// makeHideEachCharOfStringVer2(str)
// 	// console.timeEnd('case 2: ')
// 	console.log('----------------------------------------------------------------------------------------');
// 	console.time('case 3: ')
// 	makeHideEachCharOfStringArray(str)
// 	console.timeEnd('case 3: ')
// 	// console.log('----------------------------------------------------------------------------------------');
// 	// console.time('case 4: ')
// 	// makeHideEachCharOfStringFour(str)
// 	// console.timeEnd('case 4: ')
// }

// Best function with lowest processing time
// console.log(makeHideEachCharOfString('Tôi ms viết dc cái code tạo ra câu giống như này nà :))))) ẩn từng ký tự, bấm mệt ko :">'));
// console.log(makeHideEachCharOfStringArray('Tôi ms viết dc cái code tạo ra câu giống như này nà :))))) ẩn từng ký tự, bấm mệt ko :">'));

let temp = 'có lẽ mấy đoạn văn dài trên discord viết ẩn từng từ chắc là họ ko có ngồi ẩn từng từ 1 cách thủ công đâu ha ??? chắc có code xử lý hết r, chứ ngồi ẩn từng từ như v cx khoai lắm chứ bộ haizzz'
let arrTemp = temp.match(/(\S+)/g)	// matches any non-whitespace words
// console.log(arrTemp.join(' ||||'));
//#endregion

//#region chuyen cach chu sang chuoi bth
function chuyenCachChuSangChuoiBth(params) {
    let temp = 's t r i n g'
    console.log(temp);
    let arrTemp = temp.match(/\w|[$&+,:;=?@#|'-<>.-^*()%!]/g)
    console.log(arrTemp.join(''));
}
//#endregion

//#region newline for each character
let stringNewLine = 'dead server'
let chars = stringNewLine.split('')
// console.log(chars.join('\n'));
//#endregion
//#region count duplicate elements
export function countDuplicateElements(args) {
    if (!Array.isArray(args)) {
        throw new TypeError("input must be an array");
    }

    let initialValue = {};
    let obj = args.reduce((accumulator, currentValue) => {
        accumulator[currentValue] = (accumulator[currentValue] ?? 0) + 1;
        return accumulator;
    }, initialValue);

    return obj;
}
// console.log("Number array   :", countDuplicateElements([11, 21, 11, 19, 46, 46, 19, 21]));

// example: "Hello world hello hello earth earth" => output: { hello: 3, world: 1, earth: 2 }
export function countDuplicateWords(message) {
    if (typeof message !== "string") {
        throw new TypeError("'message' must be a(n) string");
    }

    let asciiWords = message.toLowerCase().match(/(\w+)/g);
    let obj = countDuplicateElements(asciiWords);
    return obj;
}
let testCase = "   Hello    how heLLo    earth hOw aRe You yoU    thIs you THat earth   ";
let label = "Test case time";
// console.time(label);
// console.log("Test case      :", countDuplicateWords(testCase));
// console.timeEnd(label);
// console.log();
//#endregion

//#region separate each char/word
// enter your message here
// let message = "Nhập thông điệp của bạn ở đây. \\ / .  $  &+ , : ;  < > .-   =   @ # | ' -  ^   * ( ?   ) % !";
// console.log("Raw message       :", message);

// delimiter: ||, ~, \n
export function separateEachChar(message, delimiter = " ") {
    if (typeof message !== "string") {
        throw new TypeError("'message' must be a(n) string");
    }
    if (typeof delimiter !== "string") {
        throw new TypeError("'delimiter' must be a(n) string");
    }

    let insideDelim = delimiter.repeat(2);
    let chars = Array.from(message)
        .join(insideDelim);
    let result = delimiter + chars + delimiter;

    return result;
}
// console.log("Separate each char:", separateEachChar(message, "||"));

export function separateEachUnicodeWord(message, delimiter = " ") {
    if (typeof message !== "string") {
        throw new TypeError("'message' must be a(n) string");
    }
    if (typeof delimiter !== "string") {
        throw new TypeError("'delimiter' must be a(n) string");
    }

    // let insideDelim = " " + delimiter.repeat(2) // => output: ||enter ||||message ||||here ||
    let insideDelim = delimiter + " " + delimiter;
    let unicodeWords = message.match(/(\p{L}+)/gu)
        .join(insideDelim);
    let result = delimiter + unicodeWords + delimiter;

    return result;
}
// console.log("Separate each word:", separateEachUnicodeWord(message, "||"));
// console.log();
//#endregion

//#region count duplicate elements
export function countDuplicateElements(args) {
    if (!Array.isArray(args)) {
        throw new TypeError("input must be an array");
    }

    let initialValue = {};
    return args.reduce((accumulator, currentValue) => {
        accumulator[currentValue] = (accumulator[currentValue] ?? 0) + 1;
        return accumulator;
    }, initialValue);
}
// console.log("Number array   :", countDuplicateElements([11, 21, 11, 19, 46, 46, 19, 21]));

// example: "Hello world hello hello earth earth" => output: { hello: 3, world: 1, earth: 2 }
export function countDuplicateWords(message) {
    if (typeof message !== "string") {
        throw new TypeError("'message' must be a(n) string");
    }

    let asciiWords = message.toLowerCase().match(/(\w+)/g);
    return countDuplicateElements(asciiWords);
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
let message = "Nhập thông điệp của bạn ở đây. \\ / .  $  &+ , : ;  < > .-   =   @ # | ' -  ^   * ( ?   ) % !";
// console.log("Raw message       :", message);

/**
 * Create a character-separated string.
 * 
 * Example: `hello world` => `.H..e..l..l..o.. ..w..o..r..l..d.`.
 * @param {string} message The input message wants to separate each character.
 * @param {string} delimiter can be set with `||`, `~`, `\n`, ...
 * @returns
 */
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
    return delimiter + chars + delimiter;
}
// console.log("Separate each char:", separateEachChar(message, "||"));

/**
 * Create a unicode word-separated string.
 * 
 * Example: `hello world` => `.Hello. .world.`
 * @param {string} message The input message wants to separate each unicode word.
 * @param {string} delimiter can be set with `||`, `~`, `\n`, ...
 * @returns
 */
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
    return delimiter + unicodeWords + delimiter;
}
// console.log("Separate each word:", separateEachUnicodeWord(message, "||"));
// console.log();
//#endregion

/**
 * Check whether the string is printable or not
 * @param {string} str 
 * @returns 
 */
export function isPrint(str) {
    if (typeof str !== "string") {
        throw new TypeError("'str' must be a(n) string");
    }

    let pattern = String.raw`^\P{C}*$`;
    let regEx = RegExp(pattern, "gu");
    return regEx.test(str);
}

/**
 * Each line will be appended with one character from the message.
 * @param {string} message The input message wants to be handled.
 * @returns 
 */
export function evolveEachChar(message) {
    if (typeof message !== "string") {
        throw new TypeError("'message' must be a(n) string");
    }

    let result = "";
    let line = "";
    for (let i = 0; i < message.length; i++) {
        const char = message[i];
        if (isPrint(char)) {
            line += char;
            result += line;
            if (i != message.length - 1) {
                result += "\n";
            }
        }
    }
    return result;
};
// console.log(evolveEachChar("hello"));

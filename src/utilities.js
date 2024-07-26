/**
 * Count the number of duplicate elements.
 * @param {any[]} args Array of elements.
 * @returns {object} `{element: numberOfDuplicate, ... }`
 */
export function countDuplicateElements(args) {
    if (!Array.isArray(args)) {
        throw new TypeError("input must be an array");
    }

    let initialValue = {};
    return args.reduce((accumulator, currentValue) => {
        accumulator[currentValue] = (accumulator[currentValue] || 0) + 1;
        return accumulator;
    }, initialValue);
}

/**
 * Count the number of duplicate words.
 * 
 * @example "Hello world hello hello earth earth" => { hello: 3, world: 1, earth: 2 }
 * @param {string} message Message is a sequence of words.
 * @returns {object} `{word: numberOfDuplicate, ... }`
 */
export function countDuplicateWords(message) {
    if (typeof message !== "string") {
        throw new TypeError("'message' must be a(n) string");
    }

    let asciiWords = message.toLowerCase().match(/(\w+)/g);
    return countDuplicateElements(asciiWords);
}

/**
 * Create a character-separated string.
 * 
 * @example "hello world" => ".H..e..l..l..o.. ..w..o..r..l..d."
 * @param {string} message The input message wants to separate each character.
 * @param {string} delimiter can be set with `||`, `~`, `\n`, ...
 * @returns {string}
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

/**
 * Create a unicode word-separated string.
 * 
 * @example "hello world" => ".Hello. .world."
 * @param {string} message The input message wants to separate each unicode word.
 * @param {string} delimiter can be set with `||`, `~`, `\n`, ...
 * @returns {string}
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

/**
 * Check whether the string is printable or not
 * @param {string} str 
 * @returns {boolean}
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
 * @returns {string}
 */
export function evolveEachChar(message) {
    if (typeof message !== "string") {
        throw new TypeError("'message' must be a(n) string");
    }

    let result = "";
    for (let i = 1; i <= message.length; i++) {
        result += message.substring(0, i);
        if (i != message.length) {
            result += "\n";
        }
    }
    return result;
};

/**
 * Reverse a string
 * @param {string} message The input message wants to be reversed.
 * @returns {string}
 */
export function reverseString(message) {
    let result = Array.from(message)
        .reverse()
        .join("");
    return result;
}

function main() {
    console.log("Number count   :", countDuplicateElements([11, 21, 11, 19, 46, 46, 19, 21]));
    console.log();

    let testCase = "   Hello    how heLLo    earth hOw aRe You yoU    thIs you THat earth   ";
    let label = "Test case time";
    console.time(label);
    console.log("Test case      :", countDuplicateWords(testCase));
    console.timeEnd(label);
    console.log();

    // enter your message here, special: \ / . $ & + , : ; < > - = @ # | ' - ^ * ( ? ) % !
    let message = "Nhập thông điệp của bạn ở đây";
    console.log("Raw message       :", message);
    console.log("Separate each char:", separateEachChar(message, "||"));
    console.log("Separate each word:", separateEachUnicodeWord(message, "||"));
    console.log();

    console.log("Evolve each char  :");
    console.log(evolveEachChar("Hello"));
    console.log();

    console.log("String reversed   :", reverseString(message));
}

// main();

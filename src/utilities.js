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

export function getIANATimeZones() {
    return Intl.supportedValuesOf("timeZone");
};

export function getCurrentTimeZone() {
    return Intl.DateTimeFormat().resolvedOptions().timeZone;
};

export function getCurrentLocale() {
    return Intl.DateTimeFormat().resolvedOptions().locale;
};

/**
 * @param {string} ianaTimeZone 
 * @returns {string}
 */
export function getTimeZoneAbbreviationByDst(ianaTimeZone) {
    const dateTimeFormat = Intl.DateTimeFormat(getCurrentLocale(), {
        timeZoneName: "short",
        timeZone: ianaTimeZone,
    });

    // converts an array of objects with the structure '{ type: <value>, value: <value> }'
    const parts = dateTimeFormat.formatToParts();
    const offsetPart = parts.find((i) => i.type === "timeZoneName");

    return offsetPart?.value;
};

/**
 * @param {string} ianaTimeZone
 * @param {Date} date
 * @returns {number}
 */
export function getOffsetInSeconds(ianaTimeZone, date = new Date()) {
    const dateString = date.toString();
    const timeZone = date.toLocaleString(getCurrentLocale(), {
        timeZone: ianaTimeZone,
        timeStyle: "long"
    }).split(" ").slice(-1)[0];

    // gets the upper offset based on the current UTC
    const upperTimeOffset = Date.parse(`${dateString} UTC`);

    // gets the lower offset by using the 'ianaTimeZone'
    const lowerTimeOffset = Date.parse(`${dateString} ${timeZone}`);

    return (upperTimeOffset - lowerTimeOffset) / 1000;
};

/**
 * @example
 * const offsetUtc = getOffsetUtcByDst("America/New_York")
 * console.log(offsetUtc) // Output: -04:00
 * @param {string} ianaTimeZone
 * @returns
 */
export function getOffsetUtcByDst(ianaTimeZone) {
    const offsetInSeconds = getOffsetInSeconds(ianaTimeZone);

    // e.g: 49500 => ['', '49500'], -14400 => ['-', '14400']
    const pattern = /([+-]){0,1}(\d+)/;
    const matchData = offsetInSeconds.toString().match(pattern);
    if (!matchData) {
        return "+00:00";
    }

    const [, sign, second] = matchData;
    const hour = Math.floor(second / 3600);
    const minute = second / 60 % 60;

    return `${sign === "-" ? "-" : "+"}${hour.toString().padStart(2, "0")}:${minute.toString().padStart(2, "0")}`;
};

/**
 * @param {number} year
 * @param {number} monthIndex
 */
export function getDaysInMonth(year, monthIndex) {
    return new Date(year, monthIndex, 0).getDate();
}

/**
 * @param {number} min
 * @param {number} max
 * @returns {number}
 */
export function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * @param {Date} start 
 * @param {Date} end 
 * @returns {Date}
 */
export function getRandomDate(start, end) {
    const randomTime = Math.random() * (end.getTime() - start.getTime() + 1) + start.getTime();
    return new Date(randomTime);
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

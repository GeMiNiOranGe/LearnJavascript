const FRUIT = "this is an apple";
const CHARS = Array.from(FRUIT);

console.log("Message            :", FRUIT);
console.log("Type of 'message'  :", typeof FRUIT);
console.log("Message pad start  :", `'${FRUIT.padStart(FRUIT.length + 10)}'`);
console.log("Message pad end    :", `'${FRUIT.padEnd(FRUIT.length + 10)}'`);
// Use spread operator ... to call variadic function
console.log("Message with '...' :", ...FRUIT);
console.log("Temp message       :", CHARS.join(" ".repeat(3)));

console.log("Index of 'is'      :", FRUIT.indexOf("is"));
console.log("Last index of 'is' :", FRUIT.lastIndexOf("is"));
console.log("Last index of 'mac':", FRUIT.lastIndexOf("mac"));

let stringToFind = "a";
let stringToReplace = "###";
let pattern = new RegExp(`${stringToFind}`, "g");
// if you need to use regex
console.log(`Index of '${stringToFind}'       :`, FRUIT.search(pattern));
console.log("String replaced    :", FRUIT.replace(pattern, stringToReplace));

console.log("Uppercase          :", FRUIT.toUpperCase());
console.log("Locale uppercase   :", FRUIT.toLocaleUpperCase());
console.log("Include 'is'       :", FRUIT.includes("is"));
console.log("Start with 'this'  :", FRUIT.startsWith("this"));
console.log("End with 'apple'   :", FRUIT.endsWith("apple"));
console.log();

console.table({ Values: CHARS });
let fruitLength = FRUIT.length;
console.table({
    "Access index": ["bracket '[]'", "'chatAt' method", "'at' method"],
    "In range": [FRUIT[0], FRUIT.charAt(0), FRUIT.at(0)],
    "Out of range": [FRUIT[fruitLength + 10], FRUIT.charAt(fruitLength + 10), FRUIT.at(fruitLength + 10)],
    "Negative index": [FRUIT[-5], FRUIT.charAt(-5), FRUIT.at(-5)],
});

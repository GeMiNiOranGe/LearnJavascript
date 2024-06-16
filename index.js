// Add "type": "module" to your package.json file
// {
//   // ...
//   "type": "module",
//   // ...
// }
// import {show} from './Exception.js';
// show()

import { separateEachChar } from "./utilities.js"

const FIRST_MESSAGE = "Hello world!!!";
console.log(`Type of '${FIRST_MESSAGE}' is:`, typeof FIRST_MESSAGE);
console.log();

try {
    let separateMessage = separateEachChar(FIRST_MESSAGE);
    console.log(separateMessage);
} catch (error) {
    console.log("Error:", error);
}
finally {
    console.log("Program end");
}

// console.log(!!undefined);

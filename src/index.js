import { separateEachChar } from "./utilities.js";

console.log("Type of 'undefined':", !!undefined);
console.log();

const FIRST_MESSAGE = "Hello world!!!";
try {
    let separateMessage = separateEachChar(FIRST_MESSAGE);
    console.log(separateMessage);
} catch (err) {
    if (err instanceof TypeError) {
        console.error(err);
        /* or
        console.error(separateEachChar, `${err.name}: ${err.message}`);
        console.error(err.stack);
         */
    } else if (err instanceof RangeError) {
        console.error(err);
    } else {
        // statements to handle any unspecified exceptions
        throw err; // rethrowing the exception
    }
}
finally {
    console.log("Program end");
}

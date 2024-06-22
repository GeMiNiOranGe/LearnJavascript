//#region if statement
let numberForComparison = 10;
// ==  : to check value
// === : to check value and data type
if (numberForComparison === "10") {
    console.log("=== | hello");
}
if (numberForComparison == "10") {
    console.log("== | hello");
}
console.log();
//#endregion

//#region for statement
let size = 5;

// "var" can be re-declare
var num = 3;
for (let num = 0; num < size; num++) {
    // print on the same line
    process.stdout.write(`${num}`);
    (num != size - 1) && process.stdout.write(", ");
}
console.log();
{
    let num = 100;
    console.log(num);
}
{
    console.log(num);
}
//#endregion

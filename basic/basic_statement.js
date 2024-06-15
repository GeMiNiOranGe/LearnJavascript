//#region if statement
let numberForComparison = 10
// ==  : to check value
// === : to check value and data type
if (numberForComparison === "10")
    console.log("=== | hello");
if (numberForComparison == "10")
    console.log("== | hello");

// ---------------------------------------------------------------------------------
//#endregion

console.log();

//#region for statement
// "var" can be re-declare
var num = 3;
for (let num = 0; num < 5; num++) {
    // print on the same line
    process.stdout.write(`${num}, `);
}
console.log();
{
    let num = 100;
    console.log(num);
}
{
    console.log(num);
}

// ---------------------------------------------------------------------------------
//#endregion

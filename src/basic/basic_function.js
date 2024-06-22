//#region function
function calculateSumOfArray(...arr) {
    let sum = 0;
    arr.forEach(element => sum += element);
    return sum;
}
function calculateAreaOfRectangle({ width = 5, height = 5 } = {}) {
    return width * height;
}
console.log("Sum of array       :", calculateSumOfArray(1, 4, 6, 7));
console.log("Area of Rectangle  :", calculateAreaOfRectangle({ width: 5, height: 10 }));
console.log();

function concatenateString(...args) {
    console.log("Values:", args[0], args[1]);
    console.log("Size  :", args.length);
    console.log("Params:", args);
    return args.join(" ");
}
console.log("Concat string:", concatenateString("Hey", "I", "kinda", "miss", "you"));
console.log();
//#endregion

//#region callback function
let callback1 = (total) => console.log("Callback 1:", total);
let callback2 = (total) => console.log("Callback 2:", total);
let process = (callbackFunction) => {
    let total = 0;
    for (let i = 0; i < 100; i++) {
        total += 1;
    }
    callbackFunction(total);
};

console.log("Callback function");
process(callback1);
process(callback2);
console.log();
//#endregion

//#region arrow function
const recurAdd = (a) => {
    if (a == 0) {
        return 0;
    }
    return recurAdd(a - 1) + a;
};
setTimeout(() => console.log("Delay 1000 milliseconds:", recurAdd(10)), 1000);
setTimeout(() => console.log("Delay 100 milliseconds :", recurAdd(5)), 100);
setTimeout(() => console.log("Delay 1 milliseconds   :", recurAdd(1)), 1);
//#endregion

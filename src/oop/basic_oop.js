import Cat from "./cat.js";
import Tabby from "./tabby.js";

let cacaoCat = new Cat("Cacao", 5);
let sunTabby = new Tabby("Sun", 7, "orange");

console.log("Type of 'Cat'    :", typeof Cat);
console.log("Instance of 'Cat':", cacaoCat instanceof Cat);
console.log();

cacaoCat.name = "Flower";
cacaoCat.age = 10;
console.log("cacaoCat -", cacaoCat.getDetails());

console.log("sunTabby -", sunTabby.getDetails());

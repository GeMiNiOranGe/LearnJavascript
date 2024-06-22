//#region destructuring
let male = "man";
let female = "woman";
let maleOrFemale = {
    male,
    female,
    // "a"	// => Throw: Unexpected token errors
};
console.log("Gender                  :", maleOrFemale);

let capitals = {
    Bangkok: "Thailand",
    Tokyo: "Japan",
    London: "England"
};
let { Bangkok, Tokyo, London } = capitals;
/*
equals to
let Bangkok = capitals.Bangkok
let Tokyo = capitals.Tokyo
let London = capitals.London
 */
console.log("Capitals                :", Bangkok, Tokyo, London);
console.log();

// group your shorthand properties
const ANAKIN_SKYWALKER = "Anakin Skywalker";
const LUKE_SKYWALKER = "Luke Skywalker";

const CONST_OBJ_STAR_WAR_BAD = {
    episodeOne: 1,
    twoJediWalIntoACantina: 2,
    LUKE_SKYWALKER,
    episodeThree: 3,
    mayTheFourth: 4,
    ANAKIN_SKYWALKER,
};
const CONST_OBJ_STAR_WAR_GOOD = {
    LUKE_SKYWALKER,
    ANAKIN_SKYWALKER,
    episodeOne: 1,
    twoJediWalIntoACantina: 2,
    episodeThree: 3,
    mayTheFourth: 4,
};
console.log("group your shorthand properties");
console.log();
//#endregion

//#region introduce
// sprades operators '...'
const SPRADE = {
    "secondKey": 20,
    deleteKey: "trash value"
};
console.log("Object 'SPRADE'         :", SPRADE);
const MY_OBJECT = {
    firstKey: 10,
    "secondKey": 0,
    ...SPRADE
};
console.log("Object                  :", MY_OBJECT);
console.log("Get value by index      :", MY_OBJECT["firstKey"]);
console.log("Get value by property   :", MY_OBJECT.secondKey);
console.log("Key list                :", Object.keys(MY_OBJECT));
console.log("Key list length         :", Object.keys(MY_OBJECT).length);
console.log("Value list              :", Object.values(MY_OBJECT));
console.log("Value list length       :", Object.values(MY_OBJECT).length);
console.log();

delete MY_OBJECT.deleteKey;
console.log("After moving trash value:", MY_OBJECT);
console.log();

const MY_REFERENCE_OBJECT = MY_OBJECT;
MY_OBJECT["firstKey"] = 100;
console.log("Change value for object :", MY_OBJECT["firstKey"]);
console.log("And ref obj also change :", MY_REFERENCE_OBJECT["firstKey"]);
console.log();

function set0(obj, num) {
    obj["a"] = 0;
    num = 0;
}
let objPassByRef = { a: 1 };
let numPassByValue = 1;
set0(objPassByRef, numPassByValue);
console.log("Pass by ref             :", objPassByRef);
console.log("Pass by value           :", numPassByValue);
console.log();
//#endregion

//#region nested object
let person = {
    id: 1,
    firstName: "Nick",
    lastName: "Smith",
    age: 25,
    address: {
        street: "231 Oxford Street",
        city: "London",
        country: "United Kingdom"
    },
    favourite: ["programing", "science", "tennis", "volleyball", "badminton"]
};
console.log("Object 'Person':", person);
console.log("The street in that person's address:", person.address.street);
let fullAddress = "";
for (const key in person.address) {
    fullAddress += person.address[key] + " ";
}
console.log("Print full address of person       :", fullAddress);
console.log();

// clone object
/*
"let obj = Object.assign(target, source)"
equivalent to
"let obj = target (+ source)"
 */
let doctor = Object.assign({}, person);
doctor.id = 2;
doctor.firstName = "Abby";
doctor.lastName = "Amanda";
delete doctor.address;
delete doctor.favourite;
console.log("Cloned object 'Doctor':", doctor);
console.log();
//#endregion

//#region object with function
function increaseBy1(value) {
    return ++value;
}
let objFunc = {
    ["The" + "Choose" + 1]: "key can be computed",
    [increaseBy1(3)]: "key increased by 1 => 3 + 1 = 4",
    arrowFunc: () => "arrow function",
    fnShortHand() {
        return `not ${this.arrowFunc()}, it's fnShortHand`;
    }
};
console.log("Object 'objFunc'     :", objFunc);
console.log("From 'TheChoose1'    :", objFunc["TheChoose1"]);
console.log("From 'increaseBy1(3)':", objFunc[increaseBy1(3)]);
console.log("From 'arrowFunc()'   :", objFunc.arrowFunc());
console.log("From 'fnShortHand()' :", objFunc.fnShortHand());
console.log();
//#endregion

//#region functional tools
let objNumCreatedByMap = [1, 2, 3].map((value, index) => ({ index, value }));
console.log("Object with destructuring:", objNumCreatedByMap);
console.log();

const STUDENT_LIST = [
    { id: "S1", firstName: "Jessica", lastName: "Amanda", age: 25 },
    { id: "S2", firstName: "Michael", lastName: "Bruce", age: 30 },
    { id: "S3", firstName: "Abby", lastName: "Alexander", age: 27 }
];
console.log("Student list    :", STUDENT_LIST);

function getFullName(student) {
    let fullName = [student.firstName, student.lastName].join(" ");
    return fullName;
}
let fullNameList = STUDENT_LIST.map(getFullName);
console.log("Full name list  :", fullNameList);

const newStudentList = STUDENT_LIST.map(student => {
    let fullName = getFullName(student);
    const obj = {};

    obj[student.id] = fullName;
    obj["age"] = student.age;
    obj.fullNameLength = fullName.length;

    return obj;
});
console.log("New student list:", newStudentList);
//#endregion

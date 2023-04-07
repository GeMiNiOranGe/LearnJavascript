let objKeySomeThing = {
	key: 2,
	'some-thing': 3
}
const CONST_OBJECT = {
	a: 1,
	b: 'hello',
	nested: {
		objKeySomeThing,
		a: 'a',
		b: 'b'
	}
}
// objKeySomeThing = { b: 2 }		// Reference
// console.log(objKeySomeThing);	// => { b: 2 }

// objKeySomeThing['c'] = 3
// console.log(objKeySomeThing);	// => { b: 2, c: 3 }

// const SUM = objKeySomeThing.c + objKeySomeThing['b']	// => 5

// objKeySomeThing.c = SUM
// objKeySomeThing.e = 4
// console.log(objKeySomeThing);	// => { b: 2, c: 5, e: 4 }

// delete objKeySomeThing.c
// console.log(objKeySomeThing);	// => { b: 2, e: 4 }

// objKeySomeThing.key = { b: 2 }
// console.log(objKeySomeThing);
// console.log(objKeySomeThing["some-thing"]);
// console.log(Object.keys(objKeySomeThing));
// console.log(Object.keys(objKeySomeThing).length);
// for (const key in objKeySomeThing) console.log(key, objKeySomeThing[key]);
// console.log(CONST_OBJECT.nested.objKeySomeThing["some-thing"]);
// ---------------------------------------------------------------------------------
let objNum = {
	'b': 2,
	'e': 4
}
let refObject = objNum
// console.log(objNum);
// console.log(refObject);
objNum.e = 5
// console.log(objNum);
// console.log(refObject);
// ---------------------------------------------------------------------------------
let objFunction = { a: 1 }
let numFunction = 1
set0(objFunction, numFunction)
function set0(obj, num) {
	obj['a'] = 0
	num = 0
}
// console.log(objFunction);	// => { a: 0 }
// console.log(numFunction);	// => 1
// ---------------------------------------------------------------------------------
let objMeme = {
	hmmm: 100
}
let objAssign = Object.assign({}, objNum)
Object.assign(objAssign, objNum)
objMeme.nani = 15
objAssign.temp = "wait wut"
// console.log(obj);
// console.log(objMeme);
// console.log(objAssign);
// ---------------------------------------------------------------------------------
function addValue(value) {
	return value + 1
}
let test = {
	['a' + 1 + 'b']: 'a',
	[addValue(3)]: 'b',
	fn: function () {
		return 'test'
	},
	fnShortHand() {
		return this.fn() + ' short hand'
	}
}
// console.log(test);
// console.log(test.fn());
// console.log(test.fnShortHand());
// ---------------------------------------------------------------------------------
let male = 'man'
let female = 'woman'
let maleOrFemale = {
	male,
	female
	// 'a'	// Throw: Unexpected token errors
}
// console.log(maleOrFemale);
let capitals = {
	Bangkok: 'Thailand',
	Tokyo: 'Japan',
	London: 'England'
}
let { Bangkok, Tokyo, London } = capitals
// Equals to
// let Bangkok = capitals.Bangkok
// let Tokyo = capitals.Tokyo
// let London = capitals.London

// console.log(Bangkok, Tokyo, London);
// ---------------------------------------------------------------------------------
// Sprades Operators ...
let sprade = {
	a: 1,
	b: 2,
	c: 3
}
let spradeFirst = {
	...sprade,
	c: 4,
	d: 5,
	e: 6
}
let spradeLast = {
	c: 4,
	d: 5,
	e: 6,
	...sprade
}
// console.log(spradeFirst);	// => { a: 1, b: 2, c: 4, d: 5, e: 6 }
// console.log(spradeLast);	// => { c: 3, d: 5, e: 6, a: 1, b: 2 }
// ---------------------------------------------------------------------------------
let a = {
	'th': 'thai',
	'en': 'english'
}
let b = {
	'th': 'siam',
	'jp': 'japan',
	'cn': 'china'
}
// console.log({ a, b });
// console.log({ ...a, b });
// console.log({ ...a, ...b });
// ---------------------------------------------------------------------------------
function getKey(k) {
	return `a key named ${k}`
}
const CONST_OBJ_GET_KEY = {
	id: 5,
	name: 'San Francisco',
	[getKey('enabled')]: true
}
// console.log(CONST_OBJ_GET_KEY[getKey('enabled')]);
// ---------------------------------------------------------------------------------
const ANAKIN_SKYWALKER = 'Anakin Skywalker'
const LUKE_SKYWALKER = 'Luke Skywalker'

const CONST_OBJ_STAR_WAR_BAD ={
	episodeOne: 1,
	twoJediWalIntoACantina: 2,
	LUKE_SKYWALKER,
	episodeThree: 3,
	mayTheFourth: 4,
	ANAKIN_SKYWALKER,
}
const CONST_OBJ_STAR_WAR_GOOD ={
	LUKE_SKYWALKER,
	ANAKIN_SKYWALKER,
	episodeOne: 1,
	twoJediWalIntoACantina: 2,
	episodeThree: 3,
	mayTheFourth: 4,
}
// console.log(CONST_OBJ_STAR_WAR_BAD.episodeOne);
// console.log(CONST_OBJ_STAR_WAR_GOOD.episodeOne);
// ---------------------------------------------------------------------------------

class Cat {
	// Private attribute
	#name
	#old
	// Constructor
	constructor(name = 'unknown', old = 0) {
		this.#name = name
		this.#old = old
	}
	// Public behavior
	get getAllInfo() {
		return `Name: ${this.getName}\t| Old: ${this.getOld}`
	}
	get getName() { return this.#name }
	get getOld() { return this.#old }

	set setName(name) { this.#name = name }
	set setOld(old) { this.#old = old }
}
class Tabby extends Cat {
	// Private attribute
	#color
	// Constructor
	constructor(name = 'unknown', old = 0, color = 'unknown') {
		super(name, old)
		this.#color = color
	}
	get getAllInfo() {
		return `${super.getAllInfo}\t| Color: ${this.getColor}`
	}
	get getColor() { return this.#color }
	set setColor(color) { this.#color = color }
}
let cat = new Cat('Cacao', 5)
cat.setName = 'Bong'
console.log(cat.getAllInfo);
console.log(typeof Cat);
console.log(cat instanceof Cat);

let tabby = new Tabby('Hoa', 7, 'orange')
console.log(tabby.getAllInfo);

class Cat {
    // private attribute
    #name;
    #age;

    // constructor
    constructor(name = "unknown", age = 0) {
        this.name = name
        this.age = age
    }

    // property for "name"
    get name() {
        return this.#name;
    }

    /**
     * get/set name of cat
     * @param {string} value
     */
    set name(value) {
        if (typeof value !== "string") {
            throw new TypeError("'name' must be set to string");
        }
        this.#name = value;
    }

    // property for "age"
    get age() {
        return this.#age;
    }

    /**
     * get/set age of cat
     * @param {number} value
     */
    set age(value) {
        if (typeof value !== "number") {
            throw new TypeError("'age' must be set to number");
        }
        this.#age = value;
    }

    // public behavior
    getDetails() {
        return `Name: ${this.name}\t| Old: ${this.age}`
    }
}

export default Cat;

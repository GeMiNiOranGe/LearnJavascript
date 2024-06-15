import Cat from "./cat.js";

class Tabby extends Cat {
    #color

    constructor(name = "unknown", old = 0, color = "unknown") {
        super(name, old)
        this.color = color
    }

    // property for "color"
    get color() {
        return this.#color;
    }

    /**
     * get/set color of cat
     * @param {string} value
     */
    set color(value) {
        if (typeof value !== "string") {
            throw new TypeError("'color' must be set to string");
        }
        this.#color = value;
    }

    getDetails() {
        return `${super.getDetails()}\t| Color: ${this.color}`
    }
}

export default Tabby;

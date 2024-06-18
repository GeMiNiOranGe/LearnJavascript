export function increaseValueBy1(input) {
    if (typeof input !== "number") {
        throw {
            name: "TypeError",
            message: "add1 needs numbers"
        };
    }
    return input++;
}

export function try_it() {
    try {
        increaseValueBy1("abc");
    }
    catch (err) {
        console.log("Error: ", err);
    }
}

try_it();

export default try_it;
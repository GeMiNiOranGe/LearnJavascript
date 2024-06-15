export let stringCheckAdd1 = (a) => {
    if (typeof a !== 'number') {
        throw {
            name: 'TypeError',
            message: 'add1 needs  numbers'
        }
    }
    return a + 1
}

export var try_it = () => {
    try {
        stringCheckAdd1('abc')
    }
    catch (e) {
        console.log('Error: ', e);
    }
}

try_it()

export function show() {
    console.log('hi!!!');
}

export default show
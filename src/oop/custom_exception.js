export class NotPositiveNumberException extends RangeError {
    /**
     * @param {string} argument 
     */
    constructor(argument) {
        let message = `'${argument}' must be a positive number`;
        super(message);
    }
}

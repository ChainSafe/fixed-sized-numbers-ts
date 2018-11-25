class TypeNotSupportedError extends Error {
    constructor() {
        super("Handling this type is not supported.");
    }
}

class InvalidSizeError extends Error {
    constructor(val: number) {
        super(`Invalid size: ${val}`);
    }

}

class OverflowError extends Error {
    constructor(capacity : number, required: number) {
        super(`Overflow error: capacity ${capacity}, required: ${required}`);
    }

}

class InconsistentSizeError extends Error {
    constructor(a: number, b: number){
        super(`Cannot perform operations on different sized numbers. Got ${a} and ${b}`)
    }
}

export {TypeNotSupportedError, InvalidSizeError, OverflowError, InconsistentSizeError}
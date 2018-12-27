/**
 * Typically indicates number/BigNumber/string was expected but not given.
 */
class TypeNotSupportedError extends Error {
    constructor() {
        super("Handling this type is not supported.");
    }
}

/**
 * Provided a size that does not have a corresponding type.
 */
class InvalidSizeError extends Error {
    constructor(val: number) {
        super(`Invalid size: ${val}`);
    }
}

/**
 * Attempted to make a negative unsigned number.
 */
class NegativeUnsignedError extends Error {
    constructor(val: number) {
        super(`Cannot construct negative unsigned integers, value attempted: ${val}`);
    }
}

/**
 * The result of a additive operation has resulted in a value that is greater than the maximum for the given size.
 */
class OverflowError extends Error {
    constructor(capacity: number, required: number) {
        super(`Overflow error: capacity ${capacity}, required: ${required}`);
    }

}

/**
 * The result of a subtractive operation has resulted in a value that is greater than the maximum for the given size.
 */
class UnderflowError extends Error {
    constructor(capacity: number, required: number) {
        super(`Underflow error: capacity ${capacity}, required: ${required}`);
    }

}

/**
 * Attempted to add a uint/int to a uint/int of a different size.
 */
class InconsistentSizeError extends Error {
    constructor(a: number, b: number) {
        super(`Cannot perform operations on different sized numbers. Got ${a} and ${b}`);
    }
}

/**
 * Received floating point number as input.
 */
class FloatingPointNotSupportedError extends Error {
    constructor() {
        super("This library currently only supports integers.");
    }
}

/**
 * Attempted to divide by zero.
 */
class DivisionByZeroError extends Error {
    constructor() {
        super("Division by zero.");
    }
}

export {
    TypeNotSupportedError,
    InvalidSizeError,
    OverflowError,
    UnderflowError,
    InconsistentSizeError,
    FloatingPointNotSupportedError,
    DivisionByZeroError,
    NegativeUnsignedError,
};

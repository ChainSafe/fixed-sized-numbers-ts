//Fixed Sized Numbers TS
 //Copyright (C) 2018 ChainSafe Systems

  // This program is free software: you can redistribute it and/or modify
 // it under the terms of the GNU General Public License as published by
 // the Free Software Foundation, either version 3 of the License, or
 // (at your option) any later version.
 //
 // This program is distributed in the hope that it will be useful,
 // but WITHOUT ANY WARRANTY; without even the implied warranty of
 // MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 // GNU General Public License for more details.
 //
 // You should have received a copy of the GNU General Public License
 // along with this program.  If not, see <http://www.gnu.org/licenses/>.
 
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
class NegativeUnsignedError extends Error {
    constructor(val: number) {
        super(`Cannot construct negative unsigned integers, value attempted: ${val}`);
    }
}
class OverflowError extends Error {
    constructor(capacity: number, required: number) {
        super(`Overflow error: capacity ${capacity}, required: ${required}`);
    }

}
class UnderflowError extends Error {
    constructor(capacity: number, required: number) {
        super(`Underflow error: capacity ${capacity}, required: ${required}`);
    }

}
class InconsistentSizeError extends Error {
    constructor(a: number, b: number) {
        super(`Cannot perform operations on different sized numbers. Got ${a} and ${b}`);
    }
}
class FloatingPointNotSupportedError extends Error {
    constructor() {
        super("This library currently only supports integers.");
    }
}
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

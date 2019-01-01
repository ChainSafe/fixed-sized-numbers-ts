import {assert, expect} from "chai";
import {Int, Uint} from "../lib/Interfaces";
import BigNumber from "bignumber.js";

/**
 * Executes fn and assert that the error the same message as expected. If no error is thrown, assert will fail.
 * @param fn - The function to test
 * @param {Error} expected - Error with the expected message
 */
export const assertErrorMsg = (fn , expected: Error) => {
    let err = null;
    try {
        fn();
    } catch (e) {
        err = e;
    }
    if (!err) {
        expect.fail("No error thrown");
    } else {
        expect(err.message).to.equal(expected.message);
    }
};

/**
 * Performs assertions on the type, value, and size of an Int.
 * @param {Int} int - the Int to test
 * @param {string} type - the name of the expected boolean flag denoting the type (eg. "_int8")
 * @param {number} expectedSize
 * @param {number} expectedValue
 */
export const validateInt = (int: Int, type: string, expectedSize: number, expectedValue: string) => {
    assert(int[type], `did not return expected type ${type}`);
    assert(int._value instanceof BigNumber, "did have a value of expected type BigNumber");
    expect(int._size).to.be.equal(expectedSize);
    expect(int._value.toString()).to.be.equal(expectedValue);
};

/**
 * Performs assertions on the type, value, and size of a Uint.
 * @param {Uint} uint - the Uint to test
 * @param {string} type - the name of the expected boolean flag denoting the type (eg. "_uint8")
 * @param {number} expectedSize
 * @param {number} expectedValue
 */
export const validateUint = (uint: Uint, type: string, expectedSize: number, expectedValue: string) => {
    assert(uint[type], `did not return expected type ${type}`);
    assert(uint._value instanceof BigNumber, "did have a value of expected type BigNumber");
    expect(uint._size).to.be.equal(expectedSize);
    expect(uint._value.toString()).to.be.equal(expectedValue);
};

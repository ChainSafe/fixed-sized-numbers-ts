import BigNumber from "bignumber.js";
BigNumber.config({
    DECIMAL_PLACES: 0,
});
import { FloatingPointNotSupportedError, InvalidSizeError } from "../errors";

// Convert Constructor Inputs to BigNumbers
const emptyValueToZero = (x) => x ? x : 0;
const notFloat = (x: number): boolean => x % 1 === 0;

const inputTypeToBigNumber = (value?: string | BigNumber): BigNumber | Error => {
    if (value instanceof BigNumber) {
        return value.isInteger() ? value : new FloatingPointNotSupportedError();
    } else if (typeof value === "string") {
        return notFloat(parseInt(value, 10)) ? new BigNumber(value) : new FloatingPointNotSupportedError();
    } else if (!value) {
        // No input provided
        return new BigNumber(0);
    }
};

const sizeCheckUint = (size: number) => (value: BigNumber | Error): BigNumber | Error => {
    if (value instanceof Error) { return value; }
    const numSize = value.toString(2).length;
    return numSize <= size ? value : new InvalidSizeError(numSize);
};

const sizeCheckInt = (size: number) => (value: BigNumber | Error): BigNumber | Error => {
    if (value instanceof Error) { return value; }
    const numSize = value.toString(2).length;
    // If number is positive add 1 to account for sign (+/-)
    const adjustedSize = value >= new BigNumber(0) ? numSize + 1 : numSize;
    return adjustedSize <= size ? value : new InvalidSizeError(adjustedSize);
};

export {
    emptyValueToZero,
    inputTypeToBigNumber,
    sizeCheckUint,
    sizeCheckInt,
};

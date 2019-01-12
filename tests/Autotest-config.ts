import {Uint8, Uint16, Uint32, Uint64, Uint128, Uint256} from "../lib/Uint";
import {Uint} from "../lib/Interfaces";
import {Int128, Int16, Int256, Int32, Int64, Int8} from "../lib/Int";
import {Int} from "../lib/Interfaces";
import BigNumber from "bignumber.js";
import {InvalidSizeError, NegativeUnsignedError} from "../lib/errors";

/**
 * The type-specific data that is available within a Uint test.
 * All optional fields are populated at runtime.
 */
interface UintTypeTestInterface {
    // Human friendly name
    name: string;
    // Factory function
    constructor: (value?: string | BigNumber) => Uint;
    // Boolean flag name to identify type
    flag: string;
    // Number of bits that can be stored
    size: number;
    // Maximum value that can stored
    max?: string;
    // The 'middle' number such that 2 * midpoint = max + 1
    midpoint?: string;
    // Error that is thrown on overflow
    overflowError?: Error;
    // Error thrown on underflow
    underflowError?: Error;
    // Error throw when factory constructor is called with a value too large for the given type
    oversizedInputError?: Error;
    // Error thrown when -1 is passed to constructor
    negativeOneInputError?: Error;
}

/**
 * The type-specific data that is available within an Int test.
 * All optional fields are populated at runtime.
 */
interface IntTypeTestInterface {
    // Human friendly name
    name: string;
    // Factory function
    constructor: (value?: string | BigNumber) => Int;
    // Boolean flag to identify type
    flag: string;
    // Number of bits that can be stored (including sign)
    size: number;
    // Maximum value that can be stored
    max?: string;
    // Minimum value that can be stored
    min?: string;
    // The 'middle' number such that 2 * midpoint = max + 1
    midpoint?: string;
    // Negated midpoint
    midpointNeg?: string;
    // Error thrownn on overflow
    overflowError?: Error;
    // Error thrown on underflow
    underflowError?: Error;
    // Error thrown when factory constructor is called with a value too large for the given type
    oversizedInputError?: Error;
}

/**
 * Here we define out list of types to test. All fields not listed will be computed at runtime.
 */
const UintTypes: UintTypeTestInterface[] = [
    {
        name: "Uint8",
        constructor: Uint8,
        flag: "_uint8",
        size: 8,
    },
    {
        name: "Uint16",
        constructor: Uint16,
        flag: "_uint16",
        size: 16,
    },
    {
        name: "Uint32",
        constructor: Uint32,
        flag: "_uint32",
        size: 32,
    },
    {
        name: "Uint64",
        constructor: Uint64,
        flag: "_uint64",
        size: 64,
    },
    {
        name: "Uint128",
        constructor: Uint128,
        flag: "_uint128",
        size: 128,
    },
    {
        name: "Uint256",
        constructor: Uint256,
        flag: "_uint256",
        size: 256,
    },
];

/**
 * Here we define out list of types to test. All fields not listed will be computed at runtime.
 */
const IntTypes: IntTypeTestInterface[] = [
    {
        name: "Int8",
        constructor: Int8,
        flag: "_int8",
        size: 8,
    },
    // {
    //     name: "Int16",
    //     constructor: Int16,
    //     flag: "_int16",
    //     size: 16,
    // },
    // {
    //     name: "Int32",
    //     constructor: Int32,
    //     flag: "_int32",
    //     size: 32,
    // },
    // {
    //     name: "Int64",
    //     constructor: Int64,
    //     flag: "_int64",
    //     size: 64,
    // },
    // {
    //     name: "Int128",
    //     constructor: Int128,
    //     flag: "_int128",
    //     size: 128,
    // },
    // {
    //     name: "Int256",
    //     constructor: Int256,
    //     flag: "_int256",
    //     size: 256,
    // },
];

export const getInts = (): IntTypeTestInterface[]  => {
    return IntTypes.map((t) => {
        t.max = new BigNumber(2).pow(t.size - 1).minus(1).toString();
        t.min = new BigNumber(t.max).times(-1).toString();
        t.midpoint = new BigNumber(2).pow(t.size - 2).toString();
        t.midpointNeg = new BigNumber(t.midpoint).times(- 1).toString();
        t.underflowError = new InvalidSizeError(t.size + 1);
        t.overflowError = new InvalidSizeError(t.size + 1);
        t.oversizedInputError = new InvalidSizeError(t.size + 1);
        return t;
    });
};

export const getUints = (): UintTypeTestInterface[] => {
    return UintTypes.map((t) => {
        t.max = new BigNumber(2).pow(t.size).minus(1).toString();
        t.midpoint = new BigNumber(2).pow(t.size - 1).toString();
        t.underflowError = new InvalidSizeError(t.size + 1);
        t.overflowError = new InvalidSizeError(t.size + 1);
        t.oversizedInputError = new InvalidSizeError(t.size + 1);
        t.negativeOneInputError = new NegativeUnsignedError(-1);
        return t;
    });
};

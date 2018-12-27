import BigNumber from "bignumber.js";
BigNumber.config({
    DECIMAL_PLACES: 0,
});

import {
    Uint,
    Uint8,
    Uint16,
    Uint32,
    Uint64,
    Uint128,
    Uint256,
} from "./Interfaces";

import { NegativeUnsignedError } from "./errors";
import { bigNumberOrThrowError, pipe } from "./utils/utils";
import { buildMetaInt, composeObjects } from "./utils/metaIntFactory";
import { resultTyperUint, addMathMethods } from "./utils/arithmeticFactories";
import { emptyValueToZero, inputTypeToBigNumber, sizeCheckUint } from "./utils/inputParsers";

/**
 * Throws if value is a BigNumber and is negative.
 * @throws NegativeUnsignedError
 * @param {BigNumber | Error} value
 * @returns {BigNumber | Error}
 */
const noNegativeUnsignedInteger = (value: BigNumber | Error): BigNumber | Error => {
    if (value instanceof Error) { return value; }
    return value.isPositive() ? value : new NegativeUnsignedError(value.toNumber());
};

/**
 * Creates a Uint of a given size.
 * @param {number} size - maximum number of bits.
 * @returns {(identifier: object) => (x) => any}
 */
const UintFactory = <T>(size: number) => (identifier: object) => pipe(
    emptyValueToZero,
    inputTypeToBigNumber,
    sizeCheckUint(size),
    noNegativeUnsignedInteger,
    bigNumberOrThrowError,
    buildMetaInt(size),
    addMathMethods<T>(resultTyperUint),
    composeObjects<T>(identifier),
    Object.freeze,
);

// ============================================================================
// =============================== Constructors ===============================
// ============================================================================

/**
 * Uint8 constructor.
 * @param {number | string | BigNumber} value
 * @returns {Uint8}
 * @constructor
 */
const Uint8 = (value?: number | string | BigNumber): Uint8 => UintFactory<Uint8>(8)({_uint8: true})(value);

/**
 * Uint16 constructor.
 * @param {number | string | BigNumber} value
 * @returns {Uint16}
 * @constructor
 */
const Uint16 = (value?: number | string | BigNumber): Uint16 => UintFactory<Uint16>(16)({_uint16: true})(value);

/**
 * Uint32 constructor.
 * @param {number | string | BigNumber} value
 * @returns {Uint32}
 * @constructor
 */
const Uint32 = (value?: number | string | BigNumber): Uint32 => UintFactory<Uint32>(32)({_uint32: true})(value);

/**
 * Uint64 constructor.
 * @param {string} value
 * @returns {Uint64}
 * @constructor
 */
const Uint64 = (value?: string): Uint64 => UintFactory<Uint64>(64)({_uint64: true})(value);

/**
 * Uint 128 constructor.
 * @param {string} value
 * @returns {Uint128}
 * @constructor
 */
const Uint128 = (value?: string): Uint128 => UintFactory<Uint128>(128)({_uint128: true})(value);

/**
 * Uint256 constructor
 * @param {string} value
 * @returns {Uint256}
 * @constructor
 */
const Uint256 = (value?: string): Uint256 => UintFactory<Uint256>(256)({_uint256: true})(value);

// ============================================================================
// ============================== Type Checkers ===============================
// ============================================================================

// TODO: write tests to ensure these dont throw errors on wrong types

/**
 * Returns true if x is a Uint8, otherwise false.
 * @param {Uint} x
 * @returns {x is Uint8}
 */
const isUint8 = (x: Uint): x is Uint8 => (x as Uint8)._uint8;

/**
 * Returns true if x is a Uint16, otherwise false.
 * @param {Uint} x
 * @returns {x is Uint16}
 */
const isUint16 = (x: Uint): x is Uint16 => (x as Uint16)._uint16;

/**
 * Returns true if x is a Uint32, otherwise false.
 * @param {Uint} x
 * @returns {x is Uint32}
 */
const isUint32 = (x: Uint): x is Uint32 => (x as Uint32)._uint32;

/**
 * Returns true if x is a Uint64, otherwise false.
 * @param {Uint} x
 * @returns {x is Uint64}
 */
const isUint64 = (x: Uint): x is Uint64 => (x as Uint64)._uint64;

/**
 * Returns true if x is a Uint128, otherwise false.
 * @param {Uint} x
 * @returns {x is Uint128}
 */
const isUint128 = (x: Uint): x is Uint128 => (x as Uint128)._uint128;

/**
 * Returns true if x is a Uint256, otherwise false.
 * @param {Uint} x
 * @returns {x is Uint256}
 */
const isUint256 = (x: Uint): x is Uint256 => (x as Uint256)._uint256;

export {
    Uint8,
    Uint16,
    Uint32,
    Uint64,
    Uint128,
    Uint256,
    isUint8,
    isUint16,
    isUint32,
    isUint64,
    isUint128,
    isUint256,
};

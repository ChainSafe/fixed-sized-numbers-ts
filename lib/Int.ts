import BigNumber from "bignumber.js";
BigNumber.config({
    DECIMAL_PLACES: 0,
});

import {
    Int,
    Int8,
    Int16,
    Int32,
    Int64,
    Int128,
    Int256,
    MetaInteger,
} from "./Interfaces";

import { bigNumberOrThrowError, pipe } from "./utils/utils";
import { buildMetaInt, composeObjects } from "./utils/metaIntFactory";
import { resultTyperInt, addMathMethods } from "./utils/arithmeticFactories";
import { emptyValueToZero, inputTypeToBigNumber, sizeCheckInt } from "./utils/inputParsers";

/**
 * Appends a _isPositive field to a MetaInteger with the appropriate value.
 * @param {MetaInteger} metaInt - Some MetaInteger.
 * @returns MetaInteger
 */
const signInteger = (metaInt: MetaInteger) => ( {...metaInt, _isPositive: metaInt._value >= new BigNumber(0)} );

/**
 * Creates an Int of a given size.
 * @param {number} size - maximum number of bits.
 * @returns {(identifier: object) => (x) => any}
 */
const IntFactory = <T>(size: number) => (identifier: object) => pipe(
    emptyValueToZero,
    inputTypeToBigNumber,
    sizeCheckInt(size),
    bigNumberOrThrowError,
    buildMetaInt(size),
    signInteger,
    addMathMethods<T>(resultTyperInt),
    composeObjects<T>(identifier),
    Object.freeze,
);

// ============================================================================
// =============================== Constructors ===============================
// ============================================================================

/**
 * Int8 constructor.
 * @param {number | string | BigNumber} value
 * @returns {Int8}
 * @constructor
 */
const Int8 = (value?: number | string | BigNumber): Int8 => IntFactory<Int8>(8)({_int8: true})(value);

/**
 * Int16 constructor.
 * @param {number | string | BigNumber} value
 * @returns {Int16}
 * @constructor
 */
const Int16 = (value?: number | string | BigNumber): Int16 => IntFactory<Int16>(16)({_int16: true})(value);

/**
 * Int32 constructor.
 * @param {number | string | BigNumber} value
 * @returns {Int32}
 * @constructor
 */
const Int32 = (value?: number | string | BigNumber): Int32 => IntFactory<Int32>(32)({_int32: true})(value);

/**
 * Int64 constructor.
 * @param {string} value
 * @returns {Int64}
 * @constructor
 */
const Int64 = (value?: string): Int64 => IntFactory<Int64>(64)({_int64: true})(value);

/**
 * Int128 constructor.
 * @param {string} value
 * @returns {Int128}
 * @constructor
 */
const Int128 = (value?: string): Int128 => IntFactory<Int128>(128)({_int128: true})(value);

/**
 * Int256 constructor.
 * @param {string} value
 * @returns {Int256}
 * @constructor
 */
const Int256 = (value?: string): Int256 => IntFactory<Int256>(256)({_int256: true})(value);

// ============================================================================
// ============================== Type Checkers ===============================
// ============================================================================

// TODO: write tests to ensure these dont throw errors on wrong types

/**
 * Returns true if x is a Int8, otherwise false.
 * @param {Int} x
 * @returns {x is Int8}
 */
const isInt8 = (x: Int): x is Int8 => (x as Int8)._int8;

/**
 * Returns true if x is a Int16, otherwise false.
 * @param {Int} x
 * @returns {x is Int16}
 */
const isInt16 = (x: Int): x is Int16 => (x as Int16)._int16;

/**
 * Returns true if x is a Int32, otherwise false.
 * @param {Int} x
 * @returns {x is Int32}
 */
const isInt32 = (x: Int): x is Int32 => (x as Int32)._int32;

/**
 * Returns true if x is a Int64, otherwise false.
 * @param {Int} x
 * @returns {x is Int64}
 */
const isInt64 = (x: Int): x is Int64 => (x as Int64)._int64;

/**
 * Returns true if x is a Int128, otherwise false.
 * @param {Int} x
 * @returns {x is Int128}
 */
const isInt128 = (x: Int): x is Int128 => (x as Int128)._int128;

/**
 * Returns true if x is a Int256, otherwise false.
 * @param {Int} x
 * @returns {x is Int256}
 */
const isInt256 = (x: Int): x is Int256 => (x as Int256)._int256;

export {
    Int8,
    Int16,
    Int32,
    Int64,
    Int128,
    Int256,
    isInt8,
    isInt16,
    isInt32,
    isInt64,
    isInt128,
    isInt256,
};

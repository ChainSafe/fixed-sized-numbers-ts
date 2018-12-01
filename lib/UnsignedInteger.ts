import BigNumber from "bignumber.js";
import {FloatingPointNotSupportedError, InconsistentSizeError, OverflowError, TypeNotSupportedError} from "./errors";
import {getMaxValue} from "./utils";
import MetaInteger from "./MetaInteger";


class UnsignedInteger extends MetaInteger{

    public static ValidateSize(a: UnsignedInteger, b: UnsignedInteger) {
        if (a._size !== b._size) {
            throw new InconsistentSizeError(a._size, b._size);
        }
    }
    // TODO: Enforce minimum (positive) size


    constructor(value?: number | string | BigNumber) {
        super()
        // No value provided
        if (!value) {
            this._value = new BigNumber(0);
            // BigNumber
        } else if (value instanceof BigNumber) {
            if (value.isInteger()) {
                this._value = value;
            } else {
                throw new FloatingPointNotSupportedError();
            }
            // String
        } else if (typeof value === "string") {
            let val;
            try {
                // TODO: Ensure this handles all radix (possible without specifying separately?)
                val = parseInt(value);

            } catch (err) {
                throw new TypeNotSupportedError();
            }

            if (val % 1 !== 0) {
                throw new FloatingPointNotSupportedError();
            }
            // Number
        } else if (typeof value === "number") {
            if (value % 1 !== 0) {
                throw new FloatingPointNotSupportedError();
            }
            this._value = new BigNumber(value);
        } else {
            throw new TypeNotSupportedError();
        }

    }

    public add(i: UnsignedInteger): UnsignedInteger {
        UnsignedInteger.ValidateSize(this, i);
        let res: BigNumber = this._value.plus(i._value);
        if (res.gt(getMaxValue(this._size))) {
            throw new OverflowError(this._size, res.toString(2).length);
        }
        return new UnsignedInteger(res);
    }

    public sub(i: UnsignedInteger): UnsignedInteger {
        UnsignedInteger.ValidateSize(this, i);
        let res: BigNumber = this._value.minus(i._value);
        if (res.gt(getMaxValue(this._size))) {
            throw new OverflowError(this._size, res.toString(2).length);
        }
        return new UnsignedInteger(res);
    }

    public mul(i: UnsignedInteger): UnsignedInteger {
        UnsignedInteger.ValidateSize(this, i);
        let res: BigNumber = this._value.multipliedBy(i._value);
        if (res.gt(getMaxValue(this._size))) {
            throw new OverflowError(this._size, res.toString(2).length);
        }
        return new UnsignedInteger(res);
    }

    public div(i: UnsignedInteger): UnsignedInteger {
        UnsignedInteger.ValidateSize(this, i);
        let res: BigNumber = this._value.dividedBy(i._value);
        if (res.gt(getMaxValue(this._size))) {
            throw new OverflowError(this._size, res.toString(2).length);
        }
        return new UnsignedInteger(res);
    }

}

export default UnsignedInteger;

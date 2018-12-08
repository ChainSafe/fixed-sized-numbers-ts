import BigNumber from "bignumber.js";
import {
    DivisionByZeroError,
    FloatingPointNotSupportedError,
    InconsistentSizeError,
    OverflowError,
    TypeNotSupportedError,
    UnderflowError
} from "./errors";
import {getMaxValue} from "./utils";
import MetaInteger from "./MetaInteger";


class Int extends MetaInteger {

    public static ValidateSize(a: Int, b: Int) {
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

    public add(i: Int): Int {
        Int.ValidateSize(this, i);
        let res: BigNumber = this._value.plus(i._value);
        // Two positive ints may overflow, two negatives may underflow
        if(this._value.isPositive() && i._value.isPositive() && this._value.gt(res)){
            throw new OverflowError(this._size, res.toString(2).length)
        } else if (this._value.isNegative() && i._value.isNegative()) {
            throw new UnderflowError(this._size, res.toString(2).length)
        }

        return new Int(res);
    }

    public sub(i: Int): Int {
        Int.ValidateSize(this, i);
        let res: BigNumber = this._value.plus(i._value);
        // Opposing signs may overflow of underflow respectively
        if(this._value.isPositive() && i._value.isNegative() && this._value.gt(res)){
            throw new OverflowError(this._size, res.toString(2).length)
        } else if (this._value.isNegative() && i._value.isPositive()) {
            throw new UnderflowError(this._size, res.toString(2).length)
        }

        return new Int(res);
    }

    public mul(i: Int): Int {
        Int.ValidateSize(this, i);

        if(i._value.isZero() || this._value.isZero()){
            return new Int(new BigNumber(0))
        }

        let res: BigNumber = this._value.multipliedBy(i._value);
        let divRes: BigNumber = res.dividedBy(this._value)

        if (!divRes.eq(i._value)) {
            // If only one value is negative we will underflow
            if((this._value.isNegative() && i._value.isPositive()) ||
                (this._value.isPositive() &&  i._value.isNegative())){
                throw new UnderflowError(this._size, res.toString(2).length);
            } else {
                throw new OverflowError(this._size, res.toString(2).length);
            }

        }
        return new Int(res);
    }

    public div(i: Int): Int {
        Int.ValidateSize(this, i);

        if(i._value.isZero()){
            throw new DivisionByZeroError();
        }

        return new Int(this._value.dividedBy(i._value));
    }


}

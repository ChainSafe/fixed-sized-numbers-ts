import BigNumber from "bignumber.js";
import {FloatingPointNotSupportedError, InconsistentSizeError, OverflowError, TypeNotSupportedError} from "./errors";
import {getMaxValue} from "./utils";


class Integer {

    public static ValidateSize(a: Integer, b: Integer) {
        if (a._size !== b._size) {
            throw new InconsistentSizeError(a._size, b._size);
        }
    }
    // TODO: Enforce minimum (positive) size
    public _size: number;
    public _value: BigNumber;

    constructor(value?: number | string | BigNumber) {
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

    public Add(i: Integer): Integer {
        Integer.ValidateSize(this, i);
        let res: BigNumber = this._value.plus(i._value);
        if (res.gt(getMaxValue(this._size))) {
            throw new OverflowError(this._size, res.toString(2).length);
        }
        return new Integer(res);
    }

}

import BigNumber from 'bignumber.js'
import {TypeNotSupportedError, InvalidSizeError, InconsistentSizeError, OverflowError} from './errors'
import {getMaxValue} from "./utils";

class Number {
    _value: BigNumber
    _size: number;
    _signed: boolean;


    constructor(value?: any) {
        if ((typeof value === "number")) {
            // TODO: Validate for size
            this._value = new BigNumber(value)
        } else if (value instanceof BigNumber) {
            this._value = value
        } else if (!value) {
            this._value = new BigNumber(0)
        } else {
            throw new TypeNotSupportedError()
        }
        // TODO getMaxValue needs to support negative numbers
        if (this._value.gt(getMaxValue(this._size))) {
            throw new OverflowError(this._size, this._value.toString(2).length)
        }
    }

    Add(n: Number): Number {
        Number.CheckSize(this, n)

        let res: BigNumber = this._value.plus(n._value)
        if (res.gt(getMaxValue(this.size))) {
            throw new OverflowError(this._size, res.toString(2).length)
        }
        return new Number(res)


        /**
     * Throws an error if the size parameter of a does not match b.
     * @param a An implementation of AbstractNumber
     * @param b An implementation of AbstractNumber
     */
    static CheckSize(a: Number, b: Number) {
        if (a._size != b._size) {
            throw new InconsistentSizeError(a._size, b._size)
        }
    }
}
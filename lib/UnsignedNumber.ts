import BigNumber from 'bignumber.js'
import {TypeNotSupportedError, InvalidSizeError, InconsistentSizeError, OverflowError} from './errors'
import {getMaxValue} from "./utils";

abstract class AbstractNumber {
    _value: BigNumber
    _size: number

    // TODO: Consider making these non-abstract. Most require strictly BN interfacing, overriding methods may be simpler
    abstract Add(n: UnsignedNumber): UnsignedNumber

    abstract Sub(n: UnsignedNumber): UnsignedNumber

    abstract Eq(n: UnsignedNumber): boolean

    /**
     * Throws an error if the size parameter of a does not match b.
     * @param a An implementation of AbstractNumber
     * @param b An implementation of AbstractNumber
     */
    static CheckSize(a: AbstractNumber, b: AbstractNumber) {
        if (a._size != b._size) {
            throw new InconsistentSizeError(a._size, b._size)
        }
    }

    get size(): number {
        return this._size
    }


    get value(): BigNumber {
        return this._value
    }


}

class UnsignedNumber extends AbstractNumber {

    constructor(size: number, value?: any) {
        // TODO: consider moving into parent class
        super()
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

        if (size > 0) {
            this._size = size
        } else {
            throw new InvalidSizeError(size)
        }

        if (this.value.gt(getMaxValue(size))) {
            throw new OverflowError(size, this._value.toString(2).length)
        }
    }

    Add(n: UnsignedNumber): UnsignedNumber {
        UnsignedNumber.CheckSize(this, n)

        let res: BigNumber = this.value.plus(n.value)
        if (res.gt(getMaxValue(this.size))) {
            throw new OverflowError(this.size, res.toString(2).length)
        }
        return new UnsignedNumber(this.size, res)
    }

    Sub(n: UnsignedNumber): UnsignedNumber {
        UnsignedNumber.CheckSize(this, n)

        let res: BigNumber = this.value.minus(n.value)
        if (res.c.length > this.size) {
            throw new OverflowError(this.size, res.c.length)
        }
        return new UnsignedNumber(this.size, res)
    }

    Eq(n: UnsignedNumber): boolean {
        UnsignedNumber.CheckSize(this, n)
        return this.value.eq(n.value)
    }
}

export default UnsignedNumber
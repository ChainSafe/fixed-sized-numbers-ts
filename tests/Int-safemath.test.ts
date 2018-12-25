import BigNumber from "bignumber.js";
import { assert, expect } from "chai";
import { Int128, Int16, Int256, Int32, Int64, Int8 } from "../lib/Int";
import {InvalidSizeError, OverflowError} from "../lib/errors";


describe("SafeMath tests for Int8", () => {
    it("Int8 should return a Int8 for all basic methods: Add", () => {
        const one = Int8(1);
        const two = one.add(one);
        assert(two._int8, "did not return expected type Int8");
        assert(two._value instanceof BigNumber, "did have a value of expected type BigNumber");
        expect(two._size).to.be.equal(8);
        expect(two._value.toNumber()).to.be.equal(2);
    });
    it("Int8 should return a Int8 for all basic methods: Subtract", () => {
        const one = Int8(1);
        const zero = one.sub(one);
        assert(zero._int8, "did not return expected type Int8");
        assert(zero._value instanceof BigNumber, "did have a value of expected type BigNumber");
        expect(zero._size).to.be.equal(8);
        expect(zero._value.toNumber()).to.be.equal(0);
    });
    it("Int8 should return a Int8 for all basic methods: Multiply", () => {
        const two = Int8(2);
        const four = two.mul(two);
        assert(four._int8, "did not return expected type Int8");
        assert(four._value instanceof BigNumber, "did have a value of expected type BigNumber");
        expect(four._size).to.be.equal(8);
        expect(four._value.toNumber()).to.be.equal(4);
    });
    it("Int8 should return a Int8 for all basic methods: Divide", () => {
        const four = Int8(4);
        const two = Int8(2);
        const resTwo = four.div(two);
        assert(resTwo._int8, "did not return expected type Int8");
        assert(resTwo._value instanceof BigNumber, "did have a value of expected type BigNumber");
        expect(resTwo._size).to.be.equal(8);
        expect(resTwo._value.toNumber()).to.be.equal(2);
    });
    it("Int8 should should not allow overflow when adding 127 to 1", () => {
        const one = Int8(1);
        const limit = Int8(127);
        expect(() => limit.add(one)).to.throw(InvalidSizeError, "Invalid size: 8");
    });
    it("Int8 should should not allow underflow when adding -127 to -1", () => {
        const one = Int8(-1);
        const limit = Int8(-127);
        // let overflow;
        // try {
        //     overflow = limit.add(one);
        // } catch (e) {
        //     assert(true);
        //     return;
        // }
        // assert(false, "Int8 addition should not overflow");
        // TODO: WHy is this 9 and above is 8?
        expect(() => limit.add(one)).to.throw(InvalidSizeError, "Invalid size: 8");
    });
    it("Int8 should should not allow overflow when subtracting -127 from 1 and 1 from -127", () => {
        const one = Int8(1);
        const limit = Int8(-127);
        let overflow;
        try {
            overflow = one.sub(limit);
        } catch (e) {
            assert(true);
        }
        try {
            overflow = limit.sub(one);
        } catch (e) {
            assert(true);
            return;
        }
        assert(false, "Int8 addition should not overflow");
    });
    it("Int8 should allow subtracting 1 from 0", () => {
        const one = Int8(1);
        const zero = Int8(0);
        const neg1 = zero.sub(one);
        assert(neg1._int8, "did not return expected type Int8");
        assert(neg1._value instanceof BigNumber, "did have a value of expected type BigNumber");
        expect(neg1._size).to.be.equal(8);
        expect(neg1._value.toNumber()).to.be.equal(-1);
    });
    it("Int8 should should not allow overflow when multiplying 64 by 2", () => {
        const limit = Int8(64);
        const two = Int8(2);
        let overflow;
        try {
            overflow = limit.mul(two);
        } catch (e) {
            assert(true);
            return;
        }
        assert(false, "Int8 multiplication should not overflow");
    });
    it("Int8 should should not allow overflow when multiplying -64 by 2", () => {
        const limit = Int8(-64);
        const two = Int8(2);
        let overflow;
        try {
            overflow = limit.mul(two);
        } catch (e) {
            assert(true);
            return;
        }
        assert(false, "Int8 multiplication should not overflow");
    });
    it("Int8 should should not allow overflow when multiplying 64 by -2", () => {
        const limit = Int8(64);
        const two = Int8(-2);
        let overflow;
        try {
            overflow = limit.mul(two);
        } catch (e) {
            assert(true);
            return;
        }
        assert(false, "Int8 multiplication should not overflow");
    });
    it("Int8 should should not allow division by 0", () => {
        const zero = Int8(0);
        const two = Int8(2);
        let divByZero;
        let zeroDiv;
        try {
            divByZero = two.div(zero);
        } catch (e) {
            assert(true);
        }
        try {
            zeroDiv = zero.div(two);
        } catch (e) {
            assert(true);
            return;
        }
        assert(false, "Int8 multiplication should not overflow");
    });
});

describe("SafeMath tests for Int16", () => {
    it("Int16 should return a Int16 for all basic methods: Add", () => {
        const one = Int16(1);
        const two = one.add(one);
        assert(two._int16, "did not return expected type Int16");
        assert(two._value instanceof BigNumber, "did have a value of expected type BigNumber");
        expect(two._size).to.be.equal(16);
        expect(two._value.toNumber()).to.be.equal(2);
    });
    it("Int16 should return a Int16 for all basic methods: Subtract", () => {
        const one = Int16(1);
        const zero = one.sub(one);
        assert(zero._int16, "did not return expected type Int16");
        assert(zero._value instanceof BigNumber, "did have a value of expected type BigNumber");
        expect(zero._size).to.be.equal(16);
        expect(zero._value.toNumber()).to.be.equal(0);
    });
    it("Int16 should return a Int16 for all basic methods: Multiply", () => {
        const two = Int16(2);
        const four = two.mul(two);
        assert(four._int16, "did not return expected type Int16");
        assert(four._value instanceof BigNumber, "did have a value of expected type BigNumber");
        expect(four._size).to.be.equal(16);
        expect(four._value.toNumber()).to.be.equal(4);
    });
    it("Int16 should return a Int16 for all basic methods: Divide", () => {
        const four = Int16(4);
        const two = Int16(2);
        const resTwo = four.div(two);
        assert(resTwo._int16, "did not return expected type Int16");
        assert(resTwo._value instanceof BigNumber, "did have a value of expected type BigNumber");
        expect(resTwo._size).to.be.equal(16);
        expect(resTwo._value.toNumber()).to.be.equal(2);
    });
    it("Int16 should should not allow overflow when adding 32,767 to 1", () => {
        const one = Int16(1);
        const limit = Int16(32767);
        let overflow;
        try {
            overflow = limit.add(one);
        } catch (e) {
            assert(true);
            return;
        }
        assert(false, "Int16 addition should not overflow");
    });
    it("Int16 should should not allow overflow when adding -32,767 to -1", () => {
        const one = Int16(-1);
        const limit = Int16(-32767);
        let overflow;
        try {
            overflow = limit.add(one);
        } catch (e) {
            assert(true);
            return;
        }
        assert(false, "Int16 addition should not overflow");
    });
    it("Int16 should allow underflow when subtracting 1 from 0", () => {
        const one = Int16(1);
        const zero = Int16(0);
        const neg1 = zero.sub(one);
        assert(neg1._int16, "did not return expected type Int16");
        assert(neg1._value instanceof BigNumber, "did have a value of expected type BigNumber");
        expect(neg1._size).to.be.equal(16);
        expect(neg1._value.toNumber()).to.be.equal(-1);
    });
    it("Int16 should should not allow overflow when multiplying 16,384 by 2", () => {
        const limit = Int16(16384);
        const two = Int16(2);
        let overflow;
        try {
            overflow = limit.mul(two);
        } catch (e) {
            assert(true);
            return;
        }
        assert(false, "Int16 multiplication should not overflow");
    });
    it("Int16 should should not allow division by 0", () => {
        const zero = Int16(0);
        const two = Int16(2);
        let divByZero;
        let zeroDiv;
        try {
            divByZero = two.div(zero);
        } catch (e) {
            assert(true);
        }
        try {
            zeroDiv = zero.div(two);
        } catch (e) {
            assert(true);
            return;
        }
        assert(false, "Int16 multiplication should not overflow");
    });
});

describe("SafeMath tests for Int32", () => {
    it("Int32 should return a Int32 for all basic methods: Add", () => {
        const one = Int32(1);
        const two = one.add(one);
        assert(two._int32, "did not return expected type Int32");
        assert(two._value instanceof BigNumber, "did have a value of expected type BigNumber");
        expect(two._size).to.be.equal(32);
        expect(two._value.toNumber()).to.be.equal(2);
    });
    it("Int32 should return a Int32 for all basic methods: Subtract", () => {
        const one = Int32(1);
        const zero = one.sub(one);
        assert(zero._int32, "did not return expected type Int32");
        assert(zero._value instanceof BigNumber, "did have a value of expected type BigNumber");
        expect(zero._size).to.be.equal(32);
        expect(zero._value.toNumber()).to.be.equal(0);
    });
    it("Int32 should return a Int32 for all basic methods: Multiply", () => {
        const two = Int32(2);
        const four = two.mul(two);
        assert(four._int32, "did not return expected type Int32");
        assert(four._value instanceof BigNumber, "did have a value of expected type BigNumber");
        expect(four._size).to.be.equal(32);
        expect(four._value.toNumber()).to.be.equal(4);
    });
    it("Int32 should return a Int32 for all basic methods: Divide", () => {
        const four = Int32(4);
        const two = Int32(2);
        const resTwo = four.div(two);
        assert(resTwo._int32, "did not return expected type Int32");
        assert(resTwo._value instanceof BigNumber, "did have a value of expected type BigNumber");
        expect(resTwo._size).to.be.equal(32);
        expect(resTwo._value.toNumber()).to.be.equal(2);
    });
    it("Int32 should should not allow overflow when adding 2,147,483,647 to 1", () => {
        const one = Int32(1);
        const limit = Int32(2147483647);
        let overflow;
        try {
            overflow = limit.add(one);
        } catch (e) {
            assert(true);
            return;
        }
        assert(false, "Int32 addition should not overflow");
    });
    it("Int32 should allow underflow when subtracting 1 from 0", () => {
        const one = Int32(1);
        const zero = Int32(0);
        const neg1 = zero.sub(one);
        assert(neg1._int32, "did not return expected type Int32");
        assert(neg1._value instanceof BigNumber, "did have a value of expected type BigNumber");
        expect(neg1._size).to.be.equal(32);
        expect(neg1._value.toNumber()).to.be.equal(-1);
    });
    it("Int32 should should not allow overflow when multiplying 1,073,741,824 by 2", () => {
        const limit = Int32(1073741824);
        const two = Int32(2);
        let overflow;
        try {
            overflow = limit.mul(two);
        } catch (e) {
            assert(true);
            return;
        }
        assert(false, "Int32 multiplication should not overflow");
    });
    it("Int32 should should not allow division by 0", () => {
        const zero = Int32(0);
        const two = Int32(2);
        let divByZero;
        let zeroDiv;
        try {
            divByZero = two.div(zero);
        } catch (e) {
            assert(true);
        }
        try {
            zeroDiv = zero.div(two);
        } catch (e) {
            assert(true);
            return;
        }
        assert(false, "Int32 multiplication should not overflow");
    });
});

describe("SafeMath tests for Int64", () => {
    it("Int64 should return a Int64 for all basic methods: Add", () => {
        const one = Int64("1");
        const two = one.add(one);
        assert(two._int64, "did not return expected type Int64");
        assert(two._value instanceof BigNumber, "did have a value of expected type BigNumber");
        expect(two._size).to.be.equal(64);
        expect(two._value.toNumber()).to.be.equal(2);
    });
    it("Int64 should return a Int64 for all basic methods: Subtract", () => {
        const one = Int64("1");
        const zero = one.sub(one);
        assert(zero._int64, "did not return expected type Int64");
        assert(zero._value instanceof BigNumber, "did have a value of expected type BigNumber");
        expect(zero._size).to.be.equal(64);
        expect(zero._value.toNumber()).to.be.equal(0);
    });
    it("Int64 should return a Int64 for all basic methods: Multiply", () => {
        const two = Int64("2");
        const four = two.mul(two);
        assert(four._int64, "did not return expected type Int64");
        assert(four._value instanceof BigNumber, "did have a value of expected type BigNumber");
        expect(four._size).to.be.equal(64);
        expect(four._value.toNumber()).to.be.equal(4);
    });
    it("Int64 should return a Int64 for all basic methods: Divide", () => {
        const four = Int64("4");
        const two = Int64("2");
        const resTwo = four.div(two);
        assert(resTwo._int64, "did not return expected type Int64");
        assert(resTwo._value instanceof BigNumber, "did have a value of expected type BigNumber");
        expect(resTwo._size).to.be.equal(64);
        expect(resTwo._value.toNumber()).to.be.equal(2);
    });

    it("Int64 should should not allow overflow when adding 9,223,372,036,854,775,807 to 1", () => {
        const one = Int64("1");
        const limit = Int64("9223372036854775807");
        let overflow;
        try {
            overflow = limit.add(one);
        } catch (e) {
            assert(true);
            return;
        }
        assert(false, "Int64 addition should not overflow");
    });
    it("Int64 should should not allow underflow when subtracting 1 from -9,223,372,036,854,775,807", () => {
        const limit = Int64("-9223372036854775807");
        const one = Int64("1");
        let underflow;
        try {
            underflow = one.sub(limit);
        } catch (e) {
            assert(true);
            return;
        }
        assert(false, "Int64 subtraction should not underflow");
    });
    it("Int64 should should not allow overflow when multiplying 4.711686e+18 by 2", () => {
        const limit = Int64("4.711686e+18");
        const two = Int64("2");
        let overflow;
        try {
            overflow = limit.mul(two);
        } catch (e) {
            assert(true);
            return;
        }
        assert(false, "Int64 multiplication should not overflow");
    });
    it("Int64 should should not allow overflow when multiplying -4.711686e+18 by 2", () => {
        const limit = Int64("-4.711686e+18");
        const two = Int64("2");
        let overflow;
        try {
            overflow = limit.mul(two);
        } catch (e) {
            assert(true);
            return;
        }
        assert(false, "Int64 multiplication should not overflow");
    });
    it("Int64 should should not allow division by 0", () => {
        const zero = Int64("0");
        const two = Int64("2");
        let divByZero;
        let zeroDiv;
        try {
            divByZero = two.div(zero);
        } catch (e) {
            assert(true);
        }
        try {
            zeroDiv = zero.div(two);
        } catch (e) {
            assert(true);
            return;
        }
        assert(false, "Int64 multiplication should not overflow");
    });
});


describe("SafeMath tests for Int128", () => {
    it("Int128 should return a Int128 for all basic methods: Add", () => {
        const one = Int128("1");
        const two = one.add(one);
        assert(two._int128, "did not return expected type Int128");
        assert(two._value instanceof BigNumber, "did have a value of expected type BigNumber");
        expect(two._size).to.be.equal(128);
        expect(two._value.toNumber()).to.be.equal(2);
    });
    it("Int128 should return a Int128 for all basic methods: Subtract", () => {
        const one = Int128("1");
        const zero = one.sub(one);
        assert(zero._int128, "did not return expected type Int128");
        assert(zero._value instanceof BigNumber, "did have a value of expected type BigNumber");
        expect(zero._size).to.be.equal(128);
        expect(zero._value.toNumber()).to.be.equal(0);
    });
    it("Int128 should return a Int128 for all basic methods: Multiply", () => {
        const two = Int128("2");
        const four = two.mul(two);
        assert(four._int128, "did not return expected type Int128");
        assert(four._value instanceof BigNumber, "did have a value of expected type BigNumber");
        expect(four._size).to.be.equal(128);
        expect(four._value.toNumber()).to.be.equal(4);
    });
    it("Int128 should return a Int128 for all basic methods: Divide", () => {
        const four = Int128("4");
        const two = Int128("2");
        const resTwo = four.div(two);
        assert(resTwo._int128, "did not return expected type Int128");
        assert(resTwo._value instanceof BigNumber, "did have a value of expected type BigNumber");
        expect(resTwo._size).to.be.equal(128);
        expect(resTwo._value.toNumber()).to.be.equal(2);
    });

    it("Int128 should should not allow overflow when adding (2^127) - 1 to 1", () => {
        const one = Int128("1");
        const limit = Int128("170141183460469231731687303715884105727");
        let overflow;
        try {
            overflow = limit.add(one);
        } catch (e) {
            assert(true);
            return;
        }
        assert(false, "Int128 addition should not overflow");
    });
    it("Int128 should should not allow underflow when subtracting 1 from -((2^127) - 1)", () => {
        const limit = Int128("-170141183460469231731687303715884105727");
        const one = Int128("1");
        let underflow;
        try {
            underflow = one.sub(limit);
        } catch (e) {
            assert(true);
            return;
        }
        assert(false, "Int128 subtraction should not underflow");
    });
    it("Int128 should should not allow overflow when multiplying 8.5070592e+37 by 2", () => {
        const limit = Int128("8.5070592e+37");
        const two = Int128("2");
        let overflow;
        try {
            overflow = limit.mul(two);
        } catch (e) {
            assert(true);
            return;
        }
        assert(false, "Int128 multiplication should not overflow");
    });
    it("Int128 should should not allow overflow when multiplying -8.5070592e+37 by 2", () => {
        const limit = Int128("-8.5070592e+37");
        const two = Int128("2");
        let overflow;
        try {
            overflow = limit.mul(two);
        } catch (e) {
            assert(true);
            return;
        }
        assert(false, "Int128 multiplication should not overflow");
    });
    it("Int128 should should not allow division by 0", () => {
        const zero = Int128("0");
        const two = Int128("2");
        let divByZero;
        let zeroDiv;
        try {
            divByZero = two.div(zero);
        } catch (e) {
            assert(true);
        }
        try {
            zeroDiv = zero.div(two);
        } catch (e) {
            assert(true);
            return;
        }
        assert(false, "Int128 multiplication should not overflow");
    });
});

describe("SafeMath tests for Int256", () => {
    it("Int128 should return a Int256 for all basic methods: Add", () => {
        const one = Int256("1");
        const two = one.add(one);
        assert(two._int256, "did not return expected type Int256");
        assert(two._value instanceof BigNumber, "did have a value of expected type BigNumber");
        expect(two._size).to.be.equal(256);
        expect(two._value.toNumber()).to.be.equal(2);
    });
    it("Int256 should return a Int256 for all basic methods: Subtract", () => {
        const one = Int256("1");
        const zero = one.sub(one);
        assert(zero._int256, "did not return expected type Int256");
        assert(zero._value instanceof BigNumber, "did have a value of expected type BigNumber");
        expect(zero._size).to.be.equal(256);
        expect(zero._value.toNumber()).to.be.equal(0);
    });
    it("Int256 should return a Int256 for all basic methods: Multiply", () => {
        const two = Int256("2");
        const four = two.mul(two);
        assert(four._int256, "did not return expected type Int256");
        assert(four._value instanceof BigNumber, "did have a value of expected type BigNumber");
        expect(four._size).to.be.equal(256);
        expect(four._value.toNumber()).to.be.equal(4);
    });
    it("Int256 should return a Int256 for all basic methods: Divide", () => {
        const four = Int256("4");
        const two = Int256("2");
        const resTwo = four.div(two);
        assert(resTwo._int256, "did not return expected type Int256");
        assert(resTwo._value instanceof BigNumber, "did have a value of expected type BigNumber");
        expect(resTwo._size).to.be.equal(256);
        expect(resTwo._value.toNumber()).to.be.equal(2);
    });

    it("Int256 should should not allow overflow when adding (2^255) - 1 to 1", () => {
        const one = Int256("1");
        const limit = Int256("57896044618658097711785492504343953926634992332820282019728792003956564819967");
        let overflow;
        try {
            overflow = limit.add(one);
        } catch (e) {
            assert(true);
            return;
        }
        assert(false, "Int256 addition should not overflow");
    });
    it("Int256 should should not allow underflow when subtracting 1 from -((2^255) - 1)", () => {
        const limit = Int256("-57896044618658097711785492504343953926634992332820282019728792003956564819967");
        const one = Int256("1");
        let underflow;
        try {
            underflow = one.sub(limit);
        } catch (e) {
            assert(true);
            return;
        }
        assert(false, "Int256 subtraction should not underflow");
    });
    it("Int256 should should not allow overflow when multiplying 5.7896045e+76 by 2", () => {
        const limit = Int256("5.7896045e+76");
        const two = Int256("2");
        let overflow;
        try {
            overflow = limit.mul(two);
        } catch (e) {
            assert(true);
            return;
        }
        assert(false, "Int256 multiplication should not overflow");
    });
    it("Int256 should should not allow overflow when multiplying -5.7896045e+76 by 2", () => {
        const limit = Int256("-5.7896045e+76");
        const two = Int256("2");
        let overflow;
        try {
            overflow = limit.mul(two);
        } catch (e) {
            assert(true);
            return;
        }
        assert(false, "Int256 multiplication should not overflow");
    });
    it.skip("Int256 should should not allow division by 0", () => {
        const zero = Int256("0");
        const two = Int256("2");
        let divByZero;
        let zeroDiv;
        try {
            divByZero = two.div(zero);
        } catch (e) {
            assert(true);
        }
        try {
            zeroDiv = zero.div(two);
        } catch (e) {
            assert(true);
            return;
        }
        assert(false, "Int256 multiplication should not overflow");
    });
});

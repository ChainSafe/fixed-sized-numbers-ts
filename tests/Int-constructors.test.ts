import {Int128, Int16, Int256, Int32, Int64, Int8} from "../lib/Int";
import {assert, expect} from "chai";
import BigNumber from "bignumber.js";

describe("Basic Int construction without value", () => {
    it("Int8 should construct properly when not given a value", () => {
        const int8 = Int8();
        expect(int8._value.toNumber()).to.be.equal(0);
        expect(int8._size).to.be.equal(8);
        assert(int8._int8);
    });
    it("Int16 should construct properly when not given a value", () => {
        const int16 = Int16();
        expect(int16._value.toNumber()).to.be.equal(0);
        expect(int16._size).to.be.equal(16);
        assert(int16._int16);
    });
    it("Int32 should construct properly when not given a value", () => {
        const int32 = Int32();
        expect(int32._value.toNumber()).to.be.equal(0);
        expect(int32._size).to.be.equal(32);
        assert(int32._int32);
    });
    it("Int64 should construct properly when not given a value", () => {
        const int64 = Int64();
        expect(int64._value.toNumber()).to.be.equal(0);
        expect(int64._size).to.be.equal(64);
        assert(int64._int64);
    });
    it("Int128 should construct properly when not given a value", () => {
        const int128 = Int128();
        expect(int128._value.toNumber()).to.be.equal(0);
        expect(int128._size).to.be.equal(128);
        assert(int128._int128);
    });
    it("Int256 should construct properly when not given a value", () => {
        const int256 = Int256();
        expect(int256._value.toNumber()).to.be.equal(0);
        expect(int256._size).to.be.equal(256);
        assert(int256._int256);
    });
});



describe("Basic Int construction with value: 0", () => {
    it("Int8 should construct properly when given a value of 0", () => {
        const int8 = Int8(0);
        expect(int8._value.toNumber()).to.be.equal(0);
        expect(int8._size).to.be.equal(8);
        assert(int8._int8);
    });
    it("int16 should construct properly when given a value of 0", () => {
        const int16 = Int16(0);
        expect(int16._value.toNumber()).to.be.equal(0);
        expect(int16._size).to.be.equal(16);
        assert(int16._int16);
    });
    it("int32 should construct properly when given a value of 0", () => {
        const int32 = Int32(0);
        expect(int32._value.toNumber()).to.be.equal(0);
        expect(int32._size).to.be.equal(32);
        assert(int32._int32);
    });
    it("int64 should construct properly when given a value of 0", () => {
        const int64 = Int64("0");
        expect(int64._value.toNumber()).to.be.equal(0);
        expect(int64._size).to.be.equal(64);
        assert(int64._int64);
    });
    it("int128 should construct properly when given a value of 0", () => {
        const int128 = Int128("0");
        expect(int128._value.toNumber()).to.be.equal(0);
        expect(int128._size).to.be.equal(128);
        assert(int128._int128);
    });
    it("int256 should construct properly when given a value of 0", () => {
        const int256 = Int256("0");
        expect(int256._value.toNumber()).to.be.equal(0);
        expect(int256._size).to.be.equal(256);
        assert(int256._int256);
    });
});

describe("Basic int construction with value: 1 (as String, Number, and BigNumber)", () => {
    it("int8 should construct properly when given a Number value of 1 ", () => {
        const int8 = Int8(1);
        assert(BigNumber.isBigNumber(int8._value));
        expect(int8._value.toNumber()).to.be.equal(1);
        expect(int8._size).to.be.equal(8);
        assert(int8._int8);
    });
    it("int8 should construct properly when given a String value of 1", () => {
        const int8 = Int8("1");
        assert(BigNumber.isBigNumber(int8._value));
        expect(int8._value.toNumber()).to.be.equal(1);
        expect(int8._size).to.be.equal(8);
        assert(int8._int8);
    });
    it("int8 should construct properly when given a BigNumber value of 1", () => {
        const int8 = Int8(new BigNumber(1));
        assert(BigNumber.isBigNumber(int8._value));
        expect(int8._value.toNumber()).to.be.equal(1);
        expect(int8._size).to.be.equal(8);
        assert(int8._int8);
    });
    it("int16 should construct properly when given a Number value of 1", () => {
        const int16 = Int16(1);
        assert(BigNumber.isBigNumber(int16._value));
        expect(int16._value.toNumber()).to.be.equal(1);
        expect(int16._size).to.be.equal(16);
        assert(int16._int16);
    });
    it("int16 should construct properly when given a String value of 1", () => {
        const int16 = Int16("1");
        assert(BigNumber.isBigNumber(int16._value));
        expect(int16._value.toNumber()).to.be.equal(1);
        expect(int16._size).to.be.equal(16);
        assert(int16._int16);
    });
    it("int16 should construct properly when given a BigNumber value of 1", () => {
        const int16 = Int16(new BigNumber(1));
        assert(BigNumber.isBigNumber(int16._value));
        expect(int16._value.toNumber()).to.be.equal(1);
        expect(int16._size).to.be.equal(16);
        assert(int16._int16);
    });
    it("int32 should construct properly when given a Number value of 1", () => {
        const int32 = Int32(1);
        assert(BigNumber.isBigNumber(int32._value));
        expect(int32._value.toNumber()).to.be.equal(1);
        expect(int32._size).to.be.equal(32);
        assert(int32._int32);
    });
    it("int32 should construct properly when given a String value of 1", () => {
        const int32 = Int32("1");
        assert(BigNumber.isBigNumber(int32._value));
        expect(int32._value.toNumber()).to.be.equal(1);
        expect(int32._size).to.be.equal(32);
        assert(int32._int32);
    });
    it("int32 should construct properly when given a BigNumber value of 1", () => {
        const int32 = Int32(new BigNumber(1));
        assert(BigNumber.isBigNumber(int32._value));
        expect(int32._value.toNumber()).to.be.equal(1);
        expect(int32._size).to.be.equal(32);
        assert(int32._int32);
    });
    it("int64 should construct properly when given a String value of 1", () => {
        const int64 = Int64("1");
        assert(BigNumber.isBigNumber(int64._value));
        expect(int64._value.toNumber()).to.be.equal(1);
        expect(int64._size).to.be.equal(64);
        assert(int64._int64);
    });
    it("int128 should construct properly when given a String value of 1", () => {
        const int128 = Int128("1");
        assert(BigNumber.isBigNumber(int128._value));
        expect(int128._value.toNumber()).to.be.equal(1);
        expect(int128._size).to.be.equal(128);
        assert(int128._int128);
    });
    it("int256 should construct properly when given a String value of 1", () => {
        const int256 = Int256("1");
        assert(BigNumber.isBigNumber(int256._value));
        expect(int256._value.toNumber()).to.be.equal(1);
        expect(int256._size).to.be.equal(256);
        assert(int256._int256);
    });
});

describe("Basic int construction with value of: -1 (as String, Number, and BigNumber)", () => {
    it("int8 should construct properly when given a Number value of 1 ", () => {
        const int8 = Int8(-1);
        assert(BigNumber.isBigNumber(int8._value));
        expect(int8._value.toNumber()).to.be.equal(-1);
        expect(int8._size).to.be.equal(8);
        assert(int8._int8);
    });
    it("int8 should construct properly when given a String value of 1", () => {
        const int8 = Int8("-1");
        assert(BigNumber.isBigNumber(int8._value));
        expect(int8._value.toNumber()).to.be.equal(-1);
        expect(int8._size).to.be.equal(8);
        assert(int8._int8);
    });
    it("int8 should construct properly when given a BigNumber value of 1", () => {
        const int8 = Int8(new BigNumber(-1));
        assert(BigNumber.isBigNumber(int8._value));
        expect(int8._value.toNumber()).to.be.equal(-1);
        expect(int8._size).to.be.equal(8);
        assert(int8._int8);
    });
    it("int16 should construct properly when given a Number value of 1", () => {
        const int16 = Int16(-1);
        assert(BigNumber.isBigNumber(int16._value));
        expect(int16._value.toNumber()).to.be.equal(-1);
        expect(int16._size).to.be.equal(16);
        assert(int16._int16);
    });
    it("int16 should construct properly when given a String value of 1", () => {
        const int16 = Int16("-1");
        assert(BigNumber.isBigNumber(int16._value));
        expect(int16._value.toNumber()).to.be.equal(-1);
        expect(int16._size).to.be.equal(16);
        assert(int16._int16);
    });
    it("int16 should construct properly when given a BigNumber value of 1", () => {
        const int16 = Int16(new BigNumber(-1));
        assert(BigNumber.isBigNumber(int16._value));
        expect(int16._value.toNumber()).to.be.equal(-1);
        expect(int16._size).to.be.equal(16);
        assert(int16._int16);
    });
    it("int32 should construct properly when given a Number value of 1", () => {
        const int32 = Int32(-1);
        assert(BigNumber.isBigNumber(int32._value));
        expect(int32._value.toNumber()).to.be.equal(-1);
        expect(int32._size).to.be.equal(32);
        assert(int32._int32);
    });
    it("int32 should construct properly when given a String value of 1", () => {
        const int32 = Int32("-1");
        assert(BigNumber.isBigNumber(int32._value));
        expect(int32._value.toNumber()).to.be.equal(-1);
        expect(int32._size).to.be.equal(32);
        assert(int32._int32);
    });
    it("int32 should construct properly when given a BigNumber value of 1", () => {
        const int32 = Int32(new BigNumber(-1));
        assert(BigNumber.isBigNumber(int32._value));
        expect(int32._value.toNumber()).to.be.equal(-1);
        expect(int32._size).to.be.equal(32);
        assert(int32._int32);
    });
    it("int64 should construct properly when given a String value of 1", () => {
        const int64 = Int64("-1");
        assert(BigNumber.isBigNumber(int64._value));
        expect(int64._value.toNumber()).to.be.equal(-1);
        expect(int64._size).to.be.equal(64);
        assert(int64._int64);
    });
    it("int128 should construct properly when given a String value of 1", () => {
        const int128 = Int128("-1");
        assert(BigNumber.isBigNumber(int128._value));
        expect(int128._value.toNumber()).to.be.equal(-1);
        expect(int128._size).to.be.equal(128);
        assert(int128._int128);
    });
    it("int256 should construct properly when given a String value of 1", () => {
        const int256 = Int256("-1");
        assert(BigNumber.isBigNumber(int256._value));
        expect(int256._value.toNumber()).to.be.equal(-1);
        expect(int256._size).to.be.equal(256);
        assert(int256._int256);
    });
});

describe("Basic int construction with value: 128 (2^7)", () => {
    it("int8 should not construct properly for a value that exceeds its bit size", () => {
        let int8;
        try {
            int8 = Int8(128);
        } catch (e) {
            assert(true);
            return;
        }
        assert(false, "int8 was constructed for oversized value");
    });
    it("int16 should construct properly when given a value 128", () => {
        const int16 = Int16(128);
        expect(int16._value.toNumber()).to.be.equal(128);
        expect(int16._size).to.be.equal(16);
        assert(int16._int16);
    });
    it("int32 should construct properly when given a value 128", () => {
        const int32 = Int32(128);
        expect(int32._value.toNumber()).to.be.equal(128);
        expect(int32._size).to.be.equal(32);
        assert(int32._int32);
    });
    it("int64 should construct properly when given a value 128", () => {
        const int64 = Int64("128");
        expect(int64._value.toNumber()).to.be.equal(128);
        expect(int64._size).to.be.equal(64);
        assert(int64._int64);
    });
});

describe("Basic int construction with value: 32,768 (2^15)", () => {
    it("int8 should not construct properly for a value that exceeds its bit size", () => {
        let int8;
        try {
            int8 = Int8(32768);
        } catch (e) {
            assert(true);
            return;
        }
        assert(false, "int8 was constructed for oversized value");
    });
    it("int16 should not construct properly for a value that exceeds its bit size", () => {
        let int16;
        try {
            int16 = Int16(32768);
        } catch (e) {
            assert(true);
            return;
        }
        assert(false, "int16 was constructed for oversized value");
    });
    it("int32 should construct properly when given a value 32,768", () => {
        const int32 = Int32(32768);
        expect(int32._value.toNumber()).to.be.equal(32768);
        expect(int32._size).to.be.equal(32);
        assert(int32._int32);
    });
    it("int64 should construct properly when given a value 32,768", () => {
        const int64 = Int64("32768");
        expect(int64._value.toNumber()).to.be.equal(32768);
        expect(int64._size).to.be.equal(64);
        assert(int64._int64);
    });
});

describe("Basic int construction with value: 2,147,483,648 (2^31)", () => {
    it("int8 should not construct properly for a value that exceeds its bit size", () => {
        let int8;
        try {
            int8 = Int8(2147483648);
        } catch (e) {
            assert(true);
            return;
        }
        assert(false, "int8 was constructed for oversized value");
    });
    it("int16 should not construct properly for a value that exceeds its bit size", () => {
        let int16;
        try {
            int16 = Int16(2147483648);
        } catch (e) {
            assert(true);
            return;
        }
        assert(false, "int16 was constructed for oversized value");
    });
    it("int32 should construct properly when given a value of 2,147,483,648", () => {
        const int32 = Int32(2147483647);
        expect(int32._value.toNumber()).to.be.equal(2147483647);
        expect(int32._size).to.be.equal(32);
        assert(int32._int32);
    });
    it("int32 should not construct properly for a value that exceeds its bit size", () => {
        let int32;
        try {
            int32 = Int32(2147483648);
        } catch (e) {
            assert(true);
            return;
        }
        assert(false, "int32 was constructed for oversized value");
    });
    it("int64 should construct properly when given a value of 2,147,483,648", () => {
        const int64 = Int64("2147483648");
        expect(int64._value.toNumber()).to.be.equal(2147483648);
        expect(int64._size).to.be.equal(64);
        assert(int64._int64);
    });
});

describe("Basic int construction with value: 9,223,372,036,854,775,808 (2^63)", () => {
    it("int8 should not construct properly for a value that exceeds its bit size", () => {
        let int8;
        try {
            int8 = Int8(9223372036854775808);
        } catch (e) {
            assert(true);
            return;
        }
        assert(false, "int8 was constructed for oversized value");
    });
    it("int16 should not construct properly for a value that exceeds its bit size", () => {
        let int16;
        try {
            int16 = Int16(9223372036854775808);
        } catch (e) {
            assert(true);
            return;
        }
        assert(false, "int16 was constructed for oversized value");
    });
    it("int32 should not construct properly for a value that exceeds its bit size", () => {
        let int32;
        try {
            int32 = Int32(9223372036854775808);
        } catch (e) {
            assert(true);
            return;
        }
        assert(false, "int32 was constructed for oversized value");
    });
    it("int64 should construct properly when given a value 9,223,372,036,854,775,807", () => {
        const int64 = Int64("9223372036854775807");
        expect(int64._value.toNumber()).to.be.equal(9223372036854775807);
        expect(int64._size).to.be.equal(64);
        assert(int64._int64);
    });
    it("int64 should not construct properly when given a value exceeds its bit size", () => {
        let int64;
        try {
            int64 = Int64("9223372036854775808");
        } catch (e) {
            assert(true);
            return;
        }
        assert(false, "int64 was constructed for oversized value");
    });
});

describe("Basic int construction with value: -128 (2^7)", () => {
    it("int8 should not construct properly for a value that exceeds its bit size", () => {
        let int8;
        try {
            int8 = Int8(-128);
        } catch (e) {
            assert(true);
            return;
        }
        assert(false, "int8 was constructed for oversized value");
    });
    it("int16 should construct properly when given a value -128", () => {
        const int16 = Int16(-128);
        expect(int16._value.toNumber()).to.be.equal(-128);
        expect(int16._size).to.be.equal(16);
        assert(int16._int16);
    });
    it("int32 should construct properly when given a value -128", () => {
        const int32 = Int32(-128);
        expect(int32._value.toNumber()).to.be.equal(-128);
        expect(int32._size).to.be.equal(32);
        assert(int32._int32);
    });
    it("int64 should construct properly when given a value -128", () => {
        const int64 = Int64("-128");
        expect(int64._value.toNumber()).to.be.equal(-128);
        expect(int64._size).to.be.equal(64);
        assert(int64._int64);
    });
});

describe("Basic int construction with value: -32,768 (2^15)", () => {
    it("int8 should not construct properly for a value that exceeds its bit size", () => {
        let int8;
        try {
            int8 = Int8(-32768);
        } catch (e) {
            assert(true);
            return;
        }
        assert(false, "int8 was constructed for oversized value");
    });
    it("int16 should not construct properly for a value that exceeds its bit size", () => {
        let int16;
        try {
            int16 = Int16(-32768);
        } catch (e) {
            assert(true);
            return;
        }
        assert(false, "int16 was constructed for oversized value");
    });
    it("int32 should construct properly when given a value -32,768", () => {
        const int32 = Int32(-32768);
        expect(int32._value.toNumber()).to.be.equal(-32768);
        expect(int32._size).to.be.equal(32);
        assert(int32._int32);
    });
    it("int64 should construct properly when given a value -32,768", () => {
        const int64 = Int64("-32768");
        expect(int64._value.toNumber()).to.be.equal(-32768);
        expect(int64._size).to.be.equal(64);
        assert(int64._int64);
    });
});

describe("Basic int construction with value: -2,147,483,648 (2^31)", () => {
    it("int8 should not construct properly for a value that exceeds its bit size", () => {
        let int8;
        try {
            int8 = Int8(-2147483648);
        } catch (e) {
            assert(true);
            return;
        }
        assert(false, "int8 was constructed for oversized value");
    });
    it("int16 should not construct properly for a value that exceeds its bit size", () => {
        let int16;
        try {
            int16 = Int16(-2147483648);
        } catch (e) {
            assert(true);
            return;
        }
        assert(false, "int16 was constructed for oversized value");
    });
    it("int32 should construct properly when given a value -2,147,483,647", () => {
        const int32 = Int32(-2147483647);
        expect(int32._value.toNumber()).to.be.equal(-2147483647);
        expect(int32._size).to.be.equal(32);
        assert(int32._int32);
    });
    it("int32 should not construct properly for a value that exceeds its bit size", () => {
        let int32;
        try {
            int32 = Int32(-2147483648);
        } catch (e) {
            assert(true);
            return;
        }
        assert(false, "int32 was constructed for oversized value");
    });
    it("int64 should construct properly when given a value -2,147,483,648", () => {
        const int64 = Int64("-2147483648");
        expect(int64._value.toNumber()).to.be.equal(-2147483648);
        expect(int64._size).to.be.equal(64);
        assert(int64._int64);
    });
});

describe("Basic int construction with value: -9,223,372,036,854,775,808 (2^63)", () => {
    it("int8 should not construct properly for a value that exceeds its bit size", () => {
        let int8;
        try {
            int8 = Int8(-9223372036854775808);
        } catch (e) {
            assert(true);
            return;
        }
        assert(false, "int8 was constructed for oversized value");
    });
    it("int16 should not construct properly for a value that exceeds its bit size", () => {
        let int16;
        try {
            int16 = Int16(-9223372036854775808);
        } catch (e) {
            assert(true);
            return;
        }
        assert(false, "int16 was constructed for oversized value");
    });
    it("int32 should not construct properly for a value that exceeds its bit size", () => {
        let int32;
        try {
            int32 = Int32(-9223372036854775808);
        } catch (e) {
            assert(true);
            return;
        }
        assert(false, "int32 was constructed for oversized value");
    });
    it("int64 should construct properly when given a value -9,223,372,036,854,775,807", () => {
        const int64 = Int64("-9223372036854775807");
        expect(int64._value.toNumber()).to.be.equal(-9223372036854775807);
        expect(int64._size).to.be.equal(64);
        assert(int64._int64);
    });
    it("int64 should not construct properly for a value that exceeds its bit size", () => {
        let int64;
        try {
            int64 = Int64("-9223372036854775808");
        } catch (e) {
            assert(true);
            return;
        }
        assert(false, "int64 was constructed for oversized value");
    });
});

describe("Int construction with large values (Int128 and Int256)", () => {
    it("int128 should construct properly when given a value −170,141,183,460,469,231,731,687,303,715,884,105,727", () => {
        const int128 = Int128("-170141183460469231731687303715884105727");
        expect(int128._value.eq(new BigNumber("-170141183460469231731687303715884105727")));
        expect(int128._size).to.be.equal(128);
        assert(int128._int128);
    });
    it("int128 should construct properly when given a value 170,141,183,460,469,231,731,687,303,715,884,105,727", () => {
        const int128 = Int128("170141183460469231731687303715884105727");
        expect(int128._value.eq(new BigNumber("170141183460469231731687303715884105727")));
        expect(int128._size).to.be.equal(128);
        assert(int128._int128);
    });
    it("int128 should not construct properly when given a value -170,141,183,460,469,231,731,687,303,715,884,105,728", () => {
        let int128;
        try {
            int128 = Int128("-170141183460469231731687303715884105728");
        } catch (e) {
            assert(true);
            return;
        }
        assert(false, "int128 was constructed for oversized value");
    });
    it("int128 should not construct properly when given a value 170,141,183,460,469,231,731,687,303,715,884,105,728", () => {
        let int128;
        try {
            int128 = Int128("170141183460469231731687303715884105728");
        } catch (e) {
            assert(true);
            return;
        }
        assert(false, "int128 was constructed for oversized value");
    });
    it("int256 should construct properly when given a value -57896044618658097711785492504343953926634992332820282019728792003956564819967", () => {
        const int256 = Int256("-57896044618658097711785492504343953926634992332820282019728792003956564819967");
        expect(int256._value.eq(new BigNumber("-57896044618658097711785492504343953926634992332820282019728792003956564819967")));
        expect(int256._size).to.be.equal(256);
        assert(int256._int256);
    });
    it("int256 should construct properly when given a value 57896044618658097711785492504343953926634992332820282019728792003956564819967", () => {
        const int256 = Int256("57896044618658097711785492504343953926634992332820282019728792003956564819967");
        expect(int256._value.eq(new BigNumber("57896044618658097711785492504343953926634992332820282019728792003956564819967")));
        expect(int256._size).to.be.equal(256);
        assert(int256._int256);
    });
    it("int256 should not construct properly when given a value -57896044618658097711785492504343953926634992332820282019728792003956564819968", () => {
        let int256;
        try {
            int256 = Int256("-57896044618658097711785492504343953926634992332820282019728792003956564819968");
        } catch (e) {
            assert(true);
            return;
        }
        assert(false, "int256 was constructed for oversized value");
    });
    it("int256 should not construct properly when given a value 57896044618658097711785492504343953926634992332820282019728792003956564819968", () => {
        let int256;
        try {
            int256 = Int256("57896044618658097711785492504343953926634992332820282019728792003956564819968");
        } catch (e) {
            assert(true);
            return;
        }
        assert(false, "int256 was constructed for oversized value");
    });
});

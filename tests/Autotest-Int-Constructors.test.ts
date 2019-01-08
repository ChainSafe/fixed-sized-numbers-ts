import BigNumber from "bignumber.js";
import {getInts} from "./Autotest-config";
import {assertErrorMsg, validateInt} from "./helpers";
import {Int} from "../lib/Interfaces";

getInts().forEach((tc) => {
    describe(`Constructor tests for ${tc.name}`, () => {
        it("should construct properly with no given value", () => {
            const int: Int = tc.constructor();
            validateInt(int, tc.flag, tc.size, "0");
        });
        it("should construct properly when given a string value of 0", () => {
            const int: Int = tc.constructor("0");
            validateInt(int, tc.flag, tc.size, "0");
        });
        it("should construct properly when given a BigNumber value of 0", () => {
            const int: Int = tc.constructor(new BigNumber(0));
            validateInt(int, tc.flag, tc.size, "0");
        });
        it("should construct properly when given a string value of 1", () => {
            const int: Int = tc.constructor("1");
            validateInt(int, tc.flag, tc.size, "1");
        });
        it("should construct properly when given a BigNumber value of 1", () => {
            const int: Int = tc.constructor(new BigNumber(1));
            validateInt(int, tc.flag, tc.size, "1");
        });
        it("should construct properly when given a string value of -1", () => {
            const int: Int = tc.constructor("-1");
            validateInt(int, tc.flag, tc.size, "-1");
        });
        it("should construct properly when given a BigNumber value of -1", () => {
            const int: Int = tc.constructor(new BigNumber(-1));
            validateInt(int, tc.flag, tc.size, "-1");
        });
        it(`should construct properly when given a string value of ${tc.max}`, () => {
            const int: Int = tc.constructor(tc.max);
            validateInt(int, tc.flag, tc.size, tc.max);
        });
        it(`should construct properly when given a BigNumber value of ${tc.max}`, () => {
            const int: Int = tc.constructor(new BigNumber(tc.max));
            validateInt(int, tc.flag, tc.size, tc.max);
        });
        it(`should construct properly when given a string value of ${tc.min}`, () => {
            const int: Int = tc.constructor(tc.min);
            validateInt(int, tc.flag, tc.size, tc.min);
        });
        it(`should construct properly when given a BigNumber value of ${tc.min}`, () => {
            const int: Int = tc.constructor(new BigNumber(tc.min));
            validateInt(int, tc.flag, tc.size, tc.min);
        });
        it(`should fail to construct when given a string value of ${new BigNumber(tc.max).plus(1).toString()} (max + 1)`, () => {
            assertErrorMsg(() => tc.constructor(new BigNumber(tc.max).plus(1).toString()), tc.oversizedInputError);
        });
        it( `should fail to construct when given a BigNumber value of ${new BigNumber(tc.max).plus(1).toString()} (max + 1)`, () => {
            assertErrorMsg(() => tc.constructor(new BigNumber(tc.max).plus(1)), tc.oversizedInputError);
        });
        it(`should fail to construct when given a string value of ${new BigNumber(tc.min).minus(1).toString()} (min - 1)`, () => {
            assertErrorMsg(() => tc.constructor(new BigNumber(tc.min).minus(1).toString()), tc.oversizedInputError);
        });
        it( `should fail to construct when given a BigNumber value of ${new BigNumber(tc.min).minus(1).toString()} (min - 1)`, () => {
            assertErrorMsg(() => tc.constructor(new BigNumber(tc.min).minus(1)), tc.oversizedInputError);
        });
    });
});

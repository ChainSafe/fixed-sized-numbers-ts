import BigNumber from "bignumber.js";
import {getUints} from "./Autotest-config";
import {assertErrorMsg, validateUint} from "./helpers";
import {Uint} from "../lib/Interfaces";

getUints().forEach((tc) => {
    describe(`Constructor tests for ${tc.name}`, () => {
        it("should construct properly with no given value", () => {
            const uint: Uint = tc.constructor();
            validateUint(uint, tc.flag, tc.size, "0");
        });
        it("should construct properly when given a string value of 0", () => {
            const uint: Uint = tc.constructor("0");
            validateUint(uint, tc.flag, tc.size, "0");
        });
        it("should construct properly when given a BigNumber value of 0", () => {
            const uint: Uint = tc.constructor(new BigNumber(0));
            validateUint(uint, tc.flag, tc.size, "0");
        });
        it("should construct properly when given a string value of 1", () => {
            const uint: Uint = tc.constructor("1");
            validateUint(uint, tc.flag, tc.size, "1");
        });
        it("should construct properly when given a BigNumber value of 1", () => {
            const uint: Uint = tc.constructor(new BigNumber(1));
            validateUint(uint, tc.flag, tc.size, "1");
        });
        it(`should construct properly when given a string value of ${tc.max}`, () => {
            const uint: Uint = tc.constructor(tc.max);
            validateUint(uint, tc.flag, tc.size, tc.max);
        });
        it(`should construct properly when given a BigNumber value of ${tc.max}`, () => {
            const uint: Uint = tc.constructor(new BigNumber(tc.max));
            validateUint(uint, tc.flag, tc.size, tc.max);
        });
        it("should fail to construct when given a string value of -1", () => {
            assertErrorMsg(() => tc.constructor("-1"), tc.negativeOneInputError);
        });
        it("should fail to construct when given a BigNumber value of -1", () => {
            assertErrorMsg(() => tc.constructor(new BigNumber(-1)), tc.negativeOneInputError);
        });
        it(`should fail to construct when given a string value of ${new BigNumber(tc.max).plus(1).toString()} (max + 1)`, () => {
            assertErrorMsg(() => tc.constructor(new BigNumber(tc.max).plus(1).toString()), tc.oversizedInputError);
        });
        it( `should fail to construct when given a BigNumber value of ${new BigNumber(tc.max).plus(1).toString()} (max + 1)`, () => {
            assertErrorMsg(() => tc.constructor(new BigNumber(tc.max).plus(1)), tc.oversizedInputError);
        });
    });
});

import {DivisionByZeroError} from "../lib/errors";
import {assertErrorMsg, validateUint} from "./helpers";
import {getUints} from "./Autotest-config";

getUints().forEach((tc) => {
    describe(`SafeMath tests for ${tc.name}`, () => {
        it(`should return a ${tc.name} for all basic methods: Add`, () => {
            const one: any = tc.constructor("1");
            const two: any = one.add(one);

            validateUint(two, tc.flag, tc.size, "2");
        });
        it(`should return a ${tc.name} for all basic methods: Subtract`, () => {
            const one: any = tc.constructor("1");
            const zero: any = one.sub(one);

            validateUint(zero, tc.flag, tc.size, "0");
        });
        it(`should return a ${tc.name} for all basic methods: Multiply`, () => {
            const two: any = tc.constructor("2");
            const four: any = two.mul(two);

            validateUint(four, tc.flag, tc.size, "4");
        });
        it(`should return a ${tc.name} for all basic methods: Divide`, () => {
            const four: any = tc.constructor("4");
            const two: any = tc.constructor("2");
            const resTwo: any = four.div(two);

            validateUint(resTwo, tc.flag, tc.size, "2");
        });
        it(`should not allow overflow when adding ${tc.max} to 1`, () => {
            const one: any = tc.constructor("1");
            const limit: any = tc.constructor(tc.max);

            assertErrorMsg(() => limit.add(one), tc.overflowError);
        });
        it(`should not allow underflow when subtracting 1 from 0`, () => {
            const one: any = tc.constructor("1");
            const zero: any = tc.constructor("0");

            assertErrorMsg(() => zero.sub(one), tc.underflowError);
        });
        it(`should not allow overflow when multiplying ${tc.midpoint} by 2`, () => {
            const limit: any = tc.constructor(tc.midpoint);
            const two: any = tc.constructor("2");

            assertErrorMsg(() => limit.mul(two), tc.overflowError);
        });
        it(`should not allow division by 0`, () => {
            const zero: any = tc.constructor("0");
            const two: any = tc.constructor("2");

            assertErrorMsg(() => two.div(zero), new DivisionByZeroError());
        });
        it("should allow zero to be the dividend", () => {
            const zero: any = tc.constructor("0");
            const two: any = tc.constructor("2");

            validateUint(zero.div(two), tc.flag, tc.size, "0");
        });
    });
});

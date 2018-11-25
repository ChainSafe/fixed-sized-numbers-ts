"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var UnsignedNumber_1 = require("../lib/UnsignedNumber");
var chai_1 = require("chai");
require("mocha");
var errors_1 = require("../lib/errors");
describe('Unsigned Number', function () {
    it('should create a instance with a default value of zero', function () {
        var num = new UnsignedNumber_1.default(1);
        chai_1.expect(num.value.c).to.have.lengthOf(1);
        chai_1.expect(num.value.c[0]).to.equal(0);
    });
    it('should create an instance with a value of 100 and size 10', function () {
        var num = new UnsignedNumber_1.default(10, 100);
        chai_1.expect(num.size).to.equal(10);
        chai_1.expect(num.value.c).to.have.lengthOf(1);
        chai_1.expect(num.value.c[0]).to.equal(100);
    });
    it('should fail to create an instance with a value greater than its size', function () {
        chai_1.expect(function () { return new UnsignedNumber_1.default(1, 999999999999999); })
            .to.throw(new errors_1.OverflowError(1, 50).message);
    });
    it('should fail to perform operations two numbers of the different sizes', function () {
        var a = new UnsignedNumber_1.default(32, 1);
        var b = new UnsignedNumber_1.default(64, 1);
        chai_1.expect(function () { return a.Add(b); }).to.throw(new errors_1.InconsistentSizeError(32, 64).message);
        chai_1.expect(function () { return a.Sub(b); }).to.throw(new errors_1.InconsistentSizeError(32, 64).message);
        // TODO: Add new operations
        // expect(() => a.Add(b)).to.throw(new InconsistentSizeError(32, 64).message)
        // expect(() => a.Add(b)).to.throw(new InconsistentSizeError(32, 64).message)
    });
    it('should evaluate two equal numbers as equal', function () {
        var a = new UnsignedNumber_1.default(32, 100);
        var b = new UnsignedNumber_1.default(32, 100);
        chai_1.assert.isTrue(a.Eq(b), 'Equality returned false');
    });
    it('should evaluate two non-equal numbers as non-equal', function () {
        var a = new UnsignedNumber_1.default(32, 101);
        var b = new UnsignedNumber_1.default(32, 100);
        chai_1.assert.isFalse(a.Eq(b), 'Equality returned true');
    });
    it('should overflow and throw error when sum is greater than size', function () {
        var a = new UnsignedNumber_1.default(32, 4294967196);
        var b = new UnsignedNumber_1.default(32, 4294967196);
        // TODO: Update actual size
        chai_1.expect(function () { return a.Add(b); }).to.throw(new errors_1.OverflowError(a.size, 33).message);
    });
    it('should correctly add two numbers', function () {
        var a = new UnsignedNumber_1.default(64, 10000000000);
        var b = new UnsignedNumber_1.default(64, 10000000000);
        var res = a.Add(b);
        chai_1.expect(res.Eq(new UnsignedNumber_1.default(64, 20000000000)));
    });
});

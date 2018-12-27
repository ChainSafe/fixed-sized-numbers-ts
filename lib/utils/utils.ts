//Fixed Sized Numbers TS
 //Copyright (C) 2018 ChainSafe Systems

  // This program is free software: you can redistribute it and/or modify
 // it under the terms of the GNU General Public License as published by
 // the Free Software Foundation, either version 3 of the License, or
 // (at your option) any later version.
 //
 // This program is distributed in the hope that it will be useful,
 // but WITHOUT ANY WARRANTY; without even the implied warranty of
 // MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 // GNU General Public License for more details.
 //
 // You should have received a copy of the GNU General Public License
 // along with this program.  If not, see <http://www.gnu.org/licenses/>.

import BigNumber from "bignumber.js";
import { TypeNotSupportedError } from "../errors";
import { MetaInteger } from "../Interfaces";

const getSize = (num) => {
    if (typeof num === "number") { return getNumberSize(num);
    } else if (typeof num === "string") { return getStringNumberSize(num);
    } else if (BigNumber.isBigNumber(num)) { return getBigNumberSize(num);
    } else { throw new TypeNotSupportedError(); }
};

const getNumberSize = (num: number): number => num.toString(2).length;
const getBigNumberSize = (num: BigNumber): number => num.toNumber().toString(2).length;
const getStringNumberSize = (num: string): number => parseInt(num, 10).toString(2).length;

const bigNumberOrThrowError = (x: BigNumber | Error): BigNumber => {
    if (x instanceof Error) {
        throw x;
    } else { return x; }
};

const pipe = (...fns) => (x) => fns.reduce((v, f) => f(v), x);

export {
    bigNumberOrThrowError,
    getSize,
    pipe,
};

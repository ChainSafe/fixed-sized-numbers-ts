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
import { MetaInteger } from "../Interfaces";

const validateSize = (initialSize: number) => (external: MetaInteger): boolean => initialSize === external._size;

const buildMetaInt = (size: number) => (value: BigNumber): MetaInteger => ({
    _value: value,
    _size: size,
    validateSize: validateSize(size),
});

const composeObjects = <T>(x) => (y: MetaInteger): T => Object.assign(y, x) as T;

export {
    buildMetaInt,
    composeObjects,
};

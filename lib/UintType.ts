class UintType  {}

class u8 extends UintType {
    static readonly _size:number = 8
}

class u16 extends UintType {
    static readonly _size:number = 16
}

class u32 extends UintType {
    static readonly _size:number = 32
}

class u64 extends UintType {
    static readonly _size:number = 64
}


export default UintType
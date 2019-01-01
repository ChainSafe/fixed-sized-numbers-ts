## Testing

Due to the need to add and test additional types the tests for this project are written generically. That is, the testing parameters for a new type can be defined and the tests will be automatically generated.

Each type has the following fields defined to construct tests:
```
interface UintTypeTestInterface {
    // Human friendly name
    name: string;
    // Factory function
    constructor: (value?: string | BigNumber) => Uint;
    // Boolean flag name to identify type
    flag: string;
    // Number of bits that can be stored
    size: number;
    // Maximum value that can stored
    max?: string;
    // The 'middle' number such that 2 * midpoint = max + 1
    midpoint?: string;
    // Error that is thrown on overflow
    overflowError?: Error;
    // Error thrown on underflow
    underflowError?: Error;
    // Error throw when factory constructor is called with a value too large for the given type
    oversizedInputError?: Error;
    // Error thrown when -1 is passed to constructor
    negativeOneInputError?: Error;
}
```
```
interface IntTypeTestInterface {
    // Human friendly name
    name: string;
    // Factory function
    constructor: (value?: string | BigNumber) => Int;
    // Boolean flag to identify type
    flag: string;
    // Number of bits that can be stored (including sign)
    size: number;
    // Maximum value that can be stored
    max?: string;
    // Minimum value that can be stored
    min?: string;
    // The 'middle' number such that 2 * midpoint = max + 1
    midpoint?: string;
    // Negated midpoint
    midpointNeg?: string;
    // Error thrownn on overflow
    overflowError?: Error;
    // Error thrown on underflow
    underflowError?: Error;
    // Error thrown when factory constructor is called with a value too large for the given type
    oversizedInputError?: Error;
}
```

### Testing A New Type

To add a new type for testing simply modify the `UintTypes` or `IntTypes` arrays in `tests/Autotest-config.ts`. 

Example:
```
    {
        name: "Int8",
        constructor: Int8,
        flag: "_int8",
        size: 8,
    }
```

**Note: You only need to define these parameters, the remainder will be automatically generated. See above for field descriptions.**

### Current Test Cases

#### Constructors (Uint)

| Value | Input Type | Example                       |
| ------|------------|-------------------------------|
| None  | N/A        | `Uint8()`                     |
| 0     | String     | `Uint8('0')`                  |
| 0     | BigNumber  | `Uint8(new BigNumber('0'))  ` |
| 1     | String     | `Uint8('1')`                  |
| 1     | BigNumber  | `Uint8(new BigNumber('1'))`   |
| MAX   | String     | `Uint8('255')`                |
| MAX   | BigNumber  | `Uint8(new BigNumber('255'))` |


| Value | Input Type | Expected Error             | 
|-------|------------|----------------------------|
| -1    | String     | NegativeUnsignedError(-1)  |
| -1    | BigNumber  | NegativeUnsignedError(-1)  |
| MAX+1 | String     | InvalidSizeError(SIZE + 1) |
| MAX+1 | BigNumber  | InvalidSizeError(SIZE + 1) |

#### Constructors (Int)

| Value | Input Type | Example                       |
| ------|------------|-------------------------------|
| None  | N/A        | `Int8()`                     |
| 0     | String     | `Int8('0')`                  |
| 0     | BigNumber  | `Int8(new BigNumber('0'))  ` |
| 1     | String     | `Int8('1')`                  |
| 1     | BigNumber  | `Int8(new BigNumber('1'))`   |
| -1    | String     | `Int8('-1')`                 |
| -1    | BigNumber  | `Int8(new BigNumber('-1'))`  |
| MAX   | String     | `Int8('255')`                |
| MAX   | BigNumber  | `Int8(new BigNumber('255'))` |
| MIN   | String     | `Int8('-127')`               |
| MIN   | BigNumber  | `Int8(new BigNumber('-127'))`|

| Value | Input Type | Expected Error             | 
|-------|------------|----------------------------|
| MAX+1 | String     | InvalidSizeError(SIZE + 1) |
| MAX+1 | BigNumber  | InvalidSizeError(SIZE + 1) |
| MIN-1 | String     | InvalidSizeError(SIZE + 1) |
| MIN-1 | BigNumber  | InvalidSizeError(SIZE + 1) |

#### Safe Maths (Uint)
| Value A | Value B | Operator |
|---------|---------|----------|
| 1       | 1       | add      |
| 1       | 1       | sub      |
| 2       | 2       | mul      |
| 4       | 2       | div      |
| 0       | 2       | div      |

| Value A | Value B | Operator | Expected Error      |
|---------|---------|----------|---------------------|
| MAX     | 1       | add      | OverflowError       |
| 0       | 1       | sub      | UnderflowError      |
| MID     | 2       | mul      | OverflowError       |
| 2       | 0       | div      | DivisionByZeroError |

#### Safe Maths (Int)
| Value A | Value B | Operator |
|---------|---------|----------|
| 1       | 1       | add      |
| 1       | 1       | sub      |
| 0       | 1       | sub      |
| 2       | 2       | mul      |
| 4       | 2       | div      |
| 0       | 2       | div      |

| Value A | Value B | Operator | Expected Error      |
|---------|---------|----------|---------------------|
| MAX     | 1       | add      | OverflowError       |
| MIN     | -1      | add      | UnderflowError      |
| 1       | MIN     | sub      | UnderflowError      |
| MIN     | 1       | sub      | UnderflowError      |
| MID     | 2       | mul      | OverflowError       |
| -MID    | 2       | mul      | UnderflowError      |
| MID     | -2      | mul      | UnderflowError      |
| 2       | 0       | div      | DivisionByZeroError |


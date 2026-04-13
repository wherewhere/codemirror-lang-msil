import { type, variable } from "./store";

export const opcodes = {
    add: {
        info: "Add two values, returning a new value (0x58)",
        ovf: {
            info: "Add signed integer values with overflow check (0xD6)",
            un: {
                info: "Add unsigned integer values with overflow check (0xD7)"
            }
        }
    },
    and: {
        info: "Bitwise AND of two integral values, returns an integral value (0x5F)"
    },
    arglist: {
        info: "Return argument list handle for the current method (0xFE 0x00)"
    },
    beq: {
        info: "Branch to target if equal (0x3B <int32>)",
        s: {
            info: "Branch to target if equal, short form (0x2E <int8>)"
        }
    },
    bge: {
        info: "Branch to target if greater than or equal to (0x3C <int32>)",
        s: {
            info: "Branch to target if greater than or equal to, short form (0x2F <int8>)"
        },
        un: {
            info: "Branch to target if greater than or equal to (unsigned or unordered) (0x41 <int32>)",
            s: {
                info: "Branch to target if greater than or equal to (unsigned or unordered), short form (0x34 <int8>)"
            }
        }
    },
    bgt: {
        info: "Branch to target if greater than (0x3D <int32>)",
        s: {
            info: "Branch to target if greater than, short form (0x30 <int8>)"
        },
        un: {
            info: "Branch to target if greater than (unsigned or unordered) (0x42 <int32>)",
            s: {
                info: "Branch to target if greater than (unsigned or unordered), short form (0x35 <int8>)"
            }
        }
    },
    ble: {
        info: "Branch to target if less than or equal to (0x3E <int32>)",
        s: {
            info: "Branch to target if less than or equal to, short form (0x31 <int8>)"
        },
        un: {
            info: "Branch to target if less than or equal to (unsigned or unordered) (0x43 <int32>)",
            s: {
                info: "Branch to target if less than or equal to (unsigned or unordered), short form (0x36 <int8>)"
            }
        }
    },
    blt: {
        info: "Branch to target if less than (0x3F <int32>)",
        s: {
            info: "Branch to target if less than, short form (0x32 <int8>)"
        },
        un: {
            info: "Branch to target if less than (unsigned or unordered) (0x44 <int32>)",
            s: {
                info: "Branch to target if less than (unsigned or unordered), short form (0x37 <int8>)"
            }
        }
    },
    bne: {
        un: {
            info: "Branch to target if unequal or unordered (0x40 <int32>)",
            s: {
                info: "Branch to target if unequal or unordered, short form (0x33 <int8>)"
            }
        }
    },
    box: {
        info: "Convert a boxable value to its boxed form (0x8B <T>)"
    },
    br: {
        info: "Branch to target (0x38 <int32>)",
        s: {
            info: "Branch to target, short form (0x2B <int8>)"
        }
    },
    break: {
        info: "Inform a debugger that a breakpoint has been reached (0x01)"
    },
    brfalse: {
        info: "Branch to target if value is zero (false) (0x39 <int32>)",
        s: {
            info: "Branch to target if value is zero (false), short form (0x2C <int8>)"
        }
    },
    brinst: {
        info: "Branch to target if value is a non-null object reference (alias for brtrue) (0x3A <int32>)",
        s: {
            info: "Branch to target if value is a non-null object reference, short form (alias for brtrue.s) (0x2D <int8>)"
        }
    },
    brnull: {
        info: "Branch to target if value is null (alias for brfalse) (0x39 <int32>)",
        s: {
            info: "Branch to target if value is null (alias for brfalse.s), short form (0x2C <int8>)"
        }
    },
    brtrue: {
        info: "Branch to target if value is non-zero (true) (0x3A <int32>)",
        s: {
            info: "Branch to target if value is non-zero (true), short form (0x2D <int8>)"
        }
    },
    brzero: {
        info: "Branch to target if value is zero (alias for brfalse) (0x39 <int32>)",
        s: {
            info: "Branch to target if value is zero (alias for brfalse.s), short form (0x2C <int8>)"
        }
    },
    call: {
        info: "Call method indicated on the stack with arguments (0x28 <T>)"
    },
    callvirt: {
        info: "Call a late-bound method on an object (0x6F <T>)"
    },
    castclass: {
        info: "Cast obj to class (0x74 <T>)"
    },
    ceq: {
        info: "Push 1 (of type int32) if value1 equals value2, else push 0 (0xFE 0x01)"
    },
    cgt: {
        info: "Push 1 (of type int32) if value1 > value2, else push 0 (0xFE 0x02)",
        un: {
            info: "Push 1 (of type int32) if value1 > value2, unsigned or unordered, else push 0 (0xFE 0x03)"
        }
    },
    ckfinite: {
        info: "Throw ArithmeticException if value is not a finite number (0xC3)"
    },
    clt: {
        info: "Push 1 (of type int32) if value1 < value2, else push 0 (0xFE 0x04)",
        un: {
            info: "Push 1 (of type int32) if value1 < value2, unsigned or unordered, else push 0 (0xFE 0x05)"
        }
    },
    constrained: {
        info: "Call a virtual method on a type constrained to be type T (0xFE 0x16 <T>)"
    },
    conv: {
        i: {
            type,
            info: "Convert to native int, pushing native int on stack (0xD3)"
        },
        i1: {
            type,
            info: "Convert to int8, pushing int32 on stack (0x67)"
        },
        i2: {
            type,
            info: "Convert to int16, pushing int32 on stack (0x68)"
        },
        i4: {
            type,
            info: "Convert to int32, pushing int32 on stack (0x69)"
        },
        i8: {
            type,
            info: "Convert to int64, pushing int64 on stack (0x6A)"
        },
        ovf: {
            i: {
                type,
                info: "Convert to a native int (on the stack as native int) and throw an exception on overflow (0xD4)",
                un: {
                    info: "Convert unsigned to a native int (on the stack as native int) and throw an exception on overflow (0x8A)"
                }
            },
            i1: {
                type,
                info: "Convert to an int8 (on the stack as int32) and throw an exception on overflow (0xB3)",
                un: {
                    info: "Convert unsigned to an int8 (on the stack as int32) and throw an exception on overflow (0x82)"
                }
            },
            i2: {
                type,
                info: "Convert to an int16 (on the stack as int32) and throw an exception on overflow (0xB5)",
                un: {
                    info: "Convert unsigned to an int16 (on the stack as int32) and throw an exception on overflow (0x83)"
                }
            },
            i4: {
                type,
                info: "Convert to an int32 (on the stack as int32) and throw an exception on overflow (0xB7)",
                un: {
                    info: "Convert unsigned to an int32 (on the stack as int32) and throw an exception on overflow (0x84)"
                }
            },
            i8: {
                type,
                info: "Convert to an int64 (on the stack as int64) and throw an exception on overflow (0xB9)",
                un: {
                    info: "Convert unsigned to an int64 (on the stack as int64) and throw an exception on overflow (0x85)"
                }
            },
            u: {
                type,
                info: "Convert to a native unsigned int (on the stack as native int) and throw an exception on overflow (0xD5)",
                un: {
                    info: "Convert unsigned to a native unsigned int (on the stack as native int) and throw an exception on overflow (0x8B)"
                }
            },
            u1: {
                type,
                info: "Convert to an unsigned int8 (on the stack as int32) and throw an exception on overflow (0xB4)",
                un: {
                    info: "Convert unsigned to an unsigned int8 (on the stack as int32) and throw an exception on overflow (0x86)"
                }
            },
            u2: {
                type,
                info: "Convert to an unsigned int16 (on the stack as int32) and throw an exception on overflow (0xB6)",
                un: {
                    info: "Convert unsigned to an unsigned int16 (on the stack as int32) and throw an exception on overflow (0x87)"
                }
            },
            u4: {
                type,
                info: "Convert to an unsigned int32 (on the stack as int32) and throw an exception on overflow (0xB8)",
                un: {
                    info: "Convert unsigned to an unsigned int32 (on the stack as int32) and throw an exception on overflow (0x88)"
                }
            },
            u8: {
                type,
                info: "Convert to an unsigned int64 (on the stack as int64) and throw an exception on overflow (0xBA)",
                un: {
                    info: "Convert unsigned to an unsigned int64 (on the stack as int64) and throw an exception on overflow (0x89)"
                }
            }
        },
        r: {
            type,
            un: {
                info: "Convert unsigned integer to floating-point, pushing F on stack (0x76)"
            }
        },
        r4: {
            type,
            info: "Convert to float32, pushing F on stack (0x6B)"
        },
        r8: {
            type,
            info: "Convert to float64, pushing F on stack (0x6C)"
        },
        u: {
            type,
            info: "Convert to native unsigned int, pushing native int on stack (0xE0)"
        },
        u1: {
            type,
            info: "Convert to unsigned int8, pushing int32 on stack (0xD2)"
        },
        u2: {
            type,
            info: "Convert to unsigned int16, pushing int32 on stack (0xD1)"
        },
        u4: {
            type,
            info: "Convert to unsigned int32, pushing int32 on stack (0x6D)"
        },
        u8: {
            type,
            info: "Convert to unsigned int64, pushing int64 on stack (0x6E)"
        }
    },
    cpblk: {
        info: "Copy data from memory to memory (0xFE 0x17)"
    },
    cpobj: {
        info: "Copy a value type from src to dest (0x70 <T>)"
    },
    div: {
        info: "Divide two values to return a quotient or floating-point result (0x5B)",
        un: {
            info: "Divide two values, unsigned, returning a quotient (0x5C)"
        }
    },
    dup: {
        info: "Duplicate the value on the top of the stack (0x25)"
    },
    endfault: {
        info: "End fault clause of an exception block (alias for endfilter) (0xFE 0x11)"
    },
    endfilter: {
        info: "End an exception handling filter clause (0xFE 0x11)"
    },
    endfinally: {
        info: "End finally clause of an exception block (0xDC)"
    },
    initblk: {
        info: "Set all bytes in a block of memory to a given byte value (0xFE 0x18)"
    },
    initobj: {
        info: "Initialize the value at address dest (0xFE 0x15 <T>)"
    },
    isinst: {
        info: "Test if obj is an instance of class, returning null or an instance of that class or interface (0x75 <T>)"
    },
    jmp: {
        info: "Exit current method and jump to the specified method (0x27 <T>)"
    },
    ldarg: {
        info: "Load argument numbered num onto the stack (0xFE 0x09 <uint16>)",
        '0': {
            type: variable,
            info: "Load argument 0 onto the stack (0x02)"
        },
        '1': {
            type: variable,
            info: "Load argument 1 onto the stack (0x03)"
        },
        '2': {
            type: variable,
            info: "Load argument 2 onto the stack (0x4)"
        },
        '3': {
            type: variable,
            info: "Load argument 3 onto the stack (0x5)"
        },
        s: {
            info: "Load argument numbered num onto the stack, short form (0x0E <uint8>)"
        }
    },
    ldarga: {
        info: "Fetch the address of argument argNum (0xFE 0x0A <uint16>)",
        s: {
            info: "Fetch the address of argument argNum, short form (0x0F <uint8>)"
        }
    },
    ldc: {
        i4: {
            type,
            info: "Push num of type int32 onto the stack as int32 (0x20 <int32>)",
            '0': {
                type: "constant",
                info: "Push 0 onto the stack as int32 (0x16)"
            },
            '1': {
                type: "constant",
                info: "Push 1 onto the stack as int32 (0x17)"
            },
            '2': {
                type: "constant",
                info: "Push 2 onto the stack as int32 (0x18)"
            },
            '3': {
                type: "constant",
                info: "Push 3 onto the stack as int32 (0x19)"
            },
            '4': {
                type: "constant",
                info: "Push 4 onto the stack as int32 (0x1A)"
            },
            '5': {
                type: "constant",
                info: "Push 5 onto the stack as int32 (0x1B)"
            },
            '6': {
                type: "constant",
                info: "Push 6 onto the stack as int32 (0x1C)"
            },
            '7': {
                type: "constant",
                info: "Push 7 onto the stack as int32 (0x1D)"
            },
            '8': {
                type: "constant",
                info: "Push 8 onto the stack as int32 (0x1E)"
            },
            m1: {
                type: "constant",
                info: "Push -1 onto the stack as int32 (0x15)"
            },
            M1: {
                type: "constant",
                info: "Push -1 of type int32 onto the stack as int32 (alias for ldc.i4.m1) (0x15)"
            },
            s: {
                info: "Push num onto the stack as int32, short form (0x1F <int8>)"
            }
        },
        i8: {
            type,
            info: "Push num of type int64 onto the stack as int64 (0x21 <int64>)"
        },
        r4: {
            type,
            info: "Push num of type float32 onto the stack as F (0x22 <float32>)"
        },
        r8: {
            type,
            info: "Push num of type float64 onto the stack as F (0x23 <float64>)"
        }
    },
    ldelem: {
        info: "Load the element at index onto the top of the stack (0xA3 <T>)",
        i: {
            type,
            info: "Load the element with type native int at index onto the top of the stack as a native int (0x97)"
        },
        i1: {
            type,
            info: "Load the element with type int8 at index onto the top of the stack as an int32 (0x90)"
        },
        i2: {
            type,
            info: "Load the element with type int16 at index onto the top of the stack as an int32 (0x92)"
        },
        i4: {
            type,
            info: "Load the element with type int32 at index onto the top of the stack as an int32 (0x94)"
        },
        i8: {
            type,
            info: "Load the element with type int64 at index onto the top of the stack as an int64 (0x96)"
        },
        r4: {
            type,
            info: "Load the element with type float32 at index onto the top of the stack as an F (0x98)"
        },
        r8: {
            type,
            info: "Load the element with type float64 at index onto the top of the stack as an F (0x99)"
        },
        ref: {
            type,
            info: "Load the element at index onto the top of the stack as an O. The type of the O is the same as the element type of the array pushed on the CIL stack (0x9A)"
        },
        u1: {
            type,
            info: "Load the element with type unsigned int8 at index onto the top of the stack as an int32 (0x91)"
        },
        u2: {
            type,
            info: "Load the element with type unsigned int16 at index onto the top of the stack as an int32 (0x93)"
        },
        u4: {
            type,
            info: "Load the element with type unsigned int32 at index onto the top of the stack as an int32 (0x95)"
        },
        u8: {
            type,
            info: "Load the element with type unsigned int64 at index onto the top of the stack as an int64 (alias for ldelem.i8) (0x96)"
        }
    },
    ldelema: {
        info: "Load the address of element at index onto the top of the stack (0x8F <T>)"
    },
    ldfld: {
        info: "Push the value of field of object (or value type) obj, onto the stack (0x7B)"
    },
    ldflda: {
        info: "Push the address of field of object obj on the stack (0x7C <T>)"
    },
    ldftn: {
        info: "Push a pointer to a method referenced by method, on the stack (0xFE 0x06 <T>)"
    },
    ldind: {
        i: {
            type,
            info: "Indirect load value of type native int as native int on the stack (0x4D)"
        },
        i1: {
            type,
            info: "Indirect load value of type int8 as int32 on the stack (0x46)"
        },
        i2: {
            type,
            info: "Indirect load value of type int16 as int32 on the stack (0x48)"
        },
        i4: {
            type,
            info: "Indirect load value of type int32 as int32 on the stack (0x4A)"
        },
        i8: {
            type,
            info: "Indirect load value of type int64 as int64 on the stack (0x4C)"
        },
        r4: {
            type,
            info: "Indirect load value of type float32 as F on the stack (0x4E)"
        },
        r8: {
            type,
            info: "Indirect load value of type float64 as F on the stack (0x4F)"
        },
        ref: {
            type,
            info: "Indirect load value of type object ref as O on the stack (0x50)"
        },
        u1: {
            type,
            info: "Indirect load value of type unsigned int8 as int32 on the stack (0x47)"
        },
        u2: {
            type,
            info: "Indirect load value of type unsigned int16 as int32 on the stack (0x49)"
        },
        u4: {
            type,
            info: "Indirect load value of type unsigned int32 as int32 on the stack (0x4B)"
        },
        u8: {
            type,
            info: "Indirect load value of type unsigned int64 as int64 on the stack (alias for ldind.i8) (0x4C)"
        }
    },
    ldlen: {
        info: "Push the length (of type native unsigned int) of array on the stack (0x8E)"
    },
    ldloc: {
        info: "Load local variable of index indx onto stack (0xFE 0x0C <uint16>)",
        '0': {
            type: variable,
            info: "Load local variable 0 onto stack (0x06)"
        },
        '1': {
            type: variable,
            info: "Load local variable 1 onto stack (0x7)"
        },
        '2': {
            type: variable,
            info: "Load local variable 2 onto stack (0x8)"
        },
        '3': {
            type: variable,
            info: "Load local variable 3 onto stack (0x9)"
        },
        s: {
            info: "Load local variable of index indx onto stack, short form (0x11 <uint8>)"
        }
    },
    ldloca: {
        info: "Load address of local variable with index indx (0xFE 0x0D <uint16>)",
        s: {
            info: "Load address of local variable with index indx, short form (0x12 <uint8>)"
        }
    },
    ldnull: {
        info: "Push a null reference on the stack (0x14)"
    },
    ldobj: {
        info: "Copy the value stored at address src to the stack (0x71 <T>)"
    },
    ldsfld: {
        info: "Push the value of field on the stack (0x7E <T>)"
    },
    ldsflda: {
        info: "Push the address of the static field, field, on the stack (0x7F <T>)"
    },
    ldstr: {
        info: "Push a string object for the literal string (0x72)"
    },
    ldtoken: {
        info: "Convert metadata token to its runtime representation (0xD0 <T>)"
    },
    ldvirtftn: {
        info: "Push address of virtual method on the stack (0xFE 0x07 <T>)"
    },
    leave: {
        info: "Exit a protected region of code (0xDD <int32>)",
        s: {
            info: "Exit a protected region of code, short form (0xDE <int8>)"
        }
    },
    localloc: {
        info: "Allocate space from the local memory pool (0xFE 0x0F)"
    },
    mkrefany: {
        info: "Push a typed reference to ptr of type class onto the stack (0xC6 <T>)"
    },
    mul: {
        info: "Multiply values (0x5A)",
        ovf: {
            info: "Multiply signed integer values. Signed result shall fit in same size (0xD8)",
            un: {
                info: "Multiply unsigned integer values. Unsigned result shall fit in same size (0xD9)"
            }
        }
    },
    neg: {
        info: "Negate value (0x65)"
    },
    newarr: {
        info: "Create a new array with elements of type etype (0x8D <T>)"
    },
    newobj: {
        info: "Allocate an uninitialized object or value type and call ctor (0x73 <T>)"
    },
    no: {
        info: "The specified fault check(s) normally performed as part of the execution of the subsequent instruction can/shall be skipped (0x??)"
    },
    nop: {
        info: "Do nothing (No operation) (0x00)"
    },
    not: {
        info: "Bitwise complement (logical not) (0x66)"
    },
    or: {
        info: "Bitwise OR of two integer values, returns an integer (0x60)"
    },
    pop: {
        info: "Pop value from the stack (0x26)"
    },
    readonly: {
        info: "Specify that the subsequent array address operation performs no type check at runtime, and that it returns a controlled-mutability managed pointer (0xFE 1E)"
    },
    refanytype: {
        info: "Push the type token stored in a typed reference (0xFE 0x1D)"
    },
    refanyval: {
        info: "Push the address stored in a typed reference (0xC2 <T>)"
    },
    rem: {
        info: "Remainder when dividing one value by another (0x5D)",
        un: {
            info: "Remainder when dividing one unsigned value by another (0x5E)"
        }
    },
    ret: {
        info: "Return from method, possibly with a value (0x2A)"
    },
    rethrow: {
        info: "Rethrow the current exception (0xFE 0x1A)"
    },
    shl: {
        info: "Shift an integer left (shifting in zeros), return an integer (0x62)"
    },
    shr: {
        info: "Shift an integer right (shift in sign), return an integer (0x63)",
        un: {
            info: "Shift an integer right (shift in zero), return an integer (0x64)"
        }
    },
    sizeof: {
        info: "Push the size, in bytes, of a type as an unsigned int32 (0xFE 0x1C <T>)"
    },
    starg: {
        info: "Store value to the argument numbered num (0xFE 0x0B <uint16>)",
        s: {
            info: "Store value to the argument numbered num, short form (0x10 <uint8>)"
        }
    },
    stelem: {
        info: "Replace array element at index with the value on the stack (0xA4 <T>)",
        i: {
            type,
            info: "Replace array element at index with the i value on the stack (0x9B)"
        },
        i1: {
            type,
            info: "Replace array element at index with the int8 value on the stack (0x9C)"
        },
        i2: {
            type,
            info: "Replace array element at index with the int16 value on the stack (0x9D)"
        },
        i4: {
            type,
            info: "Replace array element at index with the int32 value on the stack (0x9E)"
        },
        i8: {
            type,
            info: "Replace array element at index with the int64 value on the stack (0x9F)"
        },
        r4: {
            type,
            info: "Replace array element at index with the float32 value on the stack (0xA0)"
        },
        r8: {
            type,
            info: "Replace array element at index with the float64 value on the stack (0xA1)"
        },
        ref: {
            type,
            info: "Replace array element at index with the ref value on the stack (0xA2)"
        }
    },
    stfld: {
        info: "Replace the value of field of the object obj with value (0x7D <T>)"
    },
    stind: {
        i: {
            type,
            info: "Store value of type native int into memory at address (0xDF)"
        },
        i1: {
            type,
            info: "Store value of type int8 into memory at address (0x52)"
        },
        i2: {
            type,
            info: "Store value of type int16 into memory at address (0x53)"
        },
        i4: {
            type,
            info: "Store value of type int32 into memory at address (0x54)"
        },
        i8: {
            type,
            info: "Store value of type int64 into memory at address (0x55)"
        },
        r4: {
            type,
            info: "Store value of type float32 into memory at address (0x56)"
        },
        r8: {
            type,
            info: "Store value of type float64 into memory at address (0x57)"
        },
        ref: {
            type,
            info: "Store value of type object ref (type O) into memory at address (0x51)"
        }
    },
    stloc: {
        info: "Pop a value from stack into local variable index (0xFE 0x0E <uint16>)",
        '0': {
            type: variable,
            info: "Pop a value from stack into local variable 0 (0x0A)"
        },
        '1': {
            type: variable,
            info: "Pop a value from stack into local variable 1 (0x0B)"
        },
        '2': {
            type: variable,
            info: "Pop a value from stack into local variable 2 (0x0C)"
        },
        '3': {
            type: variable,
            info: "Pop a value from stack into local variable 3 (0x0D)"
        },
        s: {
            info: "Pop a value from stack into local variable indx, short form (0x13 <uint8>)"
        }
    },
    stobj: {
        info: "Store a value of type typeTok at an address (0x81 <T>)"
    },
    stsfld: {
        info: "Replace the value of field with val (0x80 <T>)"
    },
    sub: {
        info: "Subtract value2 from value1, returning a new value (0x59)",
        ovf: {
            info: "Subtract native int from a native int. Signed result shall fit in same size (0xDA)",
            un: {
                info: "Subtract native unsigned int from a native unsigned int. Unsigned result shall fit in same size (0xDB)"
            }
        }
    },
    switch: {
        info: "Jump to one of n values (0x45 <uint32> <int32> ... <int32>)"
    },
    tail: {
        info: "Subsequent call terminates current method (0xFE 0x14)"
    },
    throw: {
        info: "Throw an exception (0x7A)"
    },
    unaligned: {
        info: "Subsequent pointer instruction might be unaligned (0xFE 0x12)"
    },
    unbox: {
        info: "Extract a value-type from obj, its boxed representation (0x79 <T>)",
        any: {
            info: "Extract a value-type from obj, its boxed representation (0xA5 <T>)"
        }
    },
    volatile: {
        info: "Subsequent pointer reference is volatile (0xFE 0x13)"
    },
    xor: {
        info: "Bitwise XOR of integer values, returns an integer (0x61)"
    }
} as const;

export function getInstruction(code?: string) {
    if (!code?.match(/^\w/)) {
        return;
    }
    const parts = code.split('.');
    type opcode = Record<string, object | undefined> & { info?: string, type?: string };
    let opcode = opcodes as opcode;
    for (let i = 0; i < parts.length; i++) {
        const part = parts[i];
        if (part in opcode) {
            opcode = opcode[part] as opcode;
        }
        else if (i !== parts.length - 1) {
            return;
        }
    }
    return opcode;
}
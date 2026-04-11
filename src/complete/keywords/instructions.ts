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
            type: "type",
            info: "Convert to native int, pushing native int on stack (0xD3)"
        },
        i1: {
            type: "type",
            info: "Convert to int8, pushing int32 on stack (0x67)"
        },
        i2: {
            type: "type",
            info: "Convert to int16, pushing int32 on stack (0x68)"
        },
        i4: {
            type: "type",
            info: "Convert to int32, pushing int32 on stack (0x69)"
        },
        i8: {
            type: "type",
            info: "Convert to int64, pushing int64 on stack (0x6A)"
        },
        ovf: {
            i: {
                type: "type",
                info: "Convert to a native int (on the stack as native int) and throw an exception on overflow (0xD4)",
                un: {
                    info: "Convert unsigned to a native int (on the stack as native int) and throw an exception on overflow (0x8A)"
                }
            },
            i1: {
                type: "type",
                info: "Convert to an int8 (on the stack as int32) and throw an exception on overflow (0xB3)",
                un: {
                    info: "Convert unsigned to an int8 (on the stack as int32) and throw an exception on overflow (0x82)"
                }
            },
            i2: {
                type: "type",
                info: "Convert to an int16 (on the stack as int32) and throw an exception on overflow (0xB5)",
                un: {
                    info: "Convert unsigned to an int16 (on the stack as int32) and throw an exception on overflow (0x83)"
                }
            },
            i4: {
                type: "type",
                info: "Convert to an int32 (on the stack as int32) and throw an exception on overflow (0xB7)",
                un: {
                    info: "Convert unsigned to an int32 (on the stack as int32) and throw an exception on overflow (0x84)"
                }
            },
            i8: {
                type: "type",
                info: "Convert to an int64 (on the stack as int64) and throw an exception on overflow (0xB9)",
                un: {
                    info: "Convert unsigned to an int64 (on the stack as int64) and throw an exception on overflow (0x85)"
                }
            },
            u: {
                type: "type",
                info: "Convert to a native unsigned int (on the stack as native int) and throw an exception on overflow (0xD5)",
                un: {
                    info: "Convert unsigned to a native unsigned int (on the stack as native int) and throw an exception on overflow (0x8B)"
                }
            },
            u1: {
                type: "type",
                info: "Convert to an unsigned int8 (on the stack as int32) and throw an exception on overflow (0xB4)",
                un: {
                    info: "Convert unsigned to an unsigned int8 (on the stack as int32) and throw an exception on overflow (0x86)"
                }
            },
            u2: {
                type: "type",
                info: "Convert to an unsigned int16 (on the stack as int32) and throw an exception on overflow (0xB6)",
                un: {
                    info: "Convert unsigned to an unsigned int16 (on the stack as int32) and throw an exception on overflow (0x87)"
                }
            },
            u4: {
                type: "type",
                info: "Convert to an unsigned int32 (on the stack as int32) and throw an exception on overflow (0xB8)",
                un: {
                    info: "Convert unsigned to an unsigned int32 (on the stack as int32) and throw an exception on overflow (0x88)"
                }
            },
            u8: {
                type: "type",
                info: "Convert to an unsigned int64 (on the stack as int64) and throw an exception on overflow (0xBA)",
                un: {
                    info: "Convert unsigned to an unsigned int64 (on the stack as int64) and throw an exception on overflow (0x89)"
                }
            }
        },
        r: {
            type: "type",
            un: {
                info: "Convert unsigned integer to floating-point, pushing F on stack (0x76)"
            }
        },
        r4: {
            type: "type",
            info: "Convert to float32, pushing F on stack (0x6B)"
        },
        r8: {
            type: "type",
            info: "Convert to float64, pushing F on stack (0x6C)"
        },
        u: {
            type: "type",
            info: "Convert to native unsigned int, pushing native int on stack (0xE0)"
        },
        u1: {
            type: "type",
            info: "Convert to unsigned int8, pushing int32 on stack (0xD2)"
        },
        u2: {
            type: "type",
            info: "Convert to unsigned int16, pushing int32 on stack (0xD1)"
        },
        u4: {
            type: "type",
            info: "Convert to unsigned int32, pushing int32 on stack (0x6D)"
        },
        u8: {
            type: "type",
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
            type: "variable",
            info: "Load argument 0 onto the stack (0x02)"
        },
        '1': {
            type: "variable",
            info: "Load argument 1 onto the stack (0x03)"
        },
        '2': {
            type: "variable",
            info: "Load argument 2 onto the stack (0x4)"
        },
        '3': {
            type: "variable",
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
            type: "type",
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
            type: "type",
            info: "Push num of type int64 onto the stack as int64 (0x21 <int64>)"
        },
        r4: {
            type: "type",
            info: "Push num of type float32 onto the stack as F (0x22 <float32>)"
        },
        r8: {
            type: "type",
            info: "Push num of type float64 onto the stack as F (0x23 <float64>)"
        }
    },
    ldelem: {
        info: "Load the element at index onto the top of the stack (0xA3 <T>)",
        i: {
            type: "type",
            info: "Load the element with type native int at index onto the top of the stack as a native int (0x97)"
        },
        i1: {
            type: "type",
            info: "Load the element with type int8 at index onto the top of the stack as an int32 (0x90)"
        },
        i2: {
            type: "type",
            info: "Load the element with type int16 at index onto the top of the stack as an int32 (0x92)"
        },
        i4: {
            type: "type",
            info: "Load the element with type int32 at index onto the top of the stack as an int32 (0x94)"
        },
        i8: {
            type: "type",
            info: "Load the element with type int64 at index onto the top of the stack as an int64 (0x96)"
        },
        r4: {
            type: "type",
            info: "Load the element with type float32 at index onto the top of the stack as an F (0x98)"
        },
        r8: {
            type: "type",
            info: "Load the element with type float64 at index onto the top of the stack as an F (0x99)"
        },
        ref: {
            type: "type",
            info: "Load the element at index onto the top of the stack as an O. The type of the O is the same as the element type of the array pushed on the CIL stack (0x9A)"
        },
        u1: {
            type: "type",
            info: "Load the element with type unsigned int8 at index onto the top of the stack as an int32 (0x91)"
        },
        u2: {
            type: "type",
            info: "Load the element with type unsigned int16 at index onto the top of the stack as an int32 (0x93)"
        },
        u4: {
            type: "type",
            info: "Load the element with type unsigned int32 at index onto the top of the stack as an int32 (0x95)"
        },
        u8: {
            type: "type",
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
            type: "type",
            info: "Indirect load value of type native int as native int on the stack (0x4D)"
        },
        i1: {
            type: "type",
            info: "Indirect load value of type int8 as int32 on the stack (0x46)"
        },
        i2: {
            type: "type",
            info: "Indirect load value of type int16 as int32 on the stack (0x48)"
        },
        i4: {
            type: "type",
            info: "Indirect load value of type int32 as int32 on the stack (0x4A)"
        },
        i8: {
            type: "type",
            info: "Indirect load value of type int64 as int64 on the stack (0x4C)"
        },
        r4: {
            type: "type",
            info: "Indirect load value of type float32 as F on the stack (0x4E)"
        },
        r8: {
            type: "type",
            info: "Indirect load value of type float64 as F on the stack (0x4F)"
        },
        ref: {
            type: "type",
            info: "Indirect load value of type object ref as O on the stack (0x50)"
        },
        u1: {
            type: "type",
            info: "Indirect load value of type unsigned int8 as int32 on the stack (0x47)"
        },
        u2: {
            type: "type",
            info: "Indirect load value of type unsigned int16 as int32 on the stack (0x49)"
        },
        u4: {
            type: "type",
            info: "Indirect load value of type unsigned int32 as int32 on the stack (0x4B)"
        },
        u8: {
            type: "type",
            info: "Indirect load value of type unsigned int64 as int64 on the stack (alias for ldind.i8) (0x4C)"
        }
    },
    ldlen: {
        info: "Push the length (of type native unsigned int) of array on the stack (0x8E)"
    },
    ldloc: {
        info: "Load local variable of index indx onto stack (0xFE 0x0C <uint16>)",
        '0': {
            type: "variable",
            info: "Load local variable 0 onto stack (0x06)"
        },
        '1': {
            type: "variable",
            info: "Load local variable 1 onto stack (0x7)"
        },
        '2': {
            type: "variable",
            info: "Load local variable 2 onto stack (0x8)"
        },
        '3': {
            type: "variable",
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
            type: "type",
            info: "Replace array element at index with the i value on the stack (0x9B)"
        },
        i1: {
            type: "type",
            info: "Replace array element at index with the int8 value on the stack (0x9C)"
        },
        i2: {
            type: "type",
            info: "Replace array element at index with the int16 value on the stack (0x9D)"
        },
        i4: {
            type: "type",
            info: "Replace array element at index with the int32 value on the stack (0x9E)"
        },
        i8: {
            type: "type",
            info: "Replace array element at index with the int64 value on the stack (0x9F)"
        },
        r4: {
            type: "type",
            info: "Replace array element at index with the float32 value on the stack (0xA0)"
        },
        r8: {
            type: "type",
            info: "Replace array element at index with the float64 value on the stack (0xA1)"
        },
        ref: {
            type: "type",
            info: "Replace array element at index with the ref value on the stack (0xA2)"
        }
    },
    stfld: {
        info: "Replace the value of field of the object obj with value (0x7D <T>)"
    },
    stind: {
        i: {
            type: "type",
            info: "Store value of type native int into memory at address (0xDF)"
        },
        i1: {
            type: "type",
            info: "Store value of type int8 into memory at address (0x52)"
        },
        i2: {
            type: "type",
            info: "Store value of type int16 into memory at address (0x53)"
        },
        i4: {
            type: "type",
            info: "Store value of type int32 into memory at address (0x54)"
        },
        i8: {
            type: "type",
            info: "Store value of type int64 into memory at address (0x55)"
        },
        r4: {
            type: "type",
            info: "Store value of type float32 into memory at address (0x56)"
        },
        r8: {
            type: "type",
            info: "Store value of type float64 into memory at address (0x57)"
        },
        ref: {
            type: "type",
            info: "Store value of type object ref (type O) into memory at address (0x51)"
        }
    },
    stloc: {
        info: "Pop a value from stack into local variable index (0xFE 0x0E <uint16>)",
        '0': {
            type: "variable",
            info: "Pop a value from stack into local variable 0 (0x0A)"
        },
        '1': {
            type: "variable",
            info: "Pop a value from stack into local variable 1 (0x0B)"
        },
        '2': {
            type: "variable",
            info: "Pop a value from stack into local variable 2 (0x0C)"
        },
        '3': {
            type: "variable",
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
};

export default {
    "add": opcodes.add.info,
    "add.ovf": opcodes.add.ovf.info,
    "add.ovf.un": opcodes.add.ovf.un.info,
    "and": opcodes.and.info,
    "arglist": opcodes.arglist.info,
    "beq": opcodes.beq.info,
    "beq.s": opcodes.beq.s.info,
    "bge": opcodes.bge.info,
    "bge.s": opcodes.bge.s.info,
    "bge.un": opcodes.bge.un.info,
    "bge.un.s": opcodes.bge.un.s.info,
    "bgt": opcodes.bgt.info,
    "bgt.s": opcodes.bgt.s.info,
    "bgt.un": opcodes.bgt.un.info,
    "bgt.un.s": opcodes.bgt.un.s.info,
    "ble": opcodes.ble.info,
    "ble.s": opcodes.ble.s.info,
    "ble.un": opcodes.ble.un.info,
    "ble.un.s": opcodes.ble.un.s.info,
    "blt": opcodes.blt.info,
    "blt.s": opcodes.blt.s.info,
    "blt.un": opcodes.blt.un.info,
    "blt.un.s": opcodes.blt.un.s.info,
    "bne.un": opcodes.bne.un.info,
    "bne.un.s": opcodes.bne.un.s.info,
    "box": opcodes.box.info,
    "br": opcodes.br.info,
    "br.s": opcodes.br.s.info,
    "break": opcodes.break.info,
    "brfalse": opcodes.brfalse.info,
    "brfalse.s": opcodes.brfalse.s.info,
    "brinst": opcodes.brinst.info,
    "brinst.s": opcodes.brinst.s.info,
    "brnull": opcodes.brnull.info,
    "brnull.s": opcodes.brnull.s.info,
    "brtrue": opcodes.brtrue.info,
    "brtrue.s": opcodes.brtrue.s.info,
    "brzero": opcodes.brzero.info,
    "brzero.s": opcodes.brzero.s.info,
    "call": opcodes.call.info,
    "callvirt": opcodes.callvirt.info,
    "castclass": opcodes.castclass.info,
    "ceq": opcodes.ceq.info,
    "cgt": opcodes.cgt.info,
    "cgt.un": opcodes.cgt.un.info,
    "ckfinite": opcodes.ckfinite.info,
    "clt": opcodes.clt.info,
    "clt.un": opcodes.clt.un.info,
    "constrained": opcodes.constrained.info,
    "conv.i": opcodes.conv.i.info,
    "conv.i1": opcodes.conv.i1.info,
    "conv.i2": opcodes.conv.i2.info,
    "conv.i4": opcodes.conv.i4.info,
    "conv.i8": opcodes.conv.i8.info,
    "conv.ovf.i": opcodes.conv.ovf.i.info,
    "conv.ovf.i.un": opcodes.conv.ovf.i.un.info,
    "conv.ovf.i1": opcodes.conv.ovf.i1.info,
    "conv.ovf.i1.un": opcodes.conv.ovf.i1.un.info,
    "conv.ovf.i2": opcodes.conv.ovf.i2.info,
    "conv.ovf.i2.un": opcodes.conv.ovf.i2.un.info,
    "conv.ovf.i4": opcodes.conv.ovf.i4.info,
    "conv.ovf.i4.un": opcodes.conv.ovf.i4.un.info,
    "conv.ovf.i8": opcodes.conv.ovf.i8.info,
    "conv.ovf.i8.un": opcodes.conv.ovf.i8.un.info,
    "conv.ovf.u": opcodes.conv.ovf.u.info,
    "conv.ovf.u.un": opcodes.conv.ovf.u.un.info,
    "conv.ovf.u1": opcodes.conv.ovf.u1.info,
    "conv.ovf.u1.un": opcodes.conv.ovf.u1.un.info,
    "conv.ovf.u2": opcodes.conv.ovf.u2.info,
    "conv.ovf.u2.un": opcodes.conv.ovf.u2.un.info,
    "conv.ovf.u4": opcodes.conv.ovf.u4.info,
    "conv.ovf.u4.un": opcodes.conv.ovf.u4.un.info,
    "conv.ovf.u8": opcodes.conv.ovf.u8.info,
    "conv.ovf.u8.un": opcodes.conv.ovf.u8.un.info,
    "conv.r.un": opcodes.conv.r.un.info,
    "conv.r4": opcodes.conv.r4.info,
    "conv.r8": opcodes.conv.r8.info,
    "conv.u": opcodes.conv.u.info,
    "conv.u1": opcodes.conv.u1.info,
    "conv.u2": opcodes.conv.u2.info,
    "conv.u4": opcodes.conv.u4.info,
    "conv.u8": opcodes.conv.u8.info,
    "cpblk": opcodes.cpblk.info,
    "cpobj": opcodes.cpobj.info,
    "div": opcodes.div.info,
    "div.un": opcodes.div.un.info,
    "dup": opcodes.dup.info,
    "endfault": opcodes.endfault.info,
    "endfilter": opcodes.endfilter.info,
    "endfinally": opcodes.endfinally.info,
    "initblk": opcodes.initblk.info,
    "initobj": opcodes.initobj.info,
    "isinst": opcodes.isinst.info,
    "jmp": opcodes.jmp.info,
    "ldarg": opcodes.ldarg.info,
    "ldarg.0": opcodes.ldarg['0'].info,
    "ldarg.1": opcodes.ldarg['1'].info,
    "ldarg.2": opcodes.ldarg['2'].info,
    "ldarg.3": opcodes.ldarg['3'].info,
    "ldarg.s": opcodes.ldarg.s.info,
    "ldarga": opcodes.ldarga.info,
    "ldarga.s": opcodes.ldarga.s.info,
    "ldc.i4": opcodes.ldc.i4.info,
    "ldc.i4.0": opcodes.ldc.i4['0'].info,
    "ldc.i4.1": opcodes.ldc.i4['1'].info,
    "ldc.i4.2": opcodes.ldc.i4['2'].info,
    "ldc.i4.3": opcodes.ldc.i4['3'].info,
    "ldc.i4.4": opcodes.ldc.i4['4'].info,
    "ldc.i4.5": opcodes.ldc.i4['5'].info,
    "ldc.i4.6": opcodes.ldc.i4['6'].info,
    "ldc.i4.7": opcodes.ldc.i4['7'].info,
    "ldc.i4.8": opcodes.ldc.i4['8'].info,
    "ldc.i4.m1": opcodes.ldc.i4.m1.info,
    "ldc.i4.M1": opcodes.ldc.i4.M1.info,
    "ldc.i4.s": opcodes.ldc.i4.s.info,
    "ldc.i8": opcodes.ldc.i8.info,
    "ldc.r4 ": opcodes.ldc.r4.info,
    "ldc.r8": opcodes.ldc.r8.info,
    "ldelem": opcodes.ldelem.info,
    "ldelem.i": opcodes.ldelem.i.info,
    "ldelem.i1": opcodes.ldelem.i1.info,
    "ldelem.i2": opcodes.ldelem.i2.info,
    "ldelem.i4": opcodes.ldelem.i4.info,
    "ldelem.i8": opcodes.ldelem.i8.info,
    "ldelem.r4": opcodes.ldelem.r4.info,
    "ldelem.r8": opcodes.ldelem.r8.info,
    "ldelem.ref": opcodes.ldelem.ref.info,
    "ldelem.u1": opcodes.ldelem.u1.info,
    "ldelem.u2": opcodes.ldelem.u2.info,
    "ldelem.u4": opcodes.ldelem.u4.info,
    "ldelem.u8": opcodes.ldelem.u8.info,
    "ldelema": opcodes.ldelema.info,
    "ldfld": opcodes.ldfld.info,
    "ldflda": opcodes.ldflda.info,
    "ldftn": opcodes.ldftn.info,
    "ldind.i": opcodes.ldind.i.info,
    "ldind.i1": opcodes.ldind.i1.info,
    "ldind.i2": opcodes.ldind.i2.info,
    "ldind.i4": opcodes.ldind.i4.info,
    "ldind.i8": opcodes.ldind.i8.info,
    "ldind.r4": opcodes.ldind.r4.info,
    "ldind.r8": opcodes.ldind.r8.info,
    "ldind.ref": opcodes.ldind.ref.info,
    "ldind.u1": opcodes.ldind.u1.info,
    "ldind.u2": opcodes.ldind.u2.info,
    "ldind.u4": opcodes.ldind.u4.info,
    "ldind.u8": opcodes.ldind.u8.info,
    "ldlen": opcodes.ldlen.info,
    "ldloc": opcodes.ldloc.info,
    "ldloc.0": opcodes.ldloc['0'].info,
    "ldloc.1": opcodes.ldloc['1'].info,
    "ldloc.2": opcodes.ldloc['2'].info,
    "ldloc.3": opcodes.ldloc['3'].info,
    "ldloc.s": opcodes.ldloc.s.info,
    "ldloca": opcodes.ldloca.info,
    "ldloca.s": opcodes.ldloca.s.info,
    "ldnull": opcodes.ldnull.info,
    "ldobj": opcodes.ldobj.info,
    "ldsfld": opcodes.ldsfld.info,
    "ldsflda": opcodes.ldsflda.info,
    "ldstr": opcodes.ldstr.info,
    "ldtoken": opcodes.ldtoken.info,
    "ldvirtftn": opcodes.ldvirtftn.info,
    "leave": opcodes.leave.info,
    "leave.s": opcodes.leave.s.info,
    "localloc": opcodes.localloc.info,
    "mkrefany": opcodes.mkrefany.info,
    "mul": opcodes.mul.info,
    "mul.ovf": opcodes.mul.ovf.info,
    "mul.ovf.un": opcodes.mul.ovf.un.info,
    "neg": opcodes.neg.info,
    "newarr": opcodes.newarr.info,
    "newobj": opcodes.newobj.info,
    "no": opcodes.no.info,
    "nop": opcodes.nop.info,
    "not": opcodes.not.info,
    "or": opcodes.or.info,
    "pop": opcodes.pop.info,
    "readonly": opcodes.readonly.info,
    "refanytype": opcodes.refanytype.info,
    "refanyval": opcodes.refanyval.info,
    "rem": opcodes.rem.info,
    "rem.un": opcodes.rem.un.info,
    "ret": opcodes.ret.info,
    "rethrow": opcodes.rethrow.info,
    "shl": opcodes.shl.info,
    "shr": opcodes.shr.info,
    "shr.un": opcodes.shr.un.info,
    "sizeof": opcodes.sizeof.info,
    "starg": opcodes.starg.info,
    "starg.s": opcodes.starg.s.info,
    "stelem": opcodes.stelem.info,
    "stelem.i": opcodes.stelem.i.info,
    "stelem.i1": opcodes.stelem.i1.info,
    "stelem.i2": opcodes.stelem.i2.info,
    "stelem.i4": opcodes.stelem.i4.info,
    "stelem.i8": opcodes.stelem.i8.info,
    "stelem.r4": opcodes.stelem.r4.info,
    "stelem.r8": opcodes.stelem.r8.info,
    "stelem.ref": opcodes.stelem.ref.info,
    "stfld": opcodes.stfld.info,
    "stind.i": opcodes.stind.i.info,
    "stind.i1": opcodes.stind.i1.info,
    "stind.i2": opcodes.stind.i2.info,
    "stind.i4": opcodes.stind.i4.info,
    "stind.i8": opcodes.stind.i8.info,
    "stind.r4": opcodes.stind.r4.info,
    "stind.r8": opcodes.stind.r8.info,
    "stind.ref": opcodes.stind.ref.info,
    "stloc": opcodes.stloc.info,
    "stloc.0": opcodes.stloc['0'].info,
    "stloc.1": opcodes.stloc['1'].info,
    "stloc.2": opcodes.stloc['2'].info,
    "stloc.3": opcodes.stloc['3'].info,
    "stloc.s": opcodes.stloc.s.info,
    "stobj": opcodes.stobj.info,
    "stsfld": opcodes.stsfld.info,
    "sub": opcodes.sub.info,
    "sub.ovf": opcodes.sub.ovf.info,
    "sub.ovf.un": opcodes.sub.ovf.un.info,
    "switch": opcodes.switch.info,
    "tail": opcodes.tail.info,
    "throw": opcodes.throw.info,
    "unaligned": opcodes.unaligned.info,
    "unbox": opcodes.unbox.info,
    "unbox.any": opcodes.unbox.any.info,
    "volatile": opcodes.volatile.info,
    "xor": opcodes.xor.info
}
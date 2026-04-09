export const opcodes = {
    add: {
        desc: "Add two values, returning a new value (0x58)",
        ovf: {
            desc: "Add signed integer values with overflow check (0xD6)",
            un: {
                desc: "Add unsigned integer values with overflow check (0xD7)"
            }
        }
    },
    and: {
        desc: "Bitwise AND of two integral values, returns an integral value (0x5F)"
    },
    arglist: {
        desc: "Return argument list handle for the current method (0xFE 0x00)"
    },
    beq: {
        desc: "Branch to target if equal (0x3B <int32>)",
        s: {
            desc: "Branch to target if equal, short form (0x2E <int8>)"
        }
    },
    bge: {
        desc: "Branch to target if greater than or equal to (0x3C <int32>)",
        s: {
            desc: "Branch to target if greater than or equal to, short form (0x2F <int8>)"
        },
        un: {
            desc: "Branch to target if greater than or equal to (unsigned or unordered) (0x41 <int32>)",
            s: {
                desc: "Branch to target if greater than or equal to (unsigned or unordered), short form (0x34 <int8>)"
            }
        }
    },
    bgt: {
        desc: "Branch to target if greater than (0x3D <int32>)",
        s: {
            desc: "Branch to target if greater than, short form (0x30 <int8>)"
        },
        un: {
            desc: "Branch to target if greater than (unsigned or unordered) (0x42 <int32>)",
            s: {
                desc: "Branch to target if greater than (unsigned or unordered), short form (0x35 <int8>)"
            }
        }
    },
    ble: {
        desc: "Branch to target if less than or equal to (0x3E <int32>)",
        s: {
            desc: "Branch to target if less than or equal to, short form (0x31 <int8>)"
        },
        un: {
            desc: "Branch to target if less than or equal to (unsigned or unordered) (0x43 <int32>)",
            s: {
                desc: "Branch to target if less than or equal to (unsigned or unordered), short form (0x36 <int8>)"
            }
        }
    },
    blt: {
        desc: "Branch to target if less than (0x3F <int32>)",
        s: {
            desc: "Branch to target if less than, short form (0x32 <int8>)"
        },
        un: {
            desc: "Branch to target if less than (unsigned or unordered) (0x44 <int32>)",
            s: {
                desc: "Branch to target if less than (unsigned or unordered), short form (0x37 <int8>)"
            }
        }
    },
    bne: {
        un: {
            desc: "Branch to target if unequal or unordered (0x40 <int32>)",
            s: {
                desc: "Branch to target if unequal or unordered, short form (0x33 <int8>)"
            }
        }
    },
    box: {
        desc: "Convert a boxable value to its boxed form (0x8B <T>)"
    },
    br: {
        desc: "Branch to target (0x38 <int32>)",
        s: {
            desc: "Branch to target, short form (0x2B <int8>)"
        }
    },
    break: {
        desc: "Inform a debugger that a breakpoint has been reached (0x01)"
    },
    brfalse: {
        desc: "Branch to target if value is zero (false) (0x39 <int32>)",
        s: {
            desc: "Branch to target if value is zero (false), short form (0x2C <int8>)"
        }
    },
    brinst: {
        desc: "Branch to target if value is a non-null object reference (alias for brtrue) (0x3A <int32>)",
        s: {
            desc: "Branch to target if value is a non-null object reference, short form (alias for brtrue.s) (0x2D <int8>)"
        }
    },
    brnull: {
        desc: "Branch to target if value is null (alias for brfalse) (0x39 <int32>)",
        s: {
            desc: "Branch to target if value is null (alias for brfalse.s), short form (0x2C <int8>)"
        }
    },
    brtrue: {
        desc: "Branch to target if value is non-zero (true) (0x3A <int32>)",
        s: {
            desc: "Branch to target if value is non-zero (true), short form (0x2D <int8>)"
        }
    },
    brzero: {
        desc: "Branch to target if value is zero (alias for brfalse) (0x39 <int32>)",
        s: {
            desc: "Branch to target if value is zero (alias for brfalse.s), short form (0x2C <int8>)"
        }
    },
    call: {
        desc: "Call method indicated on the stack with arguments (0x28 <T>)"
    },
    callvirt: {
        desc: "Call a late-bound method on an object (0x6F <T>)"
    },
    castclass: {
        desc: "Cast obj to class (0x74 <T>)"
    },
    ceq: {
        desc: "Push 1 (of type int32) if value1 equals value2, else push 0 (0xFE 0x01)"
    },
    cgt: {
        desc: "Push 1 (of type int32) if value1 > value2, else push 0 (0xFE 0x02)",
        un: {
            desc: "Push 1 (of type int32) if value1 > value2, unsigned or unordered, else push 0 (0xFE 0x03)"
        }
    },
    ckfinite: {
        desc: "Throw ArithmeticException if value is not a finite number (0xC3)"
    },
    clt: {
        desc: "Push 1 (of type int32) if value1 < value2, else push 0 (0xFE 0x04)",
        un: {
            desc: "Push 1 (of type int32) if value1 < value2, unsigned or unordered, else push 0 (0xFE 0x05)"
        }
    },
    constrained: {
        desc: "Call a virtual method on a type constrained to be type T (0xFE 0x16 <T>)"
    },
    conv: {
        i: {
            desc: "Convert to native int, pushing native int on stack (0xD3)"
        },
        i1: {
            desc: "Convert to int8, pushing int32 on stack (0x67)"
        },
        i2: {
            desc: "Convert to int16, pushing int32 on stack (0x68)"
        },
        i4: {
            desc: "Convert to int32, pushing int32 on stack (0x69)"
        },
        i8: {
            desc: "Convert to int64, pushing int64 on stack (0x6A)"
        },
        ovf: {
            i: {
                desc: "Convert to a native int (on the stack as native int) and throw an exception on overflow (0xD4)",
                un: {
                    desc: "Convert unsigned to a native int (on the stack as native int) and throw an exception on overflow (0x8A)"
                }
            },
            i1: {
                desc: "Convert to an int8 (on the stack as int32) and throw an exception on overflow (0xB3)",
                un: {
                    desc: "Convert unsigned to an int8 (on the stack as int32) and throw an exception on overflow (0x82)"
                }
            },
            i2: {
                desc: "Convert to an int16 (on the stack as int32) and throw an exception on overflow (0xB5)",
                un: {
                    desc: "Convert unsigned to an int16 (on the stack as int32) and throw an exception on overflow (0x83)"
                }
            },
            i4: {
                desc: "Convert to an int32 (on the stack as int32) and throw an exception on overflow (0xB7)",
                un: {
                    desc: "Convert unsigned to an int32 (on the stack as int32) and throw an exception on overflow (0x84)"
                }
            },
            i8: {
                desc: "Convert to an int64 (on the stack as int64) and throw an exception on overflow (0xB9)",
                un: {
                    desc: "Convert unsigned to an int64 (on the stack as int64) and throw an exception on overflow (0x85)"
                }
            },
            u: {
                desc: "Convert to a native unsigned int (on the stack as native int) and throw an exception on overflow (0xD5)",
                un: {
                    desc: "Convert unsigned to a native unsigned int (on the stack as native int) and throw an exception on overflow (0x8B)"
                }
            },
            u1: {
                desc: "Convert to an unsigned int8 (on the stack as int32) and throw an exception on overflow (0xB4)",
                un: {
                    desc: "Convert unsigned to an unsigned int8 (on the stack as int32) and throw an exception on overflow (0x86)"
                }
            },
            u2: {
                desc: "Convert to an unsigned int16 (on the stack as int32) and throw an exception on overflow (0xB6)",
                un: {
                    desc: "Convert unsigned to an unsigned int16 (on the stack as int32) and throw an exception on overflow (0x87)"
                }
            },
            u4: {
                desc: "Convert to an unsigned int32 (on the stack as int32) and throw an exception on overflow (0xB8)",
                un: {
                    desc: "Convert unsigned to an unsigned int32 (on the stack as int32) and throw an exception on overflow (0x88)"
                }
            },
            u8: {
                desc: "Convert to an unsigned int64 (on the stack as int64) and throw an exception on overflow (0xBA)",
                un: {
                    desc: "Convert unsigned to an unsigned int64 (on the stack as int64) and throw an exception on overflow (0x89)"
                }
            }
        },
        r: {
            un: {
                desc: "Convert unsigned integer to floating-point, pushing F on stack (0x76)"
            }
        },
        r4: {
            desc: "Convert to float32, pushing F on stack (0x6B)"
        },
        r8: {
            desc: "Convert to float64, pushing F on stack (0x6C)"
        },
        u: {
            desc: "Convert to native unsigned int, pushing native int on stack (0xE0)"
        },
        u1: {
            desc: "Convert to unsigned int8, pushing int32 on stack (0xD2)"
        },
        u2: {
            desc: "Convert to unsigned int16, pushing int32 on stack (0xD1)"
        },
        u4: {
            desc: "Convert to unsigned int32, pushing int32 on stack (0x6D)"
        },
        u8: {
            desc: "Convert to unsigned int64, pushing int64 on stack (0x6E)"
        }
    },
    cpblk: {
        desc: "Copy data from memory to memory (0xFE 0x17)"
    },
    cpobj: {
        desc: "Copy a value type from src to dest (0x70 <T>)"
    },
    div: {
        desc: "Divide two values to return a quotient or floating-point result (0x5B)",
        un: {
            desc: "Divide two values, unsigned, returning a quotient (0x5C)"
        }
    },
    dup: {
        desc: "Duplicate the value on the top of the stack (0x25)"
    },
    endfault: {
        desc: "End fault clause of an exception block (alias for endfilter) (0xFE 0x11)"
    },
    endfilter: {
        desc: "End an exception handling filter clause (0xFE 0x11)"
    },
    endfinally: {
        desc: "End finally clause of an exception block (0xDC)"
    },
    initblk: {
        desc: "Set all bytes in a block of memory to a given byte value (0xFE 0x18)"
    },
    initobj: {
        desc: "Initialize the value at address dest (0xFE 0x15 <T>)"
    },
    isinst: {
        desc: "Test if obj is an instance of class, returning null or an instance of that class or interface (0x75 <T>)"
    },
    jmp: {
        desc: "Exit current method and jump to the specified method (0x27 <T>)"
    },
    ldarg: {
        desc: "Load argument numbered num onto the stack (0xFE 0x09 <uint16>)",
        "0": {
            desc: "Load argument 0 onto the stack (0x02)"
        },
        "1": {
            desc: "Load argument 1 onto the stack (0x03)"
        },
        "2": {
            desc: "Load argument 2 onto the stack (0x4)"
        },
        "3": {
            desc: "Load argument 3 onto the stack (0x5)"
        },
        s: {
            desc: "Load argument numbered num onto the stack, short form (0x0E <uint8>)"
        }
    },
    ldarga: {
        desc: "Fetch the address of argument argNum (0xFE 0x0A <uint16>)",
        s: {
            desc: "Fetch the address of argument argNum, short form (0x0F <uint8>)"
        }
    },
    ldc: {
        i4: {
            desc: "Push num of type int32 onto the stack as int32 (0x20 <int32>)",
            "0": {
                desc: "Push 0 onto the stack as int32 (0x16)"
            },
            "1": {
                desc: "Push 1 onto the stack as int32 (0x17)"
            },
            "2": {
                desc: "Push 2 onto the stack as int32 (0x18)"
            },
            "3": {
                desc: "Push 3 onto the stack as int32 (0x19)"
            },
            "4": {
                desc: "Push 4 onto the stack as int32 (0x1A)"
            },
            "5": {
                desc: "Push 5 onto the stack as int32 (0x1B)"
            },
            "6": {
                desc: "Push 6 onto the stack as int32 (0x1C)"
            },
            "7": {
                desc: "Push 7 onto the stack as int32 (0x1D)"
            },
            "8": {
                desc: "Push 8 onto the stack as int32 (0x1E)"
            },
            m1: {
                desc: "Push -1 onto the stack as int32 (0x15)"
            },
            M1: {
                desc: "Push -1 of type int32 onto the stack as int32 (alias for ldc.i4.m1) (0x15)"
            },
            s: {
                desc: "Push num onto the stack as int32, short form (0x1F <int8>)"
            }
        },
        i8: {
            desc: "Push num of type int64 onto the stack as int64 (0x21 <int64>)"
        },
        r4: {
            desc: "Push num of type float32 onto the stack as F (0x22 <float32>)"
        },
        r8: {
            desc: "Push num of type float64 onto the stack as F (0x23 <float64>)"
        }
    },
    ldelem: {
        desc: "Load the element at index onto the top of the stack (0xA3 <T>)",
        i: {
            desc: "Load the element with type native int at index onto the top of the stack as a native int (0x97)"
        },
        i1: {
            desc: "Load the element with type int8 at index onto the top of the stack as an int32 (0x90)"
        },
        i2: {
            desc: "Load the element with type int16 at index onto the top of the stack as an int32 (0x92)"
        },
        i4: {
            desc: "Load the element with type int32 at index onto the top of the stack as an int32 (0x94)"
        },
        i8: {
            desc: "Load the element with type int64 at index onto the top of the stack as an int64 (0x96)"
        },
        r4: {
            desc: "Load the element with type float32 at index onto the top of the stack as an F (0x98)"
        },
        r8: {
            desc: "Load the element with type float64 at index onto the top of the stack as an F (0x99)"
        },
        ref: {
            desc: "Load the element at index onto the top of the stack as an O. The type of the O is the same as the element type of the array pushed on the CIL stack (0x9A)"
        },
        u1: {
            desc: "Load the element with type unsigned int8 at index onto the top of the stack as an int32 (0x91)"
        },
        u2: {
            desc: "Load the element with type unsigned int16 at index onto the top of the stack as an int32 (0x93)"
        },
        u4: {
            desc: "Load the element with type unsigned int32 at index onto the top of the stack as an int32 (0x95)"
        },
        u8: {
            desc: "Load the element with type unsigned int64 at index onto the top of the stack as an int64 (alias for ldelem.i8) (0x96)"
        }
    },
    ldelema: {
        desc: "Load the address of element at index onto the top of the stack (0x8F <T>)"
    },
    ldfld: {
        desc: "Push the value of field of object (or value type) obj, onto the stack (0x7B)"
    },
    ldflda: {
        desc: "Push the address of field of object obj on the stack (0x7C <T>)"
    },
    ldftn: {
        desc: "Push a pointer to a method referenced by method, on the stack (0xFE 0x06 <T>)"
    },
    ldind: {
        i: {
            desc: "Indirect load value of type native int as native int on the stack (0x4D)"
        },
        i1: {
            desc: "Indirect load value of type int8 as int32 on the stack (0x46)"
        },
        i2: {
            desc: "Indirect load value of type int16 as int32 on the stack (0x48)"
        },
        i4: {
            desc: "Indirect load value of type int32 as int32 on the stack (0x4A)"
        },
        i8: {
            desc: "Indirect load value of type int64 as int64 on the stack (0x4C)"
        },
        r4: {
            desc: "Indirect load value of type float32 as F on the stack (0x4E)"
        },
        r8: {
            desc: "Indirect load value of type float64 as F on the stack (0x4F)"
        },
        ref: {
            desc: "Indirect load value of type object ref as O on the stack (0x50)"
        },
        u1: {
            desc: "Indirect load value of type unsigned int8 as int32 on the stack (0x47)"
        },
        u2: {
            desc: "Indirect load value of type unsigned int16 as int32 on the stack (0x49)"
        },
        u4: {
            desc: "Indirect load value of type unsigned int32 as int32 on the stack (0x4B)"
        },
        u8: {
            desc: "Indirect load value of type unsigned int64 as int64 on the stack (alias for ldind.i8) (0x4C)"
        }
    },
    ldlen: {
        desc: "Push the length (of type native unsigned int) of array on the stack (0x8E)"
    },
    ldloc: {
        desc: "Load local variable of index indx onto stack (0xFE 0x0C <uint16>)",
        "0": {
            desc: "Load local variable 0 onto stack (0x06)"
        },
        "1": {
            desc: "Load local variable 1 onto stack (0x7)"
        },
        "2": {
            desc: "Load local variable 2 onto stack (0x8)"
        },
        "3": {
            desc: "Load local variable 3 onto stack (0x9)"
        },
        s: {
            desc: "Load local variable of index indx onto stack, short form (0x11 <uint8>)"
        }
    },
    ldloca: {
        desc: "Load address of local variable with index indx (0xFE 0x0D <uint16>)",
        s: {
            desc: "Load address of local variable with index indx, short form (0x12 <uint8>)"
        }
    },
    ldnull: {
        desc: "Push a null reference on the stack (0x14)"
    },
    ldobj: {
        desc: "Copy the value stored at address src to the stack (0x71 <T>)"
    },
    ldsfld: {
        desc: "Push the value of field on the stack (0x7E <T>)"
    },
    ldsflda: {
        desc: "Push the address of the static field, field, on the stack (0x7F <T>)"
    },
    ldstr: {
        desc: "Push a string object for the literal string (0x72)"
    },
    ldtoken: {
        desc: "Convert metadata token to its runtime representation (0xD0 <T>)"
    },
    ldvirtftn: {
        desc: "Push address of virtual method on the stack (0xFE 0x07 <T>)"
    },
    leave: {
        desc: "Exit a protected region of code (0xDD <int32>)",
        s: {
            desc: "Exit a protected region of code, short form (0xDE <int8>)"
        }
    },
    localloc: {
        desc: "Allocate space from the local memory pool (0xFE 0x0F)"
    },
    mkrefany: {
        desc: "Push a typed reference to ptr of type class onto the stack (0xC6 <T>)"
    },
    mul: {
        desc: "Multiply values (0x5A)",
        ovf: {
            desc: "Multiply signed integer values. Signed result shall fit in same size (0xD8)",
            un: {
                desc: "Multiply unsigned integer values. Unsigned result shall fit in same size (0xD9)"
            }
        }
    },
    neg: {
        desc: "Negate value (0x65)"
    },
    newarr: {
        desc: "Create a new array with elements of type etype (0x8D <T>)"
    },
    newobj: {
        desc: "Allocate an uninitialized object or value type and call ctor (0x73 <T>)"
    },
    no: {
        desc: "The specified fault check(s) normally performed as part of the execution of the subsequent instruction can/shall be skipped (0x??)"
    },
    nop: {
        desc: "Do nothing (No operation) (0x00)"
    },
    not: {
        desc: "Bitwise complement (logical not) (0x66)"
    },
    or: {
        desc: "Bitwise OR of two integer values, returns an integer (0x60)"
    },
    pop: {
        desc: "Pop value from the stack (0x26)"
    },
    readonly: {
        desc: "Specify that the subsequent array address operation performs no type check at runtime, and that it returns a controlled-mutability managed pointer (0xFE 1E)"
    },
    refanytype: {
        desc: "Push the type token stored in a typed reference (0xFE 0x1D)"
    },
    refanyval: {
        desc: "Push the address stored in a typed reference (0xC2 <T>)"
    },
    rem: {
        desc: "Remainder when dividing one value by another (0x5D)",
        un: {
            desc: "Remainder when dividing one unsigned value by another (0x5E)"
        }
    },
    ret: {
        desc: "Return from method, possibly with a value (0x2A)"
    },
    rethrow: {
        desc: "Rethrow the current exception (0xFE 0x1A)"
    },
    shl: {
        desc: "Shift an integer left (shifting in zeros), return an integer (0x62)"
    },
    shr: {
        desc: "Shift an integer right (shift in sign), return an integer (0x63)",
        un: {
            desc: "Shift an integer right (shift in zero), return an integer (0x64)"
        }
    },
    sizeof: {
        desc: "Push the size, in bytes, of a type as an unsigned int32 (0xFE 0x1C <T>)"
    },
    starg: {
        desc: "Store value to the argument numbered num (0xFE 0x0B <uint16>)",
        s: {
            desc: "Store value to the argument numbered num, short form (0x10 <uint8>)"
        }
    },
    stelem: {
        desc: "Replace array element at index with the value on the stack (0xA4 <T>)",
        i: {
            desc: "Replace array element at index with the i value on the stack (0x9B)"
        },
        i1: {
            desc: "Replace array element at index with the int8 value on the stack (0x9C)"
        },
        i2: {
            desc: "Replace array element at index with the int16 value on the stack (0x9D)"
        },
        i4: {
            desc: "Replace array element at index with the int32 value on the stack (0x9E)"
        },
        i8: {
            desc: "Replace array element at index with the int64 value on the stack (0x9F)"
        },
        r4: {
            desc: "Replace array element at index with the float32 value on the stack (0xA0)"
        },
        r8: {
            desc: "Replace array element at index with the float64 value on the stack (0xA1)"
        },
        ref: {
            desc: "Replace array element at index with the ref value on the stack (0xA2)"
        }
    },
    stfld: {
        desc: "Replace the value of field of the object obj with value (0x7D <T>)"
    },
    stind: {
        i: {
            desc: "Store value of type native int into memory at address (0xDF)"
        },
        i1: {
            desc: "Store value of type int8 into memory at address (0x52)"
        },
        i2: {
            desc: "Store value of type int16 into memory at address (0x53)"
        },
        i4: {
            desc: "Store value of type int32 into memory at address (0x54)"
        },
        i8: {
            desc: "Store value of type int64 into memory at address (0x55)"
        },
        r4: {
            desc: "Store value of type float32 into memory at address (0x56)"
        },
        r8: {
            desc: "Store value of type float64 into memory at address (0x57)"
        },
        ref: {
            desc: "Store value of type object ref (type O) into memory at address (0x51)"
        }
    },
    stloc: {
        desc: "Pop a value from stack into local variable index (0xFE 0x0E <uint16>)",
        "0": {
            desc: "Pop a value from stack into local variable 0 (0x0A)"
        },
        "1": {
            desc: "Pop a value from stack into local variable 1 (0x0B)"
        },
        "2": {
            desc: "Pop a value from stack into local variable 2 (0x0C)"
        },
        "3": {
            desc: "Pop a value from stack into local variable 3 (0x0D)"
        },
        s: {
            desc: "Pop a value from stack into local variable indx, short form (0x13 <uint8>)"
        }
    },
    stobj: {
        desc: "Store a value of type typeTok at an address (0x81 <T>)"
    },
    stsfld: {
        desc: "Replace the value of field with val (0x80 <T>)"
    },
    sub: {
        desc: "Subtract value2 from value1, returning a new value (0x59)",
        ovf: {
            desc: "Subtract native int from a native int. Signed result shall fit in same size (0xDA)",
            un: {
                desc: "Subtract native unsigned int from a native unsigned int. Unsigned result shall fit in same size (0xDB)"
            }
        }
    },
    switch: {
        desc: "Jump to one of n values (0x45 <uint32> <int32> ... <int32>)"
    },
    tail: {
        desc: "Subsequent call terminates current method (0xFE 0x14)"
    },
    throw: {
        desc: "Throw an exception (0x7A)"
    },
    unaligned: {
        desc: "Subsequent pointer instruction might be unaligned (0xFE 0x12)"
    },
    unbox: {
        desc: "Extract a value-type from obj, its boxed representation (0x79 <T>)",
        any: {
            desc: "Extract a value-type from obj, its boxed representation (0xA5 <T>)"
        }
    },
    volatile: {
        desc: "Subsequent pointer reference is volatile (0xFE 0x13)"
    },
    xor: {
        desc: "Bitwise XOR of integer values, returns an integer (0x61)"
    }
};

export default {
    "add": opcodes.add.desc,
    "add.ovf": opcodes.add.ovf.desc,
    "add.ovf.un": opcodes.add.ovf.un.desc,
    "and": opcodes.and.desc,
    "arglist": opcodes.arglist.desc,
    "beq": opcodes.beq.desc,
    "beq.s": opcodes.beq.s.desc,
    "bge": opcodes.bge.desc,
    "bge.s": opcodes.bge.s.desc,
    "bge.un": opcodes.bge.un.desc,
    "bge.un.s": opcodes.bge.un.s.desc,
    "bgt": opcodes.bgt.desc,
    "bgt.s": opcodes.bgt.s.desc,
    "bgt.un": opcodes.bgt.un.desc,
    "bgt.un.s": opcodes.bgt.un.s.desc,
    "ble": opcodes.ble.desc,
    "ble.s": opcodes.ble.s.desc,
    "ble.un": opcodes.ble.un.desc,
    "ble.un.s": opcodes.ble.un.s.desc,
    "blt": opcodes.blt.desc,
    "blt.s": opcodes.blt.s.desc,
    "blt.un": opcodes.blt.un.desc,
    "blt.un.s": opcodes.blt.un.s.desc,
    "bne.un": opcodes.bne.un.desc,
    "bne.un.s": opcodes.bne.un.s.desc,
    "box": opcodes.box.desc,
    "br": opcodes.br.desc,
    "br.s": opcodes.br.s.desc,
    "break": opcodes.break.desc,
    "brfalse": opcodes.brfalse.desc,
    "brfalse.s": opcodes.brfalse.s.desc,
    "brinst": opcodes.brinst.desc,
    "brinst.s": opcodes.brinst.s.desc,
    "brnull": opcodes.brnull.desc,
    "brnull.s": opcodes.brnull.s.desc,
    "brtrue": opcodes.brtrue.desc,
    "brtrue.s": opcodes.brtrue.s.desc,
    "brzero": opcodes.brzero.desc,
    "brzero.s": opcodes.brzero.s.desc,
    "call": opcodes.call.desc,
    "callvirt": opcodes.callvirt.desc,
    "castclass": opcodes.castclass.desc,
    "ceq": opcodes.ceq.desc,
    "cgt": opcodes.cgt.desc,
    "cgt.un": opcodes.cgt.un.desc,
    "ckfinite": opcodes.ckfinite.desc,
    "clt": opcodes.clt.desc,
    "clt.un": opcodes.clt.un.desc,
    "constrained": opcodes.constrained.desc,
    "conv.i": opcodes.conv.i.desc,
    "conv.i1": opcodes.conv.i1.desc,
    "conv.i2": opcodes.conv.i2.desc,
    "conv.i4": opcodes.conv.i4.desc,
    "conv.i8": opcodes.conv.i8.desc,
    "conv.ovf.i": opcodes.conv.ovf.i.desc,
    "conv.ovf.i.un": opcodes.conv.ovf.i.un.desc,
    "conv.ovf.i1": opcodes.conv.ovf.i1.desc,
    "conv.ovf.i1.un": opcodes.conv.ovf.i1.un.desc,
    "conv.ovf.i2": opcodes.conv.ovf.i2.desc,
    "conv.ovf.i2.un": opcodes.conv.ovf.i2.un.desc,
    "conv.ovf.i4": opcodes.conv.ovf.i4.desc,
    "conv.ovf.i4.un": opcodes.conv.ovf.i4.un.desc,
    "conv.ovf.i8": opcodes.conv.ovf.i8.desc,
    "conv.ovf.i8.un": opcodes.conv.ovf.i8.un.desc,
    "conv.ovf.u": opcodes.conv.ovf.u.desc,
    "conv.ovf.u.un": opcodes.conv.ovf.u.un.desc,
    "conv.ovf.u1": opcodes.conv.ovf.u1.desc,
    "conv.ovf.u1.un": opcodes.conv.ovf.u1.un.desc,
    "conv.ovf.u2": opcodes.conv.ovf.u2.desc,
    "conv.ovf.u2.un": opcodes.conv.ovf.u2.un.desc,
    "conv.ovf.u4": opcodes.conv.ovf.u4.desc,
    "conv.ovf.u4.un": opcodes.conv.ovf.u4.un.desc,
    "conv.ovf.u8": opcodes.conv.ovf.u8.desc,
    "conv.ovf.u8.un": opcodes.conv.ovf.u8.un.desc,
    "conv.r.un": opcodes.conv.r.un.desc,
    "conv.r4": opcodes.conv.r4.desc,
    "conv.r8": opcodes.conv.r8.desc,
    "conv.u": opcodes.conv.u.desc,
    "conv.u1": opcodes.conv.u1.desc,
    "conv.u2": opcodes.conv.u2.desc,
    "conv.u4": opcodes.conv.u4.desc,
    "conv.u8": opcodes.conv.u8.desc,
    "cpblk": opcodes.cpblk.desc,
    "cpobj": opcodes.cpobj.desc,
    "div": opcodes.div.desc,
    "div.un": opcodes.div.un.desc,
    "dup": opcodes.dup.desc,
    "endfault": opcodes.endfault.desc,
    "endfilter": opcodes.endfilter.desc,
    "endfinally": opcodes.endfinally.desc,
    "initblk": opcodes.initblk.desc,
    "initobj": opcodes.initobj.desc,
    "isinst": opcodes.isinst.desc,
    "jmp": opcodes.jmp.desc,
    "ldarg": opcodes.ldarg.desc,
    "ldarg.0": opcodes.ldarg['0'].desc,
    "ldarg.1": opcodes.ldarg['1'].desc,
    "ldarg.2": opcodes.ldarg['2'].desc,
    "ldarg.3": opcodes.ldarg['3'].desc,
    "ldarg.s": opcodes.ldarg.s.desc,
    "ldarga": opcodes.ldarga.desc,
    "ldarga.s": opcodes.ldarga.s.desc,
    "ldc.i4": opcodes.ldc.i4.desc,
    "ldc.i4.0": opcodes.ldc.i4['0'].desc,
    "ldc.i4.1": opcodes.ldc.i4['1'].desc,
    "ldc.i4.2": opcodes.ldc.i4['2'].desc,
    "ldc.i4.3": opcodes.ldc.i4['3'].desc,
    "ldc.i4.4": opcodes.ldc.i4['4'].desc,
    "ldc.i4.5": opcodes.ldc.i4['5'].desc,
    "ldc.i4.6": opcodes.ldc.i4['6'].desc,
    "ldc.i4.7": opcodes.ldc.i4['7'].desc,
    "ldc.i4.8": opcodes.ldc.i4['8'].desc,
    "ldc.i4.m1": opcodes.ldc.i4.m1.desc,
    "ldc.i4.M1": opcodes.ldc.i4.M1.desc,
    "ldc.i4.s": opcodes.ldc.i4.s.desc,
    "ldc.i8": opcodes.ldc.i8.desc,
    "ldc.r4 ": opcodes.ldc.r4.desc,
    "ldc.r8": opcodes.ldc.r8.desc,
    "ldelem": opcodes.ldelem.desc,
    "ldelem.i": opcodes.ldelem.i.desc,
    "ldelem.i1": opcodes.ldelem.i1.desc,
    "ldelem.i2": opcodes.ldelem.i2.desc,
    "ldelem.i4": opcodes.ldelem.i4.desc,
    "ldelem.i8": opcodes.ldelem.i8.desc,
    "ldelem.r4": opcodes.ldelem.r4.desc,
    "ldelem.r8": opcodes.ldelem.r8.desc,
    "ldelem.ref": opcodes.ldelem.ref.desc,
    "ldelem.u1": opcodes.ldelem.u1.desc,
    "ldelem.u2": opcodes.ldelem.u2.desc,
    "ldelem.u4": opcodes.ldelem.u4.desc,
    "ldelem.u8": opcodes.ldelem.u8.desc,
    "ldelema": opcodes.ldelema.desc,
    "ldfld": opcodes.ldfld.desc,
    "ldflda": opcodes.ldflda.desc,
    "ldftn": opcodes.ldftn.desc,
    "ldind.i": opcodes.ldind.i.desc,
    "ldind.i1": opcodes.ldind.i1.desc,
    "ldind.i2": opcodes.ldind.i2.desc,
    "ldind.i4": opcodes.ldind.i4.desc,
    "ldind.i8": opcodes.ldind.i8.desc,
    "ldind.r4": opcodes.ldind.r4.desc,
    "ldind.r8": opcodes.ldind.r8.desc,
    "ldind.ref": opcodes.ldind.ref.desc,
    "ldind.u1": opcodes.ldind.u1.desc,
    "ldind.u2": opcodes.ldind.u2.desc,
    "ldind.u4": opcodes.ldind.u4.desc,
    "ldind.u8": opcodes.ldind.u8.desc,
    "ldlen": opcodes.ldlen.desc,
    "ldloc": opcodes.ldloc.desc,
    "ldloc.0": opcodes.ldloc['0'].desc,
    "ldloc.1": opcodes.ldloc['1'].desc,
    "ldloc.2": opcodes.ldloc['2'].desc,
    "ldloc.3": opcodes.ldloc['3'].desc,
    "ldloc.s": opcodes.ldloc.s.desc,
    "ldloca": opcodes.ldloca.desc,
    "ldloca.s": opcodes.ldloca.s.desc,
    "ldnull": opcodes.ldnull.desc,
    "ldobj": opcodes.ldobj.desc,
    "ldsfld": opcodes.ldsfld.desc,
    "ldsflda": opcodes.ldsflda.desc,
    "ldstr": opcodes.ldstr.desc,
    "ldtoken": opcodes.ldtoken.desc,
    "ldvirtftn": opcodes.ldvirtftn.desc,
    "leave": opcodes.leave.desc,
    "leave.s": opcodes.leave.s.desc,
    "localloc": opcodes.localloc.desc,
    "mkrefany": opcodes.mkrefany.desc,
    "mul": opcodes.mul.desc,
    "mul.ovf": opcodes.mul.ovf.desc,
    "mul.ovf.un": opcodes.mul.ovf.un.desc,
    "neg": opcodes.neg.desc,
    "newarr": opcodes.newarr.desc,
    "newobj": opcodes.newobj.desc,
    "no": opcodes.no.desc,
    "nop": opcodes.nop.desc,
    "not": opcodes.not.desc,
    "or": opcodes.or.desc,
    "pop": opcodes.pop.desc,
    "readonly": opcodes.readonly.desc,
    "refanytype": opcodes.refanytype.desc,
    "refanyval": opcodes.refanyval.desc,
    "rem": opcodes.rem.desc,
    "rem.un": opcodes.rem.un.desc,
    "ret": opcodes.ret.desc,
    "rethrow": opcodes.rethrow.desc,
    "shl": opcodes.shl.desc,
    "shr": opcodes.shr.desc,
    "shr.un": opcodes.shr.un.desc,
    "sizeof": opcodes.sizeof.desc,
    "starg": opcodes.starg.desc,
    "starg.s": opcodes.starg.s.desc,
    "stelem": opcodes.stelem.desc,
    "stelem.i": opcodes.stelem.i.desc,
    "stelem.i1": opcodes.stelem.i1.desc,
    "stelem.i2": opcodes.stelem.i2.desc,
    "stelem.i4": opcodes.stelem.i4.desc,
    "stelem.i8": opcodes.stelem.i8.desc,
    "stelem.r4": opcodes.stelem.r4.desc,
    "stelem.r8": opcodes.stelem.r8.desc,
    "stelem.ref": opcodes.stelem.ref.desc,
    "stfld": opcodes.stfld.desc,
    "stind.i": opcodes.stind.i.desc,
    "stind.i1": opcodes.stind.i1.desc,
    "stind.i2": opcodes.stind.i2.desc,
    "stind.i4": opcodes.stind.i4.desc,
    "stind.i8": opcodes.stind.i8.desc,
    "stind.r4": opcodes.stind.r4.desc,
    "stind.r8": opcodes.stind.r8.desc,
    "stind.ref": opcodes.stind.ref.desc,
    "stloc": opcodes.stloc.desc,
    "stloc.0": opcodes.stloc['0'].desc,
    "stloc.1": opcodes.stloc['1'].desc,
    "stloc.2": opcodes.stloc['2'].desc,
    "stloc.3": opcodes.stloc['3'].desc,
    "stloc.s": opcodes.stloc.s.desc,
    "stobj": opcodes.stobj.desc,
    "stsfld": opcodes.stsfld.desc,
    "sub": opcodes.sub.desc,
    "sub.ovf": opcodes.sub.ovf.desc,
    "sub.ovf.un": opcodes.sub.ovf.un.desc,
    "switch": opcodes.switch.desc,
    "tail": opcodes.tail.desc,
    "throw": opcodes.throw.desc,
    "unaligned": opcodes.unaligned.desc,
    "unbox": opcodes.unbox.desc,
    "unbox.any": opcodes.unbox.any.desc,
    "volatile": opcodes.volatile.desc,
    "xor": opcodes.xor.desc
}
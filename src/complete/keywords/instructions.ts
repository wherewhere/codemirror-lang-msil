import { constant, type, variable } from "./store";

export const opcodes = {
    add: {
        info: {
            tooltip: "Add two values, returning a new value (0x58)"
        },
        ovf: {
            info: {
                tooltip: "Add signed integer values with overflow check (0xD6)"
            },
            un: {
                info: {
                    tooltip: "Add unsigned integer values with overflow check (0xD7)"
                }
            }
        }
    },
    and: {
        info: {
            tooltip: "Bitwise AND of two integral values, returns an integral value (0x5F)"
        }
    },
    arglist: {
        info: {
            tooltip: "Return argument list handle for the current method (0xFE 0x00)"
        }
    },
    beq: {
        info: {
            tooltip: "Branch to target if equal (0x3B <int32>)"
        },
        s: {
            info: {
                tooltip: "Branch to target if equal, short form (0x2E <int8>)"
            }
        }
    },
    bge: {
        info: {
            tooltip: "Branch to target if greater than or equal to (0x3C <int32>)"
        },
        s: {
            info: {
                tooltip: "Branch to target if greater than or equal to, short form (0x2F <int8>)"
            }
        },
        un: {
            info: {
                tooltip: "Branch to target if greater than or equal to (unsigned or unordered) (0x41 <int32>)"
            },
            s: {
                info: {
                    tooltip: "Branch to target if greater than or equal to (unsigned or unordered), short form (0x34 <int8>)"
                }
            }
        }
    },
    bgt: {
        info: {
            tooltip: "Branch to target if greater than (0x3D <int32>)"
        },
        s: {
            info: {
                tooltip: "Branch to target if greater than, short form (0x30 <int8>)"
            }
        },
        un: {
            info: {
                tooltip: "Branch to target if greater than (unsigned or unordered) (0x42 <int32>)"
            },
            s: {
                info: {
                    tooltip: "Branch to target if greater than (unsigned or unordered), short form (0x35 <int8>)"
                }
            }
        }
    },
    ble: {
        info: {
            tooltip: "Branch to target if less than or equal to (0x3E <int32>)"
        },
        s: {
            info: {
                tooltip: "Branch to target if less than or equal to, short form (0x31 <int8>)"
            }
        },
        un: {
            info: {
                tooltip: "Branch to target if less than or equal to (unsigned or unordered) (0x43 <int32>)"
            },
            s: {
                info: {
                    tooltip: "Branch to target if less than or equal to (unsigned or unordered), short form (0x36 <int8>)"
                }
            }
        }
    },
    blt: {
        info: {
            tooltip: "Branch to target if less than (0x3F <int32>)"
        },
        s: {
            info: {
                tooltip: "Branch to target if less than, short form (0x32 <int8>)"
            }
        },
        un: {
            info: {
                tooltip: "Branch to target if less than (unsigned or unordered) (0x44 <int32>)"
            },
            s: {
                info: {
                    tooltip: "Branch to target if less than (unsigned or unordered), short form (0x37 <int8>)"
                }
            }
        }
    },
    bne: {
        un: {
            info: {
                tooltip: "Branch to target if unequal or unordered (0x40 <int32>)"
            },
            s: {
                info: {
                    tooltip: "Branch to target if unequal or unordered, short form (0x33 <int8>)"
                }
            }
        }
    },
    box: {
        info: {
            tooltip: "Convert a boxable value to its boxed form (0x8B <T>)"
        }
    },
    br: {
        info: {
            tooltip: "Branch to target (0x38 <int32>)"
        },
        s: {
            info: {
                tooltip: "Branch to target, short form (0x2B <int8>)"
            }
        }
    },
    break: {
        info: {
            tooltip: "descrm a debugger that a breakpoint has been reached (0x01)"
        }
    },
    brfalse: {
        info: {
            tooltip: "Branch to target if value is zero (false) (0x39 <int32>)"
        },
        s: {
            info: {
                tooltip: "Branch to target if value is zero (false), short form (0x2C <int8>)"
            }
        }
    },
    brinst: {
        info: {
            tooltip: "Branch to target if value is a non-null object reference (alias for brtrue) (0x3A <int32>)"
        },
        s: {
            info: {
                tooltip: "Branch to target if value is a non-null object reference, short form (alias for brtrue.s) (0x2D <int8>)"
            }
        }
    },
    brnull: {
        info: {
            tooltip: "Branch to target if value is null (alias for brfalse) (0x39 <int32>)"
        },
        s: {
            info: {
                tooltip: "Branch to target if value is null (alias for brfalse.s), short form (0x2C <int8>)"
            }
        }
    },
    brtrue: {
        info: {
            tooltip: "Branch to target if value is non-zero (true) (0x3A <int32>)"
        },
        s: {
            info: {
                tooltip: "Branch to target if value is non-zero (true), short form (0x2D <int8>)"
            }
        }
    },
    brzero: {
        info: {
            tooltip: "Branch to target if value is zero (alias for brfalse) (0x39 <int32>)"
        },
        s: {
            info: {
                tooltip: "Branch to target if value is zero (alias for brfalse.s), short form (0x2C <int8>)"
            }
        }
    },
    call: {
        info: {
            tooltip: "Call method described by method (0x28 <T>)"
        }
    },
    calli: {
        info: {
            tooltip: "Call method indicated on the stack with arguments described by callsitedescr (0x29 <T>)"
        }
    },
    callvirt: {
        info: {
            tooltip: "Call a method associated with an object (0x6F <T>)"
        }
    },
    castclass: {
        info: {
            tooltip: "Cast obj to class (0x74 <T>)"
        }
    },
    ceq: {
        info: {
            tooltip: "Push 1 (of type int32) if value1 equals value2, else push 0 (0xFE 0x01)"
        }
    },
    cgt: {
        info: {
            tooltip: "Push 1 (of type int32) if value1 > value2, else push 0 (0xFE 0x02)"
        },
        un: {
            info: {
                tooltip: "Push 1 (of type int32) if value1 > value2, unsigned or unordered, else push 0 (0xFE 0x03)"
            }
        }
    },
    ckfinite: {
        info: {
            tooltip: "Throw ArithmeticException if value is not a finite number (0xC3)"
        }
    },
    clt: {
        info: {
            tooltip: "Push 1 (of type int32) if value1 < value2, else push 0 (0xFE 0x04)"
        },
        un: {
            info: {
                tooltip: "Push 1 (of type int32) if value1 < value2, unsigned or unordered, else push 0 (0xFE 0x05)"
            }
        }
    },
    constrained: {
        info: {
            tooltip: "Call a virtual method on a type constrained to be type T (0xFE 0x16 <T>)",
            prefix: true
        }
    },
    conv: {
        i: {
            info: {
                type,
                tooltip: "Convert to native int, pushing native int on stack (0xD3)"
            }
        },
        i1: {
            info: {
                type,
                tooltip: "Convert to int8, pushing int32 on stack (0x67)"
            }
        },
        i2: {
            info: {
                type,
                tooltip: "Convert to int16, pushing int32 on stack (0x68)"
            }
        },
        i4: {
            info: {
                type,
                tooltip: "Convert to int32, pushing int32 on stack (0x69)"
            }
        },
        i8: {
            info: {
                type,
                tooltip: "Convert to int64, pushing int64 on stack (0x6A)"
            }
        },
        ovf: {
            i: {
                info: {
                    type,
                    tooltip: "Convert to a native int (on the stack as native int) and throw an exception on overflow (0xD4)"
                },
                un: {
                    info: {
                        tooltip: "Convert unsigned to a native int (on the stack as native int) and throw an exception on overflow (0x8A)"
                    }
                }
            },
            i1: {
                info: {
                    type,
                    tooltip: "Convert to an int8 (on the stack as int32) and throw an exception on overflow (0xB3)"
                },
                un: {
                    info: {
                        tooltip: "Convert unsigned to an int8 (on the stack as int32) and throw an exception on overflow (0x82)"
                    }
                }
            },
            i2: {
                info: {
                    type,
                    tooltip: "Convert to an int16 (on the stack as int32) and throw an exception on overflow (0xB5)"
                },
                un: {
                    info: {
                        tooltip: "Convert unsigned to an int16 (on the stack as int32) and throw an exception on overflow (0x83)"
                    }
                }
            },
            i4: {
                info: {
                    type,
                    tooltip: "Convert to an int32 (on the stack as int32) and throw an exception on overflow (0xB7)"
                },
                un: {
                    info: {
                        tooltip: "Convert unsigned to an int32 (on the stack as int32) and throw an exception on overflow (0x84)"
                    }
                }
            },
            i8: {
                info: {
                    type,
                    tooltip: "Convert to an int64 (on the stack as int64) and throw an exception on overflow (0xB9)"
                },
                un: {
                    info: {
                        tooltip: "Convert unsigned to an int64 (on the stack as int64) and throw an exception on overflow (0x85)"
                    }
                }
            },
            u: {
                info: {
                    type,
                    tooltip: "Convert to a native unsigned int (on the stack as native int) and throw an exception on overflow (0xD5)"
                },
                un: {
                    info: {
                        tooltip: "Convert unsigned to a native unsigned int (on the stack as native int) and throw an exception on overflow (0x8B)"
                    }
                }
            },
            u1: {
                info: {
                    type,
                    tooltip: "Convert to an unsigned int8 (on the stack as int32) and throw an exception on overflow (0xB4)"
                },
                un: {
                    info: {
                        tooltip: "Convert unsigned to an unsigned int8 (on the stack as int32) and throw an exception on overflow (0x86)"
                    }
                }
            },
            u2: {
                info: {
                    type,
                    tooltip: "Convert to an unsigned int16 (on the stack as int32) and throw an exception on overflow (0xB6)"
                },
                un: {
                    info: {
                        tooltip: "Convert unsigned to an unsigned int16 (on the stack as int32) and throw an exception on overflow (0x87)"
                    }
                }
            },
            u4: {
                info: {
                    type,
                    tooltip: "Convert to an unsigned int32 (on the stack as int32) and throw an exception on overflow (0xB8)"
                },
                un: {
                    info: {
                        tooltip: "Convert unsigned to an unsigned int32 (on the stack as int32) and throw an exception on overflow (0x88)"
                    }
                }
            },
            u8: {
                info: {
                    type,
                    tooltip: "Convert to an unsigned int64 (on the stack as int64) and throw an exception on overflow (0xBA)"
                },
                un: {
                    info: {
                        tooltip: "Convert unsigned to an unsigned int64 (on the stack as int64) and throw an exception on overflow (0x89)"
                    }
                }
            }
        },
        r: {
            type,
            un: {
                info: {
                    tooltip: "Convert unsigned integer to floating-point, pushing F on stack (0x76)"
                }
            }
        },
        r4: {
            info: {
                type,
                tooltip: "Convert to float32, pushing F on stack (0x6B)"
            }
        },
        r8: {
            info: {
                type,
                tooltip: "Convert to float64, pushing F on stack (0x6C)"
            }
        },
        u: {
            info: {
                type,
                tooltip: "Convert to native unsigned int, pushing native int on stack (0xE0)"
            }
        },
        u1: {
            info: {
                type,
                tooltip: "Convert to unsigned int8, pushing int32 on stack (0xD2)"
            }
        },
        u2: {
            info: {
                type,
                tooltip: "Convert to unsigned int16, pushing int32 on stack (0xD1)"
            }
        },
        u4: {
            info: {
                type,
                tooltip: "Convert to unsigned int32, pushing int32 on stack (0x6D)"
            }
        },
        u8: {
            info: {
                type,
                tooltip: "Convert to unsigned int64, pushing int64 on stack (0x6E)"
            }
        }
    },
    cpblk: {
        info: {
            tooltip: "Copy data from memory to memory (0xFE 0x17)"
        }
    },
    cpobj: {
        info: {
            tooltip: "Copy a value type from src to dest (0x70 <T>)"
        }
    },
    div: {
        info: {
            tooltip: "Divide two values to return a quotient or floating-point result (0x5B)"
        },
        un: {
            info: {
                tooltip: "Divide two values, unsigned, returning a quotient (0x5C)"
            }
        }
    },
    dup: {
        info: {
            tooltip: "Duplicate the value on the top of the stack (0x25)"
        }
    },
    endfault: {
        info: {
            tooltip: "End fault clause of an exception block (0xDC)"
        }
    },
    endfilter: {
        info: {
            tooltip: "End an exception handling filter clause (0xFE 0x11)"
        }
    },
    endfinally: {
        info: {
            tooltip: "End finally clause of an exception block (0xDC)"
        }
    },
    endmac: {
        info: {
            tooltip: "End of macro definition (ILAsm internal use) (0x00 0x00)"
        }
    },
    illegal: {
        info: {
            tooltip: "Invalid CIL instruction (reserved) (0x00 0x00)"
        }
    },
    initblk: {
        info: {
            tooltip: "Set all bytes in a block of memory to a given byte value (0xFE 0x18)"
        }
    },
    initobj: {
        info: {
            tooltip: "Initialize the value at address dest (0xFE 0x15 <T>)"
        }
    },
    isinst: {
        info: {
            tooltip: "Test if obj is an instance of class, returning null or an instance of that class or interface (0x75 <T>)"
        }
    },
    jmp: {
        info: {
            tooltip: "Exit current method and jump to the specified method (0x27 <T>)"
        }
    },
    ldarg: {
        info: {
            tooltip: "Load argument numbered num onto the stack (0xFE 0x09 <uint16>)"
        },
        '0': {
            info: {
                type: variable,
                tooltip: "Load argument 0 onto the stack (0x02)"
            }
        },
        '1': {
            info: {
                type: variable,
                tooltip: "Load argument 1 onto the stack (0x03)"
            }
        },
        '2': {
            info: {
                type: variable,
                tooltip: "Load argument 2 onto the stack (0x4)"
            }
        },
        '3': {
            info: {
                type: variable,
                tooltip: "Load argument 3 onto the stack (0x5)"
            }
        },
        s: {
            info: {
                tooltip: "Load argument numbered num onto the stack, short form (0x0E <uint8>)"
            }
        }
    },
    ldarga: {
        info: {
            tooltip: "Fetch the address of argument argNum (0xFE 0x0A <uint16>)"
        },
        s: {
            info: {
                tooltip: "Fetch the address of argument argNum, short form (0x0F <uint8>)"
            }
        }
    },
    ldc: {
        i4: {
            info: {
                type,
                tooltip: "Push num of type int32 onto the stack as int32 (0x20 <int32>)"
            },
            '0': {
                info: {
                    type: constant,
                    tooltip: "Push 0 onto the stack as int32 (0x16)"
                }
            },
            '1': {
                info: {
                    type: constant,
                    tooltip: "Push 1 onto the stack as int32 (0x17)"
                }
            },
            '2': {
                info: {
                    type: constant,
                    tooltip: "Push 2 onto the stack as int32 (0x18)"
                }
            },
            '3': {
                info: {
                    type: constant,
                    tooltip: "Push 3 onto the stack as int32 (0x19)"
                }
            },
            '4': {
                info: {
                    type: constant,
                    tooltip: "Push 4 onto the stack as int32 (0x1A)"
                }
            },
            '5': {
                info: {
                    type: constant,
                    tooltip: "Push 5 onto the stack as int32 (0x1B)"
                }
            },
            '6': {
                info: {
                    type: constant,
                    tooltip: "Push 6 onto the stack as int32 (0x1C)"
                }
            },
            '7': {
                info: {
                    type: constant,
                    tooltip: "Push 7 onto the stack as int32 (0x1D)"
                }
            },
            '8': {
                info: {
                    type: constant,
                    tooltip: "Push 8 onto the stack as int32 (0x1E)"
                }
            },
            m1: {
                info: {
                    type: constant,
                    tooltip: "Push -1 onto the stack as int32 (0x15)"
                }
            },
            M1: {
                info: {
                    type: constant,
                    tooltip: "Push -1 of type int32 onto the stack as int32 (alias for ldc.i4.m1) (0x15)"
                }
            },
            s: {
                info: {
                    tooltip: "Push num onto the stack as int32, short form (0x1F <int8>)"
                }
            }
        },
        i8: {
            info: {
                type,
                tooltip: "Push num of type int64 onto the stack as int64 (0x21 <int64>)"
            }
        },
        r4: {
            info: {
                type,
                tooltip: "Push num of type float32 onto the stack as F (0x22 <float32>)"
            }
        },
        r8: {
            info: {
                type,
                tooltip: "Push num of type float64 onto the stack as F (0x23 <float64>)"
            }
        }
    },
    ldelem: {
        info: {
            tooltip: "Load the element at index onto the top of the stack (0xA3 <T>)"
        },
        i: {
            info: {
                type,
                tooltip: "Load the element with type native int at index onto the top of the stack as a native int (0x97)"
            }
        },
        i1: {
            info: {
                type,
                tooltip: "Load the element with type int8 at index onto the top of the stack as an int32 (0x90)"
            }
        },
        i2: {
            info: {
                type,
                tooltip: "Load the element with type int16 at index onto the top of the stack as an int32 (0x92)"
            }
        },
        i4: {
            info: {
                type,
                tooltip: "Load the element with type int32 at index onto the top of the stack as an int32 (0x94)"
            }
        },
        i8: {
            info: {
                type,
                tooltip: "Load the element with type int64 at index onto the top of the stack as an int64 (0x96)"
            }
        },
        r4: {
            info: {
                type,
                tooltip: "Load the element with type float32 at index onto the top of the stack as an F (0x98)"
            }
        },
        r8: {
            info: {
                type,
                tooltip: "Load the element with type float64 at index onto the top of the stack as an F (0x99)"
            }
        },
        ref: {
            info: {
                type,
                tooltip: "Load the element at index onto the top of the stack as an O. The type of the O is the same as the element type of the array pushed on the CIL stack (0x9A)"
            }
        },
        u1: {
            info: {
                type,
                tooltip: "Load the element with type unsigned int8 at index onto the top of the stack as an int32 (0x91)"
            }
        },
        u2: {
            info: {
                type,
                tooltip: "Load the element with type unsigned int16 at index onto the top of the stack as an int32 (0x93)"
            }
        },
        u4: {
            info: {
                type,
                tooltip: "Load the element with type unsigned int32 at index onto the top of the stack as an int32 (0x95)"
            }
        },
        u8: {
            info: {
                type,
                tooltip: "Load the element with type unsigned int64 at index onto the top of the stack as an int64 (alias for ldelem.i8) (0x96)"
            }
        }
    },
    ldelema: {
        info: {
            tooltip: "Load the address of element at index onto the top of the stack (0x8F <T>)"
        }
    },
    ldfld: {
        info: {
            tooltip: "Push the value of field of object (or value type) obj, onto the stack (0x7B)"
        }
    },
    ldflda: {
        info: {
            tooltip: "Push the address of field of object obj on the stack (0x7C <T>)"
        }
    },
    ldftn: {
        info: {
            tooltip: "Push a pointer to a method referenced by method, on the stack (0xFE 0x06 <T>)"
        }
    },
    ldind: {
        i: {
            info: {
                type,
                tooltip: "Indirect load value of type native int as native int on the stack (0x4D)"
            }
        },
        i1: {
            info: {
                type,
                tooltip: "Indirect load value of type int8 as int32 on the stack (0x46)"
            }
        },
        i2: {
            info: {
                type,
                tooltip: "Indirect load value of type int16 as int32 on the stack (0x48)"
            }
        },
        i4: {
            info: {
                type,
                tooltip: "Indirect load value of type int32 as int32 on the stack (0x4A)"
            }
        },
        i8: {
            info: {
                type,
                tooltip: "Indirect load value of type int64 as int64 on the stack (0x4C)"
            }
        },
        r4: {
            info: {
                type,
                tooltip: "Indirect load value of type float32 as F on the stack (0x4E)"
            }
        },
        r8: {
            info: {
                type,
                tooltip: "Indirect load value of type float64 as F on the stack (0x4F)"
            }
        },
        ref: {
            info: {
                type,
                tooltip: "Indirect load value of type object ref as O on the stack (0x50)"
            }
        },
        u1: {
            info: {
                type,
                tooltip: "Indirect load value of type unsigned int8 as int32 on the stack (0x47)"
            }
        },
        u2: {
            info: {
                type,
                tooltip: "Indirect load value of type unsigned int16 as int32 on the stack (0x49)"
            }
        },
        u4: {
            info: {
                type,
                tooltip: "Indirect load value of type unsigned int32 as int32 on the stack (0x4B)"
            }
        },
        u8: {
            info: {
                type,
                tooltip: "Indirect load value of type unsigned int64 as int64 on the stack (alias for ldind.i8) (0x4C)"
            }
        }
    },
    ldlen: {
        info: {
            tooltip: "Push the length (of type native unsigned int) of array on the stack (0x8E)"
        }
    },
    ldloc: {
        info: {
            tooltip: "Load local variable of index indx onto stack (0xFE 0x0C <uint16>)"
        },
        '0': {
            info: {
                type: variable,
                tooltip: "Load local variable 0 onto stack (0x06)"
            }
        },
        '1': {
            info: {
                type: variable,
                tooltip: "Load local variable 1 onto stack (0x7)"
            }
        },
        '2': {
            info: {
                type: variable,
                tooltip: "Load local variable 2 onto stack (0x8)"
            }
        },
        '3': {
            info: {
                type: variable,
                tooltip: "Load local variable 3 onto stack (0x9)"
            }
        },
        s: {
            info: {
                tooltip: "Load local variable of index indx onto stack, short form (0x11 <uint8>)"
            }
        }
    },
    ldloca: {
        info: {
            tooltip: "Load address of local variable with index indx (0xFE 0x0D <uint16>)"
        },
        s: {
            info: {
                tooltip: "Load address of local variable with index indx, short form (0x12 <uint8>)"
            }
        }
    },
    ldnull: {
        info: {
            tooltip: "Push a null reference on the stack (0x14)"
        }
    },
    ldobj: {
        info: {
            tooltip: "Copy the value stored at address src to the stack (0x71 <T>)"
        }
    },
    ldsfld: {
        info: {
            tooltip: "Push the value of field on the stack (0x7E <T>)"
        }
    },
    ldsflda: {
        info: {
            tooltip: "Push the address of the static field, field, on the stack (0x7F <T>)"
        }
    },
    ldstr: {
        info: {
            tooltip: "Push a string object for the literal string (0x72)"
        }
    },
    ldtoken: {
        info: {
            tooltip: "Convert metadata token to its runtime representation (0xD0 <T>)"
        }
    },
    ldvirtftn: {
        info: {
            tooltip: "Push address of virtual method on the stack (0xFE 0x07 <T>)"
        }
    },
    leave: {
        info: {
            tooltip: "Exit a protected region of code (0xDD <int32>)"
        },
        s: {
            info: {
                tooltip: "Exit a protected region of code, short form (0xDE <int8>)"
            }
        }
    },
    localloc: {
        info: {
            tooltip: "Allocate space from the local memory pool (0xFE 0x0F)"
        }
    },
    mkrefany: {
        info: {
            tooltip: "Push a typed reference to ptr of type class onto the stack (0xC6 <T>)"
        }
    },
    mul: {
        info: {
            tooltip: "Multiply values (0x5A)"
        },
        ovf: {
            info: {
                tooltip: "Multiply signed integer values. Signed result shall fit in same size (0xD8)"
            },
            un: {
                info: {
                    tooltip: "Multiply unsigned integer values. Unsigned result shall fit in same size (0xD9)"
                }
            }
        }
    },
    neg: {
        info: {
            tooltip: "Negate value (0x65)"
        }
    },
    newarr: {
        info: {
            tooltip: "Create a new array with elements of type etype (0x8D <T>)"
        }
    },
    newobj: {
        info: {
            tooltip: "Allocate an uninitialized object or value type and call ctor (0x73 <T>)"
        }
    },
    no: {
        info: {
            tooltip: "The specified fault check(s) normally performed as part of the execution of the subsequent instruction can/shall be skipped (0xFE 0x19)"
        }
    },
    nop: {
        info: {
            tooltip: "Do nothing (No operation) (0x00)"
        }
    },
    not: {
        info: {
            tooltip: "Bitwise complement (logical not) (0x66)"
        }
    },
    or: {
        info: {
            tooltip: "Bitwise OR of two integer values, returns an integer (0x60)"
        }
    },
    pop: {
        info: {
            tooltip: "Pop value from the stack (0x26)"
        }
    },
    prefix1: {
        info: {
            tooltip: "Reserved instruction prefix 1 (0xFE)",
            reserved: true
        }
    },
    prefix2: {
        info: {
            tooltip: "Reserved instruction prefix 2 (0xFD)",
            reserved: true
        }
    },
    prefix3: {
        info: {
            tooltip: "Reserved instruction prefix 3 (0xFC)",
            reserved: true
        }
    },
    prefix4: {
        info: {
            tooltip: "Reserved instruction prefix 4 (0xFB)",
            reserved: true
        }
    },
    prefix5: {
        info: {
            tooltip: "Reserved instruction prefix 5 (0xFA)",
            reserved: true
        }
    },
    prefix6: {
        info: {
            tooltip: "Reserved instruction prefix 6 (0xF9)",
            reserved: true
        }
    },
    prefix7: {
        info: {
            tooltip: "Reserved instruction prefix 7 (0xF8)",
            reserved: true
        }
    },
    prefixref: {
        info: {
            tooltip: "Reserved instruction prefix ref (0xFF)",
            reserved: true
        }
    },
    readonly: {
        info: {
            tooltip: "Specify that the subsequent array address operation performs no type check at runtime, and that it returns a controlled-mutability managed pointer (0xFE 0x1E)"
        }
    },
    refanytype: {
        info: {
            tooltip: "Push the type token stored in a typed reference (0xFE 0x1D)"
        }
    },
    refanyval: {
        info: {
            tooltip: "Push the address stored in a typed reference (0xC2 <T>)"
        }
    },
    rem: {
        info: {
            tooltip: "Remainder when dividing one value by another (0x5D)"
        },
        un: {
            info: {
                tooltip: "Remainder when dividing one unsigned value by another (0x5E)"
            }
        }
    },
    ret: {
        info: {
            tooltip: "Return from method, possibly with a value (0x2A)"
        }
    },
    rethrow: {
        info: {
            tooltip: "Rethrow the current exception (0xFE 0x1A)"
        }
    },
    shl: {
        info: {
            tooltip: "Shift an integer left (shifting in zeros), return an integer (0x62)"
        }
    },
    shr: {
        info: {
            tooltip: "Shift an integer right (shift in sign), return an integer (0x63)"
        },
        un: {
            info: {
                tooltip: "Shift an integer right (shift in zero), return an integer (0x64)"
            }
        }
    },
    sizeof: {
        info: {
            tooltip: "Push the size, in bytes, of a type as an unsigned int32 (0xFE 0x1C <T>)"
        }
    },
    starg: {
        info: {
            tooltip: "Store value to the argument numbered num (0xFE 0x0B <uint16>)"
        },
        s: {
            info: {
                tooltip: "Store value to the argument numbered num, short form (0x10 <uint8>)"
            }
        }
    },
    stelem: {
        info: {
            tooltip: "Replace array element at index with the value on the stack (0xA4 <T>)"
        },
        i: {
            info: {
                type,
                tooltip: "Replace array element at index with the i value on the stack (0x9B)"
            }
        },
        i1: {
            info: {
                type,
                tooltip: "Replace array element at index with the int8 value on the stack (0x9C)"
            }
        },
        i2: {
            info: {
                type,
                tooltip: "Replace array element at index with the int16 value on the stack (0x9D)"
            }
        },
        i4: {
            info: {
                type,
                tooltip: "Replace array element at index with the int32 value on the stack (0x9E)"
            }
        },
        i8: {
            info: {
                type,
                tooltip: "Replace array element at index with the int64 value on the stack (0x9F)"
            }
        },
        r4: {
            info: {
                type,
                tooltip: "Replace array element at index with the float32 value on the stack (0xA0)"
            }
        },
        r8: {
            info: {
                type,
                tooltip: "Replace array element at index with the float64 value on the stack (0xA1)"
            }
        },
        ref: {
            info: {
                type,
                tooltip: "Replace array element at index with the ref value on the stack (0xA2)"
            }
        }
    },
    stfld: {
        info: {
            tooltip: "Replace the value of field of the object obj with value (0x7D <T>)"
        }
    },
    stind: {
        i: {
            info: {
                type,
                tooltip: "Store value of type native int into memory at address (0xDF)"
            }
        },
        i1: {
            info: {
                type,
                tooltip: "Store value of type int8 into memory at address (0x52)"
            }
        },
        i2: {
            info: {
                type,
                tooltip: "Store value of type int16 into memory at address (0x53)"
            }
        },
        i4: {
            info: {
                type,
                tooltip: "Store value of type int32 into memory at address (0x54)"
            }
        },
        i8: {
            info: {
                type,
                tooltip: "Store value of type int64 into memory at address (0x55)"
            }
        },
        r4: {
            info: {
                type,
                tooltip: "Store value of type float32 into memory at address (0x56)"
            }
        },
        r8: {
            info: {
                type,
                tooltip: "Store value of type float64 into memory at address (0x57)"
            }
        },
        ref: {
            info: {
                type,
                tooltip: "Store value of type object ref (type O) into memory at address (0x51)"
            }
        }
    },
    stloc: {
        info: {
            tooltip: "Pop a value from stack into local variable index (0xFE 0x0E <uint16>)"
        },
        '0': {
            info: {
                type: variable,
                tooltip: "Pop a value from stack into local variable 0 (0x0A)"
            }
        },
        '1': {
            info: {
                type: variable,
                tooltip: "Pop a value from stack into local variable 1 (0x0B)"
            }
        },
        '2': {
            info: {
                type: variable,
                tooltip: "Pop a value from stack into local variable 2 (0x0C)"
            }
        },
        '3': {
            info: {
                type: variable,
                tooltip: "Pop a value from stack into local variable 3 (0x0D)"
            }
        },
        s: {
            info: {
                tooltip: "Pop a value from stack into local variable indx, short form (0x13 <uint8>)"
            }
        }
    },
    stobj: {
        info: {
            tooltip: "Store a value of type typeTok at an address (0x81 <T>)"
        }
    },
    stsfld: {
        info: {
            tooltip: "Replace the value of field with val (0x80 <T>)"
        }
    },
    sub: {
        info: {
            tooltip: "Subtract value2 from value1, returning a new value (0x59)"
        },
        ovf: {
            info: {
                tooltip: "Subtract native int from a native int. Signed result shall fit in same size (0xDA)"
            },
            un: {
                info: {
                    tooltip: "Subtract native unsigned int from a native unsigned int. Unsigned result shall fit in same size (0xDB)"
                }
            }
        }
    },
    switch: {
        info: {
            tooltip: "Jump to one of n values (0x45 <uint32> <int32> ... <int32>)"
        }
    },
    tail: {
        info: {
            tooltip: "Subsequent call terminates current method (0xFE 0x14)",
            prefix: true
        }
    },
    throw: {
        info: {
            tooltip: "Throw an exception (0x7A)"
        }
    },
    unaligned: {
        info: {
            tooltip: "Subsequent pointer instruction might be unaligned (0xFE 0x12)",
            prefix: true
        }
    },
    unbox: {
        info: {
            tooltip: "Extract a value-type from obj, its boxed representation (0x79 <T>)"
        },
        any: {
            info: {
                tooltip: "Extract a value-type from obj, its boxed representation (0xA5 <T>)"
            }
        }
    },
    volatile: {
        info: {
            tooltip: "Subsequent pointer reference is volatile (0xFE 0x13)",
            prefix: true
        }
    },
    xor: {
        info: {
            tooltip: "Bitwise XOR of integer values, returns an integer (0x61)"
        }
    }
} as const;

export type opcode = { info?: { type?: string, tooltip?: string, prefix?: boolean, reserved?: boolean } };

export function getInstruction(code?: string) {
    if (!code?.match(/^\w/)) {
        return;
    }
    const parts = code.split('.');
    type opcodes = Record<string, opcode | undefined> & opcode;
    let opcode = opcodes as opcodes;
    for (let i = 0; i < parts.length; i++) {
        const part = parts[i];
        if (part in opcode) {
            opcode = opcode[part] as opcodes;
        }
        else if (i !== parts.length - 1) {
            return;
        }
    }
    return opcode;
}


import { Writer, Reader } from 'protobufjs/minimal';


export interface Baz {
  foo: FooBar | undefined;
}

export interface Baz_Original {
  foo: FooBar_Original | undefined;
}

export interface FooBar {
}

export interface FooBar_Original {
}

const baseBaz: object = {
};

const baseFooBar: object = {
};

export const protobufPackage = ''

export const Baz = {
  encode(message: Baz, writer: Writer = Writer.create()): Writer {
    if (message.foo !== undefined) {
      FooBar.encode(message.foo, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): Baz {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseBaz } as Baz;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.foo = FooBar.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Baz {
    const message = { ...baseBaz } as Baz;
    if (object.foo !== undefined && object.foo !== null) {
      message.foo = FooBar.fromJSON(object.foo);
    } else {
      message.foo = undefined;
    }
    return message;
  },
  fromPartial(object: DeepPartial<Baz>): Baz {
    const message = { ...baseBaz } as Baz;
    if (object.foo !== undefined && object.foo !== null) {
      message.foo = FooBar.fromPartial(object.foo);
    } else {
      message.foo = undefined;
    }
    return message;
  },
  fromWrappedPartial(object: DeepPartial<Baz_Original>): Baz {
    const message = { ...baseBaz } as Baz;
    if (object.foo !== undefined && object.foo !== null) {
      message.foo = FooBar.fromWrappedPartial(object.foo);
    } else {
      message.foo = undefined;
    }
    return message;
  },
  toWrapped(message: Baz): Baz_Original {
    const obj: any = {};
    message.foo !== undefined && message.foo !== null && (obj.foo = message.foo ? FooBar.toWrapped(message.foo) : undefined);
    return obj;
  },
  toJSON(message: Baz): unknown {
    const obj: any = {};
    message.foo !== undefined && (obj.foo = message.foo ? FooBar.toJSON(message.foo) : undefined);
    return obj;
  },
};

export const FooBar = {
  encode(_: FooBar, writer: Writer = Writer.create()): Writer {
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): FooBar {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseFooBar } as FooBar;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): FooBar {
    const message = { ...baseFooBar } as FooBar;
    return message;
  },
  fromPartial(_: DeepPartial<FooBar>): FooBar {
    const message = { ...baseFooBar } as FooBar;
    return message;
  },
  fromWrappedPartial(_: DeepPartial<FooBar_Original>): FooBar {
    const message = { ...baseFooBar } as FooBar;
    return message;
  },
  toWrapped(_: FooBar): FooBar_Original {
    const obj: any = {};
    return obj;
  },
  toJSON(_: FooBar): unknown {
    const obj: any = {};
    return obj;
  },
};

type Builtin = Date | Function | Uint8Array | string | number | undefined;
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;
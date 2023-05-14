import { Writer, Reader } from "protobufjs/minimal";
import { BaseAccount } from "../../cosmos/auth/v1beta1/auth";

import { Long, DeepPartial, longToNumber } from "../../helpers";

export const protobufPackage = "cosmos.auth.v1beta1";

/** EthAccount defines an account for modules that holds coins on a pool. */
export interface EthAccount {
  base_account: BaseAccount | undefined;
  code_hash: string;
}

/** Params defines the parameters for the auth module. */
export interface Params {
  max_memo_characters: number;
  tx_sig_limit: number;
  tx_size_cost_per_byte: number;
  sig_verify_cost_ed25519: number;
  sig_verify_cost_secp256k1: number;
}

const baseEthAccount: object = { code_hash: "" };

export const EthAccount = {
  encode(message: EthAccount, writer: Writer = Writer.create()): Writer {
    if (message.base_account !== undefined) {
      BaseAccount.encode(
        message.base_account,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.code_hash !== "") {
      writer.uint32(18).string(message.code_hash);
    }

    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): EthAccount {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseEthAccount } as EthAccount;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.base_account = BaseAccount.decode(reader, reader.uint32());
          break;
        case 2:
          message.code_hash = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EthAccount {
    const message = { ...baseEthAccount } as EthAccount;
    if (object.base_account !== undefined && object.base_account !== null) {
      message.base_account = BaseAccount.fromJSON(object.base_account);
    } else {
      message.base_account = undefined;
    }
    if (object.code_hash !== undefined && object.code_hash !== null) {
      message.code_hash = String(object.code_hash);
    } else {
      message.code_hash = "";
    }

    return message;
  },

  toJSON(message: EthAccount): unknown {
    const obj: any = {};
    message.base_account !== undefined &&
      (obj.base_account = message.base_account
        ? BaseAccount.toJSON(message.base_account)
        : undefined);
    message.code_hash !== undefined && (obj.code_hash = message.code_hash);

    return obj;
  },

  fromPartial(object: DeepPartial<EthAccount>): EthAccount {
    const message = { ...baseEthAccount } as EthAccount;
    if (object.base_account !== undefined && object.base_account !== null) {
      message.base_account = BaseAccount.fromPartial(object.base_account);
    } else {
      message.base_account = undefined;
    }
    if (object.code_hash !== undefined && object.code_hash !== null) {
      message.code_hash = object.code_hash;
    } else {
      message.code_hash = "";
    }

    return message;
  },
};

const baseParams: object = {
  max_memo_characters: 0,
  tx_sig_limit: 0,
  tx_size_cost_per_byte: 0,
  sig_verify_cost_ed25519: 0,
  sig_verify_cost_secp256k1: 0,
};

export const Params = {
  encode(message: Params, writer: Writer = Writer.create()): Writer {
    if (message.max_memo_characters !== 0) {
      writer.uint32(8).uint64(message.max_memo_characters);
    }
    if (message.tx_sig_limit !== 0) {
      writer.uint32(16).uint64(message.tx_sig_limit);
    }
    if (message.tx_size_cost_per_byte !== 0) {
      writer.uint32(24).uint64(message.tx_size_cost_per_byte);
    }
    if (message.sig_verify_cost_ed25519 !== 0) {
      writer.uint32(32).uint64(message.sig_verify_cost_ed25519);
    }
    if (message.sig_verify_cost_secp256k1 !== 0) {
      writer.uint32(40).uint64(message.sig_verify_cost_secp256k1);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Params {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseParams } as Params;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.max_memo_characters = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.tx_sig_limit = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.tx_size_cost_per_byte = longToNumber(reader.uint64() as Long);
          break;
        case 4:
          message.sig_verify_cost_ed25519 = longToNumber(
            reader.uint64() as Long
          );
          break;
        case 5:
          message.sig_verify_cost_secp256k1 = longToNumber(
            reader.uint64() as Long
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Params {
    const message = { ...baseParams } as Params;
    if (
      object.max_memo_characters !== undefined &&
      object.max_memo_characters !== null
    ) {
      message.max_memo_characters = Number(object.max_memo_characters);
    } else {
      message.max_memo_characters = 0;
    }
    if (object.tx_sig_limit !== undefined && object.tx_sig_limit !== null) {
      message.tx_sig_limit = Number(object.tx_sig_limit);
    } else {
      message.tx_sig_limit = 0;
    }
    if (
      object.tx_size_cost_per_byte !== undefined &&
      object.tx_size_cost_per_byte !== null
    ) {
      message.tx_size_cost_per_byte = Number(object.tx_size_cost_per_byte);
    } else {
      message.tx_size_cost_per_byte = 0;
    }
    if (
      object.sig_verify_cost_ed25519 !== undefined &&
      object.sig_verify_cost_ed25519 !== null
    ) {
      message.sig_verify_cost_ed25519 = Number(object.sig_verify_cost_ed25519);
    } else {
      message.sig_verify_cost_ed25519 = 0;
    }
    if (
      object.sig_verify_cost_secp256k1 !== undefined &&
      object.sig_verify_cost_secp256k1 !== null
    ) {
      message.sig_verify_cost_secp256k1 = Number(
        object.sig_verify_cost_secp256k1
      );
    } else {
      message.sig_verify_cost_secp256k1 = 0;
    }
    return message;
  },

  toJSON(message: Params): unknown {
    const obj: any = {};
    message.max_memo_characters !== undefined &&
      (obj.max_memo_characters = message.max_memo_characters);
    message.tx_sig_limit !== undefined &&
      (obj.tx_sig_limit = message.tx_sig_limit);
    message.tx_size_cost_per_byte !== undefined &&
      (obj.tx_size_cost_per_byte = message.tx_size_cost_per_byte);
    message.sig_verify_cost_ed25519 !== undefined &&
      (obj.sig_verify_cost_ed25519 = message.sig_verify_cost_ed25519);
    message.sig_verify_cost_secp256k1 !== undefined &&
      (obj.sig_verify_cost_secp256k1 = message.sig_verify_cost_secp256k1);
    return obj;
  },

  fromPartial(object: DeepPartial<Params>): Params {
    const message = { ...baseParams } as Params;
    if (
      object.max_memo_characters !== undefined &&
      object.max_memo_characters !== null
    ) {
      message.max_memo_characters = object.max_memo_characters;
    } else {
      message.max_memo_characters = 0;
    }
    if (object.tx_sig_limit !== undefined && object.tx_sig_limit !== null) {
      message.tx_sig_limit = object.tx_sig_limit;
    } else {
      message.tx_sig_limit = 0;
    }
    if (
      object.tx_size_cost_per_byte !== undefined &&
      object.tx_size_cost_per_byte !== null
    ) {
      message.tx_size_cost_per_byte = object.tx_size_cost_per_byte;
    } else {
      message.tx_size_cost_per_byte = 0;
    }
    if (
      object.sig_verify_cost_ed25519 !== undefined &&
      object.sig_verify_cost_ed25519 !== null
    ) {
      message.sig_verify_cost_ed25519 = object.sig_verify_cost_ed25519;
    } else {
      message.sig_verify_cost_ed25519 = 0;
    }
    if (
      object.sig_verify_cost_secp256k1 !== undefined &&
      object.sig_verify_cost_secp256k1 !== null
    ) {
      message.sig_verify_cost_secp256k1 = object.sig_verify_cost_secp256k1;
    } else {
      message.sig_verify_cost_secp256k1 = 0;
    }
    return message;
  },
};

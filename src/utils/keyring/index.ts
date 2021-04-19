import {
  SYMBOL_MAP,
  KeyringMethodEnum,
  EMPTY_FUNC,
  GetAccountInterface,
  EmptyFuncInterface,
} from '../../constants';
import { getAccount as getBTCAccount } from './btc';
import { getAccount as getETHAccount } from './eth';

export interface KeyringInterface {
  [KeyringMethodEnum.GET_ACCOUNT]: GetAccountInterface;
}

const KEYRING_MAP = {
  [SYMBOL_MAP.BTC]: {
    [KeyringMethodEnum.GET_ACCOUNT]: getBTCAccount,
  },
  [SYMBOL_MAP.ETH]: {
    [KeyringMethodEnum.GET_ACCOUNT]: getETHAccount,
  },
};

const emptyKeyring = {
  [KeyringMethodEnum.GET_ACCOUNT]: EMPTY_FUNC,
};

interface EmptyKeyringInterface {
  [KeyringMethodEnum.GET_ACCOUNT]: EmptyFuncInterface;
}

/**
 * 根据 Symbol 获取密钥处理对象
 * @param {String} symbol
 */
export const getKeyring = (
  symbol: string
): KeyringInterface | EmptyKeyringInterface => {
  return symbol in KEYRING_MAP ? KEYRING_MAP[symbol] : emptyKeyring;
};

export * from './seed';

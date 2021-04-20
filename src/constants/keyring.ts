import SYMBOL_MAP from './symbol';

interface ICoinTypeToCoinMap {
  [propName: number]: string;
}

export const COIN_TYPE_MAP = {
  [SYMBOL_MAP.BTC]: 0,
  [SYMBOL_MAP.ETH]: 60,
};

export const COIN_TYPE_TO_COIN_MAP: ICoinTypeToCoinMap = {
  0: SYMBOL_MAP.BTC,
  60: SYMBOL_MAP.ETH,
};

export enum KeyringMethodEnum {
  GET_ACCOUNT = 'getAccount',
}

export interface GetAccountInterface {
  (words: string, path: string): string;
}

import SYMBOL_MAP from './symbol';

export const COIN_TYPE_MAP = {
  [SYMBOL_MAP.BTC]: 0,
  [SYMBOL_MAP.ETH]: 60,
};

export enum KeyringMethodEnum {
  GET_ACCOUNT = 'getAccount',
}

export interface GetAccountInterface {
  (words: string, path: string): string;
}

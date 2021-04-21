import SYMBOL_MAP from './symbol';

interface ICoinTypeToCoinMap {
  [propName: number]: string;
}

export const COIN_TYPE_TO_SYMBOL_MAP: ICoinTypeToCoinMap = {
  0: SYMBOL_MAP.BTC,
  60: SYMBOL_MAP.ETH,
  195: SYMBOL_MAP.TRX,
};

export enum KeyringMethodEnum {
  GET_ACCOUNT = 'getAccount',
}

export interface GetAccountInterface {
  (words: string, path: string): string;
}

import SYMBOL_MAP from './symbol';

interface ICoinTypeToSymbolMap {
  [propName: string]: string;
}

interface ISymbolToCoinTypeMap {
  [propName: string]: number;
}

export const COIN_TYPE_TO_SYMBOL_MAP: ICoinTypeToSymbolMap = {
  0: SYMBOL_MAP.BTC,
  60: SYMBOL_MAP.ETH,
  195: SYMBOL_MAP.TRX,
};

export const SYMBOL_TO_COIN_TYPE_MAP: ISymbolToCoinTypeMap = {
  [SYMBOL_MAP.BTC]: 0,
  [SYMBOL_MAP.ETH]: 60,
  [SYMBOL_MAP.TRX]: 195,
};

export enum KeyringMethodEnum {
  GET_ACCOUNT = 'getAccount',
}

export interface GetAccountInterface {
  (words: string, path: string): string;
}

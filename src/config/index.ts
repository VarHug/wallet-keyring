import { IConverterForm } from '../types';
import { SYMBOL_MAP, SYMBOL_TO_COIN_TYPE_MAP } from '../constants';

export const defaultConverterForm: IConverterForm = {
  mnemonic: '',
  symbol: SYMBOL_MAP.BTC,
  purpose: 44,
  coinType: SYMBOL_TO_COIN_TYPE_MAP[SYMBOL_MAP.BTC],
  account: 0,
  change: 0,
  addressIndex: 0,
};

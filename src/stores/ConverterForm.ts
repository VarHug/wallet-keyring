import { makeAutoObservable } from 'mobx';
import * as R from 'ramda';

import { IConverterForm } from '../types';

export interface IConverterFormStore {
  converterForm: IConverterForm;

  derivationPath: string;

  setConverterForm: (converterForm: IConverterForm) => void;
}

export class ConverterFormStore implements IConverterFormStore {
  converterForm: IConverterForm = {
    mnemonic: '',
    symbol: '',
    purpose: '',
    coinType: '',
    account: '',
    change: '',
    addressIndex: '',
  };

  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
  }

  get derivationPath(): string {
    const isEmpty = R.any(R.isEmpty, R.values(this.converterForm));
    if (isEmpty) {
      return '';
    }
    const {
      purpose,
      coinType,
      account,
      change,
      addressIndex,
    } = this.converterForm;
    return `m/${purpose}'/${coinType}'/${account}'/${change}/${addressIndex}`;
  }

  setConverterForm(converterForm: IConverterForm): void {
    this.converterForm = converterForm;
  }
}

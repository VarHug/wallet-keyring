import { makeAutoObservable } from 'mobx';

import { IConverterForm } from '../types';

export interface IConverterFormStore {
  converterForm: IConverterForm;

  derivationPath: string;

  setPath: (path: IConverterForm) => void;
}

export class ConverterFormStore implements IConverterFormStore {
  converterForm: IConverterForm = {
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
    const isEmpty = Object.values(this.converterForm).every(
      (item) => item === ''
    );
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

  setPath(converterForm: IConverterForm): void {
    this.converterForm = converterForm;
  }
}

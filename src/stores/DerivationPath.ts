import { makeAutoObservable } from 'mobx';

import { IPath } from '../types';

interface ISetPath {
  (path: IPath): void;
}

export interface IDerivationPathStore {
  path: IPath;

  pathString: string;

  setPath: ISetPath;
}

export class DerivationPathStoreStore implements IDerivationPathStore {
  path: IPath = {
    purpose: '',
    coinType: '',
    account: '',
    change: '',
    addressIndex: '',
  };

  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
  }

  get pathString(): string {
    const isEmpty = Object.values(this.path).every((item) => item === '');
    if (isEmpty) {
      return '';
    }
    const { purpose, coinType, account, change, addressIndex } = this.path;
    return `m/${purpose}'/${coinType}'/${account}'/${change}/${addressIndex}`;
  }

  setPath(path: IPath): void {
    this.path = path;
  }
}

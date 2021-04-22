import { createContext, useContext } from 'react';
import {
  DerivationPathStoreStore,
  IDerivationPathStore,
} from './DerivationPath';

interface IStores {
  derivationPathStore: IDerivationPathStore;
}

const stores = {} as IStores;
stores.derivationPathStore = new DerivationPathStoreStore();

const storesContext = createContext<IStores>(stores);

export const useStores = (): IStores => {
  return useContext<IStores>(storesContext);
};

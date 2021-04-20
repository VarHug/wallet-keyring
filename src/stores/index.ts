import { createContext, useContext } from 'react';
import { HDPathStore, IHDPathStore } from './HDPath';

interface IStores {
  hdPathStore: IHDPathStore;
}

const stores = {} as IStores;
stores.hdPathStore = new HDPathStore();

const storesContext = createContext<IStores>(stores);

export const useStores = (): IStores => {
  return useContext<IStores>(storesContext);
};

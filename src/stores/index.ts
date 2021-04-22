import { createContext, useContext } from 'react';
import { ConverterFormStore, IConverterFormStore } from './ConverterForm';

interface IStores {
  converterFormStore: IConverterFormStore;
}

const stores = {} as IStores;
stores.converterFormStore = new ConverterFormStore();

const storesContext = createContext<IStores>(stores);

export const useStores = (): IStores => {
  return useContext<IStores>(storesContext);
};

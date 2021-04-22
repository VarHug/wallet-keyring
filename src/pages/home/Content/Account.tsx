import { observer } from 'mobx-react';
import * as R from 'ramda';

import { getKeyring } from '../../../utils';
import { useStores } from '../../../stores';
import { COIN_TYPE_TO_SYMBOL_MAP } from '../../../constants';

const Account: React.FC = () => {
  const { converterFormStore } = useStores();
  const { converterForm, derivationPath } = converterFormStore;

  if (R.isEmpty(derivationPath)) {
    return null;
  }

  const { coinType } = converterForm;
  const symbol = COIN_TYPE_TO_SYMBOL_MAP[Number(coinType)];

  if (!symbol) {
    return <div>不支持的CoinType</div>;
  }

  const keyring = getKeyring(symbol);
  const words = 'abcdefgh';
  const account = keyring.getAccount(words, derivationPath);

  return <div>账户地址为：{account}</div>;
};

export default observer(Account);

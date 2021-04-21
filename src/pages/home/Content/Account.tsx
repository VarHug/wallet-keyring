import { observer } from 'mobx-react';

import { getKeyring } from '../../../utils';
import { useStores } from '../../../stores';
import { COIN_TYPE_TO_SYMBOL_MAP } from '../../../constants';

const Account: React.FC = () => {
  const { hdPathStore } = useStores();
  const { path, pathString } = hdPathStore;

  if (pathString === '') {
    return null;
  }

  const { coinType } = path;
  const symbol = COIN_TYPE_TO_SYMBOL_MAP[Number(coinType)];

  if (!symbol) {
    return <div>不支持的CoinType</div>;
  }

  const keyring = getKeyring(symbol);
  const words = 'abcdefgh';
  const account = keyring.getAccount(words, pathString);

  return <div>账户地址为：{account}</div>;
};

export default observer(Account);

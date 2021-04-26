import { observer } from 'mobx-react';
import * as R from 'ramda';

import { getKeyring } from '../../../utils';
import { useStores } from '../../../stores';

const Account: React.FC = () => {
  const { converterFormStore } = useStores();
  const { converterForm, derivationPath } = converterFormStore;

  if (R.isEmpty(derivationPath)) {
    return null;
  }

  const { symbol, mnemonic } = converterForm;

  const keyring = getKeyring(symbol);
  const account = keyring.getAccount(mnemonic, derivationPath);

  return <div>账户地址为：{account}</div>;
};

export default observer(Account);

import { observer } from 'mobx-react';

import PurposeInput from './PurposeInput';
import CoinTypeInput from './CoinTypeInput';
import AccountInput from './AccountInput';
import ChangeInput from './ChangeInput';
import AddressIndexInput from './AddressIndexInput';
import ConfirmButton from './ConfirmButton';

const DerivationPath = (): React.ReactElement => {
  return (
    <>
      <PurposeInput />
      <CoinTypeInput />
      <AccountInput />
      <ChangeInput />
      <AddressIndexInput />
      <ConfirmButton />
    </>
  );
};

export default observer(DerivationPath);

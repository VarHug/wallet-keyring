import { FormInstance } from 'antd/lib/form';

import MnemonicTextarea from './MnemonicTextarea';
import CoinSelect from './CoinSelect';
import React from 'react';

interface IMnemonicProps {
  form: React.RefObject<FormInstance>;
}

const Mnemonic: React.FC<IMnemonicProps> = (props: IMnemonicProps) => {
  const { form } = props;
  return (
    <>
      <MnemonicTextarea />
      <CoinSelect form={form} />
    </>
  );
};

export default Mnemonic;

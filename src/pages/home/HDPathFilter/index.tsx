import { Form } from 'antd';
import { observer } from 'mobx-react';

import { defaultPath } from '../../../config';
import { IPath } from '../../../types';
import { useStores } from '../../../stores';

import PurposeInput from './PurposeInput';
import CoinTypeInput from './CoinTypeInput';
import AccountInput from './AccountInput';
import ChangeInput from './ChangeInput';
import AddressIndexInput from './AddressIndexInput';
import ConfirmButton from './ConfirmButton';

const layout = {
  // labelCol: { span: 8 },
  // wrapperCol: { span: 16 },
};

const Filter = (): React.ReactElement => {
  const { hdPathStore } = useStores();
  // const { setPath } = hdPathStore;

  const onFinish = (values: IPath) => {
    hdPathStore.setPath(values);
  };

  return (
    <Form {...layout} initialValues={defaultPath} onFinish={onFinish}>
      <PurposeInput />
      <CoinTypeInput />
      <AccountInput />
      <ChangeInput />
      <AddressIndexInput />
      <ConfirmButton />
    </Form>
  );
};

export default observer(Filter);

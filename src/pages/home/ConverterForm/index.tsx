import { Form } from 'antd';

import { defaultConverterForm } from '../../../config';
import { useStores } from '../../../stores';

import Mnemonic from './Mnemonic';
import DerivationPath from './DerivationPath';

const ConverterForm: React.FC = () => {
  const { converterFormStore } = useStores();
  const { setConverterForm } = converterFormStore;

  return (
    <Form initialValues={defaultConverterForm} onFinish={setConverterForm}>
      <Mnemonic />
      <DerivationPath />
    </Form>
  );
};

export default ConverterForm;

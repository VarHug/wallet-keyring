import { Form } from 'antd';

import { defaultConverterForm } from '../../../config';
import { useStores } from '../../../stores';

import DerivationPath from './DerivationPath';

const ConverterForm: React.FC = () => {
  const { converterFormStore } = useStores();
  const { setConverterForm } = converterFormStore;

  return (
    <Form initialValues={defaultConverterForm} onFinish={setConverterForm}>
      <DerivationPath />
    </Form>
  );
};

export default ConverterForm;

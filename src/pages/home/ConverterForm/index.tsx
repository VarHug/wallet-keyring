import { useRef } from 'react';
import { Form } from 'antd';
import { FormInstance } from 'antd/lib/form';

import { defaultConverterForm } from '../../../config';
import { useStores } from '../../../stores';

import Mnemonic from './Mnemonic';
import DerivationPath from './DerivationPath';

const ConverterForm: React.FC = () => {
  const { converterFormStore } = useStores();
  const { setConverterForm } = converterFormStore;
  const formRef = useRef<FormInstance>(null);

  return (
    <Form
      ref={formRef}
      initialValues={defaultConverterForm}
      onFinish={setConverterForm}
    >
      <Mnemonic form={formRef} />
      <DerivationPath />
    </Form>
  );
};

export default ConverterForm;

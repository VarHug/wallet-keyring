import { Form } from 'antd';

import { defaultConverterForm } from '../../../config';
import { IConverterForm } from '../../../types';
import { useStores } from '../../../stores';

import DerivationPath from './DerivationPath';

const ConverterForm: React.FC = () => {
  const { converterFormStore } = useStores();
  const { setPath } = converterFormStore;

  const onFinish = (values: IConverterForm): void => {
    setPath(values);
  };

  return (
    <Form initialValues={defaultConverterForm} onFinish={onFinish}>
      <DerivationPath />
    </Form>
  );
};

export default ConverterForm;

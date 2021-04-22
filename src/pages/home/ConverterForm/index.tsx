import { Form } from 'antd';

import { defaultPath } from '../../../config';
import { IPath } from '../../../types';
import { useStores } from '../../../stores';

import DerivationPath from './DerivationPath';

const ConverterForm: React.FC = () => {
  const { derivationPathStore } = useStores();
  const { setPath } = derivationPathStore;

  const onFinish = (values: IPath): void => {
    setPath(values);
  };

  return (
    <Form initialValues={defaultPath} onFinish={onFinish}>
      <DerivationPath />
    </Form>
  );
};

export default ConverterForm;

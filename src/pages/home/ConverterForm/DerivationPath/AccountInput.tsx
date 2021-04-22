import { Form, InputNumber } from 'antd';

const AccountInput: React.FC = () => {
  return (
    <Form.Item label="Account" name="account">
      <InputNumber min={0} disabled />
    </Form.Item>
  );
};

export default AccountInput;

import { Form, InputNumber } from 'antd';

const ChangeInput: React.FC = () => {
  return (
    <Form.Item label="Change" name="change">
      <InputNumber min={0} disabled />
    </Form.Item>
  );
};

export default ChangeInput;

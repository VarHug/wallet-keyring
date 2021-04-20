import { Form, InputNumber } from 'antd';

const PurposeInput: React.FC = () => {
  return (
    <Form.Item label="Purpose" name="purpose">
      <InputNumber min={0} disabled />
    </Form.Item>
  );
};

export default PurposeInput;

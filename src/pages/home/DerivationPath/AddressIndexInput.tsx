import { Form, InputNumber } from 'antd';

const AddressIndexInput: React.FC = () => {
  return (
    <Form.Item label="AddressIndex" name="addressIndex">
      <InputNumber min={0} />
    </Form.Item>
  );
};

export default AddressIndexInput;

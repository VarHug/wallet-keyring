import { Form, InputNumber } from 'antd';

const CoinTypeInput: React.FC = () => {
  return (
    <Form.Item label="CoinType" name="coinType">
      <InputNumber min={0} />
    </Form.Item>
  );
};

export default CoinTypeInput;

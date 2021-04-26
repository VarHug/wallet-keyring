import { Form, Select } from 'antd';
import { FormInstance } from 'antd/lib/form';

import { SYMBOL_TO_COIN_TYPE_MAP } from '../../../../constants';

const { Option } = Select;

interface ICoinSelectProps {
  form: React.RefObject<FormInstance>;
}

const CoinSelect: React.FC<ICoinSelectProps> = (props: ICoinSelectProps) => {
  const { form } = props;

  const onChange = (symbol: string) => {
    const coinType = SYMBOL_TO_COIN_TYPE_MAP[symbol];
    form.current!.setFieldsValue({ coinType });
  };

  return (
    <Form.Item label="Symbol" name="symbol">
      <Select onChange={onChange}>
        {Object.entries(SYMBOL_TO_COIN_TYPE_MAP).map(([symbol, coinType]) => {
          return (
            <Option key={coinType} value={symbol}>
              {symbol}
            </Option>
          );
        })}
      </Select>
    </Form.Item>
  );
};

export default CoinSelect;

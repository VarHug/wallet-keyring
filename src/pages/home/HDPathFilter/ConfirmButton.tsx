import { Form, Button } from 'antd';
import React from 'react';

const ConfirmButton: React.FC = () => {
  return (
    <Form.Item>
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form.Item>
  );
};

export default ConfirmButton;

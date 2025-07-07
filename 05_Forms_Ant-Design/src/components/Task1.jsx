import { Button, DatePicker, Form, Input } from 'antd';
import './Task1.css';

const onFinish = values => {
  alert(`Info: \nUsername: ${values.username}\nEmail: ${values.email}\nPassword: ${values.password}\nDate of Birth: ${values.dateOfBirth.format('YYYY-MM-DD')}`);
};

const onFinishFailed = errorInfo => {
  alert('Failed:', errorInfo);
};

const Task1 = () => (
  <Form
    name="basic"
    labelCol={{ span: 8 }}
    wrapperCol={{ span: 16 }}
    style={{ maxWidth: 600 }}
    initialValues={{ remember: true }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
    <Form.Item
      label="Username"
      name="username"
      rules={[{ required: true, message: 'Please input your username!' }]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      label="Email"
      name="email"
      rules={[{ required: true, message: 'Please input your email!', type: 'email' }]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      label="Password"
      name="password"
      rules={[{ required: true, message: 'Please input your password!' }]}
    >
      <Input.Password />
    </Form.Item>

    <Form.Item
      label="Date of Birth"
      name="dateOfBirth"
      rules={[{ required: true, message: 'Please input your date of birth!' }]}
    >
        <DatePicker />
    </Form.Item>

    <Form.Item label={null}>
      <Button type="primary" htmlType="submit" id='submit-button'>
        Submit
      </Button>
    </Form.Item>
  </Form>
);
export default Task1;
import { Button, Col, Form, Input, Row, Typography } from 'antd';
import { useEffect, useState } from 'react';

const Soal9 = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
      setIsLoggedIn(true);
    }
  }, []);

  const onFinish = (values) => {
    const payload = {
      username: values.username,
      password: values.password,
    };

    localStorage.setItem('user', JSON.stringify(payload));
    setUser(payload);
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    localStorage.removeItem('user');
    setUser(null);
    setIsLoggedIn(false);
  };

  return (
    <Row gutter={[16, 16]}>
      <Col span={24}>
        <Typography.Title style={{ margin: 0 }} level={5}>
          No 9 :
        </Typography.Title>
      </Col>
      {isLoggedIn ? (
        <>
          <Col span={24}>
            <Typography.Text strong>
              Selamat datang {user.username}
            </Typography.Text>
          </Col>
          <Col span={24}>
            <Button type='primary' block onClick={handleLogout}>
              Logout
            </Button>
          </Col>
        </>
      ) : (
        <Col span={24}>
          <Form layout='vertical' onFinish={onFinish}>
            <Form.Item
              label='Username'
              name='username'
              rules={[
                {
                  required: true,
                  message: 'Please input your username!',
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label='Password'
              name='password'
              rules={[
                {
                  required: true,
                  message: 'Please input your password!',
                },
              ]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item label={null}>
              <Button type='primary' htmlType='submit' block>
                Login
              </Button>
            </Form.Item>
          </Form>
        </Col>
      )}
    </Row>
  );
};

export default Soal9;

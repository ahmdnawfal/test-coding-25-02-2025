import { useState } from 'react';
import { Button, Col, Descriptions, Row, Typography } from 'antd';

/* NO 1 */
import { DATA_USERS } from '../../fakeData';
/* NO 1 */

function Soal1And2() {
  const [users, setUsers] = useState(DATA_USERS || []);

  const onChangeUsers = () => {
    setUsers([
      {
        id: 1,
        name: 'nawfal',
        address: 'jakarta',
        email: 'ahmadnawfal2003@gmail.com',
      },
    ]);
  };

  return (
    <Row gutter={[16, 16]}>
      <Col span={24}>
        <Typography.Title style={{ margin: 0 }} level={5}>
          No 1 & 2 :
        </Typography.Title>
      </Col>
      <Col span={24}>
        {users.map((item) => (
          <Descriptions key={item.id}>
            <Descriptions.Item label='Name'>{item.name}</Descriptions.Item>
            <Descriptions.Item label='Address'>
              {item.address}
            </Descriptions.Item>
            <Descriptions.Item label='Email'>{item.email}</Descriptions.Item>
          </Descriptions>
        ))}
      </Col>
      <Col span={24}>
        <Button onClick={onChangeUsers} type='primary' block>
          Change Users
        </Button>
      </Col>
    </Row>
  );
}

export default Soal1And2;

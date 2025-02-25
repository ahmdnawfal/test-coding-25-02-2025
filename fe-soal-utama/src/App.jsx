import { Col, Divider, Row } from 'antd';
import { Soal1And2, Soal34567, Soal9 } from './components/pages';

function App() {
  return (
    <Row gutter={[16, 16]} style={{ paddingInline: 16 }}>
      <Col span={24}>
        <Soal1And2 />
      </Col>

      <Divider />
      <Col span={24}>
        <Soal34567 />
      </Col>

      <Divider />
      <Col span={24}>
        <Soal9 />
      </Col>
    </Row>
  );
}

export default App;

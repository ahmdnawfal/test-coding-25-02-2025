import { useFetch } from '../../hooks';
import { hashing } from '../../helpers';
import { Col, Row, Table, Typography } from 'antd';
import { columnsSoal34567 } from '../columns';

function Soal34567() {
  const limit = 10;
  const url = `https://jsonplaceholder.typicode.com/posts?_limit=${limit}`;
  const { data, loading, error, setData } = useFetch(url);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  // NO 3
  console.log('No 3:', data);
  // NO 3

  // NO 5
  const handleDelete = (id) => {
    setData((prevData) => prevData.filter((item) => item.id !== id));
  };
  // NO 5

  // NO 6
  const dataDeleteKeyUserId = data.map((item) => {
    const newItem = { ...item };
    delete newItem.userId;
    return newItem;
  });
  console.log('No 6:', dataDeleteKeyUserId);
  // NO 6

  // NO 7
  const dateNow = '25022025';
  const firstName = 'ahmad';
  const inputHashing = dateNow + firstName + 'pria' + 'ifabula';

  const hashValue = hashing(inputHashing);
  console.log('No 7:', hashValue);
  // NO 7

  return (
    <Row gutter={[16, 16]}>
      <Col span={24}>
        <Typography.Title style={{ margin: 0 }} level={5}>
          No 3,4,5,6,7 :
        </Typography.Title>
      </Col>
      {/* NO 4 */}
      <Col span={24}>
        <Table
          rowKey={(record) => record.id}
          pagination={false}
          dataSource={data}
          columns={columnsSoal34567({ handleDelete })}
          scroll={{
            x: 1024,
          }}
        />
      </Col>
      {/* NO 4 */}
    </Row>
  );
}

export default Soal34567;

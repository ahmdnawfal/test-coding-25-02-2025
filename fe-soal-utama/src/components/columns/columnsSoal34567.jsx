import { Button } from 'antd';

const columnsSoal34567 = ({ handleDelete }) => [
  {
    title: 'Id',
    key: 'id',
    dataIndex: 'id',
    width: '10%',
  },
  {
    title: 'User Id',
    key: 'userId',
    dataIndex: 'userId',
    width: '10%',
  },
  {
    title: 'Title',
    key: 'title',
    dataIndex: 'title',
    width: '30%',
  },
  {
    title: 'Body',
    key: 'body',
    dataIndex: 'body',
    width: '30%',
  },
  {
    title: 'Action',
    key: 'action',
    width: '20%',
    align: 'center',
    render: (_, record) => (
      <Button
        color='danger'
        variant='solid'
        onClick={() => handleDelete(record.id)}
      >
        Delete
      </Button>
    ),
  },
];

export default columnsSoal34567;

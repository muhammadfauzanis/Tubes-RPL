import { List, Skeleton } from 'antd';
import { useEffect, useState } from 'react';
import axios from 'axios'

const ReportList = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:5000/laporan`)
      .then((res) => {
        setData(res.data);
      })
      .catch(err => console.log(err))
  }, []);


  return (
    <List
      style={{padding: 30}}
      className="demo-loadmore-list"
      itemLayout="horizontal"
      dataSource={data}
      renderItem={(item) => (
        <List.Item key={item.id}
          // actions={items}
        > 
          <Skeleton avatar title={false} loading={item.loading} active>
            <List.Item.Meta
              title={item.judul}
              description={item.lokasi}
            />
          </Skeleton>
          {item.isi}
        </List.Item>
      )}
    />
  );
};
export default ReportList;

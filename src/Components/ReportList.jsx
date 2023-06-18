import { Avatar, Button, List, Skeleton } from 'antd';
import { useEffect, useState } from 'react';
import axios from 'axios'
import Cookies from 'js-cookie';


const ReportList = () => {
  const [data, setData] = useState([]);
  const [items, setItems] = useState()

  useEffect(() => {
    axios.get(`http://localhost:5000/laporan`)
      .then((res) => {
        setData(res.data);
        if (Cookies.get('id_kategori') === 1) {
          setItems([
            <p>Tambah</p>,
            <p>Edit</p>
          ])
        } else {
          setItems(
            <p>Edit</p>
          )
        }
      });
      
  }, []);


  return (
    <List
      style={{padding: 30}}
      className="demo-loadmore-list"
      itemLayout="horizontal"
      dataSource={data}
      renderItem={(item) => (
        <List.Item key={item.id}
          actions={items}
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

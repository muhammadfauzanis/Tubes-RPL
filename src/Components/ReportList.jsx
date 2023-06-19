import { List} from 'antd';
import { useEffect, useState } from 'react';
import axios from 'axios'
import { AiFillAlert, AiFillEdit, AiOutlinePlusCircle } from 'react-icons/ai';

function ReportList(props) {
  const [data, setData] = useState([]);

  useEffect(() => {
    console.log(props.user)
    axios.get(`http://localhost:5000/laporan`)
      .then((res) => {
        setData([])
        res.data.map((k) => {

          if (parseInt(props.user) <= 2 && k.status === false) {
          setData(res => ([...res, {
            id_laporan: k.id_laporan,
            tujuan: k.tujuan,
            judul: k.judul,
            isi: k.isi,
            lokasi: k.lokasi,
            tanggal_laporan: k.tanggal_laporan,
            status: k.status,
            id_respon: k.id_respon,
            deskripsi: k.deskripsi,
            tanggal_respon: k.tanggal_respon
          }]))
        } else if (props.user === undefined && k.status === true) {
          setData(res => ([...res, {
            id_laporan: k.id_laporan,
            tujuan: k.tujuan,
            judul: k.judul,
            isi: k.isi,
            lokasi: k.lokasi,
            tanggal_laporan: k.tanggal_laporan,
            status: k.status,
            id_respon: k.id_respon,
            deskripsi: k.deskripsi,
            tanggal_respon: k.tanggal_respon
          }]))
        }
        })
      })
      .catch(err => console.log(err))
  }, [props.user]);

  const handleEdit = () => {
    
  }

  const handleAddRespon = () => {

  }

  let itemsEdit;
  if (props.user === '1') {
    itemsEdit = [
      <AiOutlinePlusCircle style={{cursor: 'pointer', fontSize: 24}}  onClick={handleEdit} />,
      <AiFillEdit style={{cursor: 'pointer', fontSize: 24}} onClick={handleAddRespon} />
    ]
  } else if (props.user === '2') {
    itemsEdit =[
      <AiFillEdit style={{cursor: 'pointer', fontSize: 24}} onClick={handleAddRespon} />,
    ]
  }

  


  return (
    <>
    <h2 className='text-white text-2xl text-center font-semibold pt-12'>Laporan Pengaduan</h2>
    <List
    
      size='large'
      className="p-12 text-white "
      itemLayout="horizontal"
      dataSource={data}
      renderItem={(item) => (
        <List.Item key={item.id}
        actions={itemsEdit}
        style={{
          fontSize: 18,
          color: 'white',
          marginBottom: 14
        }}
        > 
            <List.Item.Meta
            avatar={<AiFillAlert color='black' />}
              title={item.judul}
              description={item.lokasi}
            />
          {item.isi}

          {item.deskripsi !== null && 
          <List.Item.Meta
          style={{
            marginLeft: 40,
            marginTop: 5,
            fontSize: 25,
            borderRadius: 20,
            padding: 8,
            border: '1px solid white',
            width: '50%'
          }}
              title={item.deskripsi}
            />
          }
        </List.Item>
      )}
    />
    </>
  );
};
export default ReportList;

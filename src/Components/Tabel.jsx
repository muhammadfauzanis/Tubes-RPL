import { Space, Table, Tag } from 'antd';
import { useEffect, useState } from 'react';
const columnLaporan = [
    {
        title: 'Judul',
        dataIndex: 'judul',
        key: 'judul',
    },
    {
        title: 'Isi',
        dataIndex: 'isi',
        key: 'isi',
    },
    {
        title: 'Lokasi',
        dataIndex: 'lokasi',
        key: 'lokasi',
    },
    {
        title: 'Tujuan',
        dataIndex: 'tujuan',
        key: 'tujuan',
    },
    {
        title: 'Tanggal Laporan',
        dataIndex: 'tanggal_laporan',
        key: 'tanggal_laporan',
    },
    {
        title: 'Respon Laporan',
        dataIndex: 'respon_laporan',
        key: 'respon_laporan',
    },
    {
        title: 'Tanggal Respon',
        dataIndex: 'tanggal_respon',
        key: 'tanggal_respon',
    },
];

const columnInstansi = [
  {
      title: 'Nama',
      dataIndex: 'nama',
      key: 'nama',
  },
  {
    title: 'Username',
    dataIndex: 'username',
    key: 'username',
  },
  {
    title: 'Password',
    dataIndex: 'password',
    key: 'password',
  },
  {
    title: 'Jumlah Laporan',
    dataIndex: 'jumlah_laporan',
    key: 'jumlah_laporan',
  },
];


const Tabel = (props) => {
  const [columnTable, setColumnTable] = useState()
  useEffect(() => {
    // alert(props)
    if (props.name === 'laporan') {
      setColumnTable(columnLaporan)
    } else if (props.name === 'instansi') {
      setColumnTable(columnInstansi)
    }

  }, [props.name])

  const data = [
    {
      judul: '1',
    },
    {
      judul: '1',
    },
    {
      judul: '1',
    },
    {
      judul: '1',
    },
    {
      judul: '1',
    },
    {
      judul: '1',
    },
    {
      judul: '1',
    },
    {
      judul: '1',
    },
    
  ];

  return (
    <Table 
    columns={columnTable} 
    dataSource={data} 
    pagination={{
        pageSize: 20,
    }}
    scroll={{
        y: 350
    }}/>
  )
  };


export default Tabel;
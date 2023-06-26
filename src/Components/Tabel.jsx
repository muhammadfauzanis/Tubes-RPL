import {Table} from 'antd';
import axios from 'axios';
import { useEffect, useState } from 'react';

const Tabel = (props) => {

  const [columnTable, setColumnTable] = useState()
  const [filtersTujuan, setFiltersTujuan] = useState([])
  const [data, setData] = useState([])

  useEffect(() => {
    setData([])
    let url;
    if (props.name === 'laporan') {
      setColumnTable(columnLaporan)
      url = `https://expressjs-server-production-da81.up.railway.app/laporan`
      
    } else if (props.name === 'instansi') {
      url = `https://expressjs-server-production-da81.up.railway.app/data-instansi`
      setColumnTable(columnInstansi)
    }
    axios.get(url)
    .then(res => {
      setData(res.data.data)
      axios.get( `https://expressjs-server-production-da81.up.railway.app/instansi`)
      .then(res => {
        setFiltersTujuan([])
        res.data.data.map((k, i) => {
          setFiltersTujuan((res) => [
            ...res, 
            {
              text: k.nama,
              value: k.nama
            }
          ])
        })
      })
    })
    .catch(err => {
      console.log(err)
    })

  }, [props.name])


  const columnLaporan = [
    {
        title: 'Judul',
        dataIndex: 'judul',
        key: 'judul',
        align: 'center',
    },
    {
        title: 'Isi',
        dataIndex: 'isi',
        key: 'isi',
        align: 'center',
    },
    {
        title: 'Lokasi',
        dataIndex: 'lokasi',
        key: 'lokasi',
        align: 'center',
    },
    {
        title: 'Tujuan',
        dataIndex: 'tujuan',
        key: 'tujuan',
        align: 'center',
        filters: filtersTujuan,
        onFilter: (value, record) => record.tujuan.indexOf(value) === 0,
    },
    {
        title: 'Tanggal Laporan',
        dataIndex: 'tanggal_laporan',
        key: 'tanggal_laporan',
        align: 'center',
        render: (res) => <p>{res.substr(0, 10)}</p>
    },
    {
        title: 'Respon Laporan',
        dataIndex: 'deskripsi',
        key: 'deskripsi',
        align: 'center',
    },
    {
        title: 'Tanggal Respon',
        dataIndex: 'tanggal_respon',
        key: 'tanggal_respon',
        align: 'center',
        render: (res) => {
          if (res !== null ) {
            return (
            <p>{res.substring(0, 10)}</p>
            )
          } 
        } 

    },
];

const columnInstansi = [
  {
      title: 'Nama',
      dataIndex: 'nama',
      key: 'nama',
      align: 'center',
  },
  {
    title: 'Username',
    dataIndex: 'username',
    key: 'username',
    align: 'center',
  },
  {
    title: 'Password',
    dataIndex: 'password',
    key: 'password',
    align: 'center',
  },
  {
    title: 'Jumlah Laporan',
    dataIndex: 'count',
    key: 'count',
    align: 'center',
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
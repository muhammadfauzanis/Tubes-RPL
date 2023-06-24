import {PieChartOutlined, OrderedListOutlined, BankOutlined, UserAddOutlined } from '@ant-design/icons';
import {Menu } from 'antd';
import { useEffect, useState } from 'react';
import ModalAddInstansi from './ModalAddInstansi';

  function getItem(label, key, icon, children, type) {
    return {
      key,
      icon,
      children,
      label,
      type,
    };
  }
  const items = [
    getItem('Grafik Laporan', '1', <PieChartOutlined />),
    getItem('Laporan', '2', <OrderedListOutlined  />),
    getItem('Instansi', '3', <BankOutlined />),
    getItem('Tambah Instansi', '4', <UserAddOutlined />),
  ];
  
  
  function Sidebar() {

    const [content, setContent] = useState()
    const [keyContent, setKeyContent] = useState(1)

    useEffect(() => {
        switch (keyContent) {            
            case 1:
                setContent(<h1>Grafik</h1>)
                break;

            case 2:
                setContent(<h1>Table Laporan</h1>)
                break;
            
            case 3:
                setContent(<h1>Table Instansi</h1>)
                break;

             case 4:
                setContent(<ModalAddInstansi />)
                break;

            default:
                setContent(<h1>Grafik</h1>)
                break;
        }
    }, [keyContent])
    

    return (
        <>
            <div
                style={{
                width: 256,
                }}
            >
                <Menu
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                mode="inline"
                items={items}
                onSelect={(e) => setKeyContent(parseInt(e.key))}
                />
            </div>

            <div style={{
                width: '76%',
                height: '65%',
                position: 'absolute',
                top: 16,
                left: 365,
                backgroundColor: 'white',
                padding: 20
                
                
            }}>
            <div className="text-white h-full mt-24 bg-black">{content}</div>
            </div>
        </>
    );
  };
  export default Sidebar;
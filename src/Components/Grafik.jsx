import { Card, Col, Row, Statistic } from 'antd';
import axios from 'axios';
import { useEffect, useState } from 'react';

function Grafik() {
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get(`https://expressjs-server-production-da81.up.railway.app/jumlah-laporan`)
        .then(res => {
            setData(res.data.data)
        })
        .catch(err => {
            console.log(err)
        })
    }, [])

    return (
        <div>
            <Row gutter={16} >
                <Col span={8}>
                    <Card bordered={true}>
                        <Statistic
                        title="Laporan"
                        value={data.map((k, i) => {
                            return k.laporan
                        })}
                        valueStyle={{
                            color: '#3f8600',
                        }}/>
                    </Card>
                </Col>
            </Row>
                        
            <Row gutter={20}>
                <Col span={5}>
                    <Card bordered={true}>
                        <Statistic
                        title="Belum Diterima"
                        value={data.map((k, i) => {
                            return k.belum_diterima
                        })}
                        valueStyle={{
                            color: '#cf1322',
                        }}/>
                    </Card>
                </Col>
                
                <Col span={5}>
                    <Card bordered={true}>
                        <Statistic
                        title="Belum Direspon"
                        value={data.map((k, i) => {
                            return k.belum_direspon
                        })}
                        valueStyle={{
                            color: '#cf1322',
                        }}/>
                    </Card>
                </Col>
                        
                <Col span={5}>
                    <Card bordered={true}>
                        <Statistic
                        title="Sudah Direspon"
                        value={data.map((k, i) => {
                            return k.sudah_direspon
                        })}
                        valueStyle={{
                            color: '#cf1322',
                        }}/>
                    </Card>
                </Col>
            </Row> 
        </div>
        )

};
export default Grafik;
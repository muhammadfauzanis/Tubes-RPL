import { ArrowDownOutlined, ArrowUpOutlined } from '@ant-design/icons';
import { Card, Col, Row, Statistic } from 'antd';
const Grafik = () => (
    <>
        <Row gutter={16} >
            <Col span={8}>
            <Card bordered={true}>
                <Statistic
                title="Laporan"
                value={11}
                valueStyle={{
                    color: '#3f8600',
                }}
                />
            </Card>
            </Col>
        </Row>
        <Row gutter={20}>
        <Col span={5}>
            <Card bordered={true}>
                <Statistic
                title="Belum Diterima"
                value={9.3}
                valueStyle={{
                    color: '#cf1322',
                }}
                />
            </Card>
            </Col>
            <Col span={5}>
            <Card bordered={true}>
                <Statistic
                title="Belum Direspon"
                value={9.3}
                valueStyle={{
                    color: '#cf1322',
                }}
                />
            </Card>
            </Col>
            <Col span={5}>
            <Card bordered={true}>
                <Statistic
                title="Sudah Direspon"
                value={9.3}
                valueStyle={{
                    color: '#cf1322',
                }}
                />
            </Card>
            </Col>
        </Row>
    </>
  
);
export default Grafik;
import { Button, Form, Modal, Input } from 'antd';
import axios from 'axios';
import { useState } from 'react';
import { BsPlusCircle } from 'react-icons/bs';
  
  function ModalAddRespon(props) {
    
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [form] = Form.useForm()
    const showModal = () => {
        setIsModalOpen(true);
        console.log(props.id)
    };
    
    const handleCancel = () => {
        setIsModalOpen(false);
        form.resetFields()
    };

    const onFinish = (values) => {
        let addRespon = {
            "id": props.id,
            "deskripsi": values.deskripsi
        }
        axios.post(`https://expressjs-server-production-da81.up.railway.app/respon-laporan`, addRespon)
        .then(res => {

            window.location.reload(false)
        })
        .catch(err => console.log(err))
    };
    
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <>
            <Button type="primary" onClick={showModal} icon={<BsPlusCircle />} />
                
            <Modal title="Tambah Respon Laporan" open={isModalOpen} onCancel={handleCancel} footer={null} >
                <Form
                form={form}
                name="basic"
                labelCol={{
                    span: 8,
                }}
                wrapperCol={{
                    span: 16,
                }}
                style={{
                    maxWidth: 600,
                }}
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
                layout='vertical'
                >
                <Form.Item
                label="Deskripsi"
                name="deskripsi"
                rules={[
                    {
                    required: true,
                    message: 'Silahkan masukkan respon laporan',
                    },
                ]}
                >
                <Input />
                </Form.Item>


                <Form.Item
                wrapperCol={{
                    offset: 8,
                    span: 16,
                }}
                >
                <Button type="text" htmlType="submit">
                    Submit
                </Button>
                </Form.Item>
                </Form>
            </Modal>
      </>
    );
  }
  
  export default ModalAddRespon;
  
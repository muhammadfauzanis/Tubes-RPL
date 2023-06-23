import { Button, Form, Modal, Input } from 'antd';
import axios from 'axios';
import { useState } from 'react';
import { BsPlusCircle } from 'react-icons/bs';
  
  function ModalAddInstansi(props) {
    
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
        console.log(values)
        // axios.post(``, addRespon)
        // .then(res => {

        //     window.location.reload(false)
        // })
        // .catch(err => console.log(err))
    };
    
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <>
            <Button type="primary" onClick={showModal} icon={<BsPlusCircle />} >Tambah Instansi</Button>
                
            <Modal title="Tambah Instansi" open={isModalOpen} onCancel={handleCancel} footer={null} >
                <Form
                form={form}
                name="basic"
                labelCol={{
                    span: 24,
                }}
                wrapperCol={{
                    span: 1000,
                }}
                style={{
                    width: '100%'
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
                label="Nama Instansi"
                name="nama"
                rules={[
                    {
                    required: true,
                    message: 'Silahkan masukkan nama instansi',
                    },
                ]}
                >
                <Input />
                </Form.Item>

                <Form.Item
                label="Username"
                name="username"
                rules={[
                    {
                    required: true,
                    message: 'Silahkan masukkan username',
                    },
                ]}
                >
                <Input />
                </Form.Item>

                <Form.Item
                label="Password"
                name="password"
                rules={[
                    {
                    required: true,
                    message: 'Silahkan masukkan kata sandi',
                    },
                ]}
                >
                <Input />
                </Form.Item>


                <Form.Item
                style={{
                  marginLeft: 180
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
  
  export default ModalAddInstansi;
  
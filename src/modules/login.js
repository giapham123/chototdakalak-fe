import { Button, Checkbox, Form, Input, Modal } from 'antd';
import React, { useEffect, useState } from 'react';
import '../css/login.css'
import Regis from './regis'

const Login = ({ isShow, setIshow }) => {
    const [isShowDialogRegis, setIsShowDialogRegis] = useState(false)
    const hideLogin = () => {
        setIshow(false);
    };
    const onClose = () => {
        setIsShowDialogRegis(false)
      }
      const openPopupRegis = () => {
        setIsShowDialogRegis(true)
      };
    return (
        <div >
            <Modal
                title="Đăng nhập"
                open={isShow}
                onCancel={hideLogin}
                footer={null}
            >
                <Form
                    name="regis-form"
                // onFinish={handleLogin}
                >
                    <Form.Item
                        name="username"
                        rules={[{ required: true, message: 'Please enter your username' }]}
                    >
                        <Input placeholder="Username" />
                    </Form.Item>

                    <Form.Item
                        name="password"
                        rules={[{ required: true, message: 'Please enter your password' }]}
                    >
                        <Input.Password placeholder="Password" />
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit">
                            Đăng nhập
                        </Button>
                        <Button type="default" htmlType="submit" style={{ marginLeft: "5px" }} onClick={openPopupRegis}>
                            Đăng ký
                        </Button>
                    </Form.Item>
                </Form>
            </Modal>
            <Regis isShowRegis={isShowDialogRegis} setIshowRegis={onClose} />
        </div>
    )
};
export default Login;

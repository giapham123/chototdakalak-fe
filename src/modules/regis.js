import { Button, Checkbox, Form, Input, Modal } from 'antd';
import React, { useEffect, useState } from 'react';
import '../css/login.css'

const Regis = ({ isShowRegis, setIshowRegis }) => {
    const hideLogin = () => {
        setIshowRegis(false);
    };
    return (
        <div >
            <Modal
                title="Đăng ký tài khoản"
                open={isShowRegis}
                onCancel={hideLogin}
                footer={null}
            >
                <Form
                    name="login-form"
                // onFinish={handleLogin}
                >
                    <Form.Item
                        name="username"
                        rules={[{ required: true, message: 'Vui lòng nhập tên tài khoản' }]}
                    >
                        <Input placeholder="Tên tài khoản" />
                    </Form.Item>

                    <Form.Item
                        name="password"
                        rules={[{ required: true, message: 'Vui lòng nhập mật khẩu' }]}
                    >
                        <Input.Password placeholder="Mật Khẩu" />
                    </Form.Item>

                    <Form.Item
                        name="Email"
                        rules={[{ required: true, message: 'Vui lòng nhập email' }]}
                    >
                        <Input placeholder="Email" />
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit">
                            Đăng ký
                        </Button>
                    </Form.Item>
                </Form>
            </Modal>
        </div>
    )
};
export default Regis;

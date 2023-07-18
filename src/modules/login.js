import { Button, Checkbox, Form, Input, Modal } from 'antd';
import React, { useEffect, useState } from 'react';
import '../css/login.css'
import Regis from './regis'
import { login } from '../actions/loginAction'
import { useSelector, useDispatch } from 'react-redux'
import Service from '../service';
import axios from 'axios';

const Login = ({ isShow, setIshow }) => {
    const dispatch = useDispatch()
    const loginState = useSelector(state => state.login);
    const [isShowDialogRegis, setIsShowDialogRegis] = useState(false)
    useEffect(() => {
        axios.defaults.headers.common['Authorization'] = `Bearer ${loginState.token}`;
        Service.setToken(loginState.token)
    }, [loginState]);
    const hideLogin = () => {
        setIshow(false);
    };
    const onClose = () => {
        setIsShowDialogRegis(false)
    }
    const openPopupRegis = () => {
        setIsShowDialogRegis(true)
    };
    const handleLogin = () => {
        var param = {
            "login":"giapham123@gmail.com",
            "password":"giapham123"
        }
        dispatch(login(param))
    }
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
                    onFinish={handleLogin}
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

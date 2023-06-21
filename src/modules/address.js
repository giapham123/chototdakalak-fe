import React, { useState } from 'react';
import { Input, Modal, AutoComplete, Form } from 'antd';

const Address = ({ isShow, setIshow, onTest }) => {
    const options = [
        { value: 'Apple', label: 'Apple' },
        { value: 'Banana', label: 'Banana' },
        { value: 'Cherry', label: 'Cherry' },
        { value: 'Durian', label: 'Durian' },
        { value: 'Elderberry', label: 'Elderberry' }
    ];
    const truyen = () => {
        onTest("hello");
    }
    const [form] = Form.useForm();
    return (
        <div>
            <Modal
                title="Địa Chỉ"
                visible={isShow}
                onCancel={() => setIshow()}
                onOk={truyen}
            >
                <Form
                    name="wrap"
                    labelCol={{ flex: '110px' }}
                    labelAlign="left"
                    labelWrap
                    wrapperCol={{ flex: 4 }}
                    colon={false}
                    style={{ maxWidth: 600 }}
                >
                    <Form.Item
                        label="Tỉnh, Thành Phố"
                        name="category"
                        rules={[{ required: true, message: 'Vui lòng chọn loại sản phẩm' }]}
                    >
                        <AutoComplete
                            // style={{ width: '100%' }}
                            options={options}
                            placeholder="Tỉnh, Thành Phố"
                            filterOption={(inputValue, option) =>
                                option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
                            }
                        />
                    </Form.Item>

                    <Form.Item
                        label="Quận, Huyện, Xã"
                        name="category"
                        rules={[{ required: true, message: 'Vui lòng chọn loại sản phẩm' }]}
                    >
                        <AutoComplete
                            style={{ width: '100%', paddingTop: '10px' }}
                            options={options}
                            placeholder="Quận, Huyện, Xã"
                            filterOption={(inputValue, option) =>
                                option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
                            }
                        />
                    </Form.Item>
                    <Form.Item
                        label="Phường, Xã, Thị Trấn"
                        name="category"
                        rules={[{ required: true, message: 'Vui lòng chọn loại sản phẩm' }]}
                    >
                        <AutoComplete
                            style={{ width: '100%', paddingTop: '10px' }}
                            options={options}
                            placeholder="Phường, Xã, Thị Trấn"
                            filterOption={(inputValue, option) =>
                                option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
                            }
                        />
                    </Form.Item>
                    <Form.Item
                        label="Địa Chỉ Cụ Thể"
                        name="category"
                        rules={[{ required: true, message: 'Vui lòng chọn loại sản phẩm' }]}
                    >
                        <Input />
                    </Form.Item>
                </Form>
            </Modal>
        </div>
    );
};

export default Address;
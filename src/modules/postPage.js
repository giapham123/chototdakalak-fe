import React, { useEffect, useState } from 'react';
import { Dimensions } from 'react-native';
import '../css/homeStyle.css'
import { MinusCircleOutlined, PlusOutlined, UploadOutlined } from '@ant-design/icons';
import { Card, Row, Col, Button, Space, List, Skeleton, Form, Input, Select, Typography, Upload } from 'antd';
import Address from './address';

const { TextArea } = Input;
const { Title } = Typography;
const { Option } = Select;
const areas = [
    {
        label: 'Xe Cộ',
        value: 'xeco',
    },
    {
        label: 'Đồ Điện Tử',
        value: 'dodientu',
    },
];
const sights = {
    xeco: ['Kích Thước', 'Mẫu Mã', 'Năm Sản Xuất'],
    dodientu: ['Xuất Sứ', 'Tình Trạng'],
};
const normFile = (e) => {
    if (Array.isArray(e)) {
        return e;
    }
    return e?.fileList;
};
function PostPage() {
    const [isShowDialogAddress, setIsShowDialogAddress] = useState(false)
    const [form] = Form.useForm();
    const handleChange = () => {
        form.setFieldsValue({
            sights: [],
        });
    };
    const onClose = () => {
        setIsShowDialogAddress(false)
    }
    const onTest = (data) => {
        console.log(data);
    };

    const [fileList, setFileList] = useState();
    const onPreview = async (file) => {
        let src = file.url;
        if (!src) {
            src = await new Promise((resolve) => {
                const reader = new FileReader();
                reader.readAsDataURL(file.originFileObj);
                reader.onload = () => resolve(reader.result);
            });
        }
        const image = new Image();
        image.src = src;
        const imgWindow = window.open(src);
        imgWindow?.document.write(image.outerHTML);
    };
    const handleClick = () => {
        console.log(isShowDialogAddress)
        setIsShowDialogAddress(true)
        // Add your custom logic here
    };
    return (
        <>
            <div className='container'>
                <Space direction="vertical" size="middle" style={{ display: 'flex', marginTop: '10px', marginBottom: "10px" }}>
                    <Card>
                        <Row >
                            <Col xs={24} sm={10} md={8} lg={4} xl={6} align="middle" style={{ Align: "center" }}>
                                <Title level={5}>Thêm Hình Ảnh</Title>
                                <Form
                                    labelCol={{ span: 4 }}
                                    layout="horizontal"
                                    style={{ maxWidth: 600, marginTop: 8 }}
                                >
                                    <Form.Item valuePropName="fileList" getValueFromEvent={normFile}>
                                        <Upload multiple={true} accept="*.*" action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                                            listType="picture-card"
                                            fileList={fileList}
                                            onPreview={onPreview}>
                                            <div>
                                                <UploadOutlined />
                                                <div style={{ marginTop: 8 }}>Upload</div>
                                            </div>
                                        </Upload>
                                    </Form.Item>
                                </Form>
                            </Col>
                            <Col xs={22} sm={24} md={24} lg={18} xl={18} align="middle" style={{ Align: "center" }}>
                                <Form
                                    labelCol={{ span: 4 }}
                                    form={form}
                                    // wrapperCol={{ span: 14 }}
                                    layout="horizontal"
                                // style={{ maxWidth: 600 }}
                                >
                                    <Title level={3}>Thêm Sản Phẩm Mới</Title>

                                    <Form.Item
                                        label="Loại Sản Phẩm"
                                        name="category"
                                        rules={[{ required: true, message: 'Vui lòng chọn loại sản phẩm' }]}
                                    >
                                        <Select options={areas} onChange={handleChange} >
                                        </Select>
                                    </Form.Item>

                                    <Form.Item
                                        label="Tên Sản Phẩm"
                                        name="ProductName"
                                        rules={[{ required: true, message: 'Vui lòng nhập tên sản phẩm' }]}
                                    >
                                        <Input />
                                    </Form.Item>

                                    <Form.Item
                                        label="Price"
                                        name="price"
                                        rules={[{ required: true, message: 'Vui lòng nhập giá sản phẩm' }]}
                                    >
                                        <Input type="number" step="0.01" />
                                    </Form.Item>

                                    <Form.Item
                                        label="Mô Tả"
                                        name="description"
                                        rules={[{ required: true, message: 'Vui lòng nhập mô tả' }]}
                                    >
                                        <TextArea rows={4} />
                                    </Form.Item>
                                    <Form.Item
                                        label="Thông Tin Chi Tiết" name="description" rules={[{ required: true, message: 'Vui lòng nhập mô tả' }]}>
                                        <Form.List name="sights">
                                            {(fields, { add, remove }) => (
                                                <>
                                                    {fields.map((field) => (
                                                        <Space key={field.key} align="baseline">
                                                            <Form.Item
                                                                noStyle
                                                                shouldUpdate={(prevValues, curValues) =>
                                                                    prevValues.area !== curValues.area || prevValues.sights !== curValues.sights
                                                                }
                                                            >
                                                                {() => (
                                                                    <Form.Item
                                                                        {...field}
                                                                        name={[field.name, 'sight']}
                                                                        rules={[
                                                                            {
                                                                                required: true,
                                                                                message: 'Missing sight',
                                                                            },
                                                                        ]}
                                                                    >
                                                                        <Select
                                                                            disabled={!form.getFieldValue('category')}
                                                                            style={{
                                                                                width: 130,
                                                                            }}
                                                                        >
                                                                            {(sights[form.getFieldValue('category')] || []).map((item) => (
                                                                                <Option key={item} value={item}>
                                                                                    {item}
                                                                                </Option>
                                                                            ))}
                                                                        </Select>
                                                                    </Form.Item>
                                                                )}
                                                            </Form.Item>
                                                            <Form.Item
                                                                {...field}
                                                                label="Mô Tả"
                                                                name={[field.name, 'Mô tả']}
                                                                rules={[
                                                                    {
                                                                        required: true,
                                                                        message: 'Missing price',
                                                                    },
                                                                ]}
                                                            >
                                                                <Input />
                                                            </Form.Item>

                                                            <MinusCircleOutlined onClick={() => remove(field.name)} />
                                                        </Space>
                                                    ))}

                                                    <Form.Item>
                                                        <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                                                            Thêm Thông Tin
                                                        </Button>
                                                    </Form.Item>
                                                </>
                                            )}
                                        </Form.List>
                                    </Form.Item>
                                    <Form.Item
                                        label="Địa Chỉ"
                                        name="address"
                                        rules={[{ required: true, message: 'Vui lòng nhập địa chỉ' }]}
                                    >
                                        <Input onClick={handleClick} />
                                    </Form.Item>
                                    <Address isShow={isShowDialogAddress} setIshow={onClose} onTest={onTest} />
                                    <Form.Item>
                                        <Button type="primary" htmlType="submit">
                                            Đăng Bài
                                        </Button>
                                    </Form.Item>
                                </Form>
                            </Col>
                        </Row>
                    </Card>
                </Space>
            </div>
        </>
    )
}

export default PostPage;
import React from 'react';
import { Dimensions } from 'react-native';
import '../css/homeStyle.css'
import { Card, List, Row, Col, Button, Space } from 'antd';
import { home1 } from '../lsData/homeData'
import { Link } from 'react-router-dom';

function PersonalPage() {
    const { Meta } = Card;

    const list = []
    home1.forEach((product) => {
        list.push(
            <Col span={8} className='itemsCss'>
                <Card
                    cover={<img alt="example" src='https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png' />}
                >
                    <Meta className='styleMeta' title={product.name} description={product.price} />
                </Card>
            </Col>
        )
    })

    return (
        <>
            <div className='container'>
                <Row >
                    <Col xs={24} sm={8} md={8} lg={4} xl={4} align="middle" style={{ Align: "center" }}>
                        <Card
                            title="Shop Introduction"
                            cover={<img alt="Shop" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />}
                        >
                            <p>Welcome to our shop! We offer a wide range of products to meet your needs.</p>
                            <p>Visit us today and explore our collection of high-quality items.</p>
                        </Card>
                    </Col>
                    <Col xs={24} sm={12} md={18} lg={18} xl={20}>
                        <Card title="Tin Đăng Mới">
                            <List
                                grid={{
                                    gutter: 16,
                                    xs: 2,
                                    sm: 2,
                                    md: 4,
                                    lg: 4,
                                    xl: 4,
                                    xxl: 3,
                                }}
                                dataSource={home1}
                                renderItem={(item) => (
                                     <Link to={{
                                        pathname: `/details/${item.productId}`
                                    }}>
                                    <List.Item>
                                        <Card
                                            style={{ height: 300 }}
                                            hoverable
                                            cover={<img width={272} height={200}
                                                alt="logo" src={item.img} />}
                                        >
                                            <Meta className='styleMeta' title={item.name} />
                                            <List.Item.Meta title={<div style={{ color: '#B70404' }}>{item.price}</div>} description="12h, krong ana, daklak" />
                                        </Card>
                                    </List.Item>
                                    </Link>
                                )}
                            />
                            <Space direction="vertical" style={{ width: '100%', padding: 10, alignItems: 'center' }}>
                                <Button block>
                                    Xem Thêm
                                </Button>
                            </Space>
                        </Card>
                    </Col>
                </Row>
            </div>
        </>
    )
}
const win = Dimensions.get('window');
const mystyle = {
    width: '100%',
    height: win.height / 2
};

export default PersonalPage;
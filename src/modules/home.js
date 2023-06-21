import React from 'react';
import { Dimensions } from 'react-native';
import '../css/homeStyle.css'
import { Card, Button, Space, List, Avatar } from 'antd';
import { home1, danhMuc } from '../lsData/homeData'
import { Link } from 'react-router-dom';

function Home() {
    const { Meta } = Card;

    return (
        <>

            <img
                style={mystyle}
                // src={require('../img/pannel.jpg')} 
                src='https://antimatter.vn/wp-content/uploads/2022/05/background-dep-1-1200x676.jpg'
            />

            <div className='container'>
                <Card title="Khám Phá Danh Mục">
                    <List
                        grid={{
                            gutter: 16,
                            xs: 4,
                            sm: 4,
                            md: 6,
                            lg: 6,
                            xl: 8,
                            xxl: 4,
                        }}
                        dataSource={danhMuc}
                        renderItem={(item) => (
                            <Link to={`/all-product/${item.url}`}>
                                <List.Item>
                                    <List.Item.Meta
                                        avatar={<Avatar size={{ xs: 70, sm: 70, md: 100, lg: 100, xl: 100, xxl: 120 }} src={item.img} shape="square" />}
                                    />
                                    <Space direction="horizontal" style={{ width: '100%', justifyContent: 'center' }}>
                                        <span>{item.name}</span>
                                    </Space>
                                </List.Item>
                            </Link>
                        )}
                    />
                </Card>
                <Card title="Tin Đăng Mới">
                    <List
                        grid={{
                            gutter: 16,
                            xs: 2,
                            sm: 2,
                            md: 4,
                            lg: 4,
                            xl: 5,
                            xxl: 3,
                        }}
                        dataSource={home1}
                        renderItem={(item) => (
                            <Link to="/details">
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
            </div>
        </>
    )
}
const win = Dimensions.get('window');
const mystyle = {
    width: '100%',
    height: win.height / 2
};
export default Home;
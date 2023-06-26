import React from 'react';
import { Dimensions } from 'react-native';
import '../css/homeStyle.css'
import { Card, Button, Space, List, Avatar } from 'antd';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import { getAllCate, getNewestProduct } from '../actions/homeActions'
import { useEffect } from 'react';

function Home() {
    const { Meta } = Card;
    const dispatch = useDispatch()
    const rsCate = useSelector(state => state.cate);

    useEffect(() => {
        dispatch(getAllCate())
        dispatch(getNewestProduct())
    }, []);
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
                        dataSource={rsCate.allCate.data}
                        renderItem={(item) => (
                            <Link to={`/all-product/${item.cateCd}`}>
                                <List.Item>
                                    <List.Item.Meta
                                        avatar={<Avatar size={{ xs: 70, sm: 70, md: 100, lg: 100, xl: 100, xxl: 120 }} src={item.url} shape="square" />}
                                    />
                                    <Space direction="horizontal" style={{ width: '100%', justifyContent: 'center', textAlign: 'center' }}>
                                        <span>{item.cateNm}</span>
                                    </Space>
                                </List.Item>
                            </Link>
                        )}
                    />
                </Card>
                <Card title="Tin Đăng Mới" style={{ marginTop: '10px' }}>
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
                        dataSource={rsCate.allDataHome.data}
                        renderItem={(item) => (
                            <Link to="/details">
                                <List.Item>
                                    <Card
                                        style={{ height: 300 }}
                                        hoverable
                                        cover={<img width={272} height={200}
                                            alt="logo" src={item.image} />}
                                    >
                                        <Meta className='styleMeta' title={item.name} />
                                        <List.Item.Meta title={<div style={{ color: '#B70404' }}>{item.price}</div>} description="5 phút trước, Krong Ana" />
                                    </Card>
                                </List.Item>
                            </Link>
                        )}
                    />
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
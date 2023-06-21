import React, { useEffect, useState } from 'react';
import { Dimensions } from 'react-native';
import '../css/homeStyle.css'
import { Card, Row, Col, Button, Space, List, Skeleton } from 'antd';
import { home1 } from '../lsData/homeData'

function AllProduct() {
    const { Meta } = Card;
    const [initLoading, setInitLoading] = useState(true);
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);
    const [list, setList] = useState([]);
    useEffect(() => {
        setInitLoading(false);
        setData(home1);
        setList(home1);
    }, []);
    const onLoadMore = () => {
        setLoading(true);
        setList(
            list.concat({
                img: '',
                name: '',
                price: '',
                loading: true
            }, {
                img: '',
                name: '',
                price: '',
                loading: true
            }
            ),
        );
        setTimeout(() => {
            setList(
                list.concat({
                    img: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png',
                    name: 'Example 1',
                    price: '20000',
                    loading: false
                },
                    {
                        img: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png',
                        name: 'Example 1',
                        price: '20000',
                        loading: false
                    }

                ),
            );
            window.dispatchEvent(new Event('resize'));
            setLoading(false);
        }, 1000);

    };
    const loadMore =
        !initLoading && !loading ? (
            <div
                style={{
                    textAlign: 'center',
                    marginTop: 12,
                    height: 32,
                    lineHeight: '32px',
                }}
            >
                <Button onClick={onLoadMore}>loading more</Button>
            </div>
        ) : null;


    return (
        <>
            <div className='container'>
                <Card title="Tất Cả Sản Phẩm">
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
                        className="demo-loadmore-list"
                        loading={initLoading}
                        itemLayout="horizontal"
                        loadMore={loadMore}
                        dataSource={list}
                        renderItem={(item) => (
                            <List.Item>
                                <Skeleton avatar title={false} loading={item.loading} active>
                                    <Card
                                        style={{ height: 300 }}
                                        hoverable
                                        cover={<img width={272} height={200}
                                            alt="logo" src={item.img} />}
                                    >
                                        <Meta className='styleMeta' title={item.name} />
                                        <List.Item.Meta title={<div style={{ color: '#B70404' }}>{item.price}</div>} description="12h, krong ana, daklak" />
                                    </Card>
                                </Skeleton>
                            </List.Item>
                        )}
                    />
                    {/* <Space direction="vertical" style={{ width: '100%', padding: 10, alignItems: 'center' }}>
                        <Button block>
                            Xem Thêm
                        </Button>
                    </Space> */}
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

export default AllProduct;
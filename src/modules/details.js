import { Col, Row, Avatar, List, Button, Card, Space } from 'antd';
import { CloseSquareOutlined } from '@ant-design/icons';
import React from 'react';
import '../css/homeStyle.css'
import '../css/detailsStyle.css'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { home1 } from '../lsData/homeData'
import { Link } from 'react-router-dom';

const Details = () => {
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

    const data = Array.from({
        length: 1,
    }).map((_, i) => ({
        href: '/personal-page',
        title: `SHOP NGUYEN VAN A ${i}`,
        avatar: `https://xsgames.co/randomusers/avatar.php?g=pixel&key=${i}`,
        description:
            'Provide product for abcfjd',
        content:
            'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
    }));
    const data1 = [
        {
            title: 'Ant Design Title 1',
        },
        {
            title: 'Ant Design Title 2',
        },
        {
            title: 'Ant Design Title 2',
        },
        {
            title: 'Ant Design Title 2',
        },
        {
            title: 'Ant Design Title 2',
        }
    ];
    return (
        <div className='container'>
            <Row >
                <Col xs={24} sm={12} md={8} lg={6} xl={10}>
                    <Carousel showArrows={true}>
                        <div>
                            <img src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />
                            <p className="legend">Legend 1</p>
                        </div>
                        <div>
                            <img src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />
                            <p className="legend">Legend 2</p>
                        </div>
                        <div>
                            <img src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />
                            <p className="legend">Legend 3</p>
                        </div>
                        <div>
                            <img src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />
                            <p className="legend">Legend 4</p>
                        </div>
                    </Carousel>
                </Col>
                <Col xs={24} sm={12} md={8} lg={6} xl={14} align="middle" style={{ textAlign: "left" }}>
                    <List
                        itemLayout="vertical"
                        size="large"
                        dataSource={data}
                        renderItem={(item, index) => (
                            <List.Item
                                key={index}
                            >
                                <List.Item.Meta
                                    avatar={<Avatar src={item.avatar} />}
                                    title={<a href={item.href}>{item.title}</a>}
                                    description={item.description}
                                />
                                <List>
                                    <Row >
                                        {
                                            data1.map((listitem, index) => {
                                                return (<Col span={8}>
                                                    <List.Item key={index}>
                                                        <List.Item.Meta
                                                            avatar={
                                                                <CloseSquareOutlined />
                                                            }
                                                            title={'Địa chỉ'}
                                                            description={listitem.title}
                                                        />
                                                    </List.Item>
                                                </Col>)
                                            })
                                        }
                                    </Row>
                                </List>
                                <Row>
                                    <Col span={9} align="middle" style={{ textAlign: "center", paddingBottom: "10px" }}>
                                        <Button style={{ width: "200px" }}>09312345*** Bấm Để Hiện</Button>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col align="middle" style={{ textAlign: "left", paddingBottom: "10px" }}>
                                        {item.content}
                                    </Col>
                                </Row>
                            </List.Item>
                        )}
                    />
                </Col>
            </Row>
            <div className='container'>
                <Card title="Các Sản Phẩm Liên Quan" extra={<a href="/all-product">Tất Cả Sản Phẩm</a>}>
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
                        renderItem={(item, index) => (
                            <Link to="/details">
                            <List.Item key={index}>
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
                </Card>
            </div>
        </div>
    )
};
export default Details;
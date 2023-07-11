import { Col, Row, Avatar, List, Button, Card } from 'antd';
import React, { useEffect, useState } from 'react';
import { CloseSquareOutlined } from '@ant-design/icons';
import '../css/homeStyle.css'
import '../css/detailsStyle.css'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { home1 } from '../lsData/homeData'
import { Link } from 'react-router-dom';
import { getDetailsProduct } from '../actions/detailsAction'
import { useSelector, useDispatch } from 'react-redux'
import { Text, View } from "react-native";
const Details = () => {
    const { pathname } = window.location
    const dispatch = useDispatch()
    const { Meta } = Card;
    const list = []
    const rsDetailsProduct = useSelector(state => state.detailsProduct);
    const [images, setImages] = useState([])
    const [productInf, setProductInf] = useState({})
    const [details, setDetails] = useState([])
    useEffect(() => {
        dispatch(getDetailsProduct(pathname.split('/')[2]))
    }, [pathname]);
    useEffect(() => {
        if (images.length == 0) {
            setImages(rsDetailsProduct.data.images)
            setProductInf(rsDetailsProduct.data)
            var arrDetails = []
            for (let i = 0; i < rsDetailsProduct.data.details.split(';').length; i++) {
                arrDetails.push({
                    key: rsDetailsProduct.data.details.split(';')[i].split(':')[0],
                    value: rsDetailsProduct.data.details.split(';')[i].split(':')[1]
                })
            }
            setDetails(arrDetails)

        }
    }, [rsDetailsProduct]);

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
                <Col xs={22} sm={12} md={12} lg={12} xl={10}>
                    <Carousel showArrows={true}>
                        {images.map((item, index) => (<div key={index}>
                            <img src={item} />
                        </div>))}
                    </Carousel>
                </Col>
                <Col xs={22} sm={12} md={12} lg={12} xl={14} align="middle" style={{ textAlign: "left" }}>
                    <List
                        itemLayout="vertical"
                        size="large"
                    >
                        <List.Item
                        >
                            <List.Item.Meta
                                avatar={<Avatar src={productInf.imageShop} />}
                                title={<a href={productInf.productId}>{productInf.shopNm}</a>}
                                description={productInf.descShop}
                            />
                            <List>
                                <Row >
                                    {
                                        details.map((listitem, index) => {
                                            return (<Col span={8} key={index}>
                                                <List.Item >
                                                    <List.Item.Meta
                                                        avatar={
                                                            <CloseSquareOutlined />
                                                        }
                                                        title={listitem.key}
                                                        description={listitem.value}
                                                    />
                                                </List.Item>
                                            </Col>)
                                        })
                                    }
                                </Row>
                            </List>
                            <Row>
                                <Col align="middle" style={{ textAlign: "center", paddingBottom: "10px" }}>
                                    <CloseSquareOutlined /> {productInf.addr}
                                </Col>
                            </Row>
                            <Row>
                                <Col span={9} align="middle" style={{ textAlign: "center", paddingBottom: "10px" }}>
                                    <Button style={{ width: "200px" }}>09312345*** Bấm Để Hiện</Button>
                                </Col>
                            </Row>
                            <Row>
                                <Col align="middle" style={{ textAlign: "left", paddingBottom: "10px" }}>
                                    <Text>{productInf.desc}</Text>
                                </Col>
                            </Row>
                        </List.Item>

                    </List>
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
                            <Link to={{
                                pathname: `/details/${item.productId}`
                            }}>
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
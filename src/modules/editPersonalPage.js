import { Dimensions } from 'react-native';
import '../css/homeStyle.css'
import { Card, List, Row, Col, Button, Skeleton, Avatar, message, Popconfirm } from 'antd';
import { home1 } from '../lsData/homeData'
import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { getPersonalProduct, getPersonalProductPage } from '../actions/personalAction'
import { getTotalData } from '../actions/showAllProducts'
import { deleteProduct, publishProduct } from '../actions/postPageActions'
import { CloseCircleTwoTone, CheckCircleTwoTone, DeleteTwoTone, EyeTwoTone } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
var count = 1;
function EditPersonalPage() {
    const navigate = useNavigate();
    const { Meta } = Card;
    const dispatch = useDispatch()
    const { pathname } = window.location
    const [initLoading, setInitLoading] = useState(true);
    const [loading, setLoading] = useState(false);
    const [list, setList] = useState([]);
    const [title, setTitle] = useState();
    const rsPersonal = useSelector(state => state.personal.infUser);
    const rsPersonalProduct = useSelector(state => state.personal.productDataUser);
    const rsUpdatePublish = useSelector(state => state.personal.UpdatePublish);
    const rsTotalData = useSelector(state => state.totalData);
    useEffect(() => {
        var paramCount = {
            cateCd: 0,
            userId: pathname.split('/')[2],
            edit: 0
        }
        var param = {
            path: pathname.split('/')[2],
            page: 0,
            edit: 0
        }

        var param1 = {
            path: pathname.split('/')[2],
            edit: 0
        }
        dispatch(getPersonalProductPage(param))
        dispatch(getPersonalProduct(param1))
        dispatch(getTotalData(paramCount))
        setList([])
        setInitLoading(false);
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
        });
    }, [pathname]);
    useEffect(() => {
        setList(rsPersonalProduct)
    }, [rsPersonalProduct]);

    useEffect(() => {
        console.log("update")
        var paramCount = {
            cateCd: 0,
            userId: pathname.split('/')[2],
            edit:0
        }
        var param = {
            path: pathname.split('/')[2],
            page: 0,
            edit: 0
        }
        var param1 = {
            path: pathname.split('/')[2],
            edit: 0
        }
        dispatch(getPersonalProductPage(param))
        dispatch(getPersonalProduct(param1))
        dispatch(getTotalData(paramCount))
        setList([])
        setInitLoading(false);
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
        });
    }, [rsUpdatePublish]);

    useEffect(() => {

        if (count != 1) {
            setLoading(true)
            setList(
                list.concat([...new Array(3)].map(() => ({
                    productId: null,
                    name: null,
                    price: null,
                    desc: null,
                    addr: null,
                    details: null,
                    cateId: null,
                    creDt: null,
                    updDt: null,
                    userId: null,
                    images: null,
                    image: null,
                    loading: true
                }
                ),
                )));

            setTimeout(() => {
                setList(
                    list.concat(rsPersonalProduct)
                );
                window.dispatchEvent(new Event('resize'));
                setLoading(false);
            }, 1000);
        }
    }, [count]);
    const onLoadMore = () => {
        var param = {
            path: pathname.split('/')[2],
            page: count++,
            edit: 0
        }
        dispatch(getPersonalProductPage(param))
        if (count == 1) {
            setLoading(true);
            setList(
                list.concat([...new Array(3)].map(() => ({
                    productId: null,
                    name: null,
                    price: null,
                    desc: null,
                    addr: null,
                    details: null,
                    cateId: null,
                    creDt: null,
                    updDt: null,
                    userId: null,
                    images: null,
                    image: null,
                    loading: true
                }
                ),
                )));

            setTimeout(() => {
                setList(
                    list.concat(rsPersonalProduct)
                );
                window.dispatchEvent(new Event('resize'));
                setLoading(false);
            }, 1000);
        }
    };
    const loadMore = list.length >= rsTotalData ? null :
        list.length != 0 && !initLoading && !loading ? (
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
                <Row >
                    <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                        <List grid={{
                            gutter: 16,
                            xs: 1,
                            sm: 2,
                            md: 4,
                            lg: 4,
                            xl: 6,
                            xxl: 3,
                        }}
                        >
                            <Row>
                                <Col xs={16} sm={16} md={16} lg={16} xl={12} style={{ paddingRight: "50px" }}>
                                    <List.Item>
                                        <List.Item.Meta
                                            avatar={<Avatar src={rsPersonal.img} />}
                                            title={rsPersonal.shopNm}
                                            description={rsPersonal.desc}
                                        />
                                    </List.Item>
                                </Col>
                                <Col xs={4} sm={4} md={4} lg={4} xl={4} >
                                    <List.Item>
                                        <List.Item.Meta
                                            title="Địa chỉ"
                                            description="aaaaaaa"
                                        />

                                    </List.Item>
                                </Col>
                                <Col xs={4} sm={4} md={4} lg={4} xl={4}>
                                    <List.Item>
                                        <List.Item.Meta
                                            title="Sản Phẩm"
                                            description={rsTotalData}
                                        />

                                    </List.Item>
                                </Col>
                            </Row>
                        </List>
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={24} xl={24}>
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
                                renderItem={(item, index) => (
                                    // <Link to={{
                                    //     pathname: `/details/${item.productId}`
                                    // }} >
                                    <List.Item key={index}>
                                        <Skeleton avatar title={false} loading={item.loading} active>
                                            {item.publish == true ?
                                                <Card
                                                    hoverable
                                                    cover={<img width={272} height={200}
                                                        alt="logo" src={item.image} />}
                                                    actions={[
                                                        // <DeleteTwoTone twoToneColor="red" key="delete" />,
                                                        <CheckCircleTwoTone twoToneColor="#52c41a" key="publish" onClick={() => dispatch(publishProduct({ productId: item.productId }))} />,
                                                        <EyeTwoTone twoToneColor="#52c41a" key="detail" onClick={() => navigate('/details/' + item.productId)} />
                                                    ]}
                                                >
                                                    <Meta className='styleMeta' title={item.name} />
                                                    <List.Item.Meta title={<div style={{ color: '#B70404' }}>{String(item.price).replace(
                                                        /(\d)(?=(?:\d{3})+(?:\.|$))/g,
                                                        '$1,'
                                                    )} VND</div>} description={item.addr == null ? null : item.addr.split([";"])[2]} />
                                                </Card> : <Card
                                                    hoverable
                                                    cover={<img width={272} height={200}
                                                        alt="logo" src={item.image} />}
                                                    actions={[
                                                        // <DeleteTwoTone twoToneColor="red" key="delete" />,
                                                        <CloseCircleTwoTone twoToneColor="red" key="publish" onClick={() => dispatch(publishProduct({ productId: item.productId }))} />,
                                                        <EyeTwoTone twoToneColor="#52c41a" key="detail" onClick={() => navigate('/details/' + item.productId)} />
                                                    ]}
                                                >
                                                    <Meta className='styleMeta' title={item.name} />
                                                    <List.Item.Meta title={<div style={{ color: '#B70404' }}>{String(item.price).replace(
                                                        /(\d)(?=(?:\d{3})+(?:\.|$))/g,
                                                        '$1,'
                                                    )} VND</div>} description={item.addr == null ? null : item.addr.split([";"])[2]} />
                                                </Card>}
                                        </Skeleton>
                                    </List.Item>
                                    // </Link>
                                )}
                            />
                        </Card>
                    </Col>
                </Row>
            </div>
        </>
    )
}
const win = Dimensions.get('window');

export default EditPersonalPage;
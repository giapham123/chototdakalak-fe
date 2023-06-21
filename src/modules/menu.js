import { UnorderedListOutlined, HomeOutlined } from '@ant-design/icons';
import { Menu, Input, Col, Button, Space, Row } from 'antd';
import { useState } from 'react';
import { Routes, Route, useNavigate, Link } from 'react-router-dom';
import Home from './home';
import AllProduct from './allProduct';
import Details from './details';
import PersonalPage from './personalPage';
import PostPage from './postPage'

const items = [
  {
    label: 'Home',
    key: '',
    icon: <HomeOutlined />
  },
  {
    label: 'Danh Mục',
    key: 'SubMenu',
    icon: <UnorderedListOutlined />,
    children: [
      {
        label: 'Xe Cộ',
        key: 'all-product/xe-co'
      },
      {
        label: 'Đồ Điện Tử',
        key: 'all-product/do-dien-tu'
      },
      {
        label: 'Đồ Gia Dụng, Nội Thất, Cây Cảnh',
        key: 'all-product/gia-dung-noi-that'
      },
      {
        label: 'Giải Trí, Thể Thao',
        key: 'all-product/giai-tri-tt'
      },
      {
        label: 'Mẹ Và Bé',
        key: 'all-product/me-be'
      }
    ],
  }
];
function MenuBarComp() {
  const navigate = useNavigate();
  const [current, setCurrent] = useState();
  const onClick = (e) => {
    navigate(e.key)
    setCurrent(e.key);
  };
  return (
    <>
      <Row align="middle">
        <Col xs={2} sm={4} md={6} lg={8} xl={8}>
          <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />
        </Col>
        <Col xs={20} sm={16} md={12} lg={8} xl={8}>
          <Input placeholder="Tìm Kiếm" />
        </Col>
        <Col style={{ textAlign: "right", paddingRight: "20px" }} xs={2} sm={4} md={6} lg={8} xl={8}>
          <Space className="site-button-ghost-wrapper" style={{ textAlign: "right", paddingRight: "20px" }} wrap>
            <Button>
              <Link to='/post-page'>Đăng Tin</Link>
            </Button>
          </Space>
          <Space className="site-button-ghost-wrapper" wrap style={{ width: '20%' }}>
            <Button>
              Tài Khoản
            </Button>
          </Space>
        </Col>
      </Row>

      <Routes>
        <Route exact path='/' element={< Home />}></Route>
        <Route exact path='/details' element={< Details />}></Route>
        <Route exact path='/personal-page' element={< PersonalPage />}></Route>
        <Route exact path='/post-page' element={< PostPage />}></Route>
        <Route exact path='/all-product/xe-co' element={< AllProduct />}></Route>
        <Route exact path='/all-product/do-dien-tu' element={< AllProduct />}></Route>
        <Route exact path='/all-product/gia-dung-noi-that' element={< AllProduct />}></Route>
        <Route exact path='/all-product/giai-tri-tt' element={< AllProduct />}></Route>
        <Route exact path='/all-product/me-be' element={< AllProduct />}></Route>
      </Routes>
    </>
  );
}
export default MenuBarComp;
import React, {useState} from 'react';
import {Menu} from 'antd';
import {AppstoreOutlined, MailOutlined, PieChartOutlined, SettingOutlined,} from '@ant-design/icons';
import {Link} from "react-router-dom";

const {SubMenu} = Menu;
const AdminNav = () => {
    const [collapsed, setCollapsed] = useState(false)

    const handleClick = e => {
        console.log('click ', e);
    };
    const navStyle = {
        fontFamily: "Arial",
        height: "95vh",
        width: '256px'
    };
    return (
        <div style={navStyle}>
            <Menu
                onClick={handleClick}
                style={{height:"95vh"}}
                defaultSelectedKeys={['1']}
                // defaultOpenKeys={['sub1']}
                mode="inline"
            >
                <Menu.Item key="1" icon={<PieChartOutlined />}>
                    <Link to="/admin/dashboard">Dashboard</Link>
                </Menu.Item>
                <SubMenu key="sub1" icon={<SettingOutlined/>} title="商品管理">
                    <Menu.Item key="2"><Link to="/admin/product">商品列表</Link></Menu.Item>
                    <Menu.Item key="3"><Link to="/admin/product/create">添加商品</Link></Menu.Item>
                </SubMenu>
                <SubMenu key="sub2" icon={<AppstoreOutlined/>} title="商品分類管理">
                    <Menu.Item key="4">  <Link to="/admin/category">分類列表</Link></Menu.Item>
                    <Menu.Item key="5"><Link to="/admin/category/create">添加分類</Link></Menu.Item>
                    <SubMenu key="sub3" title="商品子分類">
                        <Menu.Item key="6"> <Link to="/admin/subCategory">子分類列表</Link></Menu.Item>
                        <Menu.Item key="7"><Link to="/admin/subCategory/create">添加子分類</Link></Menu.Item>
                    </SubMenu>
                </SubMenu>
                <SubMenu key="sub4" icon={<SettingOutlined/>} title="訂單管理">
                    <Menu.Item key="8"><Link to="/admin/orders">訂單列表</Link></Menu.Item>
                </SubMenu>

                <SubMenu key="sub5" icon={<SettingOutlined/>} title="會員管理">
                    <Menu.Item key="9"><Link to="/admin/users">會員列表</Link></Menu.Item>
                </SubMenu>
                <SubMenu key="sub6" icon={<SettingOutlined/>} title="優惠券管理">
                    <Menu.Item key="10"><Link to="/admin/coupon">優惠券列表</Link></Menu.Item>
                </SubMenu>
            </Menu>
        </div>
    );
};

export default AdminNav;

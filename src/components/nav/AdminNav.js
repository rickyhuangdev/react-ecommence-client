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
                <SubMenu key="sub2" icon={<AppstoreOutlined/>} title="Category">
                    <Menu.Item key="5">  <Link to="/admin/category">Category Lists</Link></Menu.Item>
                    <Menu.Item key="6"><Link to="/admin/category/create">Create Category</Link></Menu.Item>
                    <SubMenu key="sub3" title="Sub Category">
                        <Menu.Item key="7"> <Link to="/admin/subCategory">SubCategory Lists</Link></Menu.Item>
                        <Menu.Item key="8"><Link to="/admin/subCategory/create">Create subCategory</Link></Menu.Item>
                    </SubMenu>
                </SubMenu>
                <SubMenu key="sub4" icon={<SettingOutlined/>} title="Orders">
                    <Menu.Item key="9">Option 9</Menu.Item>
                    <Menu.Item key="10">Option 10</Menu.Item>
                    <Menu.Item key="11">Option 11</Menu.Item>
                    <Menu.Item key="12">Option 12</Menu.Item>
                </SubMenu>
                <SubMenu key="sub5" icon={<SettingOutlined/>} title="Products">
                    <Menu.Item key="13"><Link to="/admin/product">Product List</Link></Menu.Item>
                    <Menu.Item key="14"><Link to="/admin/product/create">Create Product</Link></Menu.Item>
                </SubMenu>
            </Menu>
        </div>
    );
};

export default AdminNav;

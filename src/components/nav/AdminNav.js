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
                    <Menu.Item key="5">Category Lists</Menu.Item>
                    <Menu.Item key="6">Sub Categories</Menu.Item>
                    <SubMenu key="sub3" title="Submenu">
                        <Menu.Item key="7">Option 7</Menu.Item>
                        <Menu.Item key="8">Option 8</Menu.Item>
                    </SubMenu>
                </SubMenu>
                <SubMenu key="sub4" icon={<SettingOutlined/>} title="Orders">
                    <Menu.Item key="9">Option 9</Menu.Item>
                    <Menu.Item key="10">Option 10</Menu.Item>
                    <Menu.Item key="11">Option 11</Menu.Item>
                    <Menu.Item key="12">Option 12</Menu.Item>
                </SubMenu>
                <SubMenu key="sub5" icon={<SettingOutlined/>} title="Products">
                    <Menu.Item key="13">Option 9</Menu.Item>
                    <Menu.Item key="14">Option 10</Menu.Item>
                    <Menu.Item key="15">Option 11</Menu.Item>
                    <Menu.Item key="16">Option 12</Menu.Item>
                </SubMenu>
            </Menu>
        </div>
    );
};

export default AdminNav;

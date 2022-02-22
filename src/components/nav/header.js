import React, {useState} from 'react';
import { Menu } from 'antd';
import {UserOutlined, UserAddOutlined, HomeOutlined, SettingOutlined} from '@ant-design/icons';
import {Link} from "react-router-dom";

const { SubMenu } = Menu;
const Header = () => {
    const [current,setCurrent] =useState('home')
    const handleClick = (e) => {
       setCurrent(e.key)
    }
    return (
        <div>
            <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
                <Menu.Item key="home" icon={<HomeOutlined />}>
                   <Link to='/'>Home</Link>
                </Menu.Item>
                <Menu.Item key="login" icon={<UserOutlined />} className="float-right">
                    <Link to='/login'>Login</Link>
                </Menu.Item>
                <Menu.Item key="register" icon={<UserAddOutlined />} className="float-right">
                   <Link to="/register">Register</Link>
                </Menu.Item>
            </Menu>
        </div>
    );
};

export default Header;

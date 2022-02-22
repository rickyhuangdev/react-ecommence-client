import React, {useState} from 'react';
import { Menu } from 'antd';
import {UserOutlined, UserAddOutlined, HomeOutlined, SettingOutlined} from '@ant-design/icons';

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
                   Home
                </Menu.Item>
                <Menu.Item key="login" icon={<UserOutlined />} className="float-right">
                    Login
                </Menu.Item>
                <Menu.Item key="register" icon={<UserAddOutlined />}>
                   Register
                </Menu.Item>
                <SubMenu key="SubMenu" icon={<SettingOutlined />} title="Register">
                        <Menu.Item key="setting:1">Option 1</Menu.Item>
                    <Menu.Item key="setting:2">Option 2</Menu.Item>
                </SubMenu>
            </Menu>
        </div>
    );
};

export default Header;

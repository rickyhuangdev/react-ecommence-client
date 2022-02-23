import React, {useEffect, useState} from 'react';
import {Menu} from 'antd';
import {
    HomeOutlined,
    LogoutOutlined,
    ProfileOutlined,
    SettingOutlined,
    UserAddOutlined,
    UserOutlined
} from '@ant-design/icons';
import {Link, useHistory} from "react-router-dom";
import {useSelector} from "react-redux";

const {SubMenu} = Menu;
const Header = () => {
    const {userInfo} = useSelector(state =>({...state.login}))
     const [user,setUser] = useState({})
    const [current, setCurrent] = useState('home')
    const history = useHistory()
    useEffect(() => {
        console.log(history)
      setUser(userInfo)
    }, [])
    const handleClick = (e) => {
        setCurrent(e.key)
    }
    return (
        <div>
            <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
                <Menu.Item key="home" icon={<HomeOutlined/>}>
                    <Link to='/'>Home</Link>
                </Menu.Item>

                    <Menu.Item key="login" icon={<UserOutlined/>} style={{marginLeft: 'auto'}}>
                            <Link to='/login'>Login</Link>
                        </Menu.Item>
                    <Menu.Item key="register" icon={<UserAddOutlined/>} className="float-right">
                        <Link to="/register">Register</Link>
                    </Menu.Item>

                    <SubMenu key="SubMenu" title={`Hello, ${user.email}`}>
                    <Menu.Item key="setting:3" icon={<ProfileOutlined />}>My Profile</Menu.Item>
                    <Menu.Item key="setting:4" icon={<LogoutOutlined />}>Logout</Menu.Item>
                    </SubMenu>



            </Menu>
        </div>
    );
};

export default Header;

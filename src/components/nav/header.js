import React, {useState} from 'react';
import {Menu} from 'antd';
import {HomeOutlined, LogoutOutlined, ProfileOutlined, UserAddOutlined, UserOutlined} from '@ant-design/icons';
import {Link, useHistory} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getAuth, signOut} from "firebase/auth";
import {toast} from "react-toastify";
import {logout} from "../../store/actions/login";


const {SubMenu} = Menu;
const Header = () => {
    const token = useSelector(state => state.login)
    const [current, setCurrent] = useState('home')
    const dispatch = useDispatch()
    const history = useHistory()
    const handleClick = (e) => {
        setCurrent(e.key)
    }
    const onLogout = () => {
        const auth = getAuth();
        signOut(auth).then(async () => {
            dispatch(logout())
            toast.success("SignOut Successfully")
            history.push('/login')
        }).catch((error) => {
            // An error happened.
        });
    }
    return (
        <div>
            <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
                <Menu.Item key="home" icon={<HomeOutlined/>}>
                    <Link to='/'>Home</Link>
                </Menu.Item>
                {!token && (
                    <Menu.Item key="login" icon={<UserOutlined/>} style={{marginLeft: 'auto'}}>
                        <Link to='/login'>Login</Link>
                    </Menu.Item>
                )}
                {!token && (
                    <Menu.Item key="register" icon={<UserAddOutlined/>} className="float-right">
                        <Link to="/register">Register</Link>
                    </Menu.Item>
                )}
                {token && (
                    <SubMenu key="SubMenu" title={`Hello,`} style={{marginLeft: 'auto'}}>
                        <Menu.Item key="setting:3" icon={<ProfileOutlined/>}>My Profile</Menu.Item>
                        <Menu.Item key="setting:4" icon={<LogoutOutlined/>} onClick={onLogout}>Logout</Menu.Item>
                    </SubMenu>
                )}


            </Menu>
        </div>
    );
};

export default Header;

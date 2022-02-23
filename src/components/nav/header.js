import React, {useEffect, useState} from 'react';
import {Menu} from 'antd';
import {HomeOutlined, LogoutOutlined, ProfileOutlined, UserAddOutlined, UserOutlined} from '@ant-design/icons';
import {Link, useHistory} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getAuth, signOut} from "firebase/auth";
import {toast} from "react-toastify";
import {logoutUser} from "../../store/actions/login";

const {SubMenu} = Menu;
const Header = () => {
    const userInfo = useSelector(state => state.login.userInfo)
    const [user, setUser] = useState({})
    const [current, setCurrent] = useState('home')
    const dispatch = useDispatch()
    const history = useHistory()
    useEffect(() => {
        setUser(userInfo)
        console.log(!userInfo)
    }, [dispatch])
    const handleClick = (e) => {
        setCurrent(e.key)
    }
    const logout = () => {
        const auth = getAuth();
        signOut(auth).then(async () => {
             dispatch(logoutUser())
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
                {!userInfo &&(
                    <Menu.Item key="login" icon={<UserOutlined/>} style={{marginLeft: 'auto'}}>
                        <Link to='/login'>Login</Link>
                    </Menu.Item>
                )}
                {!userInfo &&(
                    <Menu.Item key="register" icon={<UserAddOutlined/>} className="float-right">
                        <Link to="/register">Register</Link>
                    </Menu.Item>
                )}
                {userInfo && (
                    <SubMenu key="SubMenu" title={`Hello, ${userInfo.email}`} style={{marginLeft: 'auto'}}>
                        <Menu.Item key="setting:3" icon={<ProfileOutlined/>}>My Profile</Menu.Item>
                        <Menu.Item key="setting:4" icon={<LogoutOutlined/>} onClick={logout}>Logout</Menu.Item>
                    </SubMenu>
                )}




            </Menu>
        </div>
    );
};

export default Header;

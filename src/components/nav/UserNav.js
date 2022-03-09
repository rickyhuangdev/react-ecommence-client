import React, {useEffect} from 'react';
import '../../assets/css/user-nav.css'
import {useDispatch, useSelector} from "react-redux";
import {
    CreditCardOutlined,
    HeartOutlined,
    HomeOutlined,
    LoginOutlined,
    SettingOutlined,
    ShoppingCartOutlined,
    UserOutlined
} from "@ant-design/icons";
import {Link} from "react-router-dom";
import avatar from '../../assets/images/default_user.png'
import {getUserDetail, logout} from "../../store/actions/login";

const UserNav = () => {
    const user = useSelector(state => state.profile)
    const dispatch = useDispatch()
    return (
        <div className="d-block rounded">
            <div className="dashboard_author">
                <ul className="list-group">
                    <li className="list-group-item">
                        <div className="dashboard_author px-2 py-5 text-center">
                            <div className="dash_auth_thumb circle p-1 border d-inline-flex mx-auto mb-2">
                                <img src={user.image??avatar} className="img-fluid circle" width="100" alt={user.name}/>
                            </div>
                            <div className="dash_caption">
                                <h4 className="fs-md ft-medium mb-0 lh-1">{user.name}</h4>
                            </div>
                        </div>
                    </li>
                    <li className="list-group-item"><Link to="/user/order"><ShoppingCartOutlined className="mr-2"/>My
                        Order</Link></li>
                    <li className="list-group-item"><Link to="/user/wishlist"><HeartOutlined
                        className="mr-2"/>Wishlist</Link>
                    </li>
                    <li className="list-group-item"><Link to="/user/profile"><UserOutlined className="mr-2"/>Profile
                        Info</Link></li>
                    <li className="list-group-item"><Link to="/user/address"><HomeOutlined
                        className="mr-2"/>Addresses</Link>
                    </li>
                    <li className="list-group-item"><a type="button" onClick={()=>{dispatch(logout())}}><LoginOutlined className="mr-2"/>Log
                        Out</a></li>
                </ul>
            </div>

        </div>
    );
};

export default UserNav;

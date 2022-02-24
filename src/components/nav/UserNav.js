import React from 'react';
import '../../assets/css/user-nav.css'
import {CreditCardOutlined, HeartOutlined, HomeOutlined, ShoppingCartOutlined} from "@ant-design/icons";
import {Link} from "react-router-dom";
const UserNav = () => {
    return (

            <div className="side-nav">
               <div className="logo-section">
                   <a href="#" className="logo">
                   hello, Admin
               </a></div>
                <ul className="nav-link">
                    <li><Link to="/user/history"><HomeOutlined /><p>Dashboard</p></Link></li>
                    <li><Link to="/user/order"><ShoppingCartOutlined />My Orders</Link></li>
                    <li><Link to="/user/wishlist"><HeartOutlined />My Wishlist</Link></li>
                    <li><Link to="/user/payment"><CreditCardOutlined />My Payment</Link></li>
                    <div className="active"></div>
                </ul>
            </div>
    );
};

export default UserNav;

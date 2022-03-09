import React, {useEffect, useState} from 'react';
import '../../assets/css/header.css'
import {Dropdown, Menu} from 'antd';
import {BsBag, BsCamera, BsHeart, BsJustify, BsLaptop, BsPerson, BsPhone, BsTrash, BsWifi2} from "react-icons/bs";
import {IoBedOutline, IoShirtOutline} from "react-icons/io5";
import {AiOutlineAudio} from "react-icons/ai";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {removeItemFromCart} from "../../store/actions/cart";
import {logout} from "../../store/actions/login";
import HeaderSearch from "../form/HeaderSearch";
import {getWishlist} from "../../store/actions/wishlist";
import logo from '../../assets/images/logo.png'
const HeaderDefault = () => {
    const cart = useSelector(state => state.cart.cartItems)
    const loginInfo = useSelector(state => state.login)
    const {userInfo} = loginInfo
    const [localLang, setLocalLang] = useState('English')
    const [currency, setCurrency] = useState('USD')
    const dispatch = useDispatch()
    const getWishlists = useSelector(state => state.getWishlist)
    const {loading, list, error,success} = getWishlists
    const saveWishlists = useSelector(state => state.saveWishlist)
    const {success: saveWishlistSuccess} = saveWishlists
    const changeLang = ({key}) => {
        setLocalLang(key)
    }
    const changeCurrency = ({key}) => {
        setCurrency(key)
    }
    const logoutHandler = () => {
        dispatch(logout())
    }
    useEffect(() => {
            dispatch(getWishlist())
    }, [dispatch,saveWishlistSuccess])

    const LangMenu = (
        <Menu onClick={changeLang}>
            <Menu.Item key="English">
                English
            </Menu.Item>
            <Menu.Item key="Chinese">
                Chinese
            </Menu.Item>
            <Menu.Item key="Japanese">
                    Japanese
            </Menu.Item>
        </Menu>
    );
    const CurrencyMenu = (
        <Menu onClick={changeCurrency}>
            <Menu.Item key="USD">
                USD
            </Menu.Item>
            <Menu.Item key="HKD">
                HKD
            </Menu.Item>
            <Menu.Item key="RMB">
                RMB
            </Menu.Item>
        </Menu>
    );
    const getTotal = () => {
        return cart.reduce((current, next) => {
            return current + next.count * next.product.price
        }, 0)
    }
    return (
        <header className="header d-blue-bg text-white font-weight-bold">
            <div className="header-top">
                <div className="container p-2">
                    <div className="header-inner">
                        <div className="row align-items-center">
                            <div className="col-xl-6 col-lg-7">
                                <div className="header-inner-start">
                                    <div className="header__currency border-right d-flex align-items-center">

                                            <div><span>Language:</span></div>

                                    <Dropdown overlay={LangMenu} placement="bottomLeft" arrow>
                                        <span className="current">{localLang}</span>
                                    </Dropdown>
                                    </div>
                                    <div className="header__lang border-right">

                                            <div><span>Currency:</span></div>

                                    <Dropdown overlay={CurrencyMenu} placement="bottomLeft" arrow>
                                        <span className="current">{currency}</span>
                                    </Dropdown>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-5 d-none d-lg-block">
                                <div className="header-inner-end text-md-end">
                                    <div className="ovic-menu-wrapper ovic-menu-wrapper-2">
                                        <ul>
                                            <li><a href="#">About Us</a></li>
                                            <li><a href="#">Order Tracking</a></li>
                                            <li><a href="#">Contact Us</a></li>
                                            <li><a href="#">FAQs</a></li>
                                            {userInfo && (
                                                <li className="pointer" onClick={logoutHandler}><span>logout</span></li>
                                                )}

                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="header-mid">
                <div className="container-fluid">
                    <div className="heade-mid-inner">
                        <div className="row align-items-center">
                            <div className="col-xl-3 col-lg-3 col-md-4 col-sm-4">
                                <div className="header__info header__info-2">
                                    <div className="logo logo-3">
                                      <Link to='/' className="logo-image">
                                            {/*<img src={logo} alt="logo" />*/}
                                          Market
                                      </Link>
                                    </div>
                                    <div className="side-menu mr-20">
                                        <button type="button" className="side-menu-btn offcanvas-toggle-btn"><BsJustify /></button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-5 col-lg-4 d-none d-lg-block">
                                <div className="header__search">
                                    <HeaderSearch/>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-5 col-md-8 col-sm-8">
                                <div className="header-action">
                                    <div className="block-userlink">


                                        {userInfo ? (
                                            <Link to="/user" className="icon-link icon-link-2">
                                                <BsPerson/>
                                                <span className="text">
                                            <span className="sub">Hello, <strong>{userInfo.name}</strong></span>My Account </span>
                                            </Link>
                                        ) : (
                                            <Link to="/login" className="icon-link icon-link-2">
                                                <BsPerson/>
                                                <span className="text">
                                            <span className="sub">Login </span>My Account </span>

                                            </Link>
                                        )}


                                    </div>

                                    <div className="block-wishlist action">
                                        <Link to="/user/wishlist" className="icon-link icon-link-2">
                                            <BsHeart className="flaticon-heart"/>
                                            <span
                                                className="count count-2">{list && list.length >0 ?list.length: 0}</span><span
                                            className="text"><span
                                            className="sub">Favorite</span>My Wishlist </span></Link>
                                    </div>
                                    <div className="block-cart action"><Link to='/cart' className="icon-link icon-link-2">

                                        <BsBag/><span
                                        className="count count-2">{cart.length??0}</span><span className="text"><span className="sub">Your Cart:</span>${cart.length?getTotal():'0.00'} </span></Link>
                                        <div className="cart">
                                            <div className="cart__mini shadow-1">
                                                <ul>
                                                    <li>
                                                        <div className="cart__title">
                                                            <h4 className="text-warning">Your Cart</h4>
                                                            <span className="text-dark font-weight-bold">({cart.length??0} {cart.length>1?'Items':'Item'} in Cart)</span>
                                                        </div>
                                                    </li>
                                                    {cart && cart.length > 0 && cart.map(item=>(
                                                        <li key={item.product._id}>
                                                            <div
                                                                className="cart__item d-flex justify-content-between align-items-center">
                                                                <div className="cart__inner d-flex">
                                                                    <div className="cart__thumb">
                                                                        <Link to={`/product/${item.product.slug}`}>
                                                                        <img src={item.product.images[0].url} alt="" />
                                                                        </Link>
                                                                    </div>
                                                                    <div className="cart__details">
                                                                        <h6>
                                                                            <Link to={`/product/${item.product.slug}`} className="text-dark">{item.product.title}</Link>
                                                                        </h6>
                                                                        <div className="cart__price"><span>${item.product.price.toFixed(2)}</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="cart__del"><span className="text-danger">
                                                                <BsTrash onClick={()=>{dispatch(removeItemFromCart(item.product._id))}} />
                                                            </span></div>
                                                            </div>
                                                        </li>
                                                    ))}
                                                    {cart && cart.length > 0 &&(
                                                    <li>
                                                        <div
                                                            className="cart__sub d-flex justify-content-between align-items-center">
                                                            <h6 className="text-dark">Subtotal</h6><span
                                                            className="cart__sub-total">${getTotal()}</span></div>
                                                    </li>
                                                    )}
                                                    {cart && cart.length > 0 ?(
                                                    <li>
                                                        <Link to='/cart' className="btn btn-warning mb-10 text-white w-100 shadow-1 mb-2">View cart</Link>
                                                        <Link to='/checkout' className="btn btn-info w-100 shadow-0">Checkout</Link>
                                                    </li>
                                                    ):(
                                                        <li className="d-flex align-items-center">
                                                            <span className="text-dark d-block w-100 text-center font-weight-bold mt-20">Your cart is empty.</span>
                                                        </li>
                                                    )}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="header__bottom d-none d-lg-block">
                <div className="container-fluid">
                        <div className="box-items-inner pt-10 pb-10">
                            <div className="box-item"><a href="#"><BsLaptop/>Laptop <br/>&amp; Computer </a>
                            </div>
                            <div className="box-item"><a href="#"><BsPhone/>Tablets <br/>&amp; Mobile Phones
                            </a></div>
                            <div className="box-item"><a href="#"><BsWifi2/>Digitals <br/>&amp; Electronics </a>
                            </div>
                            <div className="box-item"><a href="#"><BsCamera/>Camera <br/>&amp; Accesories </a>
                            </div>
                            <div className="box-item"><a href="#"><IoBedOutline/>Decor <br/>&amp; Furniture </a>
                            </div>
                            <div className="box-item"><a href="#"><IoShirtOutline/>Fashion <br/>&amp; Clotheing
                            </a></div>
                            <div className="box-item d-lg-none d-xl-block"><a
                                href="#"><AiOutlineAudio/>Audio <br/>&amp; Headphones </a></div>
                        </div>
                    </div>
            </div>
        </header>
    );
};

export default HeaderDefault;

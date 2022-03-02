import React, {useState} from 'react';
import '../../assets/css/header.css'
import {Dropdown, Menu} from 'antd';
import {
    BsBag,
    BsCamera,
    BsHeart,
    BsJustify,
    BsLaptop,
    BsPerson,
    BsPhone,
    BsSearch,
    BsTrash,
    BsWifi2
} from "react-icons/bs";
import {IoBedOutline, IoShirtOutline} from "react-icons/io5";
import {AiOutlineAudio} from "react-icons/ai";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";

const HeaderDefault = () => {
    const cart = useSelector(state=>state.cart)
    const [localLang, setLocalLang] = useState('English')
    const [currency, setCurrency] = useState('USD')
    const [searchText, setSearchText] = useState('')
    const changeLang = ({key}) => {
        setLocalLang(key)
    }
    const changeCurrency = ({key}) => {
        setCurrency(key)
    }
    const handleSearch = () => {
    }

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
                                    <div className="support d-none d-sm-flex align-items-center ml-4"><p>Need Help? <a
                                        href="tel:+001123456789">+001 123 456 789</a></p></div>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-5 d-none d-lg-block">
                                <div className="header-inner-end text-md-end">
                                    <div className="ovic-menu-wrapper ovic-menu-wrapper-2">
                                        <ul>
                                            <li><a href="about.html">About Us</a></li>
                                            <li><a href="contact.html">Order Tracking</a></li>
                                            <li><a href="contact.html">Contact Us</a></li>
                                            <li><a href="faq.html">FAQs</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="header-mid">
                <div className="container">
                    <div className="heade-mid-inner">
                        <div className="row align-items-center">
                            <div className="col-xl-3 col-lg-3 col-md-4 col-sm-4">
                                <div className="header__info header__info-2">
                                    <div className="logo logo-3">
                                      <Link to='/' className="logo-image">
                                            <img src="http://v.bootstrapmb.com/2022/2/lu57m12063/assets/img/logo/logo1.svg" alt="logo" />
                                      </Link>
                                    </div>
                                    <div className="side-menu mr-20">
                                        <button type="button" className="side-menu-btn offcanvas-toggle-btn"><BsJustify /></button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-5 col-lg-4 d-none d-lg-block">
                                <div className="header__search">
                                    <form action="#">
                                        <div className="header__search-box"><input
                                            className="search-input search-input-2" type="text"
                                            placeholder="I'm shopping for..." value={searchText}
                                            onChange={handleSearch}/>
                                            <button className="button button-2 button-3" type="button"><BsSearch/>
                                            </button>
                                        </div>
                                        <div className="header__search-cat">
                                            <Dropdown overlay={LangMenu} placement="bottomLeft"
                                                      overlayClassName="category-select">
                                                <span className="text-dark">{localLang}</span>
                                            </Dropdown>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-5 col-md-8 col-sm-8">
                                <div className="header-action">
                                    <div className="block-userlink">
                                        <Link to="/user" className="icon-link icon-link-2">
                                        <BsPerson/>
                                        <span className="text">
                                            <span className="sub">Login </span>My Account </span>
                                        </Link>
                                 </div>

                                    <div className="block-wishlist action">
                                        <Link  to="/wishlist" className="icon-link icon-link-2">
                                            <BsHeart className="flaticon-heart" />
                                            <span className="count count-2">0</span><span
                                        className="text"><span className="sub">Favorite</span>My Wishlist </span></Link>
                                    </div>
                                    <div className="block-cart action"><Link to='/cart' className="icon-link icon-link-2">

                                        <BsBag/><span
                                        className="count count-2">{cart.length}</span><span className="text"><span className="sub">Your Cart:</span>$00.00 </span></Link>
                                        <div className="cart">
                                            <div className="cart__mini shadow-1">
                                                <ul>
                                                    <li>
                                                        <div className="cart__title">
                                                            <h4 className="text-warning">Your Cart</h4>
                                                            <span className="text-dark font-weight-bold">({cart.length} {cart.length>1?'Items':'Item'} in Cart)</span>
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
                                                                <BsTrash />
                                                            </span></div>
                                                            </div>
                                                        </li>
                                                    ))}
                                                    <li>
                                                        <div
                                                            className="cart__sub d-flex justify-content-between align-items-center">
                                                            <h6 className="text-dark">Subtotal</h6><span
                                                            className="cart__sub-total">$255.00</span></div>
                                                    </li>
                                                    <li>
                                                        <Link to='/cart' className="btn btn-warning mb-10 text-white w-100 shadow-1 mb-2">View cart</Link>
                                                        <Link to='/checkout' className="btn btn-info w-100 shadow-0">Checkout</Link>
                                                    </li>
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
                <div className="container">
                        <div className="box-items-inner pt-10 pb-10">
                            <div className="box-item"><a href="shop.html"><BsLaptop/>Laptop <br/>&amp; Computer </a>
                            </div>
                            <div className="box-item"><a href="shop.html"><BsPhone/>Tablets <br/>&amp; Mobile Phones
                            </a></div>
                            <div className="box-item"><a href="shop.html"><BsWifi2/>Digitals <br/>&amp; Electronics </a>
                            </div>
                            <div className="box-item"><a href="shop.html"><BsCamera/>Camera <br/>&amp; Accesories </a>
                            </div>
                            <div className="box-item"><a href="shop.html"><IoBedOutline/>Decor <br/>&amp; Furniture </a>
                            </div>
                            <div className="box-item"><a href="shop.html"><IoShirtOutline/>Fashion <br/>&amp; Clotheing
                            </a></div>
                            <div className="box-item d-lg-none d-xl-block"><a
                                href="shop.html"><AiOutlineAudio/>Audio <br/>&amp; Headphones </a></div>
                        </div>
                    </div>
            </div>
        </header>
    );
};

export default HeaderDefault;

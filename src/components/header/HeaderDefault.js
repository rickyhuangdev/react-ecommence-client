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

const HeaderDefault = () => {
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
                                        <a href="index.html" className="logo-image">
                                            <img src="http://v.bootstrapmb.com/2022/2/lu57m12063/assets/img/logo/logo1.svg" alt="logo" /></a>
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
                                    <div className="block-userlink"><a className="icon-link icon-link-2"
                                                                       href="my-account.html"><BsPerson/>
                                        <span className="text"><span
                                            className="sub">Login </span>My Account </span></a></div>
                                    <div className="block-wishlist action"><a className="icon-link icon-link-2"
                                                                              href="wishlist.html"><BsHeart className="flaticon-heart" /><span
                                        className="count count-2">0</span><span
                                        className="text"><span className="sub">Favorite</span>My Wishlist </span></a>
                                    </div>
                                    <div className="block-cart action"><a className="icon-link icon-link-2"
                                                                          href="cart.html">
                                        <BsBag/><span
                                        className="count count-2">1</span><span className="text"><span className="sub">Your Cart:</span>$00.00 </span></a>
                                        <div className="cart">
                                            <div className="cart__mini shadow-1">
                                                <ul>
                                                    <li>
                                                        <div className="cart__title">
                                                            <h4 className="text-warning">Your Cart</h4>
                                                            <span className="text-dark">(1 Item in Cart)</span>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div
                                                            className="cart__item d-flex justify-content-between align-items-center">
                                                            <div className="cart__inner d-flex">
                                                                <div className="cart__thumb"><a
                                                                    href="product-details.html"><img
                                                                    src="http://v.bootstrapmb.com/2022/2/lu57m12063/assets/img/cart/20.jpg" alt="" /></a></div>
                                                                <div className="cart__details"><h6><a
                                                                    href="product-details.html" className="text-dark">Samsung
                                                                    C49J89:£875,Debenhams Plus </a></h6>
                                                                    <div className="cart__price"><span>$255.00</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="cart__del"><span className="text-danger">
                                                                <BsTrash />
                                                            </span></div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div
                                                            className="cart__sub d-flex justify-content-between align-items-center">
                                                            <h6 className="text-dark">Subtotal</h6><span
                                                            className="cart__sub-total">$255.00</span></div>
                                                    </li>
                                                    <li><a href="cart.html" className="btn btn-warning mb-10 text-white w-100 shadow-1 mb-2">View cart</a><a
                                                        href="checkout.html" className="btn btn-info w-100 shadow-0">Checkout</a></li>
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

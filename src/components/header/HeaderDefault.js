import React, {useState} from 'react';
import '../../assets/css/header.css'
import {Dropdown, Menu} from 'antd';
import {BsJustify, BsSearch} from "react-icons/bs";

const HeaderDefault = () => {
    const [localLang, setLocalLang] = useState('English')
    const [currency, setCurrency] = useState('USD')
    const changeLang = ({ key }) => {
        setLocalLang(key)
    }
    const changeCurrency = ({ key }) => {
        setCurrency(key)
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
                                            placeholder="I'm shopping for..." />
                                            <button className="button button-2 button-3" type="button"><BsSearch /></button></div>
                                        <div className="header__search-cat">
                                            <Dropdown overlay={LangMenu} placement="bottomLeft" overlayClassName="category-select">
                                                <span className="text-dark">{localLang}</span>
                                            </Dropdown>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default HeaderDefault;

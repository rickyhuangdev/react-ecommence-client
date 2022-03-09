import React from 'react';
import { BsHeadphones } from "react-icons/bs";
import payment from '../../assets/images/payment.png'
const Footer = () => {
    return (
        <footer className="mt-5">
            <div className="bg-dark">
                <div className="footer__top pt-80 pb-15">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-xl-5 col-lg-4 order-last-md">
                                <div className="row">
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6">
                                        <div className="footer__widget">
                                            <div className="footer__widget-title">
                                                <h4>Customer Care</h4>
                                            </div>
                                            <div className="footer__widget-content">
                                                <div className="footer__link">
                                                    <ul>
                                                        <li><a href="#">New Customers</a></li>
                                                        <li><a href="#">How to use Account</a></li>
                                                        <li><a href="#">Placing an Order</a></li>
                                                        <li><a href="#">Payment Methods</a></li>
                                                        <li><a href="#">Delivery &amp;Dispatch</a></li>
                                                        <li><a href="#">Problems with Order</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6">
                                        <div className="footer__widget">
                                            <div className="footer__widget-title"><h4>Customer Service</h4></div>
                                            <div className="footer__widget-content">
                                                <div className="footer__link">
                                                    <ul>
                                                        <li><a href="#">Help Center</a></li>
                                                        <li><a href="#">Contact Us</a></li>
                                                        <li><a href="#">Report Abuse</a></li>
                                                        <li><a href="#">Submit a Dispute</a></li>
                                                        <li><a href="#">Policies &amp;Rules</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-7 col-lg-8 order-first-md">
                                <div className="footer__top-left">
                                    <div className="row">
                                        <div className="col-xl-7 col-lg-6 col-md-6 col-sm-6">
                                            <div className="row">
                                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                                                    <div className="footer__widget">
                                                        <div className="footer__widget-title"><h4>My Account</h4></div>
                                                        <div className="footer__widget-content">
                                                            <div className="footer__link">
                                                                <ul>
                                                                    <li><a href="#">Product Support</a></li>
                                                                    <li><a href="#">Checkout</a></li>
                                                                    <li><a href="#">Shopping Cart</a></li>
                                                                    <li><a href="#">Wishlist</a></li>
                                                                    <li><a
                                                                        href="#">Terms &amp;Conditions &amp;</a>
                                                                    </li>
                                                                    <li><a href="#">Redeem Voucher</a></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                                                    <div className="footer__widget">
                                                        <div className="footer__widget-title"><h4>Quick Links</h4></div>
                                                        <div className="footer__widget-content">
                                                            <div className="footer__link">
                                                                <ul>
                                                                    <li><a href="#">Store Location</a></li>
                                                                    <li><a href="#">My account</a></li>
                                                                    <li><a href="#">Order Tracking</a></li>
                                                                    <li><a href="#">FAQs</a></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-5 col-lg-6 col-md-6 col-sm-6">
                                            <div className="footer__widget">
                                                <div className="footer__widget-title mb-20"><h4>About The Store</h4>
                                                </div>
                                                <div className="footer__widget-content"><p
                                                    className="footer-text mb-35">Our mission statement is to provide
                                                    the absolute best customer experience available in the Electronic
                                                    industry without exception.</p>
                                                    <div className="footer__hotline d-flex align-items-center mb-10">
                                                        <div className="icon mr-15"><BsHeadphones />
                                                        </div>
                                                        <div className="text"><h4>Got Question? Call us 24/7!</h4><span><a
                                                            href="tel:100-123-456-7890">(+100) 123 456 7890</a></span>
                                                        </div>
                                                    </div>
                                                    <div className="footer__info">
                                                        <ul>
                                                            <li><span>Add:<a target="_blank"
                                                                             href="#">Lorem ipsum dolor sit.</a></span>
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
                </div>
                <div className="footer__bottom">
                    <div className="container">
                        <div className="footer__bottom-content pt-55 pb-45">
                            <div className="row">
                                <div className="col-xl-12">
                                    <div className="footer__links text-center mb-25">
                                        <p><a href="#">Online
                                        Shopping</a>
                                            <a href="#">Promotions</a>
                                            <a href="#">My Orders</a>
                                            <a href="#">Help</a>
                                            <a href="#">Customer Service</a>
                                            <a href="#">Support</a>
                                            <a href="#">Most Populars</a>
                                            <a href="#">New Arrivals</a>
                                            <a href="#">Special Products </a>
                                            <a href="#">Manufacturers</a>
                                            <br/>
                                                <a href="#">Garden Equipments</a>
                                                <a href="#">Powers And Hand Tools </a>
                                                <a href="#">Utensil &amp;Gadget </a>
                                                <a href="#">Printers</a>
                                                <a href="#">Projectors</a>
                                                <a href="#">Scanners</a>
                                                <a href="#">Store</a>
                                                <a href="#">Business</a>
                                            </p></div>
                                    <div className="payment-image text-center mb-25"><a href="#"><img
                                        src={payment} alt="" /></a></div>
                                    <div className="copy-right-area text-center"><p>Copyright © <span>Market.</span>All
                                        Rights Reserved. Powered By <a
                                            href="#">RickyHuangDev</a></p></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </footer>
    );
};

export default Footer;

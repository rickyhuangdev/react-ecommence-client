import React from 'react';
import Slider from "react-slick";
import slider_1 from '../../assets/images/02-slide-1.jpeg'
import slider_2 from '../../assets/images/02-slide-2.jpeg'
import slider_3 from '../../assets/images/02-slide-3.jpeg'
import banner_10 from '../../assets/images/banner-10.jpeg'
import banner_11 from '../../assets/images/banner-11.jpeg'
import banner_12 from '../../assets/images/banner-12.jpeg'
import banner_13 from '../../assets/images/banner-13.jpeg'
import '../../assets/css/slider_area.css'

const SliderArea = () => {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots:true,
        autoplay: true,
    };
    return (
        <div className="slider-area light-bg-s pt-60 mb-60">
            <div className="container-fluid custom-container">
                <div className="row">
                    <div className="col-xl-7">
                        <div className="slider-wrapper swiper-wrapper pb-4">
                            <Slider {...settings}>
                                <div className="slider-image-wapper">
                                    <img src={slider_1} alt="" className="slider-image"/>
                                    <div className="slider-content slider-content-2"><h2
                                        className="pt-15 slider-title">Gaming Headset<br/>Red Special Edition</h2><p
                                        className="pr-20 slider_text"
                                    >Brilliant Lighting Effect</p>
                                        <p className="text-white font-weight-bold">Discount 40% On Products & Free Shipping</p>
                                        <div className="slider-bottom-btn mt-65"><a
                                            className="st-btn-border b-radius-2">Discover
                                            now</a></div>
                                    </div>
                                </div>
                                <div className="slider-image-wapper">
                                    <img src={slider_2} alt="" className="slider-image"/>
                                    <div className="slider-content slider-content-2"><h2
                                        className="pt-15 slider-title">Sport
                                        Edition<br/>Red Special Edition</h2><p className="pr-20 slider_text"
                                    >Wireless
                                        Connection With TV,Computer,Laptop... </p>
                                        <div className="slider-bottom-btn mt-65"><a
                                            className="st-btn-border b-radius-2">Discover
                                            now</a></div>
                                    </div>
                                </div>
                                <div className="slider-image-wapper">
                                    <img src={slider_3} alt="" className="slider-image"/>
                                    <div className="slider-content slider-content-2"><h2
                                        className="pt-15 slider-title">Sport
                                        Edition<br/>Red Special Edition</h2><p className="pr-20 slider_text"
                                    >Wireless
                                        Connection With TV,Computer,Laptop... </p>
                                        <div className="slider-bottom-btn mt-65"><a
                                            className="st-btn-border b-radius-2">Discover
                                            now</a></div>
                                    </div>
                                </div>
                            </Slider>
                        </div>
                    </div>
                    <div className="col-xl-5">
                        <div className="row">
                            <div className="col-xl-6 col-lg-6 col-md-6">
                                <div className="banner__item p-relative w-img mb-30">
                                    <div className="banner__img b-radius-2"><a href="product-details.html"><img
                                        src={banner_10} alt=""/></a></div>
                                    <div className="banner__content banner__content-2"><h6><a
                                        href="product-details.html">Canyon <br/>Star Raider</a></h6>
                                        <p>Headphone &amp; Audio</p></div>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6">
                                <div className="banner__item p-relative w-img mb-30">
                                    <div className="banner__img b-radius-2"><a href="product-details.html"><img
                                        src={banner_11} alt=""/></a></div>
                                    <div className="banner__content banner__content-2"><h6><a
                                        href="product-details.html">Phone <br/>Galaxy S20</a></h6>
                                        <p>Cellphone &amp; Tablets</p></div>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6">
                                <div className="banner__item p-relative w-img mb-30">
                                    <div className="banner__img b-radius-2"><a href="product-details.html"><img
                                        src={banner_12} alt="" /></a></div>
                                    <div className="banner__content banner__content-2"><h6><a
                                        href="product-details.html">Galaxy <br/>Buds Plus</a></h6>
                                        <p>Headphone &amp; Audio</p></div>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6">
                                <div className="banner__item p-relative w-img mb-30">
                                    <div className="banner__img b-radius-2"><a href="product-details.html"><img
                                        src={banner_13} alt="" /></a></div>
                                    <div className="banner__content banner__content-2"><h6><a
                                        href="product-details.html">Chair <br/>Swoon Lounge</a></h6>
                                        <p>Headphone &amp; Audio</p></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SliderArea;

import React from 'react';
import banner_1 from "../../assets/images/banner-1.jpeg";
import banner_2 from "../../assets/images/banner-2.jpeg";
import banner_3 from "../../assets/images/banner-3.jpeg";

const Banner = () => {
    return (
        <div className="container-fluid pb-3">
            <section className="banner__area p-3">
                <div className="row">
                    <div className="col-xl-4 col-lg-4 col-md-6 pb-2">
                        <div className="banner__item p-relative w-img mb-30">
                            <div className="banner__img"><a href="product-details.html"><img
                                src={banner_1} alt="" className="img-fluid"/></a></div>
                            <div className="banner__content"><h6><a href="product-details.html"
                                                                    className="text-white">Intelligent <br/>New
                                Touch Control</a></h6><p>Discount 20% On Products</p></div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6 pb-3">
                        <div className="banner__item p-relative mb-30 w-img">
                            <div className="banner__img"><a href="product-details.html" className="text-white"><img
                                src={banner_2} alt="" className="img-fluid"/></a></div>
                            <div className="banner__content"><h6><a href="product-details.html"
                                                                    className="text-white">On-sale <br/>Best
                                Prices</a></h6><p>Limited Time:Online Only!</p></div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6 pb-3">
                        <div className="banner__item p-relative mb-30 w-img">
                            <div className="banner__img"><a href="product-details.html"><img
                                src={banner_3} alt="" className="img-fluid"/></a></div>
                            <div className="banner__content"><h6><a href="product-details.html"
                                                                    className="text-white">Hot Sale <br/>Super
                                Laptops 2022 </a></h6><p>Free Shipping All Order</p></div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Banner;

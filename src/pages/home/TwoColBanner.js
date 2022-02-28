import React from 'react';
import banner_4 from '../../assets/images/banner-4.jpeg'
import banner_5 from '../../assets/images/banner-5.jpeg'
const TwoColBanner = () => {
    return (
        <section className="banner__area banner__area-d pb-5">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-xl-6 col-lg-6 col-md-12">
                        <div className="banner__item p-relative w-img mb-30">
                            <div className="banner__img"><a href="product-details.html"><img
                                src={banner_4} alt="" /></a></div>
                            <div className="banner__content"><span>Bestseller Products</span><h6><a
                                href="product-details.html" className="text-white">PC &amp; Docking Station</a></h6><p>Discount 20% Off,Top
                                Quality Products</p></div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-12">
                        <div className="banner__item p-relative mb-30 w-img">
                            <div className="banner__img"><a href="product-details.html"><img
                                src={banner_5} alt="" /></a></div>
                            <div className="banner__content"><span>Featured Products</span><h6><a
                                href="product-details.html" className="text-white">Accessories iPhone</a></h6><p>Free Shipping All Order Over
                                $99</p></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TwoColBanner;

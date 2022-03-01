import React from 'react';
import {BsChevronRight} from "react-icons/bs";
import '../../assets/css/category_area.css'
import cat_1 from '../../assets/images/cat-1.jpeg'
import cat_2 from '../../assets/images/cat-2.jpeg'
import cat_3 from '../../assets/images/cat-3.jpeg'
import cat_4 from '../../assets/images/cat-4.jpeg'
import cat_5 from '../../assets/images/cat-5.jpeg'
import cat_6 from '../../assets/images/cat-6.jpeg'
const CategorySection = () => {
    return (
        <section className="categories__area light-bg-s pt-20 pb-10">
            <div className="container-fluid custom-container">
                <div className="row">
                    <div className="col-xl-12">
                        <div className="section__head d-flex justify-content-between mb-10 mt-20">
                            <div className="section__title section__title-2"><h4 className="font-weight-bold" style={{fontWeight:'700'}}>Popular
                                Categories</h4></div>
                            <div className="button-wrap button-wrap-2"><a href="product.html">See All Product <BsChevronRight /></a></div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-2 col-lg-3 col-md-4">
                        <div className="categories__item p-relative w-img mb-30">
                            <div className="categories__img b-radius-2"><a href="product-details.html"><img
                                src={cat_1} alt="" /></a></div>
                            <div className="categories__content"><h6><a
                                href="product-details.html">Decor &amp; Furniture</a></h6><p>(7 Products)</p></div>
                        </div>
                    </div>
                    <div className="col-xl-2 col-lg-3 col-md-4">
                        <div className="categories__item p-relative w-img mb-30">
                            <div className="categories__img b-radius-2"><a href="product-details.html"><img
                                src={cat_2} alt=""/></a></div>
                            <div className="categories__content"><h6><a href="product-details.html">Smart Phones</a>
                            </h6><p>(12 Products)</p></div>
                        </div>
                    </div>
                    <div className="col-xl-2 col-lg-3 col-md-4">
                        <div className="categories__item p-relative w-img mb-30">
                            <div className="categories__img b-radius-2"><a href="product-details.html"><img
                                src={cat_3} alt=""/></a></div>
                            <div className="categories__content"><h6><a
                                href="product-details.html">Fashion &amp; Clothing</a></h6><p>(5 Products)</p></div>
                        </div>
                    </div>
                    <div className="col-xl-2 col-lg-3 col-md-4">
                        <div className="categories__item p-relative w-img mb-30">
                            <div className="categories__img b-radius-2"><a href="product-details.html"><img
                                src={cat_4} alt=""/></a></div>
                            <div className="categories__content"><h6><a href="product-details.html">Home Kitchen</a>
                            </h6><p>(9 Products)</p></div>
                        </div>
                    </div>
                    <div className="col-xl-2 col-lg-3 col-md-4">
                        <div className="categories__item p-relative w-img mb-30">
                            <div className="categories__img b-radius-2"><a href="product-details.html"><img
                                src={cat_5} alt=""/></a></div>
                            <div className="categories__content"><h6><a
                                href="product-details.html">Camera &amp; Photos</a></h6><p>(7 Products)</p></div>
                        </div>
                    </div>
                    <div className="col-xl-2 col-lg-3 col-md-4">
                        <div className="categories__item p-relative w-img mb-30">
                            <div className="categories__img b-radius-2"><a href="product-details.html"><img
                                src={cat_6} alt=""/></a></div>
                            <div className="categories__content"><h6><a
                                href="product-details.html">Speaker &amp; Audio</a></h6><p>(15 Products)</p></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
);
};

export default CategorySection;

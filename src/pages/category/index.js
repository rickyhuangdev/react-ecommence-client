import React, {useEffect, useState} from 'react';
import '../../assets/css/category_left.css'
import '../../assets/css/category_right.css'
import {Checkbox, Rate, Slider} from 'antd';
import sl_banner from '../../assets/images/sl-banner.jpeg'
import sl_banner_sm from '../../assets/images/sl-banner-sm.png'
import {BsEye, BsHddStack, BsHeart} from "react-icons/bs";
import {getCategoryApi} from "../../api/category";

const CategoryIndex = ({match}) => {
    const {slug} = match.params
    const [categoryOptions, setCategoryOptions] = useState([])
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        getCategoryApi().then(re => {
            if (re) {
                let categoryOptions = []
                re.map(item => {
                    categoryOptions.push({label: item.name, value: item._id})
                })
                setCategoryOptions(categoryOptions)
            }

        })
    }, [])

    // if(slug){
    //     console.log(123)
    // }else{
    //     console.log(333)
    // }
    const onChange = (e) => {
        console.log(e)
    }
    return (
        <div className="shop-area mb-20 my-5">
            <div className="container">
                <div className="row">
                    <div className="col-xl-3 col-lg-4">
                        <div className="product-widget mb-30">
                            <h5 className="pt-title">
                                Product categories
                            </h5>
                            <div className="widget-category-list mt-20 d-flex flex-column">
                                    <Checkbox.Group options={categoryOptions} onChange={onChange}/>
                            </div>
                        </div>
                        <div className="product-widget mb-30"><h5 className="pt-title">Filter By Price</h5>
                            <div className="price__slider mt-30">
                                <div>
                                    <Slider range={{draggableTrack: true}} defaultValue={[20, 50]}
                                            className="text-danger"/>
                                </div>
                            </div>
                        </div>
                        <div className="product-widget mb-30"><h5 className="pt-title">Choose Color</h5>
                            <div className="product__color mt-20">
                                <ul>
                                    <li><a href="#" className="black"></a></li>
                                    <li><a href="#" className="blue"></a></li>
                                    <li><a href="#" className="red"></a></li>
                                    <li><a href="#" className="yellow"></a></li>
                                    <li><a href="#" className="pink"></a></li>
                                    <li><a href="#" className="brown"></a></li>
                                    <li><a href="#" className="green"></a></li>
                                    <li><a href="#" className="oragne"></a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="product-widget mb-30"><h5 className="pt-title">Choose Brand</h5>
                            <div className="widget-category-list mt-20">
                                <form action="#">
                                    <div className="single-widget-category"><input type="checkbox" id="brand-item-1"
                                                                                   name="brand-item"/><label
                                        htmlFor="brand-item-1">CarRentals <span>(12)</span></label></div>
                                    <div className="single-widget-category"><input type="checkbox" id="brand-item-2"
                                                                                   name="brand-item"/><label
                                        htmlFor="brand-item-2">CarVoodoo <span>(60)</span></label></div>
                                    <div className="single-widget-category"><input type="checkbox" id="brand-item-3"
                                                                                   name="brand-item"/><label
                                        htmlFor="brand-item-3">Creative <span>(41)</span></label></div>
                                    <div className="single-widget-category"><input type="checkbox" id="brand-item-4"
                                                                                   name="brand-item"/><label
                                        htmlFor="brand-item-4">Impact <span>(28)</span></label></div>
                                    <div className="single-widget-category"><input type="checkbox" id="brand-item-5"
                                                                                   name="brand-item"/><label
                                        htmlFor="brand-item-5">IQVia <span>(21)</span></label></div>
                                    <div className="single-widget-category"><input type="checkbox" id="brand-item-7"
                                                                                   name="brand-item"/><label
                                        htmlFor="brand-item-7">LeadsGreen <span>(62)</span></label></div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-9 col-lg-8">
                        <div className="shop-banner mb-30">
                            <div className="banner-image shadow-1">
                                <img src={sl_banner} alt="" className="banner-l"/>
                                <img src={sl_banner_sm} alt="" className="banner-sm"/>
                                <div className="banner-content text-center"><p className="banner-text mb-30">Hurry
                                    Up!<br/>Free
                                    Shipping All Order Over $99</p>
                                    <a href="shop.html" className="st-btn-d b-radius shadow-1">Discover
                                        now</a></div>
                            </div>
                        </div>
                        <div className="product-lists-top">
                            <div className="product__filter-wrap">
                                <div className="row align-items-center">
                                    <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                                        <div className="product__filter d-sm-flex align-items-center">
                                            <div className="product__col">
                                                <ul className="nav nav-tabs" id="myTab" role="tablist">
                                                    <li className="nav-item" role="presentation">
                                                        <button className="nav-link active" id="FourCol-tab"
                                                                data-bs-toggle="tab" data-bs-target="#FourCol"
                                                                type="button" role="tab" aria-controls="FourCol"
                                                                aria-selected="true"><i className="fal fa-th"></i>
                                                        </button>
                                                    </li>
                                                    <li className="nav-item" role="presentation">
                                                        <button className="nav-link" id="FiveCol-tab"
                                                                data-bs-toggle="tab"
                                                                data-bs-target="#FiveCol" type="button" role="tab"
                                                                aria-controls="FiveCol" aria-selected="false"><i
                                                            className="fal fa-list"></i></button>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="product__result pl-60"><p>Showing 1-20 of 29 relults</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                                        <div
                                            className="product__filter-right d-flex align-items-center justify-content-md-end">
                                            <div className="product__sorting product__show-no"><select
                                                style={{display: 'none'}}>
                                                <option>10</option>
                                                <option>20</option>
                                                <option>30</option>
                                                <option>40</option>
                                            </select>
                                                <div className="nice-select" tabIndex="0"><span
                                                    className="current">10</span>
                                                    <ul className="list">
                                                        <li data-value="10" className="option selected focus">10</li>
                                                        <li data-value="20" className="option">20</li>
                                                        <li data-value="30" className="option">30</li>
                                                        <li data-value="40" className="option">40</li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="product__sorting product__show-position ml-20"><select
                                                style={{display: 'none'}}>
                                                <option>Latest</option>
                                                <option>New</option>
                                                <option>Up comeing</option>
                                            </select>
                                                <div className="nice-select" tabIndex="0"><span
                                                    className="current">Latest</span>
                                                    <ul className="list">
                                                        <li data-value="Latest" className="option selected">Latest</li>
                                                        <li data-value="New" className="option">New</li>
                                                        <li data-value="Up comeing" className="option">Up comeing</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tab-content">
                            <div className="tp-wrapper-2">
                                <div className="single-item-pd">
                                    <div className="row align-items-center">
                                        <div className="col-xl-9">
                                            <div
                                                className="single-features-item single-features-item-df b-radius mb-20">
                                                <div className="row g-0 align-items-center">
                                                    <div className="col-md-4">
                                                        <div className="features-thum">
                                                            <div className="features-product-image w-img">
                                                                <a href="product-details.html"><img
                                                                    src="http://v.bootstrapmb.com/2022/2/lu57m12063/assets/img/product/sm-1.jpg"
                                                                    alt=""/></a>
                                                            </div>
                                                            <div className="product__offer">
                                                                <span
                                                                    className="discount bg-success font-weight-bold">-15%</span>
                                                            </div>
                                                            <div className="product-action">
                                                                <a href="#" className="icon-box icon-box-1"
                                                                   data-bs-toggle="modal"
                                                                   data-bs-target="#productModalId"><BsEye/></a>
                                                                <a href="#"
                                                                   className="icon-box icon-box-1"><BsHeart/></a>
                                                                <a href="#"
                                                                   className="icon-box icon-box-1"><BsHddStack/></a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-8">
                                                        <div className="product__content product__content-d">
                                                            <h6><a href="product-details.html">Classic Leather Backpack Daypack 2022</a></h6>
                                                            <div className="rating mb-5">
                                                                <Rate allowHalf defaultValue={2.5} value={2.5} disabled style={{fontSize:'15px'}}/>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-3">
                                            <div className="product-stock mb-15">
                                                <h5>Availability:<span>940 in stock</span></h5>
                                                <h6>$220.00 - <del>$240.00</del></h6>
                                            </div>
                                            <div className="stock-btn ">
                                                <button type="button"
                                                        className="btn btn-warning shadow-1 cart-btn d-flex mb-10 align-items-center justify-content-center w-100 text-white">Add
                                                    to Cart
                                                </button>
                                                <button type="button"
                                                        className="btn btn-dark shadow-1 wc-checkout d-flex align-items-center justify-content-center w-100"
                                                        data-bs-toggle="modal" data-bs-target="#productModalId">Quick
                                                    View
                                                </button>
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
    );
};

export default CategoryIndex;

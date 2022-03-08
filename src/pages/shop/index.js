import React, {useEffect, useState} from 'react';
import '../../assets/css/category_left.css'
import '../../assets/css/page.css'
import {Checkbox, Rate, Slider} from 'antd';
import sl_banner from '../../assets/images/sl-banner.jpeg'
import sl_banner_sm from '../../assets/images/sl-banner-sm.png'
import {getCategoryApi} from "../../api/category";
import {BsEye, BsHddStack, BsHeart} from "react-icons/bs";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getProductSearchDetail} from "../../store/actions/product";
import Message from "../../components/message/Message";

const ShopIndex = ({match}) => {
    const {keyword} = match.params
    const [categoryOptions, setCategoryOptions] = useState([])
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(false)
    const productSearch = useSelector(state => state.productSearch)
    const {loading: searchLoading, searchText, productList} = productSearch
    const dispatch = useDispatch()
    useEffect(() => {
        // getCategoryRelatedProduct()
        if(searchText){
            const delayed = setTimeout(() => {
                dispatch(getProductSearchDetail({query: searchText}))
            }, 300)
            return () => clearTimeout(delayed)
        }

    }, [searchText])

    const getCategoryRelatedProduct = async () => {
        await getCategoryApi().then(re => {
            if (re) {
                let categoryOptions = []
                re.map(item => {
                    categoryOptions.push({label: item.name, value: item._id})
                })
                setCategoryOptions(categoryOptions)
            }

        })
        // if (slug) {
        //     await readCategoryApi(slug).then(res => {
        //         if (res) {
        //             setProducts(res.products)
        //             console.log(products)
        //         }
        //     })
        // } else {
        //     await getProductsApi().then(res => {
        //         setProducts(res)
        //     })
        // }

    }

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
                        {productList && productList.length > 0 ? (
                            <>
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
                                                                        aria-selected="true"><i
                                                                    className="fal fa-th"></i>
                                                                </button>
                                                            </li>
                                                            <li className="nav-item" role="presentation">
                                                                <button className="nav-link" id="FiveCol-tab"
                                                                        data-bs-toggle="tab"
                                                                        data-bs-target="#FiveCol" type="button"
                                                                        role="tab"
                                                                        aria-controls="FiveCol" aria-selected="false"><i
                                                                    className="fal fa-list"></i></button>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="product__result pl-60"><p>Showing 1-20 of 29
                                                        relults</p>
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
                                                                <li data-value="10"
                                                                    className="option selected focus">10
                                                                </li>
                                                                <li data-value="20" className="option">20</li>
                                                                <li data-value="30" className="option">30</li>
                                                                <li data-value="40" className="option">40</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="product__sorting product__show-position ml-20">
                                                        <select
                                                            style={{display: 'none'}}>
                                                            <option>Latest</option>
                                                            <option>New</option>
                                                            <option>Up comeing</option>
                                                        </select>
                                                        <div className="nice-select" tabIndex="0"><span
                                                            className="current">Latest</span>
                                                            <ul className="list">
                                                                <li data-value="Latest"
                                                                    className="option selected">Latest
                                                                </li>
                                                                <li data-value="New" className="option">New</li>
                                                                <li data-value="Up comeing" className="option">Up
                                                                    comeing
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <div className="tab-content">
                                    <div className="tp-wrapper">
                                        <div className="row g-0">
                                            {productList && productList.length > 0 && productList.map(product => (
                                                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6" key={product._id}>
                                                    <div className="product__item product__item-d">
                                                        <div className="product__thumb fix">
                                                            <div className="product-image w-img"><Link
                                                                to={`/product/${product.slug}`}><img
                                                                src={product.images[0].url} className="img-fluid"
                                                                alt={product.title}/></Link></div>
                                                            <div className="product-action">
                                                                <a href="#" className="icon-box icon-box-1"><BsEye/></a><a
                                                                href="#"
                                                                className="icon-box icon-box-1"><BsHeart/></a><a
                                                                href="#"
                                                                className="icon-box icon-box-1"><BsHddStack/></a>
                                                            </div>
                                                        </div>
                                                        <div className="product__content-3"><Link
                                                            to={`/product/${product.slug}`}>{product.title}</Link>
                                                            <div className="rating mb-2">
                                                                <Rate allowHalf defaultValue={2.5} value={2.5} disabled
                                                                      style={{fontSize: '15px'}}/>
                                                                <span>(01 review)</span></div>
                                                            <div className="price mb-10"><span>${product.price}</span>
                                                            </div>
                                                        </div>
                                                        <div className="product__add-cart-s text-center">
                                                            <button type="button"
                                                                    className="cart-btn d-flex mb-10 align-items-center justify-content-center w-100 shadow-3">Add
                                                                to Cart
                                                            </button>
                                                            <button type="button"
                                                                    className="wc-checkout d-flex align-items-center justify-content-center w-100"
                                                                    data-bs-toggle="modal"
                                                                    data-bs-target="#productModalId">Quick
                                                                View
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </>
                        ) : (<Message variant="info" children="No Search Results"/>)}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShopIndex;

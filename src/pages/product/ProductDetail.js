import React, {useEffect, useState} from 'react';
import {BsHeart} from "react-icons/bs";
import {InputNumber, Space, Tabs} from 'antd';
import Slider from "react-slick";
import '../../assets/css/product.css'
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.min.css';
import InnerImageZoom from 'react-inner-image-zoom';
import RatingModal from "../../components/modal/RatingModal";
import {useDispatch, useSelector} from "react-redux";
import {showAverage} from "../../utils/rating";
import ProductSlider from "../home/productSlider";
import {addToCart} from "../../store/actions/cart";
import {toast} from "react-toastify";
import {getProductDetail} from "../../store/actions/product";
import {useHistory} from "react-router-dom";
import {saveWishlist} from "../../store/actions/wishlist";

const ProductDetail = ({match}) => {
    const {slug} = match.params
    const [imageSlider, setImageSlider] = useState([]);
    const [relativeProduct, setRelativeProduct] = useState([]);
    const [existingRatingObject, setExistingRatingObject] = useState(0);
    const {TabPane} = Tabs;
    const loginInfo = useSelector(state => state.login)
    const {userInfo, loading, error} = loginInfo
    const productDetail = useSelector(state => state.productDetail)
    const {product, loading: productLoading, error: ProductError} = productDetail
    const saveWishlists = useSelector(state => state.saveWishlist)
    const {success: saveWishlistSuccess} = saveWishlists
    const [qty, setQty] = useState(1)
    const dispatch = useDispatch()
    const history = useHistory()
    useEffect(() => {
        dispatch(getProductDetail(slug))
        if (product.ratings && userInfo) {
            let existingRatingObject = product.ratings.find(
                (ele) => ele.postedBy === userInfo._id
            );
            existingRatingObject && setExistingRatingObject(existingRatingObject.star)
        }
        if (saveWishlistSuccess) {
            toast("Add to Wishlist Successfully")
            dispatch({
                type: 'SAVE_WISHLIST_RESET'
            })
        }
    }, [match, dispatch, history, saveWishlistSuccess])

    // const getProductDetail = () => {
    //     readProductApi(slug).then(res => {
    //         if (res) {
    //             setProduct(res)
    //             setImageSlider(res.images)
    //             getRelativeProductApi(res._id).then(res => {
    //                 setRelativeProduct(res)
    //             })
    //         }
    //     })
    // }
    const onChange = (e) => {
        setQty(e)
    }

    const addToCartHandler = () => {
        dispatch(addToCart({product, count: qty}))
        toast.success("Add to cart successfully",{toastId:product._id})

    }
    const settings = {
        customPaging: function (i) {
            return (
                <a>
                    <img src={product.images[i].url} />
                </a>


            );
        },
        dots: true,
        dotsClass: "slick-dots slick-product-thumb",
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 2
    };
    const callback = (key) => {
        console.log(key)
    }

    const addToWishlist = () => {
        if (!userInfo) {
            toast.info("Please Login First")
            history.push(`/login?redirect=product/${slug}`)
            return
        }
        dispatch(saveWishlist(product._id))
    }
    return (
        <>
            <div className="product-details">
                <div className="container-fluid p-4 p-sm-5 ">
                    <div className="row">
                        <div className="col-xl-5">
                            <div className="product__details-nav">
                                <div className="product__details-thumb">
                                    <Slider {...settings}>
                                        {product && product.images && product.images.map(item => (
                                            <div key={item.public_id}
                                                 className="d-flex justify-content-center align-items-start p-0 m-0">
                                                <InnerImageZoom src={item.url} zoomSrc={item.url}>
                                                    <img src={item.url} alt={item.public_id} style={{height: "500px"}}
                                                         className="product-slider-image"/>
                                                </InnerImageZoom>
                                            </div>
                                        ))}

                                    </Slider>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-7 product__details-content-description">
                            <div className="product__details-content"><h6
                                style={{
                                    color: '#0068c9',
                                    fontSize: '24px',
                                    margin: '0 0 8px',
                                    fontWeight: "700"
                                }}>{product && product.title}</h6>
                                <div className="pd-rating mb-10">
                                    {product && product.ratings && product.ratings.length > 0 ? showAverage(product) : (
                                        <h6 className="mb-0">No rating yet</h6>)}
                                    <span className="mx-2 d-block">(01 review)</span><span><a
                                    href="#">Add your review</a></span></div>
                                <div className="price mb-10"><span>$ {product && product.price}</span></div>
                                <div className="features-des mb-20 mt-15">
                                    <ul>
                                        <li><span
                                            className="text-dark font-weight-bold">{product && product.description}</span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="product-stock mb-20">
                                    <h5>Availability:<span>{product && product.quantity} in stock</span></h5></div>
                                <div className="cart-option mb-15">
                                    <div className="product-quantity mr-20">
                                        <div className="cart-plus-minus p-relative">
                                            <Space>
                                                <InputNumber size="large" min={1} max={product && product.quantity}
                                                             defaultValue={1}
                                                             onChange={onChange}/>
                                            </Space>
                                        </div>
                                    </div>
                                    <button className="btn btn-warning my-1 text-white shadow-none" type="button"
                                            onClick={addToCartHandler} disabled={product && product.quantity <= 0}>
                                        {product && product.quantity <= 0 ? 'OUT OF STOCK' : 'ADD TO CART'}
                                    </button>
                                </div>
                                <div className="details-meta my-4">
                                    <div className="d-meta-left d-flex flex-column flex-sm-row">
                                        <div className="dm-item mr-20 pb-2">
                                            <button className="btn btn-primary shadow-none d-flex align-items-center"
                                                    onClick={addToWishlist}>
                                                <BsHeart className="me-1 text-white font-weight-bold"/>Add to
                                                wishlist
                                            </button>
                                        </div>
                                        {/*<div className="dm-item mr-20 pb-2">*/}
                                        {/*    <button className="btn btn-light shadow-none d-flex align-items-center">*/}
                                        {/*        <BsBookmarks className="mr-1"/>Compare*/}
                                        {/*    </button>*/}
                                        {/*</div>*/}
                                        <div className="dm-item pb-2">
                                            <RatingModal title={product && product.title}
                                                         existingRatingObject={existingRatingObject}
                                                         product_id={product&&product._id}>
                                            </RatingModal>
                                        </div>
                                    </div>
                                    <div className="d-meta-left">
                                        <div className="dm-item">
                                            {/*<button className="btn btn-info shadow-none d-flex align-items-center">*/}
                                            {/*    <BsShare*/}
                                            {/*        className="mr-1"/>Share*/}
                                            {/*</button>*/}

                                        </div>
                                    </div>
                                </div>
                                <div className="product-tag-area mt-15">
                                    <div className="product_info"><span className="sku_wrapper"><span
                                        className="title">SKU:</span><span className="sku">DK1002</span></span><span
                                        className="posted_in"><span className="title">Categories:</span><a
                                        href="#">
                                    {product&&product.category.name}
                                    </a></span>
                                        {/*<span className="tagged_as"><span*/}
                                        {/*className="title">Tags:</span><a href="#">Smartphone</a>,<a*/}
                                        {/*href="#">Tablets</a></span>*/}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*<div className="product-details-des mt-40 mb-60">*/}
            {/*    <div className="container-fluid mx-sm-5 p-3 mx-1">*/}
            {/*        <div className="row">*/}
            {/*            <div className="col-xl-12">*/}
            {/*                <div className="product__details-des-tab">*/}
            {/*                    <Tabs defaultActiveKey="1" onChange={callback}>*/}
            {/*                        <TabPane tab="Description" key="1">*/}
            {/*                            Content of Tab Pane 1*/}
            {/*                        </TabPane>*/}
            {/*                        <TabPane tab="Additional information" key="2">*/}
            {/*                            Content of Tab Pane 2*/}
            {/*                        </TabPane>*/}
            {/*                        <TabPane tab="Reviews(1)" key="3">*/}
            {/*                            Content of Tab Pane 3*/}
            {/*                        </TabPane>*/}
            {/*                    </Tabs>*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}
            {relativeProduct && relativeProduct.length > 5 && (
                <div className="product-relative mt-40 mb-60">
                    <div className="container-fluid mx-sm-5 p-3 mx-1">
                        <ProductSlider title="Related Products " products={relativeProduct}/>
                    </div>
                </div>
            )}

        </>
    );
};

export default ProductDetail;

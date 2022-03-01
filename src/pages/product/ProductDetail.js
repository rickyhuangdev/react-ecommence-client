import React, {useEffect, useState} from 'react';
import {BsBookmarks, BsHeart, BsShare} from "react-icons/bs";
import {InputNumber, Space, Tabs} from 'antd';
import {readProductApi} from "../../api/product";
import Slider from "react-slick";
import '../../assets/css/product.css'
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.min.css';
import InnerImageZoom from 'react-inner-image-zoom';
import StarRatings from 'react-star-ratings';
import RatingModal from "../../components/modal/RatingModal";

const ProductDetail = ({match}) => {
    const {slug} = match.params
    const [product, setProduct] = useState({});
    const [rating, setRating] = useState('');
    const [imageSlider, setImageSlider] = useState([]);
    const {TabPane} = Tabs;
    useEffect(() => {
        getProductDetail()
    }, [])
    const getProductDetail = () => {
        readProductApi(slug).then(res => {
            if (res) {
                setProduct(res)
                setImageSlider(res.images)
            }
        })
    }
    const onChange = () => {
    }
    const thumbImageStyle ={

    }
    const settings = {
        customPaging: function (i) {
            return (
                <a>
                    <img src={imageSlider[i].url} />
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
    const changeRating = (newRating, name) => {
        setRating(newRating)
        console.log(rating)
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
                                        {imageSlider && imageSlider.map(item => (
                                            <div key={item.public_id} className="d-flex justify-content-center align-items-start p-0 m-0">
                                                <InnerImageZoom src={item.url} zoomSrc={item.url}>
                                                    <img src={item.url} alt={item.public_id} style={{height:"500px"}} className="product-slider-image" />
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
                                }}>{product.title}</h6>
                                <div className="pd-rating mb-10">
                                    <StarRatings
                                        rating={2}
                                        starRatedColor="rgb(252, 190, 0)"
                                        starHoverColor="rgb(252, 190, 0)"
                                        changeRating={(newRating,name)=>console.log(newRating,name)}
                                        numberOfStars={5}
                                        name={product._id}
                                        starSpacing='1px'
                                        starDimension="20px"
                                        isSelectable={false}
                                    />
                                    <span className="mx-2 d-block">(01 review)</span><span><a href="#">Add your review</a></span></div>
                                <div className="price mb-10"><span>$ {product.price}</span></div>
                                <div className="features-des mb-20 mt-10">
                                    <ul>
                                        <li><span className="text-dark font-weight-bold">{product.description}</span></li>
                                    </ul>
                                </div>
                                <div className="product-stock mb-20">
                                    <h5>Availability:<span>{product.quantity} in stock</span></h5></div>
                                <div className="cart-option mb-15">
                                    <div className="product-quantity mr-20">
                                        <div className="cart-plus-minus p-relative">
                                            <Space>
                                                <InputNumber size="large" min={1} max={product.quantity}
                                                             defaultValue={1}
                                                             onChange={onChange}/>
                                            </Space>
                                        </div>
                                    </div>
                                    <button className="btn btn-warning my-1 text-white shadow-none" type="button">Add to
                                        Cart
                                    </button>
                                </div>
                                <div className="details-meta">
                                    <div className="d-meta-left d-flex flex-column flex-sm-row">
                                        <div className="dm-item mr-20 pb-2">
                                            <button className="btn btn-secondary shadow-none d-flex align-items-center">
                                                <BsHeart className="mr-1 text-white font-weight-bold"/>Add to
                                                wishlist
                                            </button>
                                        </div>
                                        <div className="dm-item mr-20 pb-2">
                                            <button className="btn btn-light shadow-none d-flex align-items-center">
                                                <BsBookmarks className="mr-1"/>Compare
                                            </button>
                                        </div>
                                        <div className="dm-item pb-2">
                                            <RatingModal title={product.title}>

                                                <StarRatings
                                                    rating={2}
                                                    starRatedColor="rgb(252, 190, 0)"
                                                    starHoverColor="rgb(252, 190, 0)"
                                                    changeRating={(newRating, name) => console.log(newRating, name)}
                                                    numberOfStars={5}
                                                    name={product._id}
                                                    starSpacing='1px'
                                                    starDimension="20px"
                                                    isSelectable={false}
                                                />
                                            </RatingModal>
                                        </div>
                                    </div>
                                    <div className="d-meta-left">
                                        <div className="dm-item">
                                            <button className="btn btn-info shadow-none d-flex align-items-center">
                                                <BsShare
                                                    className="mr-1"/>Share
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="product-tag-area mt-15">
                                    <div className="product_info"><span className="sku_wrapper"><span
                                        className="title">SKU:</span><span className="sku">DK1002</span></span><span
                                        className="posted_in"><span className="title">Categories:</span><a
                                        href="#">
                                    {/*{product.category.name}*/}
                                    </a></span><span className="tagged_as"><span
                                        className="title">Tags:</span><a href="#">Smartphone</a>,<a
                                        href="#">Tablets</a></span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="product-details-des mt-40 mb-60">
                <div className="container-fluid mx-sm-5 p-3 mx-1">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="product__details-des-tab">
                                <Tabs defaultActiveKey="1" onChange={callback}>
                                    <TabPane tab="Description" key="1">
                                        Content of Tab Pane 1
                                    </TabPane>
                                    <TabPane tab="Additional information" key="2">
                                        Content of Tab Pane 2
                                    </TabPane>
                                    <TabPane tab="Reviews(1)" key="3">
                                        Content of Tab Pane 3
                                    </TabPane>
                                </Tabs>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProductDetail;

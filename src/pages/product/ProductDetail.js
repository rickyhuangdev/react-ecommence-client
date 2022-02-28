import React from 'react';
import {BsBookmarks, BsHeart, BsRecordFill, BsShare, BsStar} from "react-icons/bs";
import {InputNumber, Space} from 'antd';

const ProductDetail = () => {
    const onChange = () => {
    }

    return (
        <div className="product-details">
            <div className="container p-5">
                <div className="row">
                    <div className="col-xl-6">

                    </div>
                    <div className="col-xl-6">
                        <div className="product__details-content"><h6
                            style={{color: '#0068c9', fontSize: '24px', margin: '0 0 8px', fontWeight: "700"}}>Samsung
                            Galaxy A12,32GB,Black –(Locked)</h6>
                            <div className="pd-rating mb-10">
                                <ul className="rating d-flex" style={{listStyle: 'none'}}>
                                    <li><a href="#"><BsStar/></a></li>
                                    <li><a href="#"><BsStar/></a></li>
                                    <li><a href="#"><BsStar/></a></li>
                                    <li><a href="#"><BsStar/></a></li>
                                    <li><a href="#"><BsStar/></a></li>
                                </ul>
                                <span>(01 review)</span><span><a href="#">Add your review</a></span></div>
                            <div className="price mb-10"><span>$216.00</span></div>
                            <div className="features-des mb-20 mt-10">
                                <ul>
                                    <li><a href="product-details.html"><BsRecordFill/>Bass and Stereo
                                        Sound.</a></li>
                                    <li><a href="product-details.html"><BsRecordFill/>Display with
                                        3088 x 1440 pixels resolution.</a></li>
                                    <li><a href="product-details.html"><BsRecordFill/>Memory,Storage &amp;SIM:12GB
                                        RAM,256GB.</a></li>
                                    <li><a href="product-details.html"><BsRecordFill/>Androi v10.0
                                        Operating system.</a></li>
                                </ul>
                            </div>
                            <div className="product-stock mb-20"><h5>Availability:<span>940 in stock</span></h5></div>
                            <div className="cart-option mb-15">
                                <div className="product-quantity mr-20">
                                    <div className="cart-plus-minus p-relative">
                                        <Space>
                                            <InputNumber size="large" min={1} max={100000} defaultValue={3}
                                                         onChange={onChange}/>
                                        </Space>
                                    </div>
                                </div>
                                <button className="btn btn-warning my-1 text-white shadow-none" type="button">Add to
                                    Cart
                                </button>
                            </div>
                            <div className="details-meta">
                                <div className="d-meta-left">
                                    <div className="dm-item mr-20"><a href="#" ><BsHeart className="mr-1"/>Add to
                                        wishlist</a></div>
                                    <div className="dm-item"><a href="#"><BsBookmarks className="mr-1"/>Compare</a>
                                    </div>
                                </div>
                                <div className="d-meta-left">
                                    <div className="dm-item"><a href="#"><BsShare className="mr-1"/>Share</a>
                                    </div>
                                </div>
                            </div>
                            <div className="product-tag-area mt-15">
                                <div className="product_info"><span className="sku_wrapper"><span
                                    className="title">SKU:</span><span className="sku">DK1002</span></span><span
                                    className="posted_in"><span className="title">Categories:</span><a
                                    href="#">iPhone</a><a href="#">Tablets</a></span><span className="tagged_as"><span
                                    className="title">Tags:</span><a href="#">Smartphone</a>,<a
                                    href="#">Tablets</a></span></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;

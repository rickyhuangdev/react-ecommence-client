import React from 'react';

const CategoryIndex = () => {
    return (
        <div className="shop-area mb-20 my-5">
            <div className="container">
                <div className="col-xl-3 col-lg-4">
                    <div className="product-widget mb-30">
                        <h5 className="pt-title">
                            Product categories
                        </h5>
                        <div className="widget-category-list mt-20">
                            <form action="#">
                                <div className="single-widget-category"><input type="checkbox" id="cat-item-1"
                                                                               name="cat-item"/><label
                                    htmlFor="cat-item-1">Clothing &amp;Apparel <span>(12)</span></label></div>
                                <div className="single-widget-category"><input type="checkbox" id="cat-item-2"
                                                                               name="cat-item"/><label
                                    htmlFor="cat-item-2">Consumer Electrics <span>(60)</span></label></div>
                                <div className="single-widget-category"><input type="checkbox" id="cat-item-3"
                                                                               name="cat-item"/><label
                                    htmlFor="cat-item-3">Computers &amp;Technologies <span>(41)</span></label></div>
                                <div className="single-widget-category"><input type="checkbox" id="cat-item-4"
                                                                               name="cat-item"/><label
                                    htmlFor="cat-item-4">Phones &amp;Accessories <span>(28)</span></label></div>
                                <div className="single-widget-category"><input type="checkbox" id="cat-item-5"
                                                                               name="cat-item"/><label
                                    htmlFor="cat-item-5">Babies &amp;Moms <span>(21)</span></label></div>
                                <div className="single-widget-category"><input type="checkbox" id="cat-item-7"
                                                                               name="cat-item"/><label
                                    htmlFor="cat-item-7">Books &amp;Office <span>(62)</span></label></div>
                                <div className="single-widget-category"><input type="checkbox" id="cat-item-8"
                                                                               name="cat-item"/><label
                                    htmlFor="cat-item-8">Sport &amp;Outdoo <span>(22)</span></label></div>
                                <div className="single-widget-category"><input type="checkbox" id="cat-item-9"
                                                                               name="cat-item"/><label
                                    htmlFor="cat-item-9">Chairs &amp;Stools <span>(20)</span></label></div>
                                <div className="single-widget-category"><input type="checkbox" id="cat-item-10"
                                                                               name="cat-item"/><label
                                    htmlFor="cat-item-10">Furniture &amp;Acessories <span>(06)</span></label></div>
                                <div className="single-widget-category"><input type="checkbox" id="cat-item-11"
                                                                               name="cat-item"/><label
                                    htmlFor="cat-item-11">Kitchen &amp;Tableware <span>(30)</span></label></div>
                                <div className="single-widget-category"><input type="checkbox" id="cat-item-12"
                                                                               name="cat-item"/><label
                                    htmlFor="cat-item-12">Lighting <span>(30)</span></label></div>
                                <div className="single-widget-category"><input type="checkbox" id="cat-item-13"
                                                                               name="cat-item"/><label
                                    htmlFor="cat-item-13">Armchairs &amp;Chaises <span>(30)</span></label></div>
                            </form>
                        </div>
                    </div>
                    <div className="product-widget mb-30"><h5 className="pt-title">Filter By Price</h5>
                        <div className="price__slider mt-30">
                            <div id="slider-range"
                                 className="ui-slider ui-corner-all ui-slider-horizontal ui-widget ui-widget-content">
                                <div className="ui-slider-range ui-corner-all ui-widget-header"
                                     style={{left: '0%', width: '100%'}}></div>
                                <span tabIndex="0" className="ui-slider-handle ui-corner-all ui-state-default"
                                      style={{left: '21.1538%'}}></span><span tabIndex="0"
                                                                              className="ui-slider-handle ui-corner-all ui-state-default"
                                                                              style={{left: '100%'}}></span>
                                <div className="ui-slider-range ui-corner-all ui-widget-header"
                                     style={{left: '21.1538%', width: '78.8462%'}}></div>
                            </div>
                            <div>
                                <form action="#" className="s-form mt-20"><input type="text" id="amount" readOnly=""/>
                                    <button type="submit" className="tp-btn-square-lg">Filter</button>
                                </form>
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

                </div>
            </div>
        </div>
    );
};

export default CategoryIndex;

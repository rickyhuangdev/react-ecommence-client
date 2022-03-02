import React from 'react';
import '../../assets/css/cart.css'
const CartIndex = () => {
    return (
        <section className="cart_section section_space">
            <div className="container">
                <div className="cart_update_wrap"><p className="mb-0"><i className="fal fa-check-square"></i>Shipping
                    costs updated.</p></div>
                <div className="cart_table table-responsive">
                    <table className="table">
                        <thead>
                        <tr>
                            <th>Product</th>
                            <th className="text-center">Price</th>
                            <th className="text-center">Quantity</th>
                            <th className="text-center">Total</th>
                            <th className="text-center">Remove</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>
                                <div className="cart_product"><img src="assets/images/compare/compare_img_1.jpg"
                                                                   alt="image_not_found"/><h3><a
                                    href="shop_details.html">Your Product Title Here</a></h3></div>
                            </td>
                            <td className="text-center"><span className="price_text">$10.50</span></td>
                            <td className="text-center">
                                <form action="#">
                                    <div className="quantity_input">
                                        <button type="button" className="input_number_decrement"><i
                                            className="fal fa-minus"></i></button>
                                        <input className="input_number" type="text" value="1"/>
                                            <button type="button" className="input_number_increment"><i
                                                className="fal fa-plus"></i></button></div>
                                </form>
                            </td>
                            <td className="text-center"><span className="price_text">$10.50</span></td>
                            <td className="text-center">
                                <button type="button" className="remove_btn"><i className="fal fa-trash-alt"></i>
                                </button>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                <div className="cart_btns_wrap">
                    <div className="row">
                        <div className="col col-lg-6">
                            <form action="#">
                                <div className="coupon_form form_item mb-0"><input type="text" name="coupon"
                                                                                   placeholder="Coupon Code..." />
                                    <button type="submit" className="btn btn_dark">Apply Coupon</button>
                                    <div className="info_icon"><i className="fas fa-info-circle"
                                                                  data-bs-toggle="tooltip" data-bs-placement="top"
                                                                  title="" data-bs-original-title="Your Info Here"
                                                                  aria-label="Your Info Here"></i></div></div>
                            </form>
                        </div>
                        <div className="col col-lg-6">
                            <ul className="btns_group ul_li_right">
                                <li><a className="btn border_black" href="#!">Update Cart</a></li>
                                <li><a className="btn btn_dark" href="#!">Prceed To Checkout</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col col-lg-6">
                        <div className="calculate_shipping"><h3 className="wrap_title">Calculate Shipping <span
                            className="icon"><i className="far fa-arrow-up"></i></span></h3>
                            <form action="#">
                                <div className="select_option clearfix"><select style={{display:'none'}}>
                                    <option data-display="Select Your Currency">Select Your Option</option>
                                    <option value="1" selected="">United Kingdom(UK)</option>
                                    <option value="2">United Kingdom(UK)</option>
                                    <option value="3">United Kingdom(UK)</option>
                                    <option value="4">United Kingdom(UK)</option>
                                    <option value="5">United Kingdom(UK)</option>
                                </select>
                                    <div className="nice-select" tabIndex="0"><span className="current">United Kingdom(UK)</span>
                                        <ul className="list">
                                            <li data-value="Select Your Option" data-display="Select Your Currency"
                                                className="option">Select Your Option
                                            </li>
                                            <li data-value="1" className="option selected">United Kingdom(UK)</li>
                                            <li data-value="2" className="option">United Kingdom(UK)</li>
                                            <li data-value="3" className="option">United Kingdom(UK)</li>
                                            <li data-value="4" className="option">United Kingdom(UK)</li>
                                            <li data-value="5" className="option">United Kingdom(UK)</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col col-md-6">
                                        <div className="form_item"><input type="text" name="location"
                                                                          placeholder="State / Country"/></div>
                                    </div>
                                    <div className="col col-md-6">
                                        <div className="form_item"><input type="text" name="postalcode"
                                                                          placeholder="Postcode / ZIP"/></div>
                                    </div>
                                </div>
                                <button type="submit" className="btn btn_primary rounded-pill">Update Total</button>
                            </form>
                        </div>
                    </div>
                    <div className="col col-lg-6">
                        <div className="cart_total_table"><h3 className="wrap_title">Cart Totals</h3>
                            <ul className="ul_li_block">
                                <li><span>Cart Subtotal</span><span>$52.50</span></li>
                                <li><span>Shipping and Handling</span><span>Free Shipping</span></li>
                                <li><span>Order Total</span><span className="total_price">$52.50</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CartIndex;

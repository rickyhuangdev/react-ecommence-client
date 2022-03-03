import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import '../../assets/css/checkout.css'
import {getCartInfoApi} from "../../api/cart";

const CheckOutIndex = () => {
    const user = useSelector(state => state.profile.user)
    const [products, setProducts] = useState([])
    const [total, setTotal] = useState(0)
    useEffect(() => {
        getCarts()
    },[])
    const getCarts = () => {
        getCartInfoApi().then(re => {
            setProducts(re.products)
            console.log(re)
            setTotal(re.cartTotal)
        })

    }
    return (
        <section className="checkout-section section_space">
            <div className="container">
                <div className="row">
                    <div className="col col-xs-12">
                        <div className="woocommerce">
                            <div className="woocommerce-info">
                                {/*{!user && !user.token &&(*/}
                                <div className="alert alert-warning" role="alert">
                                    Returning customer? <Link to="/login">Click here to login</Link>
                                </div>
                                {/*)}*/}

                            </div>
                            <div className="woocommerce-info mt-20">
                                {/*{!user && !user.token &&(*/}
                                <div className="alert alert-warning" role="alert">
                                    Have a coupon? <Link to="/login">Click here to enter your code</Link>
                                </div>
                                {/*)}*/}

                            </div>

                        </div>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-lg-6">
                        <div className="checkbox-form">
                            <h3>Billing Details</h3>
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="country-select">
                                        <label>Country <span
                                        className="required">*</span></label>
                                        <select className="form-control">
                                        <option value="volvo">bangladesh</option>
                                        <option value="saab">Algeria</option>
                                        <option value="mercedes">Afghanistan</option>
                                        <option value="audi">Ghana</option>
                                        <option value="audi2">Albania</option>
                                        <option value="audi3">Bahrain</option>
                                        <option value="audi4">Colombia</option>
                                        <option value="audi5">Dominican Republic</option>
                                    </select>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="checkout-form-list">
                                        <label>First name  <span className="required">*</span></label>
                                    <input type="text" className="form-control" placeholder="First name"/>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <label>Last name  <span className="required">*</span></label>
                                    <input type="text" className="form-control" placeholder="Last name"/>
                                </div>
                                <div className="col-md-12">
                                    <div className="checkout-form-list">
                                    <label>Company Name</label>
                                    <input type="text" className="form-control" placeholder="Company Name"/>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="checkout-form-list">
                                    <label>Address  <span className="required">*</span></label>
                                    <input type="text" className="form-control" placeholder="Street address"/>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="checkout-form-list">
                                        <input type="text" className="form-control" placeholder="Apartment, suite, unit etc. (optional)" />
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="checkout-form-list"><label>Town / City
                                        <span className="required">*</span></label>
                                        <input type="text" placeholder="Town / City"  className="form-control" /></div>
                                </div>
                                <div className="col-md-6">
                                    <div className="checkout-form-list"><label>State / County
                                        <span className="required">*</span></label>
                                        <input type="text" className="form-control" placeholder=""/></div>
                                </div>
                                <div className="col-md-6">
                                    <div className="checkout-form-list"><label>Postcode / Zip
                                        <span className="required">*</span></label>
                                        <input type="text" className="form-control" placeholder="Postcode / Zip"/></div>
                                </div>
                                <div className="col-md-6">
                                    <div className="checkout-form-list">
                                        <label>Email Address <span className="required">*</span></label>
                                        <input type="email" className="form-control" placeholder=""/></div>
                                </div>
                                <div className="col-md-6">
                                    <div className="checkout-form-list">
                                        <label>Phone <span className="required">*</span></label>
                                        <input type="text" className="form-control" placeholder="Postcode / Zip"/>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="your-order mb-30 ">
                            <h3>Order Summary</h3>
                            <div className="your-order-table table-responsive">
                                <table>
                                    <thead>
                                    <tr>
                                        <th className="product-name">Product</th>
                                        <th className="product-total">Total</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {products && products.length>0 && products.map((item)=>(
                                        <tr className="cart_item" key={item.product._id}>
                                            <td className="product-name"> {item.product.title} <strong
                                                className="product-quantity">× {item.count}</strong></td>
                                            <td className="product-total"><span className="amount">${item.product.price * item.count}</span></td>
                                        </tr>
                                    ))}

                                    </tbody>
                                    <tfoot>
                                    <tr className="cart-subtotal">
                                        <th>Cart Subtotal</th>
                                        <td><span className="amount">${total}</span></td>
                                    </tr>
                                    <tr className="shipping">
                                        <th>Shipping</th>
                                        <td>
                                            <ul>
                                                <li><input type="radio" name="shipping"/><label>Flat Rate:<span
                                                    className="amount">$7.00</span></label></li>
                                                <li><input type="radio" name="shipping"/><label>Free Shipping:</label>
                                                </li>
                                            </ul>
                                        </td>
                                    </tr>
                                    <tr className="order-total">
                                        <th>Order Total</th>
                                        <td><strong><span className="amount">${total}</span></strong></td>
                                    </tr>
                                    </tfoot>
                                </table>
                                <div className="w-100 d-flex mt-5 justify-content-end">
                                    <button className="order-btn btn btn-warning btn-sm">Clear Cart</button>
                                </div>
                                <div className="w-100 mt-4">
                                    <button className="btn btn-primary w-100 btn-flat-info">Place Order</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CheckOutIndex;

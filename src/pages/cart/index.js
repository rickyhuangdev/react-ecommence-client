import React from 'react';
import '../../assets/css/cart.css'
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {BsTrash} from "react-icons/bs";
import {InputNumber} from 'antd';

const CartIndex = () => {
    const cart = useSelector(state => state.cart)
    console.log(cart)
    const onChangeQty = () => {
    }
    const getTotal = () => {
        return cart.reduce((current,next)=>{
            return current + next.count * next.product.price
        },0)
    }
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
                        {cart && cart.length > 0 && cart.map(item => (
                            <tr key={item.product._id}>
                                <td>
                                    <div className="cart_product">
                                        <img src={item.product.images[0].url} alt={item.product.title}/>
                                        <h3>
                                            <Link to={`/product/${item.product.slug}`}
                                                  className="text-dark">{item.product.title}</Link>
                                        </h3>
                                    </div>
                                </td>
                                <td className="text-center"><span
                                    className="price_text">${item.product.price.toFixed(2)}</span></td>
                                <td className="text-center">
                                    <form action="#">
                                        <InputNumber min={1} max={10} defaultValue={3} onChange={onChangeQty}/>
                                    </form>
                                </td>
                                <td className="text-center"><span className="price_text">$10.50</span></td>
                                <td className="text-center">
                                    <button type="button" className="remove_btn">
                                        <BsTrash/>
                                    </button>
                                </td>
                            </tr>
                        ))}

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
                <div className="row justify-content-end">
                    <div className="col col-lg-6">
                        <div className="cart_total_table"><h3 className="wrap_title">Cart Totals</h3>
                            <ul className="ul_li_block">
                                <li><span>Cart Subtotal</span><span>$52.50</span></li>
                                <li><span>Shipping and Handling</span><span>Free Shipping</span></li>
                                <li><span>Order Total</span><span className="total_price">${getTotal()}</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CartIndex;

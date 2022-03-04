import React from 'react';
import '../../assets/css/cart.css'
import {useDispatch, useSelector} from "react-redux";
import {Link, useHistory} from "react-router-dom";
import {BsTrash} from "react-icons/bs";
import {addToCart, removeItemFromCart} from "../../store/actions/cart";
import {Popconfirm} from "antd";
import {toast} from "react-toastify";
import {saveCartToDBApi} from "../../api/cart";

const CartIndex = () => {
    const cart = useSelector(state => state.cart.cartItems)
    const user = useSelector(state => state.profile.user)
    const token = useSelector(state => state.login)
    const dispatch = useDispatch()
    const history = useHistory()
    const confirmToRemoveFromCart = (product_id) => {
        dispatch(removeItemFromCart(product_id))
        toast.info("Remove Item Successfully!")
    }
    const getTotal = () => {
        return cart.reduce((current, next) => {
            return current + next.count * next.product.price
        }, 0)
    }
    const saveOrderToDB = async () => {
       const re = await saveCartToDBApi(cart)
        if(re.success === true){
            history.push('/checkout')
        }
    }
    return (
        <section className="cart_section section_space">
            <div className="container">
                <div className="cart_update_wrap"><p className="mb-0"><i className="fal fa-check-square"></i>Shipping
                    costs updated.</p></div>
                {cart && cart.length > 0 && (
                    <div className="cart_table table-responsive">
                        <table className="table shadow-1 border-bottom-0">
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
                                            {/*<InputNumber min={1} max={item.product.quantity} defaultValue={item.count} size="middle" onChange={()=>onChangeQty(e)}/>*/}
                                            <select className="form-control form-control-sm" value={item.count}
                                                    key={item.count} onChange={(e) => dispatch(addToCart({
                                                ...item,
                                                count: parseInt(e.target.value)
                                            }))}>
                                                {[...Array(item.product.quantity).keys()].map(item => (
                                                    <option key={item + 1} value={item + 1}>{item + 1}</option>
                                                ))}

                                            </select>
                                        </form>
                                    </td>
                                    <td className="text-center"><span
                                        className="price_text">${(item.product.price * parseInt(item.count)).toFixed(2)}</span>
                                    </td>
                                    <td className="text-center">
                                        <Popconfirm
                                            placement="rightBottom"
                                            title="Are you sure to delete this product?"
                                            onConfirm={() => {
                                                confirmToRemoveFromCart(item.product._id)
                                            }}
                                            okText="Yes"
                                            cancelText="No"
                                        >
                                            <button type="button" className="remove_btn">
                                                <BsTrash/>
                                            </button>
                                        </Popconfirm>
                                    </td>
                                </tr>
                            ))}

                            </tbody>
                        </table>
                    </div>
                )}
                {cart && cart.length > 0 && (
                    <div className="cart_btns_wrap">
                        <div className="row">
                            <div className="col col-lg-6">
                                <form action="#">
                                    <div className="coupon_form form_item mb-0">
                                        <input type="text" name="coupon" placeholder="Coupon Code..."/>
                                        <button type="button" className="btn d-blue-bg shadow-1 text-white">Apply
                                            Coupon
                                        </button>
                                        <div className="info_icon"></div>
                                    </div>
                                </form>
                            </div>

                        </div>
                    </div>
                )}
                {cart && cart.length > 0 ? (
                    <div className="row justify-content-end">
                        <div className="col col-lg-6">
                            <div className="cart_total_table"><h3 className="wrap_title">Cart Totals</h3>
                                <ul className="ul_li_block">
                                    <li><span>Cart Subtotal</span><span>${getTotal()}</span></li>
                                    <li><span>Shipping and Handling</span><span>Free Shipping</span></li>
                                    <li><span>Order Total</span><span className="total_price">${getTotal()}</span></li>
                                </ul>
                            </div>
                        </div>
                        {user && token ? (
                            <div className="col col-lg-6 d-flex justify-content-end align-items-end">
                                <ul className="btns_group ul_li_right mb-0">
                                    <li>
                                        <button className="btn btn_dark  shadow-3 text-white" onClick={saveOrderToDB}
                                                disabled={!cart.length}>Process To Checkout
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        ) : (
                            <div className="col col-lg-6 d-flex justify-content-end align-items-end">
                                <ul className="btns_group ul_li_right mb-0">
                                    <li>
                                        <Link to={{
                                            pathname: '/login',
                                            state: {from: "cart"}
                                        }} className="btn btn_dark shadow-3 text-white">Login To Checkout</Link>
                                    </li>
                                </ul>
                            </div>
                        )}

                    </div>
                ):(
                    <div className="alert alert-info" role="alert">
                        There are no items in your Cart, Please Go to <Link to='/' className="alert-link">Home</Link>. Choose products
                        if you like.
                    </div>
                )}
            </div>
        </section>
    );
};

export default CartIndex;

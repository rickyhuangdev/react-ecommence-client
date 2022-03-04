import React, {useEffect, useMemo, useState} from 'react';
import {Link, useHistory} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import '../../assets/css/checkout.css'
import {getCartInfoApi, removeCartInfoApi} from "../../api/cart";
import {removeAllItemFromCart} from "../../store/actions/cart";
import {toast} from "react-toastify";
import countryList from 'react-select-country-list'
import Select from 'react-select'
import {Collapse} from 'antd';
import {applyCouponApi} from "../../api/coupon";
import {applyCoupon} from "../../store/actions/coupon";
import {saveOrderToDBApi} from "../../api/order";

const CheckOutIndex = () => {
    const user = useSelector(state => state.profile.user)
    const cart = useSelector(state => state.cart)
    const token = useSelector(state => state.login)
    const dispatch = useDispatch()
    const history = useHistory()
    const [products, setProducts] = useState([])
    const [total, setTotal] = useState(0)
    const [country, setCountry] = useState('')
    const [coupon, setCoupon] = useState('')
    const [couponError, setCouponError] = useState(false)
    const [couponResponseText, setCouponResponseText] = useState('')
    const [saveAddress, setSaveAddress] = useState(false)
    const [totalAfterDiscount, setTotalAfterDiscount] = useState(0)
    const {Panel} = Collapse;
    const [address, setAddress] = useState({
        country: '',
        email: '',
        phone: '',
        firstName: '',
        lastName: '',
        companyName: '',
        postCode: '',
        address: ''
    })
    const options = useMemo(() => countryList().getData(), [])
    useEffect(() => {
        if (user && token && cart.length > 0) {
            getCarts()
        } else {
            history.push('/')
        }
    }, [address, cart])
    const changeHandler = value => {
        setCountry(value)
        setAddress({...address, country: value["label"]})
    }

    const getCarts = () => {
        getCartInfoApi().then(re => {
            if (re) {
                setProducts(re.products)
                setTotal(re.cartTotal)
            }
        })

    }
    const removeCart = () => {
        removeCartInfoApi().then(re => {
            if (re.success === true) {
                dispatch(removeAllItemFromCart())
                setProducts([])
                setTotal(0)
                setTotalAfterDiscount(0)
                setCoupon("")
                setCouponError(false)
                setCouponResponseText("")
                dispatch(applyCoupon(false))
                toast.info("Cart is empty, Please continue shopping...")
                history.replace('/')
            }
        })
    }
    const handleChange = (e) => {
        setAddress({...address, [e.target.name]: e.target.value})
        checkSaveAddress()

    }
    const checkSaveAddress = () => {
        if (!address.phone || !address.email || !address.address || !address.lastName || !address.firstName || !address.phone) {
            setSaveAddress(false)
            return false
        } else {
            setSaveAddress(true)
            return true
        }
    }
    function callback(key) {
    }
    const applyDiscountCoupon = () => {
        applyCouponApi({coupon}).then(re=>{
            if(re.success === true){
                setTotalAfterDiscount(re.data)
                setCouponError(false)
                setCouponResponseText(re.message)
                toast.success(re.message)
                setCoupon("")
                dispatch(applyCoupon(true))
            }else{
                setCouponResponseText(re.message)
                setCouponError(true)
                dispatch(applyCoupon(false))
            }
        })
    }
    const saveOrder = (e) => {
      e.preventDefault()
       saveOrderToDBApi({address}).then(re=>{
           if(re.success === true){
               history.push('/payment')
           }
       })
    }
    return (
        <section className="checkout-section section_space">
            <div className="container">
                <div className="row">
                    <div className="col col-xs-12">
                        <div className="woocommerce">
                            <div className="woocommerce-info">
                                {!user && !user.token &&(
                                <div className="alert alert-warning" role="alert">
                                    Returning customer? <Link to="/login">Click here to login</Link>
                                </div>
                                )}

                            </div>
                            <div className="woocommerce-info mt-20">
                                {/*{!user && !user.token &&(*/}
                                <Collapse onChange={callback}>
                                    <Panel header="Have a coupon? Click here to enter your code" key="1" className="shadow-3">
                                        <div className="row">
                                            <div className="col-6">
                                                    <label htmlFor="staticEmail">Coupon Code</label>
                                                    <div className="col-sm-10">
                                                        <input type="text" className="form-control" value={coupon} onChange={(e)=>setCoupon(e.target.value)}/>
                                                        {couponError && (
                                                            <small className="form-text mt-2 d-block text-danger">{couponResponseText}.</small>
                                                        )}
                                                    </div>
                                                <button className="btn btn-primary btn-sm mt-3" onClick={applyDiscountCoupon}>Apply</button>
                                            </div>
                                        </div>
                                    </Panel>

                                </Collapse>
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
                                        <Select options={options} value={country} onChange={changeHandler}/>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="checkout-form-list">
                                        <label>First name <span className="required">*</span></label>
                                        <input type="text" className="form-control" placeholder="First name"
                                               value={address.firstName} onChange={handleChange} name="firstName"/>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <label>Last name <span className="required">*</span></label>
                                    <input type="text" className="form-control" placeholder="Last name" name="lastName"
                                           value={address.lastName} onChange={handleChange}/>
                                </div>
                                <div className="col-md-12">
                                    <div className="checkout-form-list">
                                        <label>Company Name</label>
                                        <input type="text" className="form-control" placeholder="Company Name"
                                               value={address.companyName} onChange={handleChange} name="companyName"/>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="checkout-form-list">
                                        <label>Address <span className="required">*</span></label>
                                        <input type="text" className="form-control" placeholder="Street address"
                                               onChange={handleChange} value={address.address} name="address"/>
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <div className="checkout-form-list"><label>Postcode / Zip
                                        <span className="required">*</span></label>
                                        <input type="text" className="form-control" placeholder="Postcode / Zip"
                                               value={address.postCode} onChange={handleChange} name="postCode"/></div>
                                </div>
                                <div className="col-md-6">
                                    <div className="checkout-form-list">
                                        <label>Email Address <span className="required">*</span></label>
                                        <input type="email" className="form-control" placeholder=""
                                               onChange={handleChange} value={address.email} name="email"/></div>
                                </div>
                                <div className="col-md-12">
                                    <div className="checkout-form-list">
                                        <label>Phone <span className="required">*</span></label>
                                        <input type="text" className="form-control" placeholder="phone"
                                               onChange={handleChange} value={address.phone} name="phone"/>
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
                                    {totalAfterDiscount > 0 && (
                                        <tr className="order-total">
                                            <td colSpan="2">
                                                <div className="alert alert-dismissible alert-success  d-flex justify-content-between">
                                                  <div>Discount Applied:</div>
                                                    <div className="w-50">
                                                        <strong>Total Payable: ${totalAfterDiscount}</strong>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                    )}

                                    </tfoot>
                                </table>
                                <div className="w-100 d-flex mt-5 justify-content-end">
                                    <button className="order-btn btn btn-warning btn-sm" onClick={removeCart}>Clear
                                        Cart
                                    </button>
                                </div>
                                <div className="w-100 mt-4">
                                    <button className="btn btn-primary w-100 btn-flat-info" onClick={saveOrder}
                                            disabled={!saveAddress}>Place Order
                                    </button>
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

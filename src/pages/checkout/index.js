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
import isEmail from 'validator/lib/isEmail';
import isEmpty from 'validator/lib/isEmpty';
import Message from "../../components/message/Message";
import {saveOrder} from "../../store/actions/order";
import Loader from "../../components/loader/Loader";
import {Form} from "react-bootstrap"

const CheckOutIndex = () => {
    const loginInfo = useSelector(state => state.login)
    const {userInfo, error} = loginInfo
    const orderInfo = useSelector(state => state.order)
    const {success, loading, order} = orderInfo
    const cart = useSelector(state => state.cart)
    const {cartItems} = cart
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
    const [message, setMessage] = useState(null)
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
    const config = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${userInfo.token}`
    }
    const options = useMemo(() => countryList().getData(), [])
    useEffect(() => {
        if (success) {
            history.push(`/order/${order._id}`)
        }
    }, [address, cart, userInfo,success])
    const changeHandler = value => {
        setCountry(value)
        setAddress({...address, country: value["label"]})
    }

    const getCarts = () => {

        getCartInfoApi(config).then(re => {
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
        if (!address.phone || !address.email || !address.address || !address.lastName || !address.firstName) {
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
        applyCouponApi({coupon}, config).then(re => {
            if (re.success === true) {
                setTotalAfterDiscount(re.data)
                setCouponError(false)
                setCouponResponseText(re.message)
                toast.success(re.message)
                setCoupon("")
                dispatch(applyCoupon(true))
            } else {
                setCouponResponseText(re.message)
                setCouponError(true)
                dispatch(applyCoupon(false))
            }
        })
    }
    const saveOrderHandler = async (e) => {
        e.preventDefault()
        if (isEmpty(address.country)) {
            setMessage("Please Select a Country")
        } else if (isEmpty(address.firstName)) {
            setMessage("First Name is required")
        } else if (isEmpty(address.lastName)) {
            setMessage("Last Name is required")
        } else if (isEmpty(address.address)) {
            setMessage("Address is required")
        } else if (isEmpty(address.email)) {
            setMessage("Email is required")
        } else if (!isEmail(address.email)) {
            setMessage("Invalid Email Address")
        } else if (isEmpty(address.phone)) {
            setMessage("Phone is required")
        } else {
            await dispatch(saveOrder({address}))
        }

    }
    const setPaymentMethod = (e)=>{

    }
    return (
        <section className="checkout-section section_space">
            <div className="container">
                <div className="row">
                    <div className="col col-xs-12">
                        <div className="woocommerce">
                            <div className="woocommerce-info">
                                {!userInfo && (
                                    <div className="alert alert-warning" role="alert">
                                        Returning customer? <Link to="/login">Click here to login</Link>
                                    </div>
                                )}

                            </div>
                            <div className="woocommerce-info mt-20">
                                {/*{!user && !user.token &&(*/}
                                <Collapse onChange={callback}>
                                    <Panel header="Have a coupon? Click here to enter your code" key="1"
                                           className="shadow-3">
                                        <div className="row">
                                            <div className="col-6">
                                                <label htmlFor="staticEmail">Coupon Code</label>
                                                <div className="col-sm-10">
                                                    <input type="text" className="form-control" value={coupon}
                                                           onChange={(e) => setCoupon(e.target.value)}/>
                                                    {couponError && (
                                                        <small
                                                            className="form-text mt-2 d-block text-danger">{couponResponseText}.</small>
                                                    )}
                                                </div>
                                                <button className="btn btn-primary btn-sm mt-3"
                                                        onClick={applyDiscountCoupon}>Apply
                                                </button>
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
                            {message && <Message variant="danger" children={message}/>}
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
                                <div className="row">
                                    <div className="col">
                                        <Form.Check type="radio" label='PayPal or Credit Card' id='PayPal' name="paymentMethod" value="paypal" checked
                                            onChange={(e)=>setPaymentMethod(e.target.value)}
                                        />
                                    </div>
                                </div>
                                <div className="w-100 d-flex mt-5 justify-content-end">
                                    <button className="order-btn btn btn-warning btn-sm" onClick={removeCart}>Clear
                                        Cart
                                    </button>
                                </div>
                                <div className="w-100 mt-4 d-flex align-items-center">
                                    <button
                                        className="btn btn-primary w-100 d-flex align-items-center justify-content-center"
                                        onClick={saveOrderHandler} disabled={loading}>
                                        Place Order
                                        {loading && (
                                            <span className="d-flex align-items-center"> <Loader width="25px"
                                                                                                 height="25px"/><p
                                                className="p-0 m-0 ms-2">processing...</p></span>
                                        )}
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

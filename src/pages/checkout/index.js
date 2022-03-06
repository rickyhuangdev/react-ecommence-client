import React, {useEffect, useMemo, useState} from 'react';
import {Link, useHistory} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import '../../assets/css/checkout.css'
import {removeCartInfoApi} from "../../api/cart";
import {getCartCheckoutDetails, removeAllItemFromCart} from "../../store/actions/cart";
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
import {Button, Col, Form, ListGroup, Row} from "react-bootstrap"

const CheckOutIndex = () => {
    const loginInfo = useSelector(state => state.login)
    const {userInfo, error} = loginInfo
    const orderInfo = useSelector(state => state.order)
    const {success, loading, order} = orderInfo
    const cart = useSelector(state => state.cart)
    const getCartsToCheckout = useSelector(state => state.getCartsToCheckout)
    const {cartItems, loading: CheckoutLoading, error: CheckoutError, success: CheckoutSuccess} = getCartsToCheckout
    const dispatch = useDispatch()
    const history = useHistory()
    const [products, setProducts] = useState([])
    const [total, setTotal] = useState(0)
    const [country, setCountry] = useState('')
    const [coupon, setCoupon] = useState('')
    const [paymentMethod, setPaymentMethod] = useState('paypal')
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
    const options = useMemo(() => countryList().getData(), [])
    useEffect(() => {
        if (userInfo && userInfo.token) {
            dispatch(getCartCheckoutDetails())
            setProducts(cartItems.products)
            setTotalAfterDiscount(cartItems.totalAfterDiscount)
            setTotal(cartItems.cartTotal)
        }

    }, [loginInfo, dispatch])
    const changeHandler = value => {
        setCountry(value)
        setAddress({...address, country: value["label"]})
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
        applyCouponApi({coupon}).then(re => {
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
            await dispatch(saveOrder({...address,paymentMethod}))
        }

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
                <div className="row mt-md-5">
                    <div className="col-lg-7">
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
                                    <div className="checkout-form-list">
                                        <label>Last name <span className="required">*</span></label>
                                        <input type="text" className="form-control" placeholder="Last name"
                                               name="lastName"
                                               value={address.lastName} onChange={handleChange}/>
                                    </div>
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
                    <div className="col-lg-5">
                        <div className="mb-30 p-4">
                            <h4>Order Summary</h4>
                            <ListGroup>
                                <ListGroup.Item>Products</ListGroup.Item>

                                <ListGroup.Item className="p-3">
                                    {products && products.length > 0 && products.map((item) => (
                                        <Row key={item.product._id}>
                                            <Col md={8}>{item.product.title} <span
                                                className="d-block text-end">× {item.count}</span></Col>
                                            <Col md={4}><span
                                                className="d-block text-end">${item.product.price * item.count}</span></Col>
                                        </Row>
                                    ))}
                                </ListGroup.Item>

                                <ListGroup.Item>
                                    <Row>
                                        <Col md={8}>Shipping</Col>
                                        <Col md={4}><span
                                            className="d-block text-end">$0</span></Col>
                                    </Row>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <Row>
                                        <Col md={8}>Total</Col>
                                        <Col md={4}><span
                                            className="d-block text-end fw-bold">$0</span></Col>
                                    </Row>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <Row className="mb-3">
                                        <Col md={6}>Choose Payment</Col>
                                    </Row>
                                    <Row>

                                        <Col md={12}>
                                            <Form.Check type="radio" label='PayPal or Credit Card' id='PayPal'
                                                        name="paymentMethod" value="paypal" checked className="mb-3"
                                                        onChange={(e) => setPaymentMethod(e.target.value)}></Form.Check>
                                        </Col>
                                    </Row>
                                </ListGroup.Item>
                                <ListGroup.Item className="text-end">
                                    <Button variant="dark" onClick={saveOrderHandler}>Place Order</Button>
                                </ListGroup.Item>

                            </ListGroup>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CheckOutIndex;

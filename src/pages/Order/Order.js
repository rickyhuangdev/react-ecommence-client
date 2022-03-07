import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getOrderDetail, payOrder, updateDeliverOrder} from "../../store/actions/order";
import Loader from "../../components/loader/Loader";
import Message from "../../components/message/Message";
import {Button, Col, Image, ListGroup, ListGroupItem, Row} from "react-bootstrap";
import {Link, useHistory} from 'react-router-dom'
import {getPayPayClient} from "../../api/vendor";
import {PayPalButton} from "react-paypal-button-v2";

const Order = ({match}) => {
    const dispatch = useDispatch()
    const orderId = match.params.orderId
    const orderDetails = useSelector(state => state.orderDetails)
    const {loading, error, order} = orderDetails
    const orderPay = useSelector(state => state.orderPay)
    const {loading: loadingPay, success: successPay} = orderPay
    const orderDelivered = useSelector(state => state.orderDelivered)
    const {loading: loadingDelivered, success: successDelivered} = orderDelivered
    const [sdkReady, setSdkReady] = useState(false)
    const [products, setProducts] = useState([])
    const [address, setAddress] = useState({})
    const loginInfo = useSelector(state => state.login)
    const {userInfo} = loginInfo
    const history = useHistory()
    useEffect(() => {
        if (!userInfo) {
            history.push('/login')
        }
        const addPayPalScript = async () => {
            const client_id = await getPayPayClient()
            const script = document.createElement('script')
            script.type = 'text/javascript'
            script.src = `https://www.paypal.com/sdk/js?client-id=${client_id}`
            script.async = true
            script.onload = () => {
                setSdkReady(true)
            }
            document.body.appendChild(script)

        }
        if (!order || successPay || successDelivered) {
            dispatch({type: 'ORDER_PAY_RESET'})
            dispatch({type: 'ORDER_DELIVER_RESET'})
            dispatch(getOrderDetail(orderId))
        } else if (!order.isPaid) {
            if (!window.paypaly) {
                addPayPalScript()
            } else {
                setSdkReady(true)
            }
        }
        // dispatch(getOrderDetail(orderId))
    }, [dispatch, orderId, successPay, order, successDelivered,userInfo])
    const successPaymentHandler = (paymentResult) => {
        paymentResult.order_id = orderId
        dispatch(payOrder(paymentResult))
    }
    const deliverHandler = () => {
        dispatch(updateDeliverOrder(orderId))
    }
    return (
        <div className="container p-4 mt-5">
            <div className="row">
                <div className="col-md-8">
                    {loading ? <Loader/> : error ? <Message variant="danger" children={error}/>
                        : (
                            <h3>Order {order._id}</h3>
                        )}
                    {order && (
                    <ListGroup className="mt-5" variant="flush">
                        <ListGroup.Item>
                            <h2 className="mb-4">Shipping</h2>
                            <p>
                                Address:  {order.address.address},{order.address.postCode},{order.address.country}
                            </p>
                            <p>
                              Name: {order.address.firstName} {order.address.lastName}
                            </p>
                            <p>
                             Email: {order.address.email}
                            </p>
                            <p>
                                Phone: {order.address.phone}
                            </p>
                            {order.isDelivered?(
                                <Message variant="success">Delivered on {order.DeliveredAt}</Message>
                            ):(
                                <Message variant="danger">Not Delivered</Message>
                            )}
                        </ListGroup.Item>
                    <ListGroup.Item>
                        <h3>Payment Method</h3>
                        <p>{order.paymentMethod}</p>
                        {order.isPaid?(
                            <Message variant="success">Paid on {order.paidAt}</Message>
                        ):(
                            <Message variant="danger">Not paid</Message>
                        )}
                </ListGroup.Item>
                        <ListGroup className="mt-4">
                            <h3>Order Items</h3>
                            {order.products.length ===0?(
                                <Message>Your Cart is Empty</Message>
                            ):(
                                <ListGroup variant="flush">

                                    {order.products.map(item=>(
                                        <Row key={item.product._id}>
                                            <Col md={1}>
                                                <Image src={item.product.images[0].url} alt={item.title} style={{width:'60px'}} />
                                            </Col>
                                            <Col>
                                                <Link to={`/product/${item.product.slug}`}>{item.product.title}</Link>
                                            </Col>
                                            <Col md={4}>
                                                {item.count} x {item.price} = ${item.count*item.price}
                                            </Col>
                                        </Row>
                                    ))}

                                        {order.totalAfterDiscount && order.totalAfterDiscount >0?(
                                            <Row>
                                                <Col>
                                                    <Message variant="success">
                                                        <strong>Total Payable: <del className="text-danger">${order.cartTotal}</del> <span className="font-weight-bold text-dark fs-3">${order.totalAfterDiscount}</span></strong>
                                                    </Message>
                                                </Col>

                                            </Row>
                                        ):(
                                            <Row className="mt-3">
                                            <Col className="d-flex justify-content-between align-items-center">
                                                <span className="d-inline-block">Total Payable:</span><span className="font-weight-bold text-dark fs-4 d-inline-block">${order.cartTotal}</span>
                                            </Col>
                                            </Row>
                                        )}


                                </ListGroup>

                            )}
                        </ListGroup>

                    </ListGroup>
                    )}
                </div>
                {order && (
                <div className="col-md-4">
                    <h4>Order Summary</h4>
                    <ListGroup className="mt-3">
                        <ListGroup.Item>Products</ListGroup.Item>
                        {order.products.length === 0 ? (
                            <h3>No Order Summary Found</h3>
                        ) : (
                            <>
                                <ListGroup.Item className="p-3">
                                    {order.products && order.products.length > 0 && order.products.map((item) => (
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
                                            className="d-block text-end fw-bold">
                                ${order.totalAfterDiscount && order.totalAfterDiscount > 0 ? order.totalAfterDiscount : order.cartTotal}
                            </span></Col>
                                    </Row>
                                </ListGroup.Item>
                            </>
                        )}

                        {!order.isPaid && (
                            <>
                            <div className="mt-4 mb-4"><h4>Complete your payment</h4></div>
                            <ListGroup>
                                <ListGroupItem>
                                    {loadingPay && <Loader/>}
                                    {!sdkReady ? <Loader/> : (
                                        <PayPalButton amount={order.totalAfterDiscount ?? order.cartTotal}
                                                      onSuccess={successPaymentHandler} currency="USD"/>
                                    )}
                                </ListGroupItem>
                            </ListGroup>
                            </>
                        )}

                    </ListGroup>
                    {loadingDelivered && <Loader/>}
                    {userInfo && userInfo.isAdmin && order.isPaid && !order.isDelivered && (
                        <ListGroupItem>
                            <Button type="button" className="btn btn-block" onClick={deliverHandler}>
                                Mark As Delivered
                            </Button>
                        </ListGroupItem>
                    )}
                </div>
                )}
            </div>
        </div>
    );
};

export default Order;

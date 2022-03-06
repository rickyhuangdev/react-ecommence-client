import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getOrderDetail, payOrder} from "../../store/actions/order";
import Loader from "../../components/loader/Loader";
import Message from "../../components/message/Message";
import {Col, Image, ListGroup, ListGroupItem, Row} from "react-bootstrap";
import {Link} from 'react-router-dom'
import {getPayPayClient} from "../../api/vendor";
import {PayPalButton} from "react-paypal-button-v2";

const Order = ({match}) => {
    const dispatch = useDispatch()
    const orderId = match.params.orderId
    const orderDetails = useSelector(state => state.orderDetails)
    const {loading, error, order} = orderDetails
    const orderPay = useSelector(state => state.orderPay)
    const {loading: loadingPay, success: successPay} = orderPay
    const [sdkReady, setSdkReady] = useState(false)
    useEffect(() => {
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

        if (!order || successPay) {
            dispatch({type:'ORDER_PAY_RESET'})
            dispatch(getOrderDetail(orderId))
        } else if (!order.isPaid) {
            if (!window.paypaly) {
                addPayPalScript()
            } else {
                setSdkReady(true)
            }
        }
        // dispatch(getOrderDetail(orderId))
    }, [dispatch, orderId, successPay, order])
    const successPaymentHandler = (paymentResult) => {
        paymentResult.order_id = orderId
        dispatch(payOrder(paymentResult))
    }
    return (
        <div className="container p-4 mt-5">
            <div className="row">
                <div className="col-md-8">
                    {loading ? <Loader/> : error ? <Message variant="danger" children={error}/>
                        : (
                            <h3>Order {order._id}</h3>
                        )}
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
                                <Message variant="success">Delivered on {order.deliveredAt}</Message>
                            ):(
                                <Message variant="danger">Not Delivered</Message>
                            )}
                        </ListGroup.Item>
                    <ListGroup.Item>
                        <h3>Payment Method</h3>
                        {/*{order.paymentMethod}*/}
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
                </div>
                <div className="col-md-4">
                    {!order.isPaid &&(<div className="mb-4"><h4>Complete your payment</h4></div>)}
                    {!order.isPaid && (

                        <ListGroup className="mt-20">
                            <ListGroupItem className="mt-20">
                                {loadingPay && <Loader/>}
                                {!sdkReady ? <Loader/>:(
                                    <PayPalButton amount={order.totalAfterDiscount ??order.cartTotal} onSuccess={successPaymentHandler} currency="USD" />
                                )}
                            </ListGroupItem>
                        </ListGroup>
                    )}
                </div>

            </div>
        </div>
    );
};

export default Order;

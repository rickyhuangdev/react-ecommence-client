import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getOrderDetail} from "../../store/actions/order";
import Loader from "../../components/loader/Loader";
import Message from "../../components/message/Message";
import {Col, Image, ListGroup, Row} from "react-bootstrap";
import {Link} from 'react-router-dom'
const Order = ({match}) => {
    const dispatch = useDispatch()
    const orderId = match.params.orderId
    const orderDetails = useSelector(state => state.orderDetails)
    const {loading, error, order} = orderDetails
    useEffect(() => {
        dispatch(getOrderDetail(orderId))

    }, [])
    return (
        <div className="container p-4">
            <div className="row">
                <div className="col-md-6">
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

            </div>
        </div>
    );
};

export default Order;

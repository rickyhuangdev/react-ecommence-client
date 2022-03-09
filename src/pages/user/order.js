import React, {useEffect} from 'react';
import UserNav from "../../components/nav/UserNav";
import {useDispatch, useSelector} from "react-redux";
import {listMyOrder} from "../../store/actions/order";
import Loader from "../../components/loader/Loader";
import Message from "../../components/message/Message";
import {Badge, Button} from "react-bootstrap";
import {Link, useHistory} from 'react-router-dom'

const Order = () => {
    const history = useHistory()
    const orderMyList = useSelector(state => state.orderMyList)
    const dispatch = useDispatch()
    const loginInfo = useSelector(state => state.login)
    const {userInfo} = loginInfo
    const {loading, error, orders} = orderMyList
    useEffect(() => {
        if(!loginInfo){
            history.push('/login')
        }else{
            dispatch(listMyOrder())
        }
    }, [dispatch,history,userInfo,loginInfo])

    return (
        <div className="container py-5">
            <div className="row align-items-start justify-content-between">
                <div className="col-12 col-md-4">
                    <UserNav/>
                </div>
                <div className="col-12 col-md-8 mt-5 mt-md-0">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <h4>My orders</h4>
                                {loading ? <Loader/> : error ? <Message variant="danger" children={error}/> : orders && orders.length>0? (
                                    <div className="table-responsive">
                                        <table className="table align-middle">
                                            <thead>
                                            <tr>
                                                <th>Id</th>
                                                <th>DATE</th>
                                                <th>TOTAL</th>
                                                <th>PAID</th>
                                                <th>DELIVERED</th>
                                                <th></th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            {orders.map(order => (
                                                <tr key={order._id}>
                                                    <td>{order._id}</td>
                                                    <td>{order.createdAt.substring(0, 10)}</td>
                                                    <td>{order.totalAfterDiscount ?? order.cartTotal}</td>
                                                    <td>{order.isPaid ? (
                                                        order.paidAt.substring(0, 10)) : (
                                                        <Badge bg="danger">Not Paid</Badge>
                                                    )}</td>
                                                    <td>{order.isDelivered ? (
                                                        order.DeliveredAt.substring(0, 10) ) : (
                                                        <Badge bg="danger">Not Delivered</Badge>
                                                    )}</td>
                                                    <td>
                                                        <Link to={`/order/${order._id}`}>
                                                            <Button variant="light" size="small" active>
                                                                Details
                                                            </Button>
                                                        </Link>
                                                    </td>
                                                </tr>
                                            ))}
                                            </tbody>
                                        </table>
                                    </div>
                                ):(<Message variant="info" children="No Order records"/>)}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Order;

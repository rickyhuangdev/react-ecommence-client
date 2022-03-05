import React, {useEffect, useState} from "react";
import {loadStripe} from "@stripe/stripe-js";
import {Elements} from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import '../../assets/css/payment.css'
import {createPaymentIntent} from "../../api/payment";
import {useSelector} from "react-redux";
import {Table} from "react-bootstrap";
import {getOrderInfoApi} from "../../api/order";
import {useHistory, useParams} from "react-router-dom";

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KET);

const PaymentIndex = ({match}) => {
    const [clientSecret, setClientSecret] = useState("");
    const loginInfo = useSelector(state => state.login)
    const {userInfo, error} = loginInfo
    const coupon = useSelector(state => state.coupon)
    const [products, setProducts] = useState([])
    const [total, setTotal] = useState(0)
    const [totalAfterDiscount, setTotalAfterDiscount] = useState(0)
    const params = useParams()
    const history = useHistory()
    const config = {
        'Content-Type': 'application/json application/x-www-form-urlencoded',
        'Authorization': `Bearer ${userInfo.token}`
    }
    const appearance = {
        theme: 'stripe',
    };
    const options = {
        clientSecret,
        appearance,
    };
    useEffect(() => {
        if (userInfo && params.orderId) {
            createPaymentIntent(config).then(re => {
                setClientSecret(re.clientSecret)
            })
            getOrderInfoApi(params.orderId,config).then(re => {
                if (re) {
                    setProducts(re.data.products)
                    setTotal(re.data.cartTotal)
                    setTotalAfterDiscount(re.data.totalAfterDiscount)
                }
            }).catch(e=>{
                console.log(e.response.data)
            })
        }
        else {
            history.push('/')
        }
        // Create PaymentIntent as soon as the page loads


    }, [userInfo, params.orderId, history]);
    const getCarts = () => {

        getOrderInfoApi(params.orderId,config).then(re => {
            if (re) {
                setProducts(re.data.products)
                setTotal(re.data.cartTotal)
                setTotalAfterDiscount(re.data.totalAfterDiscount)
            }
        })

    }
    return (
        <section className="payment-section section_space p-4 mx-2">
            <div className="container mt-3 p-2">
                <div className="row">
                   <div className="col-lg-6 col">
                       <h4 className="text-center">Order Summary</h4>
                       <Table striped bordered hover className="mt-5" responsive>
                           <thead>
                           <tr>
                               <th>#</th>
                               <th>Product Name</th>
                               <th>Quantity</th>
                               <th>Total</th>
                           </tr>
                           </thead>
                           <tbody>
                           {products && products.length>0 && products.map((item)=>(
                               <tr key={item.product._id} style={{verticalAlign:"middle"}} className="text-center">
                                   <td><img src={item.product.images[0].url} alt={item.product.title} style={{width:'65px'}}/></td>
                                   <td>{item.product.title}</td>
                                   <td>x&nbsp;{item.count}</td>
                                   <td>${item.product.price * item.count}</td>
                               </tr>
                           ))}
                           {totalAfterDiscount > 0 ? (
                               <tr className="order-total">
                                   <td colSpan="4">
                                       <div className="d-flex justify-content-between mb-3">
                                           <div>Order Total:</div>
                                           <div>
                                               <strong>${total}</strong>
                                           </div>
                                       </div>
                                       <div className="d-flex justify-content-between">
                                           <div>Discount Applied:</div>
                                           <div>
                                               <strong>Total Payable: <del className="text-danger">${total}</del> <span className="font-weight-bold text-dark fs-3">${totalAfterDiscount}</span></strong>
                                           </div>
                                       </div>

                                   </td>
                               </tr>
                           ):(
                               <tr className="order-total">
                                   <td colSpan="4">
                                       <div className="d-flex justify-content-between mb-3 align-items-center">
                                           <div>Order Total:</div>
                                           <div>
                                               <strong className="fs-4">${total}</strong>
                                           </div>
                                       </div>
                                   </td>
                               </tr>
                           )}
                           </tbody>
                       </Table>
                       <div className="row">
                           <div className="col">
                           </div>
                       </div>
                   </div>
                    <div className="col-lg-6 col">
                        <h4 className="text-center">Complete Your Payment</h4>
                        <div className="payment-form-area d-flex justify-content-center mt-5">
                            {clientSecret && (
                                <Elements options={options} stripe={stripePromise}>
                                    <CheckoutForm clientSecret={clientSecret}/>
                                </Elements>
                            )}
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default PaymentIndex;

import React, {useEffect, useState} from "react";
import {loadStripe} from "@stripe/stripe-js";
import {Elements} from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import '../../assets/css/payment.css'
import {createPaymentIntent} from "../../api/payment";
import {useSelector} from "react-redux";

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KET);

const PaymentIndex = () => {
    const [clientSecret, setClientSecret] = useState("");
    const loginInfo = useSelector(state => state.login)
    const {userInfo, error} = loginInfo
    const coupon = useSelector(state => state.coupon)
    const config = {
        'Content-Type': 'application/json',
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
        // Create PaymentIntent as soon as the page loads
        createPaymentIntent(config).then(re => {
            setClientSecret(re.clientSecret)
        })
    }, []);
    return (
        <section className="payment-section section_space p-4 mx-2">
            <div className="container">
                <div className="row">
                    <div className="col-12 text-center">
                        <h4>Complete Your Payment</h4>
                        <div className="payment-form-area d-flex justify-content-center py-3">
                            {clientSecret && (
                            <Elements options={options} stripe={stripePromise}>
                                <CheckoutForm />
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

import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import '../../assets/css/payment.css'
import {createPaymentIntent} from "../../api/payment";
const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KET);

const PaymentIndex = () => {
    const [clientSecret, setClientSecret] = useState("");
    const appearance = {
        theme: 'stripe',
    };
    const options = {
        clientSecret,
        appearance,
    };
    useEffect(() => {
        // Create PaymentIntent as soon as the page loads
        createPaymentIntent().then(re=>{
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

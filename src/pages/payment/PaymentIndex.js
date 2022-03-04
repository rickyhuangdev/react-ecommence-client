import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
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
    return (
        <section className="payment-section section_space">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        {clientSecret && (
                            <Elements options={options} stripe={stripePromise}>
                                <CheckoutForm />
                            </Elements>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PaymentIndex;

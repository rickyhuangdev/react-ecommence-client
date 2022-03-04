import React, { useEffect, useState } from "react";
import {
    PaymentElement,
    useStripe,
    useElements
} from "@stripe/react-stripe-js";

const CheckoutForm = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [message, setMessage] = useState(null);
    const elements = useElements();
    const stripe = useStripe();
    const handleSubmit = ()=>{

    }
    return (
        <form id="payment-form" onSubmit={handleSubmit}>
            <PaymentElement id="payment-element" />
            <button disabled={isLoading || !stripe || !elements} id="submit">
        <span id="button-text">
          {isLoading ? <div className="spinner" id="spinner"></div> : "Pay now"}
        </span>
            </button>
            {/* Show any error or success messages */}
            {message && <div id="payment-message">{message}</div>}
        </form>
    );
};

export default CheckoutForm;

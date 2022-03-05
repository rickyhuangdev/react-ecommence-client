import React, {useEffect, useState} from "react";
import {PaymentElement, useElements, useStripe} from "@stripe/react-stripe-js";
import {useDispatch} from "react-redux";
import {completeOrder} from "../../store/actions/order";
import {useParams} from "react-router-dom";

const CheckoutForm = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [message, setMessage] = useState(null);
    const elements = useElements();
    const stripe = useStripe();
    const dispatch = useDispatch()
    const params = useParams()
    useEffect(() => {
        if (!stripe) {
            return;
        }

        const clientSecret = new URLSearchParams(window.location.search).get(
            "payment_intent_client_secret"
        );

        if (!clientSecret) {
            return;
        }

        stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
            switch (paymentIntent.status) {
                case "succeeded":
                    setMessage("Payment succeeded!");
                    break;
                case "processing":
                    setMessage("Your payment is processing.");
                    break;
                case "requires_payment_method":
                    setMessage("Your payment was not successful, please try again.");
                    break;
                default:
                    setMessage("Something went wrong.");
                    break;
            }
        });
    }, [stripe]);
    const handleSubmit = async (e) => {
        e.preventDefault()
        if (!stripe || !elements) {
            // Stripe.js has not yet loaded.
            // Make sure to disable form submission until Stripe.js has loaded.
            return;
        }
        setIsLoading(true);
        const result = await stripe.confirmPayment({
            elements,
            confirmParams: {
                // Make sure to change this to your payment completion page
                 return_url: "http://localhost:3000/user",
            },
        });
        if (result.error.type === "card_error" || result.error.type === "validation_error") {
            setMessage(result.error.message);
        } else {
            setMessage("An unexpected error occured.");
        }
        console.log(result)
        // dispatch(updateOrderPayment({id:params.orderId,result}))
        dispatch(completeOrder())

        setIsLoading(false);

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

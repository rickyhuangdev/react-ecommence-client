import request from "../utils/request";

export const createPaymentIntent = () => {
    return request('/create-payment-intent', 'post')
}

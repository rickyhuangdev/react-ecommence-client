import request from "../utils/request";

export const createPaymentIntent = (config) => {
    return request('/create-payment-intent', 'post','',config)
}

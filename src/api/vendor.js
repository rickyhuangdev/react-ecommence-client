import request from "../utils/request";

export const getPayPayClient = () => {
    return request('/config/paypal', 'get')
}

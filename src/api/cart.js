import request from "../utils/request";

export const saveCartToDBApi = (data,config) => {
    return request('/cart', 'post', {cart: data},config)
}
export const getCartInfoApi = (config) => {
    return request('/cart', 'get','',config)
}
export const removeCartInfoApi = (config) => {
    return request('/cart', 'delete','',config)
}


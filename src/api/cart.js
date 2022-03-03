import request from "../utils/request";

export const saveCartToDBApi = (data) => {
    return request('/cart', 'post', {cart: data})
}
export const getCartInfoApi = () => {
    return request('/cart', 'get')
}

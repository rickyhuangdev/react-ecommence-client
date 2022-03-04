import request from "../utils/request";

export const saveOrderToDBApi = (data) => {
    return request('/order', 'post', data)
}
export const getOrderInfoApi = (id) => {
    return request(`/order/${id}`, 'get')
}
export const getOrderListApi = () => {
    return request('/orders', 'get')
}


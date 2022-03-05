import request from "../utils/request";

export const saveOrderToDBApi = (data,config) => {
    return request('/order', 'post', data,config)
}
export const getOrderInfoApi = (id) => {
    return request(`/order/${id}`, 'get')
}
export const getOrderListApi = () => {
    return request('/orders', 'get')
}


import request from "../utils/request";

export const saveOrderToDBApi = (data,config) => {
    return request('/order', 'post', data,config)
}

export const getOrderListApi = () => {
    return request('/orders', 'get')
}
export const getOrderInfoApi = (id,config) => {
    return request(`/order/${id}`, 'get','',config)
}
export const updateOrderPaymentApi = (data,config) => {
    return request(`/order/${data.order_id}/pay`, 'put',data,config)
}
export const getMyOrdersApi = (config) => {
    return request(`/myorders`, 'get','',config)
}





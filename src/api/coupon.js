import request from "../utils/request";

export const getCouponApi = () => {
    return request('/coupons', 'get')
}
export const readCouponApi = (id) => {
    return request(`/coupon/${id}`, 'get')
}
export const updateCouponApi = (data) => {
    return request(`/category/${data.id}`, 'put',data)
}
export const deleteCouponApi = (id) => {
    return request(`/coupon/${id}`, 'delete')
}
export const createCouponApi = data => {
    return request('/coupon', 'post', data)
}


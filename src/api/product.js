import request from "../utils/request";

export const getProductsApi = (count = 30) => {
    return request(`/products/${count}`, 'get')
}
export const readProductApi = (slug) => {
    return request(`/product/${slug}`, 'get')
}
export const updateProductApi = (data) => {
    return request(`/product/${data.slug}`, 'put',data)
}
export const deleteProductApi = (slug) => {
    return request(`/product/${slug}`, 'delete')
}
export const createProductApi = data => {
    return request('/product', 'post', data)
}

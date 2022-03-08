import request from "../utils/request";

export const getProductsApi = (count = 30) => {
    return request(`/products/${count}`, 'get')
}
export const readProductApi = (id) => {
    return request(`/product/${id}`, 'get')
}
export const updateProductApi = (data) => {
    return request(`/product/${data.slug}`, 'put',data)
}
export const deleteProductApi = (id) => {
    return request(`/product/${id}`, 'delete')
}
export const createProductApi = data => {
    return request('/product', 'post', data)
}

export const fetchProductsApi = (sort,order,limit) => {
    return request(`/products`, 'post',{sort,order,limit})
}
export const createProductRatingApi = (id, star,config) => {
    return request(`/product/star/${id}`, 'put', {star},config)
}
export const getRelativeProductApi = (id) => {
    return request(`/product/related/${id}`, 'get')
}
export const fetchProductsByFilterApi = (query) => {
    return request(`/products/search`, 'post',query)
}

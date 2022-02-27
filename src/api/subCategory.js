import request from "../utils/request";

export const getSubCategoryApi = () => {
    return request('/subCategories', 'get')
}
export const readSubCategoryApi = (slug) => {
    return request(`/subCategory/${slug}`, 'get')
}
export const updateSubCategoryApi = (data) => {
    return request(`/SubCategory/${data.slug}`, 'put', data)
}
export const deleteSubCategoryApi = (slug) => {
    return request(`/subCategory/${slug}`, 'delete')
}
export const createSubCategoryApi = data => {
    return request('/subCategory', 'post', data)
}


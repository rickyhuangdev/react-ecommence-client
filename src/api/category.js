import request from "../utils/request";

export const getCategoryApi = () => {
    return request('/categories', 'get')
}
export const readCategoryApi = (slug) => {
    return request(`/category${slug}`, 'get')
}
export const updateCategoryApi = (slug) => {
    return request(`/category${slug}`, 'put')
}
export const deleteCategoryApi = (slug) => {
    return request(`/category${slug}`, 'delete')
}
export const createCategoryApi = data => {
    return request('/category', 'post', data)
}

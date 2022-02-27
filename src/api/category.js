import request from "../utils/request";

export const getCategoryApi = () => {
    return request('/categories', 'get')
}
export const readCategoryApi = (slug) => {
    return request(`/category/${slug}`, 'get')
}
export const updateCategoryApi = (data) => {
    return request(`/category/${data.slug}`, 'put',data)
}
export const deleteCategoryApi = (slug) => {
    return request(`/category/${slug}`, 'delete')
}
export const createCategoryApi = data => {
    return request('/category', 'post', data)
}
export const getCategorySubApi = (id) => {
    return request('/category/subs/'+id, 'get')
}

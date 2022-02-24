import request from "../utils/request";

export const createOrUpdateUserApi = () => {
    return request('/user/create-or-update-user', 'post')
}

export const getUserProfileApi = () => {
    return request('/user/current-user', 'post')
}
export const getAdminProfileApi = () => {
    return request('/user/current-admin', 'post')
}

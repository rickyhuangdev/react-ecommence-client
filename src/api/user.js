import request from "../utils/request";

export const createOrUpdateUserApi = (token) => {
    return request('/user/create-or-update-user', 'post', token)
}

export const getUserProfileApi = () => {
    return request('/user/current-user', 'post')
}
export const getAdminProfileApi = () => {
    return request('/user/current-admin', 'post')
}

export const saveUserAddressApi = (data) => {
    return request('/user/address', 'post',{address:data})
}

export const userLoginApi = (data) => {
    return request('/login', 'post',data)
}
export const userRegisterApi = (data) => {
    return request('/user', 'post',data)
}

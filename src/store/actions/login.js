import request from "../../utils/request";
import {removeTokenInfo} from "../../utils/storage";

export const login = (email, password, login = false) => {
    return async dispatch => {
    }
}

export const saveToken = tokenInfo => {
    return {
        type: 'login/token', payload: tokenInfo
    }
}

export const saveUserInfo = userInfo => {
    return {
        type: 'login/info', payload: userInfo
    }
}
export const clearToken = () => {
    return {
        type: 'login/clear'
    }
}
export const logout = () => {
    return dispatch => {
        // 删除 LocalStorage 中的 Token 信息
        removeTokenInfo()
        // 删除 Redux 中的 Token 信息
        dispatch(clearToken())
    }
}

export const createOrUpdateUser = () => {
    return async dispatch => {
        const res = await request('/create-or-update-user')
        console.log(res)
    }
}

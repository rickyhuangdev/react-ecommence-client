import {removeTokenInfo} from "../../utils/storage";
import {clearUserProfile} from "./profile";

export const login = (email, password, login = false) => {
    return async dispatch => {
    }
}

export const saveToken = tokenInfo => {
    return {
        type: 'login/token', payload: tokenInfo
    }
}

export const clearToken = () => {
    return {
        type: 'login/clear',
        payload: null
    }
}
export const logout = () => {
    return async dispatch => {
        // 删除 LocalStorage 中的 Token 信息
        await removeTokenInfo()
        // 删除 Redux 中的 Token 信息
        await dispatch(clearToken())
        await  dispatch(clearUserProfile())

    }
}



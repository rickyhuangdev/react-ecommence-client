import {removeTokenInfo} from "../../utils/storage";
import {clearUserProfile} from "./profile";
import {userLoginApi} from "../../api/user";

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
        await dispatch(clearUserProfile())

    }
}

export const login = (email, password) => {
    return async dispatch => {
        dispatch({
            type: 'USER_LOGIN_REQUEST'
        })
        userLoginApi({email, password}).then(data => {
            if (data) {
                dispatch({
                    type: 'USER_LOGIN_SUCCESS',
                    payload: data
                })
            }
        }).catch(error => {
            dispatch({
                type: 'USER_LOGIN_FAIL',
                payload: error.response && error.response.data.message ? error.response.data.message : error.message
            })
        })

    }
}




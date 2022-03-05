import {userLoginApi, userRegisterApi} from "../../api/user";

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
export const register = (name, email, password) => {
    return async dispatch => {
        dispatch({
            type: 'USER_REGISTER_REQUEST'
        })
        userRegisterApi({name, email, password}).then(data => {
            if (data) {
                dispatch({
                    type: 'USER_REGISTER_SUCCESS',
                    payload: data
                })
                dispatch({
                    type: 'USER_LOGIN_SUCCESS',
                    payload: data
                })
            }
        }).catch(error => {
            console.log(error.response.data.message)
            dispatch({
                type: 'USER_REGISTER_FAIL',
                payload: error.response && error.response.data.message ? error.response.data.message : error.message
            })
        })

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

export const logout = () => {
    return async dispatch => {
        dispatch({
            type: 'USER_LOGOUT'
        })


    }
}



import {
    getUserProfileApi,
    updateUserByIdApi,
    userLoginApi,
    userRegisterApi,
    userUpdateProfileApi
} from "../../api/user";

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
        dispatch({
            type: 'GET_CART_CHECKOUT_RESET'
        })
        dispatch({
            type: 'CANCEL_ORDER'
        })


    }
}
export const getUserDetail = () => {
    return async (dispatch, getState) => {
        const {userInfo} = getState().login
        dispatch({
            type: 'USER_PROFILE_REQUEST'
        })
        const config = {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${userInfo.token}`
        }
        getUserProfileApi(config).then(data => {
            if (data) {
                dispatch({
                    type: 'USER_PROFILE_SUCCESS',
                    payload: data
                })
            }
        }).catch(error => {
            dispatch({
                type: 'USER_PROFILE_FAIL',
                payload: error.response && error.response.data.message ? error.response.data.message : error.message
            })
        })

    }
}
export const updateUserProfile = (user) => {
    return async (dispatch, getState) => {
        const {userInfo} = getState().login
        dispatch({
            type: 'USER_UPDATE_PROFILE_REQUEST'
        })
        const config = {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${userInfo.token}`
        }

    userUpdateProfileApi(user, config).then(data => {
        if (data) {
            dispatch({
                type: 'USER_UPDATE_PROFILE_SUCCESS',
                payload: data
            })
        }
    }).catch(error => {
        dispatch({
            type: 'USER_UPDATE_PROFILE_FAIL',
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    })

}
}


export const updateUser = (user) => {
    return async (dispatch, getState) => {
        const {userInfo} = getState().login
        dispatch({
            type: 'USER_UPDATE_PROFILE_REQUEST'
        })
        const config = {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${userInfo.token}`
        }

        updateUserByIdApi(user, config).then(data => {
            if (data) {
                dispatch({
                    type: 'USER_UPDATE_PROFILE_SUCCESS',
                    payload: data
                })
            }
        }).catch(error => {
            dispatch({
                type: 'USER_UPDATE_PROFILE_FAIL',
                payload: error.response && error.response.data.message ? error.response.data.message : error.message
            })
        })

    }
}



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
export const logoutUser =  () => {
    return {
        type: 'logout',
        payload: null
    }
}

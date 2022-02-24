import request from "../../utils/request";

export const setUser = user => {
    return {
        type: 'profile/user',
        payload: user
    }
}
export const clearUserProfile = () => {
    return {
        type: 'profile/clear',
    }
}

export const createOrUpdateUser = (token) => {
    return async dispatch => {
        const res = await request('/user/create-or-update-user', 'post')
        dispatch(setUser({
            email: res.email,
            user_id: res._id,
            name: res.name,
            role: res.role,
            token:token
        }))
    }
}

export const getUserProfile = () => {
    return async (dispatch, getState) => {
        const token = getState().login
        if (token.length === 0) return;
        const res = await request('/user/current-user', 'post')
        dispatch(setUser({
            email: res.email,
            user_id: res._id,
            name: res.name,
            role: res.role,
            image:res.picture,
            token
        }))
    }
}

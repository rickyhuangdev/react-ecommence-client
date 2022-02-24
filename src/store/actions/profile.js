import request from "../../utils/request";

export const setUser = user => {
    return {
        type: 'profile/user',
        payload: user
    }
}

export const createOrUpdateUser = () => {
    return async dispatch => {
        const res = await request('/user/create-or-update-user', 'post')
        dispatch(setUser({
            email: res.email,
            user_id: res._id,
            name: res.name,
            role: res.role
        }))
    }
}

export const getUserProfile =  ()=>{
    return async dispatch =>{
        const res = await request('/user/current-user', 'post')
        dispatch(setUser({
            email: res.email,
            user_id: res._id,
            name: res.name,
            role: res.role
        }))
    }
}

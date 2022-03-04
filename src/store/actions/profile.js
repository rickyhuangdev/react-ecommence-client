import {createOrUpdateUserApi, getUserProfileApi} from "../../api/user";

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

export const createOrUpdateUser = (user) => {

}

export const getUserProfile = () => {
    return async (dispatch, getState) => {
        const res = await getUserProfileApi()
        dispatch(setUser({
            email: res.email,
            name: res.name,
            image:res.picture,
        }))
    }
}

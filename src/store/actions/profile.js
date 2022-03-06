import {getUserByIdApi, getUserListApi, getUserProfileApi} from "../../api/user";

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
export const getUserProfile = () => {
    return async (dispatch, getState) => {
        // const config = {
        //     'Content-Type': 'application/json',
        //     'Authorization': `Bearer ${userInfo.token}`
        // }
        const res = await getUserProfileApi()
        dispatch(setUser({
            email: res.email,
            name: res.name,
            image: res.picture,
        }))
    }
}
export const getUserList = () => {
    return async (dispatch, getState) => {
        const {userInfo} = getState().login
        const config = {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${userInfo.token}`
        }
        dispatch({
            type: 'USER_LIST_REQUEST'
        })

        getUserListApi(config).then(re => {
            if (re) {
                dispatch({
                    type: 'USER_LIST_SUCCESS',
                    payload: re
                })
            }
        }).catch(error => {
            dispatch({
                type: 'USER_LIST_FAIL',
                payload: error.response && error.response.data.message ? error.response.data.message : error.message
            })
        })

    }
}
export const getUserDetail = (id) => {
    return async (dispatch, getState) => {
        const {userInfo} = getState().login
        const config = {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${userInfo.token}`
        }
        dispatch({
            type: 'USER_DETAIL_REQUEST'
        })
        getUserByIdApi(id, config).then(re => {
            if (re) {
                dispatch({
                    type: 'USER_DETAIL_SUCCESS',
                    payload: re
                })
            }
        }).catch(error => {
            dispatch({
                type: 'USER_DETAIL_FAIL',
                payload: error.response && error.response.data.message ? error.response.data.message : error.message
            })
        })

    }
}

import {createWishlistApi, deleteWishlistByIdApi, getUserWishlistApi} from "../../api/user";

export const saveWishlist = (id) => {
    return async (dispatch,getState) => {
        const {userInfo} = getState().login
        const config = {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${userInfo.token}`
        }
        dispatch({
            type: 'SAVE_WISHLIST_REQUEST'
        })
        createWishlistApi({productId:id}, config).then(re => {
            if (re.success === true) {
                dispatch({
                    type: 'SAVE_WISHLIST_SUCCESS',
                    payload: re.data
                })
            }
        }).catch(error => {
            dispatch({
                type: 'SAVE_WISHLIST_FAIL',
                payload: error.response && error.response.data.message ? error.response.data.message : error.message
            })
        })

    }
}
export const getWishlist = () => {
    return async (dispatch,getState) => {
        const {userInfo} = getState().login
        const config = {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${userInfo.token}`
        }
        dispatch({
            type: 'GET_WISHLIST_REQUEST'
        })
        getUserWishlistApi(config).then(data => {
            dispatch({
                type: 'GET_WISHLIST_SUCCESS',
                payload: data
            })

        }).catch(error => {
            dispatch({
                type: 'GET_WISHLIST_FAIL',
                payload: error.response && error.response.data.message ? error.response.data.message : error.message
            })
        })

    }
}
export const deleteWishlist = (id) => {
    return async (dispatch,getState) => {
        const {userInfo} = getState().login
        const config = {
            'Authorization': `Bearer ${userInfo.token}`
        }
        dispatch({
            type: 'REMOVE_WISHLIST_REQUEST'
        })
        deleteWishlistByIdApi(id, config).then(re => {
            if (re.success === true) {
                dispatch({
                    type: 'REMOVE_WISHLIST_SUCCESS',
                })
            }
        }).catch(error => {
            dispatch({
                type: 'REMOVE_WISHLIST_FAIL',
                payload: error.response && error.response.data.message ? error.response.data.message : error.message
            })
        })

    }
}

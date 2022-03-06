import {getCartInfoApi, saveCartToDBApi} from "../../api/cart";

export const addToCart = carts => {
    return {
        type: 'ADD_TO_CART',
        payload: carts
    }
}
export const UPDATE_CART = carts => {
    return {
        type: 'UPDATE_CART',
        payload: carts
    }
}
export const removeItemFromCart = cartItemId => {
    return {
        type: 'REMOVE_ITEM_FROM_CART',
        payload: cartItemId
    }
}
export const removeAllItemFromCart = () => {
    return {
        type: 'REMOVE_ALL_ITEM_FROM_CART',
    }
}
export const savePaymentMethod = (data) => (dispatch) => {
    dispatch({
        type: 'CART_SAVE_PAYMENT_METHOD',
        payload: data
    })
}

export const saveCartToDB = (carts) => {
    return async (dispatch, getState) => {
        const {userInfo} = getState().login
        const config = {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${userInfo.token}`
        }
        dispatch({
            type: 'SAVE_CART_REQUEST'
        })
        saveCartToDBApi(carts,config).then(re => {
            if (re.success === true) {
                dispatch({
                    type: 'SAVE_CART_SUCCESS',
                })
            }
        }).catch(error => {
            dispatch({
                type: 'SAVE_CART_FAIL',
                payload: error.response && error.response.data.message ? error.response.data.message : error.message
            })
        })

    }
}

export const getCartCheckoutDetails = () => {
    return async (dispatch, getState) => {
        const {userInfo} = getState().login
        const config = {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${userInfo.token}`
        }
        dispatch({
            type: 'GET_CART_CHECKOUT_REQUEST'
        })
        getCartInfoApi(config).then(data => {
            dispatch({
                type: 'GET_CART_CHECKOUT_SUCCESS',
                payload: data
            })

        }).catch(error => {
            dispatch({
                type: 'GET_CART_CHECKOUT_FAIL',
                payload: error.response && error.response.data.message ? error.response.data.message : error.message
            })
        })

    }
}

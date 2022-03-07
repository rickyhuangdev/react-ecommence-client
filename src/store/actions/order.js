import {
    getMyOrdersApi,
    getOrderInfoApi,
    saveOrderToDBApi,
    updateOrderDeliveredApi,
    updateOrderPaymentApi
} from "../../api/order";

export const saveOrder = (data) => {
    return async (dispatch,getState) => {
        const {userInfo} = getState().login
        const config = {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${userInfo.token}`
        }
        dispatch({
            type: 'SAVE_ORDER_REQUEST'
        })
        saveOrderToDBApi(data, config).then(re => {
            if (re.success === true) {
                dispatch({
                    type: 'SAVE_ORDER_SUCCESS',
                    payload: re.data
                })
            }
        }).catch(error => {
            dispatch({
                type: 'SAVE_ORDER_FAIL',
                payload: error.response && error.response.data.message ? error.response.data.message : error.message
            })
        })

    }
}
export const getOrderDetail = (id) => {
    return async (dispatch, getState) => {
        const {userInfo} = getState().login
        const config = {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${userInfo.token}`
        }
        dispatch({
            type: 'ORDER_DETAIL_REQUEST'
        })
        getOrderInfoApi(id, config).then(re => {
            if (re.success === true) {
                dispatch({
                    type: 'ORDER_DETAIL_SUCCESS',
                    payload: re.data
                })
            }
        }).catch(error => {
            dispatch({
                type: 'ORDER_DETAIL_FAIL',
                payload: error.response && error.response.data.message ? error.response.data.message : error.message
            })
        })

    }
}
export const payOrder = (paymentResult) => {
    return async (dispatch, getState) => {
        const {userInfo} = getState().login
        const config = {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${userInfo.token}`
        }
        dispatch({
            type: 'ORDER_PAY_REQUEST'
        })
        updateOrderPaymentApi(paymentResult, config).then(re => {
            if (re) {
                dispatch({
                    type: 'ORDER_PAY_SUCCESS',
                    payload: re.data
                })
            }
        }).catch(error => {
            dispatch({
                type: 'ORDER_PAY_FAIL',
                payload: error.response && error.response.data.message ? error.response.data.message : error.message
            })
        })

    }
}

export const listMyOrder = () => {
    return async (dispatch, getState) => {
        const {userInfo} = getState().login
        const config = {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${userInfo.token}`
        }
        dispatch({
            type: 'ORDER_LIST_MY_REQUEST'
        })
        getMyOrdersApi(config).then(re => {
            if (re) {
                dispatch({
                    type: 'ORDER_LIST_MY_SUCCESS',
                    payload: re
                })
            }
        }).catch(error => {
            dispatch({
                type: 'ORDER_LIST_MY_FAIL',
                payload: error.response && error.response.data.message ? error.response.data.message : error.message
            })
        })

    }
}
export const updateDeliverOrder = (orderId) => {
    return async (dispatch, getState) => {
        const {userInfo} = getState().login
        const config = {
            'Authorization': `Bearer ${userInfo.token}`
        }
        dispatch({
            type: 'ORDER_DELIVER_REQUEST'
        })
        updateOrderDeliveredApi(orderId, config).then(re => {
            if (re) {
                dispatch({
                    type: 'ORDER_DELIVER_SUCCESS',
                    payload: re.data
                })
            }
        }).catch(error => {
            dispatch({
                type: 'ORDER_DELIVER_FAIL',
                payload: error.response && error.response.data.message ? error.response.data.message : error.message
            })
        })

    }
}

import {getOrderInfoApi, saveOrderToDBApi} from "../../api/order";

export const saveOrder = (address) => {
    return async (dispatch,getState) => {
        const {userInfo} = getState().login
        const config = {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${userInfo.token}`
        }
        dispatch({
            type: 'SAVE_ORDER_REQUEST'
        })
        saveOrderToDBApi(address, config).then(re => {
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
export const completeOrder = () => {
    return {
        type: 'CREATE_ORDER_COMPLETE'
    }
}

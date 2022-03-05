
import {saveOrderToDBApi} from "../../api/order";

export const saveOrder = (order) => {
    return async (dispatch,getState) => {
        const {userInfo} = getState().login
        const config = {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${userInfo.token}`
        }
        dispatch({
            type: 'SAVE_ORDER_REQUEST'
        })
        saveOrderToDBApi({order}, config).then(re => {
            if (re.success === true) {
                dispatch({
                    type: 'SAVE_ORDER_SUCCESS',
                    payload: re.data.orderId
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

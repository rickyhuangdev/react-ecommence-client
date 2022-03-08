import {getOrderInfoApi} from "../../api/order";

export const getProductSearchDetail = (query) => {
    return async (dispatch, getState) => {
        const {userInfo} = getState().login
        const config = {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${userInfo.token}`
        }
        dispatch({
            type: 'PRODUCT_SEARCH_REQUEST'
        })
        getOrderInfoApi(config).then(re => {
            if (re.success === true) {
                dispatch({
                    type: 'PRODUCT_SEARCH_SUCCESS',
                    payload: re.data
                })
            }
        }).catch(error => {
            dispatch({
                type: 'PRODUCT_SEARCH_FAIL',
                payload: error.response && error.response.data.message ? error.response.data.message : error.message
            })
        })

    }
}

import {getOrderInfoApi} from "../../api/order";
import {fetchProductsByFilterApi} from "../../api/product";

export const getProductSearchDetail = (query) => {
    return async (dispatch, getState) => {
        const {userInfo} = getState().login
        // const config = {
        //     'Content-Type': 'application/json',
        //     'Authorization': `Bearer ${userInfo.token}`
        // }
        dispatch({
            type: 'PRODUCT_SEARCH_REQUEST'
        })
        fetchProductsByFilterApi(query).then(re => {
                dispatch({
                    type: 'PRODUCT_SEARCH_SUCCESS',
                    payload: re
                })

        }).catch(error => {
            dispatch({
                type: 'PRODUCT_SEARCH_FAIL',
                payload: error.response && error.response.data.message ? error.response.data.message : error.message
            })
        })

    }
}

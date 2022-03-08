import {fetchProductsByFilterApi, getProductsApi} from "../../api/product";

export const getProductSearchDetail = (arg) => {
    return async (dispatch, getState) => {
        const config = {
            'Content-Type': 'application/json',
        }
        dispatch({
            type: 'PRODUCT_LIST_REQUEST'
        })
        fetchProductsByFilterApi(arg).then(re => {
            dispatch({
                type: 'PRODUCT_LIST_SUCCESS',
                payload: re
            })

        }).catch(error => {
            dispatch({
                type: 'PRODUCT_LIST_FAIL',
                payload: error.response && error.response.data.message ? error.response.data.message : error.message
            })
        })

    }
}

export const getProductList = () => {
    return async (dispatch, getState) => {
        dispatch({
            type: 'PRODUCT_LIST_REQUEST'
        })
        getProductsApi().then(re => {
            dispatch({
                type: 'PRODUCT_LIST_SUCCESS',
                payload: re
            })

        }).catch(error => {
            dispatch({
                type: 'PRODUCT_LIST_FAIL',
                payload: error.response && error.response.data.message ? error.response.data.message : error.message
            })
        })

    }
}


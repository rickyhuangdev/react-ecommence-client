import {fetchProductsByFilterApi, getProductsApi, readProductApi} from "../../api/product";

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

export const getProductDetail = (id) => {
    return async (dispatch, getState) => {
        dispatch({
            type: 'PRODUCT_DETAIL_REQUEST'
        })
        readProductApi(id).then(re => {
            dispatch({
                type: 'PRODUCT_DETAIL_SUCCESS',
                payload: re
            })

        }).catch(error => {
            dispatch({
                type: 'PRODUCT_DETAIL_FAIL',
                payload: error.response && error.response.data.message ? error.response.data.message : error.message
            })
        })

    }
}

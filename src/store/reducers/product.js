import {getOrderInfoApi} from "../../api/order";

export const productSearchReducer = (state = {loading: false,searchText:"", productList: []},action) => {
    const {type, payload} = action
    switch (type) {
        case 'PRODUCT_SEARCH_REQUEST':
            return {...state,searchText:payload}
        case 'PRODUCT_LIST_REQUEST':
            return {...state,productList:payload}
        case 'PRODUCT_LIST_SUCCESS':
            return {
                loading: false,
                productList: payload
            }
        case 'PRODUCT_LIST_FAIL':
            return {loading: false, error: payload}
        case 'PRODUCT_LIST_RESET':
            return {...state, loading: false, productList: []}
        case 'PRODUCT_SEARCH_RESET':
            return {...state, loading: false, searchText: ''}
        default:
            return state
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

export const productDetailReducer = (state = {loading: true, product:{}}, action) => {
    const {type, payload} = action
    switch (type) {

        case 'PRODUCT_DETAIL_REQUEST':
            return {...state, loading: true}
        case 'PRODUCT_DETAIL_SUCCESS':
            return {
                loading: false,
                product: payload
            }
        case 'PRODUCT_DETAIL_FAIL':
            return {loading: false, error: payload}
        case 'PRODUCT_DETAIL_RESET':
            return {}
        default:
            return state
    }
}

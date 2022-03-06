export const order = (state = {}, action) => {
    const {type, payload} = action
    switch (type) {

        case 'SAVE_ORDER_REQUEST':
            return {loading: true, success: false}
        case 'SAVE_ORDER_SUCCESS':
            return {
                loading: false,
                success: true,
                order: payload
            }
        case 'CREATE_ORDER_COMPLETE':
            return {}
        case 'SAVE_ORDER_FAIL':
            return {loading: false, success: false, error: payload}
        case 'CANCEL_ORDER':
            return {}
        default:
            return state
    }
}
export const orderDetailReducer = (state = {loading: true, orderItems: [], shippingAddress: {}}, action) => {
    const {type, payload} = action
    switch (type) {

        case 'ORDER_DETAIL_REQUEST':
            return {...state, loading: true}
        case 'ORDER_DETAIL_SUCCESS':
            return {
                loading: false,
                order: payload
            }
        case 'ORDER_DETAIL_FAIL':
            return {loading: false, error: payload}
        case 'CANCEL_ORDER':
            return {}
        default:
            return state
    }
}
export const orderPayReducer = (state = {}, action) => {
    const {type, payload} = action
    switch (type) {

        case 'ORDER_PAY_REQUEST':
            return {loading: true}
        case 'ORDER_PAY_SUCCESS':
            return {
                loading: false,
                success:true
            }
        case 'ORDER_PAY_FAIL':
            return {loading: false, error: payload}
        case 'ORDER_PAY_RESET':
            return {}
        default:
            return state
    }
}

export const orderMyListReducer = (state = {orders:[]}, action) => {
    const {type, payload} = action
    switch (type) {

        case 'ORDER_LIST_MY_REQUEST':
            return {loading: true}
        case 'ORDER_LIST_MY_SUCCESS':
            return {
                loading: false,
                orders: payload
            }
        case 'ORDER_LIST_MY_FAIL':
            return {loading: false, error: payload}
        default:
            return state
    }
}



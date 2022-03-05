export const order = (state = {}, action) => {
    const {type, payload} = action
    switch (type) {

        case 'SAVE_ORDER_REQUEST':
            return {loading: true, success: false}
        case 'SAVE_ORDER_SUCCESS':
            return {
                loading: false,
                success: true,
                orderId: payload
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
export const orderDetailReducer = (state = {orderItems: [], shippingAddress: {}}, action) => {
    const {type, payload} = action
    switch (type) {

        case 'ORDER_DETAIL_REQUEST':
            return {...state, loading: true}
        case 'ORDER_DETAIL_REQUEST':
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

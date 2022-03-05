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
        case 'SAVE_ORDER_FAIL':
            return {loading: false, success: false, error: payload}
        case 'CANCEL_ORDER':
            return {}
        default:
            return state
    }
}

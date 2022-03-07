
export const coupon = (state = {}, action) => {
    const {type, payload} = action
    switch (type) {

        case 'APPLY_COUPON_REQUEST':
            return {loading: true}
        case 'APPLY_COUPON_SUCCESS':
            return {
                loading: false,
                success:true,
            }
        case 'APPLY_COUPON_FAIL':
            return {loading: false, error: payload}
        case 'APPLY_COUPON_RESET':
            return {}
        default:
            return state
    }
}


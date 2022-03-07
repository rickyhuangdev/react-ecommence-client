import {applyCouponApi} from "../../api/coupon";
import {getCartCheckoutDetails} from "./cart";

export const applyCoupon = flag => {
    return {
        type: 'COUPON_APPLIED',
        payload: flag
    }
}

export const applyDiscountCoupon = (coupon) => {


    return async (dispatch, getState) => {
        const {userInfo} = getState().login
        const config = {
            'Content-Type': 'application/json ',
            'Authorization': `Bearer ${userInfo.token}`
        }
        dispatch({
            type: 'APPLY_COUPON_REQUEST'
        })
        applyCouponApi({coupon}, config).then(re => {
            if (re.success === true) {
                dispatch({
                    type: 'APPLY_COUPON_SUCCESS',
                    payload: re.data
                })
                dispatch(getCartCheckoutDetails())
            }
        }).catch(error => {
            dispatch({
                type: 'APPLY_COUPON_FAIL',
                payload: error.response && error.response.data.message ? error.response.data.message : error.message
            })
        })

    }

}

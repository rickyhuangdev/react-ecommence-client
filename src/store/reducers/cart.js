import {getCartInfo} from "../../utils/storage";

let initialState = []
if (typeof window !== 'undefined') {
    if (getCartInfo()) {
        initialState = getCartInfo()

    } else {
        initialState = []
    }
}
export const cart = (state = initialState, action) => {
    const {type, payload} = action
    switch (type) {
        // 设置基本信息
        case 'ADD_TO_CART':
            return payload;
        case 'profile/clear':
            return {}

        // 默认
        default:
            return state
    }
}


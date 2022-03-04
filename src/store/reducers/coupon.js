
export const coupon = (state = false, action) => {
    const {type, payload} = action
    switch (type) {
        // 设置基本信息
        case 'COUPON_APPLIED':
            return payload;
        // 默认
        default:
            return state
    }
}


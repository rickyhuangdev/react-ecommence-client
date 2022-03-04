
export const profile = (state = {}, action) => {
    const {type, payload} = action
    switch (type) {
        // 设置基本信息
        case 'profile/user':
            return {
                userInfo: payload
            }
        case 'profile/clear':
            return {}

        // 默认
        default:
            return state
    }
}


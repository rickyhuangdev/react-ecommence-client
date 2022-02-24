const initialSate = {
    user: {}
}

export const profile = (state = initialSate, action) => {
    const {type, payload} = action
    switch (type) {
        // 设置基本信息
        case 'profile/user':
            return {
                ...state,
                user: {...payload}
            }
        case 'profile/clear':
            return {}

        // 默认
        default:
            return state
    }
}


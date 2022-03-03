
export const cart = (state = [], action) => {
    const {type, payload} = action
    switch (type) {
        // 设置基本信息
        case 'ADD_TO_CART':
            const sameIndex = state.findIndex(goods => goods.product._id === payload.product._id)
            if (sameIndex > -1) {
                // const count = state[sameIndex].count
                // payload.count += count
                state.splice(sameIndex, 1)
            }
            return [...state, payload];
        case 'UPDATE_CART':
            const cartIndex = state.findIndex(goods => goods.product._id === payload.product._id)
            console.log(cartIndex)
            if (cartIndex > -1) {
                state[cartIndex].count = payload.count
                console.log(payload.count)
                console.log(state[cartIndex].count)
            }
            return [...state, payload];
        case 'REMOVE_ITEM_FROM_CART':
            return state.filter((item) => item.product._id !== payload)
        case 'REMOVE_ALL_ITEM_FROM_CART':
            return []
        // 默认
        default:
            return state
    }
}


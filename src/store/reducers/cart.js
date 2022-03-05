
export const cart = (state = {cartItems: []}, action) => {
    const {type, payload} = action
    switch (type) {
        // 设置基本信息
        case 'ADD_TO_CART':
            const existItem = state.cartItems.find(goods => goods.product._id === payload.product._id)
            if (existItem) {
                return {
                    ...state,
                    cartItems: state.cartItems.map(goods => goods.product._id === existItem.product._id ? payload : goods)
                }
            } else {
                return {...state, cartItems: [...state.cartItems, payload]};
            }

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
            return {...state,cartItems:[...state.cartItems.filter((item) => item.product._id !== payload)]}
        case 'CART_SAVE_PAYMENT_METHOD':
            return {...state,paymentMethod:payload}
        case 'REMOVE_ALL_ITEM_FROM_CART':
            return []
        // 默认
        default:
            return state
    }
}


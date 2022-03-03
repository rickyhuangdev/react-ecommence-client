export const addToCart = carts => {
    return {
        type: 'ADD_TO_CART',
        payload: carts
    }
}
export const UPDATE_CART = carts => {
    return {
        type: 'UPDATE_CART',
        payload: carts
    }
}
export const removeItemFromCart = cartItemId => {
    return {
        type: 'REMOVE_ITEM_FROM_CART',
        payload: cartItemId
    }
}
export const removeAllItemFromCart = () => {
    return {
        type: 'REMOVE_ALL_ITEM_FROM_CART',
    }
}

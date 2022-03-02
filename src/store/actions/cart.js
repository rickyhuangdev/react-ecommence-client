export const addToCart = carts => {
    return {
        type: 'ADD_TO_CART',
        payload: carts
    }
}
export const removeItemFromCart = cartItemId => {
    return {
        type: 'REMOVE_ITEM_FROM_CART',
        payload: cartItemId
    }
}

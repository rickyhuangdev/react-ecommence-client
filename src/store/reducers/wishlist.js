export const saveWishlistReducer = (state = {}, action) => {
    const {type, payload} = action
    switch (type) {

        case 'SAVE_WISHLIST_REQUEST':
            return {loading: true, success: false}
        case 'SAVE_WISHLIST_SUCCESS':
            return {
                loading: false,
                success: true,
            }
        case 'SAVE_WISHLIST_FAIL':
            return {loading: false, success: false, error: payload}
        default:
            return state
    }
}

export const getWishlistReducer = (state = {list:[]}, action) => {
    const {type, payload} = action
    switch (type) {
        case 'GET_WISHLIST_REQUEST':
            return {loading: true, success: false}
        case 'GET_WISHLIST_SUCCESS':
            return {
                loading: false,
                success: true,
                list: payload
            }
        case 'GET_WISHLIST_FAIL':
            return {loading: false, success: false, error: payload}
        default:
            return state
    }
}
export const removeWishlistReducer = (state = {}, action) => {
    const {type, payload} = action
    switch (type) {
        case 'REMOVE_WISHLIST_REQUEST':
            return {loading: true, success: false}
        case 'REMOVE_WISHLIST_SUCCESS':
            return {
                loading: false,
                success: true,
            }
        case 'REMOVE_WISHLIST_FAIL':
            return {loading: false, success: false, error: payload}
        default:
            return state
    }
}

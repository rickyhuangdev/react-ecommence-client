export const productSearchReducer = (state = {loading: false,searchText:"", productList: []},action) => {
    const {type, payload} = action
    switch (type) {

        case 'PRODUCT_SEARCH_REQUEST':
            return {...state, loading: true,searchText:payload}
        case 'PRODUCT_SEARCH_SUCCESS':
            return {
                loading: false,
                productList: payload
            }
        case 'PRODUCT_SEARCH_FAIL':
            return {loading: false, error: payload}
        case 'PRODUCT_SEARCH_RESET':
            return {...state, loading: false, productList: []}
        default:
            return state
    }
}

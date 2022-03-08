export const productSearchReducer = (state = {loading: false,searchText:"", productList: []},action) => {
    const {type, payload} = action
    switch (type) {

        case 'PRODUCT_LIST_REQUEST':
            return {...state, loading: true,searchText:payload}
        case 'PRODUCT_LIST_SUCCESS':
            return {
                loading: false,
                productList: payload
            }
        case 'PRODUCT_LIST_FAIL':
            return {loading: false, error: payload}
        case 'PRODUCT_LIST_RESET':
            return {...state, loading: false, productList: []}
        case 'PRODUCT_SEARCH_RESET':
            return {...state, loading: false, searchText: ''}
        default:
            return state
    }
}

export const productSearchReducer = (state = {loading: false, searchText: ""},action) => {
    const {type, payload} = action
    switch (type) {

        case 'PRODUCT_SEARCH_REQUEST':
            return {...state, loading: true}
        case 'PRODUCT_SEARCH_SUCCESS':
            return {
                loading: false,
                searchResult: payload
            }
        case 'PRODUCT_SEARCH_FAIL':
            return {loading: false, error: payload}
        case 'PRODUCT_SEARCH_RESET':
            return {...state, loading: false, searchText: ""}
        default:
            return state
    }
}

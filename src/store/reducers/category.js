export const categoryReducer = (state = {loading: false, categories: []},action) => {
    const {type, payload} = action
    switch (type) {

        case 'CATEGORY_LIST_REQUEST':
            return {...state, loading: true,searchText:payload}
        case 'CATEGORY_LIST_SUCCESS':
            return {
                loading: false,
                categories: payload
            }
        case 'CATEGORY_LIST_FAIL':
            return {loading: false, error: payload}
        default:
            return state
    }
}

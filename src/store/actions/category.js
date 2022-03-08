import {getCategoryApi} from "../../api/category";

export const getCategoryDetail = () => {
    return async (dispatch, getState) => {
        dispatch({
            type: 'CATEGORY_LIST_REQUEST'
        })
        getCategoryApi().then(re => {
            dispatch({
                type: 'CATEGORY_LIST_SUCCESS',
                payload: re
            })

        }).catch(error => {
            dispatch({
                type: 'CATEGORY_LIST_FAIL',
                payload: error.response && error.response.data.message ? error.response.data.message : error.message
            })
        })

    }
}

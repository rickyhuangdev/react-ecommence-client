
export const profile = (state = {user: {}}, action) => {
    const {type, payload} = action
    switch (type) {

        case 'USER_PROFILE_REQUEST':
            return {...state, loading: true}
        case 'USER_PROFILE_SUCCESS':
            return {
                loading: false,
                user: payload
            }
        case 'USER_PROFILE_FAIL':
            return {loading: false, error: payload}
        default:
            return state

    }
}
export const userUpdateProfileReducer = (state = {}, action) => {
    const {type, payload} = action
    switch (type) {

        case 'USER_UPDATE_PROFILE_REQUEST':
            return {loading: true}
        case 'USER_UPDATE_PROFILE_SUCCESS':
            return {
                loading: false,
                success:true,
                userInfo: payload
            }
        case 'USER_UPDATE_PROFILE_FAIL':
            return {loading: false, error: payload}
        default:
            return state

    }
}

export const userListReducer = (state = {users:[]}, action) => {
    const {type, payload} = action
    switch (type) {

        case 'USER_LIST_REQUEST':
            return {loading: true}
        case 'USER_LIST_SUCCESS':
            return {
                loading: false,
                users: payload
            }
        case 'USER_LIST_FAIL':
            return {loading: false, error: payload}
        default:
            return state

    }
}


export const userDetailReducer = (state = {user:{}}, action) => {
    const {type, payload} = action
    switch (type) {

        case 'USER_DETAIL_REQUEST':
            return {loading: true}
        case 'USER_DETAIL_SUCCESS':
            return {
                loading: false,
                user: payload
            }
        case 'USER_DETAIL_FAIL':
            return {loading: false, error: payload}
        default:
            return state

    }
}

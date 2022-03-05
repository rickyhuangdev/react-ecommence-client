
export const profile = (state = {user: {}}, action) => {
    const {type, payload} = action
    switch (type) {
        case 'USER_PROFILE_SUCCESS':
            return {
                loading: false,
                user: payload
            }
        case 'USER_PROFILE_REQUEST':
            return {...state, loading: true}
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


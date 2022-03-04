
export const login = (state = {}, action) => {
    const {type, payload} = action
    switch (type) {
        case 'USER_LOGIN_SUCCESS':
            return {
                loading: false,
                userInfo: payload
            }
        case 'USER_LOGIN_REQUEST':
            return {loading: true}
        case 'USER_LOGIN_FAIL':
            return {loading: false, error: payload}
        default:
            return state

    }
}

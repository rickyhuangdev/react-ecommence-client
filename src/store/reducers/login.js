
export const login = (state = {}, action) => {
    const {type, payload} = action
    switch (type) {
        case 'USER_LOGIN_SUCCESS':
            return {
                userInfo: payload
            }
        case 'login/clear':
            return {}
        default:
            return state

    }
}

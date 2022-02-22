const initialState = {
    token: '', refresh_token: ''
}

export const login = (state = initialState, action) => {
    const {type, payload} = action
    switch (type) {
        case 'login/token':
            return payload
        default:
            return state

    }
}

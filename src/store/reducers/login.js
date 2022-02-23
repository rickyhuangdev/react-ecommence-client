const initialState = {
    token: '',
}

export const login = (state = initialState, action) => {
    const {type, payload} = action
    switch (type) {
        case 'login/token':
            return {...initialState,token:payload}
        case 'login/clear':
            return {}
        default:
            return state

    }
}

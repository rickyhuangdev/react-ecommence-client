const initialState = {
    token: '', refresh_token: '',userInfo:{}
}

export const login = (state = initialState, action) => {
    const {type, payload} = action
    switch (type) {
        case 'login/token':
            return {...state,token: payload}
        case 'login/info':
            return {...state,userInfo: payload}
        default:
            return state

    }
}

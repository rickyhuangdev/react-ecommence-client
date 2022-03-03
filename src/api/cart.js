import request from "../utils/request";

export const saveCartToDBApi = (data) => {
    return request('/user/create-or-update-user', 'post', data)
}

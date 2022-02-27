import request from "../utils/request";

export const uploadImageApi = (data) => {
    return request('/uploadimages', 'post',data)
}

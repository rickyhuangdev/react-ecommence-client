import request from "../utils/request";

export const uploadImageApi = (data) => {
    return request('/uploadimages', 'post',data)
}
export const deleteImageApi = (id) => {
    return request('/removeimage', 'post',id)
}


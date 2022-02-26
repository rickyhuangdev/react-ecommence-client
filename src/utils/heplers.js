import {getAdminProfileApi} from "../api/user";

export const userAuth = () => {
    const res = getAdminProfileApi()
    console.log(res)
}

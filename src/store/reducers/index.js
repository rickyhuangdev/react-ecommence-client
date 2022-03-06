import {combineReducers} from "redux";
import {login} from "./login";
import {profile, userDeleteReducer, userDetailReducer, userListReducer, userUpdateProfileReducer} from "./profile";
import {cart} from './cart'
import {coupon} from './coupon'
import {register} from './register'
import {order, orderDetailReducer, orderMyListReducer, orderPayReducer} from './order'
const rootReducer = combineReducers({
    login,
    profile,
    cart,
    coupon,
    register,
    userUpdateProfile:userUpdateProfileReducer,
    order,
    orderDetails:orderDetailReducer,
    orderPay:orderPayReducer,
    orderMyList:orderMyListReducer,
    userList:userListReducer,
    userDetail:userDetailReducer,
    userDelete:userDeleteReducer

})
export default rootReducer

import {combineReducers} from "redux";
import {login} from "./login";
import {profile,userUpdateProfileReducer} from "./profile";
import {cart} from './cart'
import {coupon} from './coupon'
import {register} from './register'
import {order,orderDetailReducer} from './order'
const rootReducer = combineReducers({
    login,
    profile,
    cart,
    coupon,
    register,
    userUpdateProfile:userUpdateProfileReducer,
    order,
    orderDetails:orderDetailReducer

})
export default rootReducer

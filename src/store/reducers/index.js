import {combineReducers} from "redux";
import {login} from "./login";
import {profile} from "./profile";
import {cart} from './cart'
import {coupon} from './coupon'
import {register} from './register'
const rootReducer = combineReducers({
    login,
    profile,
    cart,
    coupon,
    register
})
export default rootReducer

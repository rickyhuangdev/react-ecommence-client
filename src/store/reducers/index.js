import {combineReducers} from "redux";
import {login} from "./login";
import {profile} from "./profile";
import {cart} from './cart'
import {coupon} from './coupon'
const rootReducer = combineReducers({
    login,
    profile,
    cart,
    coupon
})
export default rootReducer

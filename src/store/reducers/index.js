import {combineReducers} from "redux";
import {login} from "./login";
import {profile} from "./profile";
import {cart} from './cart'
const rootReducer = combineReducers({
    login,
    profile,
    cart
})
export default rootReducer

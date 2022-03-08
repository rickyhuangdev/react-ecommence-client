import {combineReducers} from "redux";
import {login} from "./login";
import {profile, userDeleteReducer, userDetailReducer, userListReducer, userUpdateProfileReducer} from "./profile";
import {cart, getCartsToCheckoutReducer, saveCartReducer} from './cart'
import {coupon} from './coupon'
import {register} from './register'
import {order, orderDeliveredReducer, orderDetailReducer, orderMyListReducer, orderPayReducer} from './order'
import {productDetailReducer, productSearchReducer} from "./product";
import {categoryReducer} from "./category";
import {getWishlistReducer, removeWishlistReducer, saveWishlistReducer} from "./wishlist";

const rootReducer = combineReducers({
    login,
    profile,
    cart,
    saveCart:saveCartReducer,
    coupon,
    register,
    userUpdateProfile: userUpdateProfileReducer,
    order,
    orderDetails: orderDetailReducer,
    orderPay: orderPayReducer,
    orderMyList: orderMyListReducer,
    userList: userListReducer,
    userDetail: userDetailReducer,
    userDelete: userDeleteReducer,
    getCartsToCheckout: getCartsToCheckoutReducer,
    orderDelivered: orderDeliveredReducer,
    productSearch: productSearchReducer,
    category: categoryReducer,
    productDetail: productDetailReducer,
    saveWishlist: saveWishlistReducer,
    getWishlist: getWishlistReducer,
    removeWishlist: removeWishlistReducer


})
export default rootReducer

import {applyMiddleware, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from "./reducers";
import {persistReducer, persistStore} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key: 'root',
    storage,
    blacklist: ['register','profile','coupon','userUpdateProfile','orderMyList','orderPay','order','userList','userDelete','userDetail','saveCart']
}
const persistedReducer = persistReducer(persistConfig, rootReducer)
let store = createStore(persistedReducer,{

},composeWithDevTools(applyMiddleware(thunk)))
export const persistor = persistStore(store)
// let store = createStore(rootReducer, {
//     login:getTokenInfo(),
//     profile:{}
//     },
//     composeWithDevTools(applyMiddleware(thunk)))


export default store

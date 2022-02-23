import {applyMiddleware, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import {persistReducer, persistStore} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import thunk from "redux-thunk";
import rootReducer from "./reducers";

const persistConfig = {
    key: 'root',
    storage,
}
const persistedReducer = persistReducer(persistConfig, rootReducer)

let store = createStore(persistedReducer, {
    login:{
        userInfo: {}
    }
    },
    composeWithDevTools(applyMiddleware(thunk)))

export const persistor = persistStore(store)
export default store

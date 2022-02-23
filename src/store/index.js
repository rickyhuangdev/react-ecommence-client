import {applyMiddleware, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from "./reducers";
import {getTokenInfo} from "../utils/storage";


let store = createStore(rootReducer, {
    login:getTokenInfo()
    },
    composeWithDevTools(applyMiddleware(thunk)))


export default store

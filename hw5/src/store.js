import { legacy_createStore as createStore, combineReducers } from "redux";
import marketReducer from "./store/marketReducers.js";

const rootReducer = combineReducers({
    posts: marketReducer
})

export  const store = createStore(rootReducer)

import {legacy_createStore,combineReducers,applyMiddleware} from "redux"
import { reducer as ProductReducer } from "./ProductReducer/reducer"
import {reducer as authReducer} from "./authReducer/reducer"
import thunk from "redux-thunk"

let rootReducer=combineReducers({
    ProductReducer,
    authReducer
})

export const store=legacy_createStore(rootReducer,applyMiddleware(thunk))

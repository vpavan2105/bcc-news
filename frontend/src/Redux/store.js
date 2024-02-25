import { applyMiddleware, combineReducers, legacy_createStore  } from 'redux'
import {thunk} from 'redux-thunk';
import {  LoginReducer, searchReducer } from './reducers'


const rootReducer = combineReducers({
    login: LoginReducer ,
    search: searchReducer
})


export const store = legacy_createStore(rootReducer, applyMiddleware(thunk))



import { applyMiddleware, combineReducers, legacy_createStore  } from 'redux'
import {thunk} from 'redux-thunk';
import { BookmarkReducer, LoginReducer, searchReducer } from './reducers'


const rootReducer = combineReducers({
    login: LoginReducer ,
    bookmark: BookmarkReducer,
    search: searchReducer
})


export const store = legacy_createStore(rootReducer, applyMiddleware(thunk))



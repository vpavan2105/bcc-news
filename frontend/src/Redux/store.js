import { applyMiddleware, combineReducers, createStore, legacy_createStore  } from 'redux'
import {thunk} from 'redux-thunk';

import { BookmarkReducer, LoginReducer, SceinceReducer } from './reducers'

const rootReducer = () => combineReducers({
    login: LoginReducer ,
    bookmark: BookmarkReducer
})

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk))



// export const store = legacy_createStore(SceinceReducer, applyMiddleware(thunk));

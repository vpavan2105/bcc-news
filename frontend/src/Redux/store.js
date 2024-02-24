import { applyMiddleware, combineReducers, legacy_createStore  } from 'redux'
// import thunk from 'redux-thunk';
import { BookmarkReducer, LoginReducer } from './reducers'

const rootReducer = () => combineReducers({
    login: LoginReducer ,
    bookmark: BookmarkReducer
})

export const store = legacy_createStore(rootReducer)
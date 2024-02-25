import { applyMiddleware, combineReducers, legacy_createStore  } from 'redux'
import {thunk} from 'redux-thunk';
import { LoginReducer } from './reducers'




const rootReducer = combineReducers({
    login: LoginReducer ,
    //  bookmark: BookmarkReducer,
    //  mainSectionNews: mainSectionNewsReducer
})


export const store = legacy_createStore(rootReducer, applyMiddleware(thunk))



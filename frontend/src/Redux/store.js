import { applyMiddleware, combineReducers, legacy_createStore  } from 'redux'
import {thunk} from 'redux-thunk';

import { BookmarkReducer, LoginReducer, mainSectionNewsReducer } from './reducers'

const rootReducer = combineReducers({
    login: LoginReducer ,
    bookmark: BookmarkReducer,
    mainSectionNews: mainSectionNewsReducer
})

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk))



// export const store = legacy_createStore(SceinceReducer, applyMiddleware(thunk));

import { applyMiddleware, combineReducers, createStore, legacy_createStore  } from 'redux'
import {thunk} from 'redux-thunk';

import { LoginReducer, SceinceReducer } from './reducers'

const rootReducer =  combineReducers({
    login: LoginReducer,
    // science: SceinceReducer
})

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk))



// export const store = legacy_createStore(SceinceReducer, applyMiddleware(thunk));

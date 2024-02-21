import { applyMiddleware, combineReducers, legacy_createStore  } from 'redux'
// import thunk from 'redux-thunk';
import { LoginReducer } from './reducers'

const rootReducer = () => combineReducers({
    login: LoginReducer
})

export const store = legacy_createStore(rootReducer)
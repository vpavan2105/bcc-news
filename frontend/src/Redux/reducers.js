import { FAILED, LOGIN } from "./actionTypes";


const initialLoginState = {
    isAuth: false,
    token: "",
    userName: ""
}

export const LoginReducer = (state = initialLoginState, action) => {
    switch (action.type) {
        case "LOGIN":
            return { ...state, isAuth: true}
        case "LOGOUT":
            return { ...state, isAuth: false};
        default:
            return state;
    }
}

export const searchReducer = (state = "" , action) => {
    switch(action.type){
        case "SEARCH" :
            return action.payload
        default :
            return state ;
    }
}
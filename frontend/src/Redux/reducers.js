import { FAILED, LOGIN } from "./actionTypes";


const initialLoginState = {
    isAuth: true,
    token: "",
    userName: ""
}

export const LoginReducer = (state = initialLoginState, action) => {
    switch (action.type) {
        case "LOGIN":
            return { ...state, isAuth: true, token: action.payload.token, userName: action.payload.userName }
        case "LOGOUT":
            return { ...state, isAuth: true, token: "", userName: "" };
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
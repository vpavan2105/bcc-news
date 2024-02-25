import { FAILED, LOGIN } from "./actionTypes";

const initialLoginState = {
    isAuth : false ,
    token : "" ,
    userName : ""
}

export const LoginReducer = (state= initialLoginState, action) => {
    console.log("Reducer is here matter is come")
    switch(action.type){
        case LOGIN :
            return {...state, isAuth:true, userName:action.payload}
        case FAILED :
            return {...state,isAuth:false , token : "" , userName : ""} ;
        default :
            return state ;
    }

}
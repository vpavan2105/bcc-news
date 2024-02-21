const initialLoginState = {
    isAuth : false ,
    token : "" ,
    userName : ""
}

export const LoginReducer = (state= initialLoginState, action) => {
    switch(action.type){
        case "LOGIN" :
            return {...state, isAuth:true, token:action.payload.token, userName:action.payload.userName}
        case "LOGOUT" :
            return {...state,isAuth:false , token : "" , userName : ""} ;
        default :
            return state ;
    }

}
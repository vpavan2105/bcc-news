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
            return { ...state, isAuth: false, token: "", userName: "" };
        default:
            return state;
    }
}


const initialstateforScinece = {
    data: [],
    loading: false,
    error: ""
}

const initialLoginState = {
    isAuth : false ,
    token : "" ,
    userName : ""
}


export const LoginReducer = (state= initialLoginState, action) => {
    console.log("Reducer is here matter is come")

export const SceinceReducer = (state = initialstateforScinece, action) => {
    switch (action.type) {
        case LOADINGDATASCIENCE:
            return {
                ...state, loading: true
            }
        case SUCCESSDATASCIENCE:
            return {
                ...state, loading: false, data:[action.payload]
            }
        case FAILUREGDATASCIENCE:
            return {
                ...state, loading: false, error:"Somethings went wrong", data:[]
            }
    }
}
let user;
try {
    user = JSON.parse(localStorage.getItem('user')) || { bookmark: [] }; // Ensure user is an object with a bookmark property
} catch (error) {
    console.error("Error parsing user data from localStorage:", error);
    user = { bookmark: [] }; // Fallback value in case of parsing error
}
let initialBookMark = user.bookmark;
console.log(user)
export const BookmarkReducer = (state = initialBookMark , action) => {
    switch(action.type){
        case LOGIN :
            return {...state, isAuth:true, userName:action.payload}
        case FAILED :
            return {...state,isAuth:false , token : "" , userName : ""} ;
        default :
            return state ;
    }

}
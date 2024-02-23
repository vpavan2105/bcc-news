import {
    LOADINGDATASCIENCE,
    FAILUREGDATASCIENCE,
    SUCCESSDATASCIENCE

} from "./actionTypes";


const initialLoginState = {
    isAuth: false,
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
import { LOGIN, LOGOUT, FAILED } from "./actionTypes"
import axios from "axios"
export const LoginAction = (data) => {
    return {
        type: "LOGIN",
        payload: data
    }
}

export const LogoutAction = () => {
    return {
        type: "LOGOUT"
    }
}
let url = `https://testing-arqw.onrender.com/users`



    export const loginhandler = (data) => {
        return async (dispatch) => {
            try {
                const data1 = await axios.get(url);
                // console.log(data1);
    
                const user = data1.data.find((temp) => temp.username === data.username && temp.password === data.password);
    
                if (user) {
                    localStorage.setItem("user", user.id);
                    dispatch({ type: LOGIN, payload: data.username });
                  
                } else {
                    dispatch({ type: FAILED });
                }
            } catch (error) {
                console.log(error);
            }
        };
    }
    


const sceincedatautl=`https://red-powerful-snail.cyclic.app/science`;
export const scienceData = () => {
    return async (dispatch) => {
        console.log("data")
      dispatch({type:LOADINGDATASCIENCE});
  
      try {
        // Your asynchronous logic goes here
        const  data=await axios.get(sceincedatautl);
        console.log(data)
        dispatch({type:SUCCESSDATASCIENCE , payload:data});
  
      } catch (error) {
      dispatch({type:FAILUREGDATASCIENCE})
  
      }
    };
  };
  
  


import axios from 'axios';

import { LOADINGDATASCIENCE } from "./actionTypes"
import { SUCCESSDATASCIENCE } from "./actionTypes"
import { FAILUREGDATASCIENCE } from './actionTypes';

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
  
  



import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
 import logo from "../images/logo.png";
import SignupForm from './SignUp';

import { useDispatch, useSelector } from 'react-redux';
import { loginhandler } from '../Redux/actionCreator';
import { useToast } from '@chakra-ui/react';


function Login() {
    const [signup, setsignup] = useState(true)
    const [username, setusername]=useState();
    const [password, setpassword]=useState();
    const[state1, setState]=useState(false)

    

    let url=`https://bcc-news-backend.onrender.com/users`;

const dispatch=useDispatch()
const state=useSelector(state=>state);
console.log(state.login.isAuth);
  
function handlelogin(e) {
    setState(pre=>!pre)
    e.preventDefault();


    dispatch(loginhandler({ username, password }));
 
}
const toast = useToast()

useEffect(() => {
    if (username && password){
        if (state.login.isAuth) {
            toast({
              title: 'Login Successful',
              description: 'Welcome back!',
              status: 'success',
              duration: 2000,
              isClosable: true,
            });
          } else if (state.login.isAuth==false) {
            toast({
              title: 'Login Failed',
              description: 'User does not exist.',
              status: 'error',
              duration: 2000,
              isClosable: true,
            });
          }
    }
    
  }, [state1,state.login.isAuth, toast ]);
  


    function handlsignup(e){ 
        e.preventDefault();
        setsignup(pre=>!pre)
    }
    return (
        <div>
            <Navbar />
            {(signup) ? (<div style={{ border: "2px solid red", width: "100%", height: "100vh", display: "flex", background: " radial-gradient(879px at 10.4% 22.3%, rgb(255, 235, 238) 0%, rgb(186, 190, 245) 93.6%" }}>
                {/* FLEX 1 */}
                <div style={{ minWidth: "50%", textAlign: "center", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                    <img src={logo} alt="" />
                    <h1 style={{ fontSize: "32px" }}>Sign in with your email or username</h1>
                    <form  onSubmit={handlelogin}    action="" style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
                        <input
                         type="text"
                         value={username}
                         placeholder='enter username' 
                         onChange={(e)=>{setusername(e.target.value)}}
                        style={{ width: "70%", height: "40px", borderStyle: "none", margin: "10px auto", textAlign: "center" }} />
                        <input
                         type="password"
                         value={password}
                         onChange={(e)=>{setpassword(e.target.value)}}
                         placeholder='enter password' 
                        style={{ width: "70%", height: "40px", borderStyle: "none", margin: "10px auto", textAlign: "center" }} />
                        <button type='submit' style={{ width: "70%", height: "40px", borderStyle: "none", margin: "5px auto" }}>Next</button>

                    </form>
                    <a href="">Need help signing in?</a>


                    <hr />
                    <h4>Don't have a BBC account?</h4>
                    <a onClick={handlsignup} href="">Register now</a>



                </div>

                {/*  FLEX 2 */}
                <div >


                </div>
            </div>
            ) : (
                <SignupForm />

            )}








        </div>
    )
}

export default Login
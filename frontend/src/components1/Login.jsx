import React from 'react'
import Navbar from '../components/Navbar'
import "../components1/login.css"
import logo from "../images/logo.png";

function Login() {
    return (
    <div>
           <Navbar/>
         

            <div style={{ border: "2px solid red", width: "100%", height: "100vh", display: "flex", background: " radial-gradient(879px at 10.4% 22.3%, rgb(255, 235, 238) 0%, rgb(186, 190, 245) 93.6%", backgroundImage:" " }}  className="loginMaindiv" >

                {/* FLEX 1 */}
                <div style={{ minWidth: "50%", textAlign: "center", display: "flex", flexDirection: "column",  justifyContent: "center" }}>
                <img src={logo} className="h-10" />
                    <h2 className='heading'>Sign in with your email or username</h2>
                    <form action="" style={{ display: "flex", flexDirection: "column",  justifyContent: "center" }}>
                        <input type="text" placeholder='Email or username' style={{ width: "70%", height: "40px", borderStyle: "none", margin: "10px auto", textAlign: "center" }} />
                        <button style={{ width: "70%", height: "40px", borderStyle: "none", margin: "5px auto" }}>Next</button>

                    </form>
                    <a href="">Need help signing in?</a>

                    <hr />
                    <h4>Don't have a BBC account?</h4>
                    <a href="">Register now</a>

                </div>
               

                {/*  FLEX 2 */}
                <div >
                    {/* <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXd4IdSPcW9PhJ4J01qYo-0j2Ep874uzPzkVZHSxoNYCw9hBq2yoQ7xavyfh3qQnpPLH0&usqp=CAU" alt=""
                        style={{ width: "240px", height: "185px", borderRadius: "7px", }} /> */}


                </div>
            </div>
            </div>
    )
}

export default Login

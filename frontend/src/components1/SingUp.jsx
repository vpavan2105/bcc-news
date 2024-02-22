import React, { useState } from 'react'
import logo from "../images/logo.png";



function SingUp() {

    const [fullName, setFullName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here, e.g., send data to backend
    console.log({
      fullName,
      mobileNumber,
      email,
      password
    });
  };

  return (
    <div>
        <img src={logo} className="h-10" />
<h1>Register with the BBC</h1>
<h5>Let's start this account</h5>
   
      <form onSubmit={handleSubmit}>
        <div>
          <label>Full Name:</label>
          <input 
            type="text" 
            value={fullName} 
            onChange={(e) => setFullName(e.target.value)} 
            required 
          />
        </div>
        <div>
          <label>Mobile Number:</label>
          <input 
            type="text" 
            value={mobileNumber} 
            onChange={(e) => setMobileNumber(e.target.value)} 
            required 
          />
        </div>
        <div>
          <label>Email:</label>
          <input 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />
        </div>
        <div>
          <label>Password:</label>
          <input 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
          />
        </div>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );

}

export default SingUp

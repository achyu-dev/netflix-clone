import React, { useState } from 'react'
import './Login.css';
import logo from '../../assets/logo.png';
import {login, signup} from '../../firebase';
import netflix_spinner from '../../assets/netflix_spinner.gif';

const Login = () => {

  const [signState, setsignState] = useState("Sign In");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pwd, setpwd] = useState("");
  const [loading, setloading] = useState(false);

  const user_auth = async (event) => {
    event.preventDefault();
    setloading(true);
    if (signState === "Sign In"){
      await login(email, pwd);
    }
    else {
      await signup(name, email, pwd);
    }
    setloading(false);
  }

  return (
    loading?<div className="login-spinner">
      <img src={netflix_spinner} alt="" />
    </div>:
    <div className='login'>
      <img src={logo} alt="" className='login-logo'/>
      <div className="login-form">
        <h1>{signState}</h1>
        <form>
          {signState === "Sign Up" ?
          <input value={name} onChange={(e) => setName(e.target.value)} 
          type="text" placeholder='Your Name'/> : null }
          <input 
          value={email} onChange={(e) => setEmail(e.target.value)} 
          type="email" placeholder='Email or mobile number'/>
          <input 
          value={pwd} onChange={(e) => setpwd(e.target.value)} 
          type="password" placeholder='Password'/>
          <button onClick={user_auth} type='submit'>{signState}</button>
          <div className="form-help">
            <div className="remember">
              <input type='checkbox' />
                <label htmlFor=''>Remember Me</label>
            </div>
            <p>Need Help?</p>
          </div>
        </form>
         <div className="form-switch">
          {signState === "Sign In" ? 
            <p>New to Netflix? <span onClick={() => {
              setsignState("Sign Up")
            }}>Sign up Now</span></p> 
            : <p>Already have account? <span onClick={() => {
              setsignState("Sign In")
            }}>Sign In Now</span></p>   
        } 
         </div>
      </div>
    </div>
  )
}

export default Login;

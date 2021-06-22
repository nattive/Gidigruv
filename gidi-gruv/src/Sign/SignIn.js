import React, { useState } from "react";
import "./sign.css";
import Logo from "../logo.png";
import Logo2 from "../headerLogo.png";
import { Link } from "react-router-dom";
import TextLoop from "react-text-loop";
import { AiOutlineHome } from "react-icons/ai";
import CircularProgress from '@material-ui/core/CircularProgress';
import { useAuth } from "../authentication/AuthO";
import 'react-toastify/dist/ReactToastify.css';


function SignIn() {

  let auth = useAuth()

  const [email, setEmail] = useState();
  const [password, setPassword] = useState()

  const handleSubmit = (event) => {
    event.preventDefault();
    auth.signin(email, password)
  }

  return (
    <div className="sigincontainer">
      <div className="slider">
        <div className="logo">
          <Link to="/">
            <img src={Logo2} alt="logo" />
          </Link>
        </div>
        <div className="textSlider">
          <TextLoop>
            <span>We Broadcast Your</span>
            <span>Register your</span>
            <span>We bring Updates On</span>
          </TextLoop>
          <p>Events</p>
        </div>
        <div className="socialLinks">
          follows us on our social media platforms
          </div>
      </div>
      <div className="form">
        <h3>Login</h3>
        <p>
          Not registered? <Link to="/register">Sign Up Here</Link>
        </p>
        <div className="Logo">
          <img src={Logo} alt="Logo" />
        </div>
        
        <form style={{width: "80%", margin: "auto"}}>
          <div className="form-group">
            <label>UserName / Phone no</label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email / Phone Number here..."
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password here..."
            />
          </div>
          <small><Link to='/forgot-password'>forgot Password?</Link></small>
          <button
            type="submit"
            className="signin-btn"
            disabled={auth.loading ? true : false}
            onClick={(e) => handleSubmit(e)}
          >
             { auth.loading ? <CircularProgress style={{color:'#fff', padding:'10px', margin: 0}}/> : 'SIGN IN' }
              </button>
        </form>


        <div className="home">
          <Link to="/">
            <p>
              Back to home <AiOutlineHome />
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SignIn;

import React, { useState } from 'react';
import './Login.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  return (
    <div className="desktop-container">
      <div className="login-container">
        <img src="/signup.jpeg" alt="Sign Up Image" className="signup-image" />
        <form className="login-form">
          <h1>Login</h1>
          <p>Let's make your dream wedding closer to reality!</p>
          <input type="email" placeholder="Email" required />
          <div className="password-wrapper">
            <input
              type={showPassword ? "text" : "password"}
              id="passwordOne"
              placeholder="Password"
              required
            />
            <FontAwesomeIcon
              icon={showPassword ? faEyeSlash : faEye}
              onClick={togglePasswordVisibility}
            />
          </div>

          <div className="remember-me-container">
            <input type="checkbox" id="remember-me" name="remember-me" />
            <label htmlFor="remember-me">Remember Me</label>
          </div>
          <button type="submit">Login</button>
          <a href="#" className="forget-password">Forget Password?</a>
          <div className="signup-link-container">
            <span>Don't have an account? </span>
            <a href="SignUp.html" className="signup-link">Sign up</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;

import React, { useState } from "react";
import "./SignUp.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div className="desktop-container">
      <div className="signup-container">
        <img src="/signup.jpeg" alt="Sign Up" className="signup-image" />
        <form className="signup-form">
          <h1>Sign Up</h1>
          <p>Join us and plan your perfect wedding!</p>
          <input type="text" placeholder="Username" required />
          <input type="email" placeholder="Email" required />

          <div className="password-wrapper">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              placeholder="Password"
              required
            />
            <FontAwesomeIcon
              icon={showPassword ? faEyeSlash : faEye}
              onClick={togglePasswordVisibility}
            />
          </div>

          <div className="radio-group">
            <label>
              <input type="radio" name="role" value="bride" required />
              Bride
            </label>
            <label>
              <input type="radio" name="role" value="groom" required />
              Groom
            </label>
            <label>
              <input type="radio" name="role" value="vendor" required />
              Vendor
            </label>
          </div>

          <button type="submit">Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;

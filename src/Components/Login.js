import React from "react";
import { Link } from "react-router-dom";
import "./styles/login.css";

function Login() {
  return (
    <div>
      <div className="login">
        <Link to="/">
          <img
            className="login__logo"
            alt="Logo"
            src="https://upload.wikimedia.org/wikipedia/en/f/f0/Vishwakarma_Institute_of_Technology.png"
          />
        </Link>
        <div className="login__container">
          <h1>Sign-in</h1>

          <form>
            <h5>E-Mail</h5>
            <input placeholder="Please login with VIT account" type="email" />
            <h5>password</h5>
            <input placeholder="Please write your password" type="password" />
            <button
              type="button"
              className=" login__signInButton btn btn-primary"
            >
              <b> LOGIN </b>
            </button>
          </form>

          <p>Please do register if you are here for first time.</p>

          <Link to="Register">
            <button type="submit" className="login__ragisterButton">
              Register
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;

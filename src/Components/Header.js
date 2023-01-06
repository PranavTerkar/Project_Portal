import React from "react";
import "./styles/header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <nav className="header">
      <div className="header__fhalf">
        {/* <img
          className="login__logo"
          alt="Logo"
          src="https://upload.wikimedia.org/wikipedia/en/f/f0/Vishwakarma_Institute_of_Technology.png"
        /> */}
        <div className="header__title">
          <b>
            VISHWAKARMA <br /> STUDENT PORTOL
          </b>
        </div>
      </div>
      <div className="header__shalf">
        <div>
          <Link to="/">
            <b>HOME</b>
          </Link>
        </div>
        <div>
          <Link to="/GroupInfo">
            <b> MY GROUP</b>
          </Link>
        </div>
        <div>
          <Link to ="/Project">
            <b>PROJECT</b>
          </Link>
        </div>
        <div>🔔</div>
        <div>logo</div>
        <Link to="Login">
          <button
            type="button"
            className=" header__loginbutton btn btn-primary"
          >
            <b> LOGIN</b>
          </button>
        </Link>
      </div>
    </nav>
  );
}

export default Header;

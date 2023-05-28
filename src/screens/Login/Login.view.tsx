import React from "react";
import LoginLogic from "./Login.logic";
import "./Login.style.scss";
const Login = () => {
  const { handleClick } = LoginLogic();

  return (
    <div className="login-container">
      <h1
        onClick={() => {
          handleClick();
        }}
      >
        asdThis is the Login page
      </h1>
    </div>
  );
};

export default Login;

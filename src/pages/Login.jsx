import React from "react";
import "../../public/style.css";
import { Link } from "react-router-dom";
import Form from "../../components/Login-Form";
import LoginImg from "../assets/login.png";
import Image from "../../components/Image";

function Login() {
  return (
    <div className="login-container">
      <div className="login-form-container">
        <h1 className="login-h1">Login</h1>
        <Form />
      </div>
      <Image
        src={LoginImg}
        alt=""
        height="auto"
        width="auto"
        className="login-img"
      />
    </div>
  );
}

export default Login;

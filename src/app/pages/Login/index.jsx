import React, { useEffect, useState } from "react";
import Style from "./style.module.scss";
import { Link, useNavigate } from "react-router-dom";
import { getLoginsAPI } from "../../api/auth";
import { setLogins } from "../../redux/login/loginSlice";
import { useDispatch, useSelector } from "react-redux";
import { selectLogin } from "../../redux/login/selector";
import { ToastContainer, toast } from "react-toastify";
const Login = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const account = useSelector(selectLogin);
  console.log({ account });
  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      account.some(
        (item) => item.username === name && item.password === password
      )
    ) {
      navigate("/");
    } else {
      toast.error("User name or password wrong!");
    }
  };

  return (
    <div className={Style.loginContainer}>
      <form className={Style.login}>
        <h2>Login</h2>
        <div className={Style.formGroup}>
          <label htmlFor="name">Name:</label>
          <input
            type="name"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className={Style.formGroup}>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button
          onClick={handleSubmit}
          type="submit"
          className={Style.loginButton}
        >
          Login
        </button>
        <Link to="/register">Register</Link>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Login;

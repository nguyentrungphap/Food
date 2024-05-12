import React, { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";
import Style from "./style.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { selectLogin } from "../../redux/login/selector";
import { getLoginsAPI } from "../../api/auth";
import { setLogins } from "../../redux/login/loginSlice";

function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const account = useSelector(selectLogin);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      toast.error("Passwords do not match!");
      return;
    }
    if (account.some((item) => item.username === username)) {
      toast.error("Account already exists");
    } else {
      toast.success("Registration successful!");
      navigate("/login");
    }
  };

  return (
    <div className={Style.RegisterContainer}>
      <form onSubmit={handleSubmit} className={Style.Register}>
        <h2>Register</h2>
        <div className={Style.formGroup}>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className={Style.formGroup}>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className={Style.formGroup}>
          <label>Confirm Password:</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>
        <button className={Style.RegisterButton} type="submit">
          Register
        </button>
      </form>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
      />
    </div>
  );
}

export default Register;

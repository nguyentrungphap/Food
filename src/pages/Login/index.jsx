import React, { useState } from "react";
import Style from "./style.module.scss";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className={Style.loginContainer}>
      <form onSubmit={handleSubmit} className={Style.login}>
        <h2>Login</h2>
        <div className={Style.formGroup}>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
        <button type="submit" className={Style.loginButton}>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;

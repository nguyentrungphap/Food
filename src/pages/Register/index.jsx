import React, { useState } from "react";
import Style from "./style.module.scss";
import { Link } from "react-router-dom";

const Register = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className={Style.RegisterContainer}>
      <form onSubmit={handleSubmit} className={Style.Register}>
        <h2>Register</h2>
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
          <label htmlFor="email">Name:</label>
          <input
            type="name"
            id="name"
            value={name}
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
        <div className={Style.formGroup}>
          <label htmlFor="password">Re-enter password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className={Style.RegisterButton}>
          Register
        </button>
        <Link to="/login">login</Link>
      </form>
    </div>
  );
};

export default Register;

import React, { useContext, useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import "./login.scss";

const Login = ({ isLoggedIn, setIsLoggedIn }) => {
  const navigate = useNavigate();

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e, property) => {
    setLoginData({
      ...loginData,
      [property]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(`/api/user/login`, loginData);
      localStorage.setItem("token", res.data.token);
      setIsLoggedIn(true);
      navigate("/view");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="d-flex row g-0 mt-4">
      <div className="form_details col">
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="form__group">
            <label htmlFor="email" className="form__label">
              Email address
            </label>
            <input
              value={loginData.email}
              onChange={(e) => handleChange(e, "email")}
              id="email"
              type="email"
              placeholder="you@example.com"
              required
              className="form__input"
            />
          </div>
          <div className="form__group">
            <label htmlFor="password" className="form__label">
              Password
            </label>
            <input
              value={loginData.password}
              onChange={(e) => handleChange(e, "password")}
              type="password"
              placeholder="Password"
              className="form__input"
              id="password"
              required
              minLength="8"
            />
          </div>
          <br />
          <button className="btn">Login</button>
          <p className="separate">
            Create an Account
            <Link to="/signup" className="ml-2">
              Sign Up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;

import React, { useContext, useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import "./../Login/login.scss";

const Login = ({ isLoggedIn, setIsLoggedIn }) => {
  const navigate = useNavigate();

  const [registerData, setRegisterData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e, property) => {
    setRegisterData({
      ...registerData,
      [property]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`/api/user/register`, registerData);
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
            <label htmlFor="name" className="form__label">
              Name
            </label>
            <input
              value={registerData.username}
              onChange={(e) => handleChange(e, "username")}
              id="name"
              type="text"
              placeholder="Your Name"
              required
              className="form__input"
            />
          </div>
          <div className="form__group">
            <label htmlFor="email" className="form__label">
              Email address
            </label>
            <input
              value={registerData.email}
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
              value={registerData.password}
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
          <button className="btn">Sign Up</button>

          <p className="separate">
            Aldredy have an Account
            <Link to="/login" className="ml-2">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;

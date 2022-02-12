import axios from "axios";
import React, { useState, useEffect } from "react";
import "./login.scss";

const Login = () => {
  const [view, setview] = useState(1);

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const [registerData, setRegisterData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e, property, from) => {
    if (from === "login") {
      setLoginData({
        ...loginData,
        [property]: e.target.value,
      });
    } else {
      setRegisterData({
        ...registerData,
        [property]: e.target.value,
      });
    }
  };
  const handleSubmit = async (e, from) => {
    e.preventDefault();
    let payload;
    if (from === "login") {
      payload = loginData;
    } else {
      payload = registerData;
    }
    try {
      const res = await axios.post(`/api/user/${from}`, payload);
      localStorage.setItem("token", res.data.token);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    let switchCtn = document.querySelector("#switch-cnt");
    let switchC1 = document.querySelector("#switch-c1");
    let switchC2 = document.querySelector("#switch-c2");
    let switchCircle = document.querySelectorAll(".switch__circle");
    let switchBtn = document.querySelectorAll(".switch-btn");
    let aContainer = document.querySelector("#a-container");
    let bContainer = document.querySelector("#b-container");

    let changeForm = (e) => {
      switchCtn.classList.add("is-gx");
      setTimeout(function () {
        switchCtn.classList.remove("is-gx");
      }, 1500);

      switchCtn.classList.toggle("is-txr");
      switchCircle[0].classList.toggle("is-txr");
      switchCircle[1].classList.toggle("is-txr");

      switchC1.classList.toggle("is-hidden");
      switchC2.classList.toggle("is-hidden");
      aContainer.classList.toggle("is-txl");
      bContainer.classList.toggle("is-txl");
      bContainer.classList.toggle("is-z200");
    };

    let mainF = (e) => {
      for (var i = 0; i < switchBtn.length; i++)
        switchBtn[i].addEventListener("click", changeForm);
    };
    // mainF();

    window.addEventListener("load", mainF);
  }, [view]);

  return (
    <div className="body">
      <div className="main">
        <div className="container__form a-container" id="a-container">
          <form className="form" id="a-form">
            <h2 className="form_title title">Create Account</h2>
            <span className="form__span">
              Enter your email address to Register FREE
            </span>
            <input
              className="form__input"
              type="text"
              placeholder="Name"
              value={registerData.name}
              onChange={(e) => handleChange(e, "username", "register")}
            />
            <input
              className="form__input"
              type="text"
              placeholder="Email"
              value={registerData.email}
              onChange={(e) => handleChange(e, "email", "register")}
            />
            <input
              className="form__input"
              type="password"
              placeholder="Password"
              value={registerData.password}
              onChange={(e) => handleChange(e, "password", "register")}
            />
            <button
              className="form__button button submit"
              onClick={(e) => handleSubmit(e, "register")}
            >
              Register
            </button>
          </form>
        </div>
        <div className="container__form b-container" id="b-container">
          <form className="form" id="b-form">
            <h2 className="form_title title">Login to Website</h2>
            <span className="form__span">Use your email account</span>
            <input
              className="form__input"
              type="text"
              placeholder="Email"
              value={loginData.email}
              onChange={(e) => handleChange(e, "email", "login")}
            />
            <input
              className="form__input"
              type="password"
              placeholder="Password"
              value={loginData.password}
              onChange={(e) => handleChange(e, "password", "login")}
            />
            <a className="form__link">Forgot your password?</a>
            <button
              className="form__button button submit"
              onClick={(e) => handleSubmit(e, "login")}
            >
              Login
            </button>
          </form>
        </div>
        <div className="switch" id="switch-cnt">
          <div className="switch__circle"></div>
          <div className="switch__circle switch__circle--t"></div>
          <div className="switch__container" id="switch-c1">
            <h2 className="switch__title title">Welcome Back !</h2>
            <p className="switch__description description">
              To Enter the vault please login with your personal info
            </p>
            <button
              type="button"
              onClick={() => setview(1)}
              className="switch__button button switch-btn"
            >
              Login
            </button>
          </div>
          <div className="switch__container is-hidden" id="switch-c2">
            <h2 className="switch__title title">Hello Friend !</h2>
            <p className="switch__description description">
              Enter your personal details and start using the vault
            </p>
            <button
              type="button"
              onClick={() => setview(2)}
              className="switch__button button switch-btn"
            >
              Register
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

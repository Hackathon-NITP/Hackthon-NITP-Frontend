import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "./../../assets/img/4.png";

const Navbar = () => {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-light"
        style={{ backgroundColor: "#F1FAFD", padding: "3rem 10% 0" }}
      >
        {/* <a  href="./index.html"> */}
        <Link to="/" className="navbar-brand">
          <img
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt=""
          />
          MediVault
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse me-1"
          id="navbarNav"
          style={{ justifyContent: "end" }}
        >
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link className="nav-link" to="/">
                Home
              </Link>
              {/* <a className="nav-link" href="./index.html">
                Home <span className="sr-only">(current)</span>
              </a> */}
            </li>
            <li className="nav-item">
              {/* <a className="nav-link" href="./alldata.html"> */}
              <Link className="nav-link" to="/getData">
                Get Data
              </Link>
              {/* </a> */}
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/register">
                Register as Camp
              </Link>
              {/* <a className="nav-link" href="./resgister-camp.html">
                Register as Camp
              </a> */}
            </li>
            <li className="nav-item">
              <a className="nav-link" href="./notify.html">
                Set a Reminder
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="./info.html">
                FAQ's
              </a>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/login">
                Login / SignUp
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
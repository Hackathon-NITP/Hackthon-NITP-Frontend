import React, { useEffect, useState } from "react";
import "./home.scss";
import homePageSVG from "./../../assets/img/1.svg";
import registerSVG from "./../../assets/img/2.svg";
import notifySVG from "./../../assets/img/3.svg";
import saveReportSVG from "./../../assets/img/7.svg";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      {/* <!-- First div --> */}
      <div
        className="container-fluid"
        style={{ backgroundColor: "#F1FAFD", width: "100%", padding: "8% 10%" }}
      >
        <div className="row">
          <div
            className="col-lg-6 col-md-12 col-sm-12"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <h1 style={{ fontWeight: "bolder", fontSize: "250%" }}>
              Get Vaccinated with MediVault
            </h1>
            <div>
              <div className="container-fluid">
                <div className="row" style={{ paddingTop: "6%" }}>
                  <div
                    className="col-lg-6 col-md-12 col-sm-12"
                    style={{ padding: "0 0 3%" }}
                  >
                    <i
                      className="fas fa-calendar-week fa-2x"
                      style={{ color: "#07A6C2" }}
                    ></i>
                    <h5>Get one Week Data</h5>
                  </div>
                  <div
                    className="col-lg-6 col-md-12 col-sm-12"
                    style={{ padding: 0 }}
                  >
                    <i
                      className="fas fa-bell fa-2x"
                      style={{ color: " #07A6C2" }}
                    ></i>
                    <h5>Get an Alert</h5>
                  </div>
                </div>
              </div>
              <div className="container-fluid">
                <div className="row">
                  <div
                    className="col-lg-6 col-md-12 col-sm-12"
                    style={{ padding: 0 }}
                  >
                    <i
                      className="fas fa-cloud fa-2x"
                      style={{ color: "#07A6C2" }}
                    ></i>
                    <h5>Store your Reports</h5>
                  </div>
                  <div
                    className="col-lg-6 col-md-12 col-sm-12"
                    style={{ padding: 0 }}
                  >
                    <i
                      className="fas fa-cloud-upload-alt fa-2x"
                      style={{ color: "#07A6C2" }}
                    ></i>
                    <h5>Register Your Camp</h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="container-fluid">
              <div className="row">
                <div
                  className="col-lg-6 col-md-12 col-sm-12"
                  style={{ padding: "1% 0 3%" }}
                >
                  <h5>
                    <button
                      type="button"
                      onClick={() => (window.location.href = "register")}
                      className="btn btn-md"
                      style={{
                        backgroundColor: "#07A6C2 ",
                        color: "white",
                        marginTop: "3vh",
                      }}
                    >
                      Register Now!
                    </button>
                  </h5>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12">
            <img src={homePageSVG} alt="" style={{ width: "70%" }} />
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12 col-sm-12"></div>
            <div className="col-lg-6 col-md-12 col-sm-12">
              <div className="card-group">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">Total Cases India</h5>
                    <p className="card-text">3.7 Crore</p>
                  </div>
                </div>
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">24 Hour New Cases</h5>
                    <p className="card-text">26,041</p>
                  </div>
                </div>
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">Atleast 1 Dose</h5>
                    <br />
                    <p className="card-text">86 Crore</p>
                  </div>
                </div>
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">Both Doses</h5>
                    <br />
                    <p className="card-text">22.4 Crore</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* Secoond Div */}
      <div
        className="container-fluid"
        style={{padding: "5%", paddingTop: "7%" }}
      >
        <h1 style={{ textAlign: "center", paddingBottom: "2%" }}>
          Store Your Reports
        </h1>
        <div className="row">
          <div
            className="col-lg-6 col-md-12 col-sm-12"
            style={{ textAlign: "center" }}
          >
            <img
              src={saveReportSVG}
              alt=""
              style={{ width: "50%", margin: "5%" }}
            />
          </div>
          <div
            className="col-lg-6 col-md-12 col-sm-12"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <div>
              <p>
                Are you fedup by collecting and carrying all your reports to your doctor and want something that can store all your medical reports categorically?<br />
                We will store all your medical reports on the cloud in different categories so that you can access them anywhere anytime without any hassle of finding them.  {" "}
                <br />
                With Us?{" "}
              </p>
            </div>
            <div>
              <a
                href="#"
                className="btn"
                onClick={() => (window.location.href = "/register")}
                style={{ backgroundColor: "#07A6C2", color: "white" }}
              >
                Store Now!
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Third Div --> */}
      <div
        className="container-fluid"
        style={{ backgroundColor: "#F1FAFD", padding: "5%", paddingBottom: "8%" }}
      >
        <h1 style={{ textAlign: "center", padding: "3% 0 2%" }}>
          Check Coming Week Data
        </h1>
        <br />
        <div>
          <div className="row">
            <div
              className="col-lg-4 col-md-12 col-sm-12"
              style={{ paddingBottom: "3%" }}
            >
              <div className="card shadow p-3 mb-5 bg-white rounded">
                <div className="card-body">
                  {/* <!-- <i className="fas fa-hospital" size:9x></i> --> */}
                  <h5 className="card-title">Hospital Data</h5>
                  <p className="card-text">
                    Check all the slots of Covid-19 vaccines being incoculated
                    at various hospitals registered by Government of India at
                    Cowin website.
                  </p>
                  <a
                    href="cowin-data.html"
                    className="btn hospital-btn"
                    style={{ backgroundColor: "#07A6C2", color: "white" }}
                  >
                    Click here
                  </a>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-12 col-sm-12"
              style={{ paddingBottom: "3%" }}
            >
              <div className="card shadow p-3 mb-5 bg-white rounded">
                <div className="card-body">
                  <h5 className="card-title">All Data</h5>
                  <p className="card-text">
                    Check all the slots of Covid-19 vaccines being incoculated
                    at hospitals as well as camps all at one page.
                  </p>
                  <br />
                  {/* <a
                    href="./alldata.html"
                    className="btn "
                    style={{ backgroundColor: "#07A6C2", color: "white" }}
                  > */}
                  <Link
                    to="/getData"
                    className="btn "
                    style={{ backgroundColor: "#07A6C2", color: "white" }}
                  >
                    Click here
                  </Link>
                  {/* </a> */}
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-12 col-sm-12"
              style={{ paddingBottom: "3%" }}
            >
              <div className="card shadow p-3 mb-5 bg-white rounded">
                <div className="card-body">
                  <h5 className="card-title">Camp Data</h5>
                  <p className="card-text">
                    Check all the slots of Covid-19 vaccines being incoculated
                    at camps organised by NGOs registered by DabJab.
                  </p>
                  <br />
                  <a
                    href="./camp-data.html"
                    className="btn "
                    style={{ backgroundColor: "#07A6C2", color: "white" }}
                  >
                    Click here
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Fourth Div --> */}
      <div
        className="container-fluid"
        style={{padding: "5%", paddingTop: "4%" }}
      >
        <h1 style={{ textAlign: "center", paddingBottom: "2%" }}>
          Register Here!
        </h1>
        <div className="row">
          <div
            className="col-lg-6 col-md-12 col-sm-12"
            style={{ textAlign: "center" }}
          >
            <img
              src={registerSVG}
              alt=""
              style={{ width: "50%", margin: "5%" }}
            />
          </div>
          <div
            className="col-lg-6 col-md-12 col-sm-12"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <div>
              <p>
                If you are organising any vaccination camp then you can register
                with us and we will show it on our website! <br />
                It will increase footfall at your camp and make it a success!{" "}
                <br />
                We will just ask the details you forward on any WhatApp Group{" "}
                <br />
                With Us?{" "}
              </p>
            </div>
            <div>
              <a
                href="#"
                className="btn"
                onClick={() => (window.location.href = "/register")}
                style={{ backgroundColor: "#07A6C2", color: "white" }}
              >
                Register!
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Fifth Div --> */}
      <div
        className="container-fluid"
        style={{backgroundColor: "#F1FAFD", padding: "4% 5% 5%", paddingTop: "4%" }}
      >
        <h1 style={{ textAlign: "center", paddingBottom: "2%" }}>
          Get Notified!
        </h1>
        <div className="row">
          <div
            className="col-lg-6 col-md-12 col-sm-12"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <div>
              <p>
                You didn't find any slot for youself?
                <br />
                No problem we cover this for you! <br />
                Just give your email address and we'll notify you a week before
                so that you don't have to check the slots again! <br />
                Find this feature handy and useful?
              </p>
            </div>
            <div>
              <a
                href="./notify.html"
                className="btn"
                style={{ backgroundColor: "#07A6C2", color: "white" }}
              >
                Subscribe!
              </a>
            </div>
          </div>
          <div
            className="col-lg-6 col-md-12 col-sm-12"
            style={{ textAlign: "center" }}
          >
            <img
              src={notifySVG}
              alt=""
              style={{ width: "50%", margin: "5%" }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

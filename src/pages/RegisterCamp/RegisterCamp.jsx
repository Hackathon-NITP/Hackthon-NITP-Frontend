import axios from "axios";
import React, { useEffect, useState } from "react";
import RegistrationForm from "../../components/RegisterCamp/RegisterForm";
import "./registerCamp.scss";

const RegisterCamp = () => {
  const [campPhoneNumber, setCampPhoneNumber] = useState();
  const [otp, setOtp] = useState();
  const [showOtpForm, setShowOtpForm] = useState(false);
  const [showRegestrationForm, setShowRegestrationForm] = useState(false);

  const handlePhoneSubmission = async (e) => {
    e.preventDefault();
    const payload = {
      phoneNumber: campPhoneNumber,
    };
    try {
      const res = await axios.post("/api/camp/sendotp", payload);
      alert("pls check ur mobile");
      setShowOtpForm(true);
    } catch (error) {
      setShowOtpForm(false);
      console.log(error);
    }
  };

  const handleOtpSubmission = async (e) => {
    e.preventDefault();
    const payload = {
      code: otp,
      phoneNumber: campPhoneNumber,
    };
    try {
      const res = await axios.post("/api/camp/verifyotp", payload);
      console.log("ujjwal verify", res.data);
      setShowRegestrationForm(true);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {!showRegestrationForm ? (
        <div
          id="phone-div"
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <div
            className="container-fluid card"
            style={{
              alignItems: "center",
              flexDirection: "column",
              paddingTop: "5vh",
              paddingBottom: "4vh",
              margin: " 7vh 3vh 4vh",
            }}
          >
            {!showOtpForm ? (
              <form id="phone-form" onSubmit={handlePhoneSubmission}>
                <h2
                  style={{
                    textAlign: "center",
                    marginBottom: "6vh",
                    fontWeight: "bold",
                  }}
                >
                  Enter your Phone Number
                </h2>
                <input
                  required
                  className="form-control"
                  type="tel"
                  id="phone-number-input"
                  pattern="[0-9]{10}"
                  value={campPhoneNumber}
                  onChange={(e) => setCampPhoneNumber(e.target.value)}
                  placeholder="E.g. 9876543210"
                />
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    paddingTop: "2vh",
                  }}
                >
                  <input
                    className="btn btn-primary btn-md"
                    style={{ marginRight: "1vh" }}
                    id="phone-submit"
                    type="submit"
                  />
                </div>
              </form>
            ) : (
              <form id="phone-form" onSubmit={handleOtpSubmission}>
                <h2
                  style={{
                    textAlign: "center",
                    marginBottom: "6vh",
                    fontWeight: "bold",
                  }}
                >
                  Enter your OTP
                </h2>
                <input
                  required
                  className="form-control"
                  type="number"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                />

                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    paddingTop: "2vh",
                  }}
                >
                  <input
                    className="btn btn-primary btn-md"
                    style={{ marginRight: "1vh" }}
                    id="phone-submit"
                    type="submit"
                  />
                </div>
              </form>
            )}
          </div>
        </div>
      ) : (
        <RegistrationForm phoneNumber={campPhoneNumber} />
      )}
    </>
  );
};

export default RegisterCamp;

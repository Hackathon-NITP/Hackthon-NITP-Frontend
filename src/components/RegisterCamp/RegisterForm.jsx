import axios from "axios";
import React, { useEffect, useState } from "react";

const RegistrationForm = (props) => {
  const [inputData, setInputData] = useState({
    nameOfPerson: "",
    phoneNo: props.phoneNumber,
    placeName: "",
    vaccine: "",
    fee: "",
    address: "",
    pincode: "",
    available_capacity_dose1: "",
    available_capacity_dose2: "",
    startTime: "",
    endTime: "",
    date: "",
  });

  const handleChange = (e, property) => {
    setInputData({
      ...inputData,
      [property]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/api/camp/postdata", inputData);
      alert("success");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
      }}
    >
      <div
        id="camp-div"
        className="fluid-container card"
        style={{
          alignItems: "center",
          flexDirection: "column",
          paddingTop: "5vh",
          paddingBottom: "4vh",
          margin: "7vh 3vh 4vh",
        }}
      >
        <h4
          style={{
            textAlign: "center",
            padding: "0 6vh",
            marginBottom: "6vh",
            fontWeight: "bolder",
            fontSize: "250%",
          }}
        >
          Enter Camp Details
        </h4>
        <form id="camp-form" onSubmit={handleSubmit}>
          <div className="row container-fluid" style={{ margin: 0 }}>
            <div className="form-group col-lg-6 col-md-6 col-sm-12">
              <input
                required
                type="text"
                className="form-control"
                value={inputData.nameOfPerson}
                onChange={(e) => handleChange(e, "nameOfPerson")}
                placeholder="Your Name"
                pattern="[a-zA-Z][a-zA-Z ]+"
                id="person-name"
              />
            </div>
            <div className="form-group col-lg-6 col-md-6 col-sm-12">
              <input
                disabled
                type="text"
                className="form-control"
                value={inputData.phoneNo}
                onChange={(e) => handleChange(e, "phoneNo")}
                placeholder="Your Phone Number"
                id="phone"
              />
            </div>
          </div>
          <div className="row container-fluid" style={{ margin: 0 }}>
            <div className="form-group col-lg-6 col-md-6 col-sm-12">
              <input
                required
                type="text"
                className="form-control"
                value={inputData.placeName}
                onChange={(e) => handleChange(e, "placeName")}
                placeholder="Name of Location"
                id="location-name"
              />
            </div>
            <div className="form-group col-lg-6 col-md-6 col-sm-12">
              <input
                required
                type="text"
                className="form-control"
                value={inputData.address}
                onChange={(e) => handleChange(e, "address")}
                placeholder="Address of Location"
                id="address"
              />
            </div>
          </div>
          <div className="row container-fluid" style={{ margin: 0 }}>
            <div className="form-group col-lg-3 col-md-6 col-sm-12">
              <input
                required
                type="text"
                className="form-control"
                value={inputData.pincode}
                onChange={(e) => handleChange(e, "pincode")}
                placeholder="Pincode"
                pattern="[0-9]{6}"
                id="pincode"
              />
            </div>
            <div className="form-group col-lg-3 col-md-6 col-sm-12">
              <input
                type="date"
                className="form-control"
                id="date"
                value={inputData.date}
                onChange={(e) => handleChange(e, "date")}
              />
            </div>
            <div className="form-group col-lg-3 col-md-6 col-sm-12">
              <div className="row">
                <div className="form-group col-lg-6 col-md-6 col-sm-12">
                  <input
                    required
                    type="text"
                    className="form-control"
                    placeholder="Start Time"
                    value={inputData.startTime}
                    onChange={(e) => handleChange(e, "startTime")}
                    pattern="[0-9]{2}+[:][0-9]{2}"
                    id="start-time"
                  />
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12">
                  <input
                    required
                    type="text"
                    className="form-control"
                    placeholder="End Time"
                    value={inputData.endTime}
                    onChange={(e) => handleChange(e, "endTime")}
                    pattern="[0-9]{2}+[:][0-9]{2}"
                    id="end-time"
                  />
                </div>
              </div>
            </div>
            <div className="form-group col-lg-3 col-md-6 col-sm-12">
              <input
                required
                type="text"
                className="form-control"
                value={inputData.fee}
                onChange={(e) => handleChange(e, "fee")}
                placeholder="Fees in Rs."
                pattern="[0-9]*"
                id="fees"
              />
            </div>
          </div>
          <div className="row container-fluid" style={{ margin: 0 }}>
            <div className="form-group col-lg-4 col-md-4 col-sm-12">
              <input
                required
                type="text"
                className="form-control"
                placeholder="Name of Vaccine"
                value={inputData.vaccine}
                onChange={(e) => handleChange(e, "vaccine")}
                pattern="[a-zA-Z][a-zA-Z ]+"
                id="vaccine-name"
              />
            </div>
            <div className="form-group col-lg-4 col-md-4 col-sm-12">
              <input
                required
                type="text"
                className="form-control"
                placeholder="Available for Dose 1"
                value={inputData.available_capacity_dose1}
                onChange={(e) => handleChange(e, "available_capacity_dose1")}
                pattern="[0-9]*"
                id="dose1"
              />
            </div>
            <div className="form-group col-lg-4 col-md-4 col-sm-12">
              <input
                required
                type="text"
                className="form-control"
                value={inputData.available_capacity_dose2}
                onChange={(e) => handleChange(e, "available_capacity_dose2")}
                placeholder="Available for Dose 2"
                pattern="[0-9]*"
                id="dose2"
              />
            </div>
          </div>
          <div
            className="col-lg-12"
            style={{
              display: "flex",

              justifyContent: "center",
              paddingTop: "2vh",
            }}
          >
            <button
              className="btn btn-md"
              style={{ backgroundColor: "#07a6c2", color: "white" }}
            >
              Register
            </button>
          </div>
          <div
            style={{ textAlign: "center" }}
            className="g-signin2"
            data-onsuccess="onSignIn"
          ></div>
        </form>
        <div style={{ padding: "3rem 10% 0", textAlign: "center" }}>
          <h3></h3>
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;

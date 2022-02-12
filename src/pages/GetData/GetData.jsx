import React, { useEffect, useState } from "react";
import axios from "axios";
import "./getData.scss";

const GetData = () => {
  const [centers, setCenters] = useState([]);
  const [inputData, setInputData] = useState({
    pinCode: "",
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

    const year = inputData.date.slice(0, 4);
    const month = inputData.date.slice(5, 7);
    const date = inputData.date.slice(8, 10);

    const dateSearched = date + "-" + month + "-" + year;
    try {
      const resCampData = await axios.get(
        `/api/camp/getcampdata?date=${inputData.date}&pincode=${inputData.pinCode}`
      );
      const resCowinData = await axios.get(
        `/api/camp/getcowindata?date=${dateSearched}&pincode=${inputData.pinCode}`
      );
      console.log("ujjwal hello", resCampData.data, resCowinData.data);
      setCenters([...resCampData.data, ...resCowinData.data]);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div
          className="fluid-container card"
          style={{
            alignItems: "center",
            flexDirection: "column",
            paddingTop: "5vh",
            paddingBottom: "4vh",
            marginTop: "18vh",
            marginBottom: "4vh",
            width: "60%",
          }}
        >
          <form onSubmit={handleSubmit}>
            <div
              className="row container-fluid"
              style={{ margin: "0", justifyContent: "center" }}
            >
              <div
                className="col-lg-12 col-md-12 col-sm-12"
                style={{ justifyContent: "center", display: "flex" }}
              >
                <img
                  src="./public/vaxicon.png"
                  style={{ width: "50%" }}
                  alt=""
                />
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12">
                <input
                  required
                  pattern="[0-9]{6}"
                  type="text"
                  value={inputData.pinCode}
                  onChange={(e) => handleChange(e, "pinCode")}
                  className="form-control"
                  placeholder="Pincode"
                  id="pincode"
                />
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12">
                <input
                  required
                  type="date"
                  value={inputData.date}
                  onChange={(e) => handleChange(e, "date")}
                  className="form-control"
                  placeholder="Date"
                  id="date"
                />
              </div>
              {/* <div className="col-lg-12" style={{display: "flex", flexDirection: "row", justifyContent: "center",paddingTop: "2vh"}} /> */}
              <button
                className="btn btn-md custom-button"
                style={{ backgroundColor: "#07A6C2", color: "white" }}
              >
                Check
              </button>
              {/* </div> */}
            </div>
          </form>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {/* <!-- make card --> */}
        <div className="make-card" style={{ padding: "4vh" }}>
          {centers?.map((center, index) => (
            <div
              key={index}
              className="card hello border-primary "
              style={{ margin: "2vh 0" }}
            >
              <div className="card-body">
                <b>Hospital Name:</b> ${center.placeName} <br />
                <b> Hospital Address:</b> ${center.hospitalAddress} <br />{" "}
                <b>Vaccine Name:</b> ${center.vaccine} <br /> <b>Fees:</b> Rs. $
                {center.fee} <br />
                <b>Date:</b> ${center.date} <br />
                <b>Timing:</b> ${center.timeStart} - ${center.timeEnd} <br />{" "}
                <b>Dose One:</b> ${center.availDoseOne} <br /> <b>Dose Two:</b>{" "}
                ${center.availDoseTwo} <br />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GetData;

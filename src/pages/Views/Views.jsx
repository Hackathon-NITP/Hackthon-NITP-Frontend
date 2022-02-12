import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Views.scss";
import Icon from "./../../assets/img/1.svg"

const Views = () => {
  const topButtons = [
    {
      icon: "",
      heading: "Report",
    },
    {
      icon: "",
      heading: "Prescription",
    },
    {
      icon: "",
      heading: "Vaccination",
    },
  ];
  useEffect(() => {
    (async () => {
      const res = await axios.get("/getAllDocs");
      console.log("ujjwal views", res.data);
    })();
  });
  return (
    <>
      <div class="row row-type-card">
        {topButtons.map((topButton) => {
          return (
            <div class="card w-35 new-div">
              <div class="card-body">
                <i class="fal fa-notes-medical fa-2x"></i>
                <h5 class="card-title">{topButton.heading}</h5>
              </div>
            </div>
          );
        })}
      </div>
      {[1, 2, 3].map(() => {
        return (
          <div class="hello-container">
            <div class="row" style={{marginTop: "1rem", display: 'flex', alignItems: 'center'}}>
              <div class="col-lg-1">
                <img
                  src={Icon}
                  style={{width: "7rem", height: "7rem"}}
                  alt=""
                />
              </div>
              <div class="col-lg-11">
                <h4>Lorem Ipsum</h4>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Vero, voluptatem.
                </p>
                <hr style={{marginRight: "3rem"}} />
                <div class="row" style={{paddingLeft: "1rem"}}>
                  <div class="col-lg-2" style={{padding: 0}}>
                    <h6>Valid Till</h6>
                    <p>10 Oct 2022</p>
                  </div>
                  <div class="col-lg-5">
                    <h6>Covers</h6>
                    <p>Lorem ipsum dolor sit amet consectetur</p>
                  </div>
                  <div class="col-lg-3">
                    <h6>TPA</h6>
                    <p>Lorem, ipsum.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Views;

import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Views.scss";
import Icon from "./../../assets/img/1.svg";
import moment from "moment";

const Views = () => {
  const [allDocuments, setAllDocuments] = useState([]);
  const [filteredDocumnets, setFilteredDocumnets] = useState([]);

  const topButtons = [
    {
      icon: "fa-solid fa-file-medical fa-2x",
      heading: "Report",
      type: "report",
    },
    {
      icon: "fa-solid fa-prescription fa-2x",
      heading: "Prescription",
      type: "prescription",
    },
    {
      icon: "fa-solid fa-syringe fa-2x",
      heading: "Vaccination",
      type: "vaccination",
    },
  ];
  useEffect(() => {
    getAllDocs();
  }, []);

  const getAllDocs = async () => {
    const res = await axios.get("/getAllDocs");
    console.log("ujjwal all", res.data);
    setAllDocuments(res.data.docs);
  };
  console.log("ujjwal filtered", filteredDocumnets);

  const handleFilter = (type) => {
    console.log("ujjwal in ", type);
    const filterArr = allDocuments.filter((doc) => doc.type === type);
    setFilteredDocumnets(filterArr);
  };

  const handleDownload = (doc) => {
    window.open(doc.link);
  };

  const handleDelete = async (doc) => {
    console.log("ujjwal in delet");
    const res = await axios.post(`/deleteDoc/${doc._id}`);
    console.log("ujjwal deleted", res.data);

    const filterArr = res.data.doc.filter(
      (current) => current.type === doc.type
    );

    setFilteredDocumnets(filterArr);
  };
  console.log("ujjwal after delete filterarr", filteredDocumnets);

  return (
    <>
      <div className="row row-type-card">
        {topButtons.map((topButton) => {
          return (
            <div
              className="card w-35 new-div"
              style={{ cursor: "pointer" }}
              onClick={() => handleFilter(topButton.type)}
            >
              <div className="card-body">
                <i className={topButton.icon}></i>
                <h5 className="card-title">{topButton.heading}</h5>
              </div>
            </div>
          );
        })}
      </div>
      {/* {filteredDocumnets.length > 0 ? ( */}
      {
        filteredDocumnets?.map((doc) => {
          return (
            <div className="row">
              <div className="col-lg-6">
                <div className="hello-container">
                  <div
                    className="row"
                    style={{
                      marginTop: "1rem",
                    }}
                  >
                    <div
                      className="col-lg-2"
                      style={{ display: "flex", alignItems: "center" }}
                    >
                      <img
                        src={Icon}
                        style={{ width: "7rem", height: "7rem" }}
                        alt=""
                      />
                    </div>
                    <div className="col-lg-10">
                      <h4>{doc.name}</h4>
                      {/* <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Vero, voluptatem.
                  </p> */}
                      <hr style={{ marginRight: "3rem" }} />
                      <div className="row">
                        <div className="col-lg-6" style={{ padding: 0 }}>
                          <h6>Uploaded On</h6>
                          <p>{moment(doc.createdAt).format("D-MM-YYYY")}</p>
                        </div>

                        {/* Handle Starts Here */}

                        <div class="col-lg-6">
                          <div
                            style={{
                              display: "flex",
                              flexDirection: "row",
                              justifyContent: "flex-end",
                              marginRight: "2rem",
                            }}
                          >
                            <i
                              class="fa-regular fa-trash-can"
                              style={{ cursor: "pointer" }}
                              onClick={() => handleDelete(doc)}
                            ></i>
                            <i
                              class="fa-solid fa-file-arrow-down"
                              style={{ cursor: "pointer" }}
                              onClick={() => handleDownload(doc)}
                            ></i>
                          </div>
                        </div>

                        {/* Hamndle Ends Here */}
                      </div>
                    </div>
                    {/* <div className="col-lg-1">
                  <div
                    style={{ cursor: "pointer" }}
                    onClick={() => handleDelete(doc)}
                  >
                    delete
                  </div>
                  <div
                    style={{ cursor: "pointer" }}
                    onClick={() => handleDownload(doc)}
                  >
                    download
                  </div>
                </div> */}
                  </div>
                </div>
              </div>
            </div>
          );
        })
        // ) : (
        //   <div className="mt-5 bolder h2 text-center">Pls Select An Option</div>
        // )}
      }
    </>
  );
};

export default Views;

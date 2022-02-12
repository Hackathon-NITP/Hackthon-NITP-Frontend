import axios from "axios";
import React, { useState } from "react";
import "./upload.scss";
// import "../../../styles/Dashboard/Upload.scss";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import { useUser } from '../../../context/User.context';

const Upload = () => {
  //   const { user } = useUser();
  const [state, setState] = useState({
    selectedPdfs: null,
    loaded: 0,
    subName: "",
  });

  const [inputData, setInputData] = useState({
    name: "",
    type: "",
  });

  const handleChange = (e, property) => {
    setInputData({
      ...inputData,
      [property]: e.target.value,
    });
  };

  const maxSelectFile = (event) => {
    let files = event.target.files;
    if (files.length > 1) {
      toast.error("Maximum 1 file is allowed");
      event.target.value = null;
      return false;
    } else {
      let err = "";
      for (let i = 0; i < files.length; i++) {
        if (files[i].size > 5000000) {
          // 5 MB
          err += files[i].name + ", ";
        }
      }
      if (err !== "") {
        // error caught
        event.target.value = null;
        toast.error(err + " is/are too large. Please select file size < 5MB");
      }
    }
    return true;
  };

  const fileChangeHandler = (event) => {
    const files = event.target.files;
    if (maxSelectFile(event)) {
      setState({
        ...state,
        selectedPdfs: files,
        loaded: 0,
      });
    }
  };

  const fileUploadHandler = (e) => {
    e.preventDefault();
    if (!state.selectedPdfs) {
      alert("Please Uplaod the document");
      return;
    }

    const data = new FormData();
    for (let i = 0; i < state.selectedPdfs.length; i++) {
      data.append("file", state.selectedPdfs[i]);
    }

    axios
      .post("/upload", data, {
        headers: {
          name: inputData.name,
          type: inputData.type,
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
        onUploadProgress: (ProgressEvent) => {
          setState({
            ...state,
            loaded: (ProgressEvent.loaded / ProgressEvent.total) * 100,
          });
        },
      })
      .then((res) => {
        toast.success("Upload Successful");
        setState({
          ...state,
          selectedPdfs: null,
          loaded: 0,
        });
      })
      .catch((err) => {
        setState({
          ...state,
          selectedPdfs: null,
          loaded: 0,
        });
        toast.error(`Upload Fail with status: ${err.statusText}`);
      });
  };

  return (
    <div className="">
      <div className="uploadContainer">
        <ToastContainer />
        <h4>Upload PDF</h4>
        <hr />
        <input
          type="text"
          name=""
          onChange={(e) => handleChange(e, "name")}
          value={inputData.name}
        />

        <select
          value={inputData.type}
          onChange={(e) => handleChange(e, "type")}
        >
          <option value="bloodReport">Blood Report</option>
          <option value="CTScan">CT Scan</option>
        </select>

        <div id="uploadForm">
          <div className="inputDiv">
            <input
              type="file"
              name="file"
              multiple="multiple"
              accept="pdf/*"
              onChange={(e) => fileChangeHandler(e)}
            />
          </div>

          <div className="progress">
            <div
              className="progress-bar"
              role="progressbar"
              style={{ width: `${state.loaded}%` }}
              aria-valuenow={state.loaded}
            ></div>
          </div>
          <div className="uploadBottom">
            {state.loaded}% Uploaded
            <button
              type="button"
              // className="btn btn-success btn-block"
              onClick={(e) => fileUploadHandler(e)}
            >
              Upload Document
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Upload;

import axios from "axios";
import React, { useEffect, useState } from "react";

const Views = () => {
  useEffect(() => {
    (async () => {
      const res = await axios.get("/getAllDocs");
      console.log("ujjwal views", res.data);
    })();
  });
  return <>Heeloo</>;
};

export default Views;

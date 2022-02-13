import axios from "axios";
import React, { useEffect, useState } from "react";
import moment from "moment";

const Table = () => {
  const [vaccines, setVaccines] = useState([]);

  useEffect(() => {
    (async () => {
      const res = await axios.get("/api/vaccine/getAllVaccines");
      console.log("ujjwal", res.data);

      setVaccines(res.data.docs);
    })();
  }, []);

  const handleChange = async (e, vaccine, dose) => {
    console.log("ujjwal check", e.target.value);
    if (e.target.checked) {
      const payload = {
        name: vaccine.name,
        doseNumber: dose.doseNumber,
      };
      const res = await axios.post("/api/vaccine/addVaccine", payload);
      setVaccines(res.data.docs);
    }
  };

  return (
    <div>
      <br />
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Dose 1</th>
            <th scope="col">Dose 2</th>
            <th scope="col">Dose 3</th>
            <th scope="col">Dose 4</th>
            <th scope="col">Dose 5</th>
          </tr>
        </thead>
        <tbody>
          {vaccines?.map((vaccine) => {
            return (
              <tr>
                <th scope="row">{vaccine?.name}</th>
                {vaccine?.doses?.map((dose, index) => {
                  return (
                    <td key={index + 1200}>
                      <div className="form-check">
                        <input
                          className=""
                          type="checkbox"
                          disabled={dose?.isMarked}
                          checked={dose?.isMarked}
                          onChange={(e) => handleChange(e, vaccine, dose)}
                          id="defaultCheck1"
                        />
                      </div>
                      {!!dose?.isMarked && (
                        <label
                          className="form-check-label mt-3"
                          for="defaultCheck1"
                        >
                          {moment(dose?.date).format("D-MM-YYYY")}
                        </label>
                      )}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;

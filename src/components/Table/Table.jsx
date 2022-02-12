import axios from "axios";
import React, { useEffect, useState } from "react";

const Table = () => {
  const [vaccines, setVaccines] = useState([]);

  useEffect(() => {
    (async () => {
      const res = await axios.get("/api/vaccine/getAllVaccines");
      console.log("ujjwal", res.data);

      setVaccines(res.data.docs);
    })();
  }, []);

  const handleChange = (e, dose) => {
    console.log("ujjwal check", e.target.value);
    // if(e.target.checked){
    //   const payload={

    //   }
    //  const res= await axios.post("/",payload)
    //  setVaccines(res.data.docs)
    // }
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
          {[1, 2, 3]?.map((vaccine) => {
            return (
              <tr>
                <th scope="row">{vaccine?.name}</th>
                {[1, 2, 3, 4, 5].map((dose, index) => {
                  return (
                    <td key={index + 1200}>
                      <div className="form-check">
                        <input
                          className=""
                          type="checkbox"
                          disabled={dose?.isActive}
                          checked={dose?.isActive}
                          onChange={(e) => handleChange(e, dose)}
                          id="defaultCheck1"
                        />
                      </div>
                      {!!dose?.isActive && (
                        <label
                          className="form-check-label mt-3"
                          for="defaultCheck1"
                        >
                          {dose?.date}11
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

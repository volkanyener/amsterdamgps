import React, { useState, useEffect } from "react";
import Contact from "../components/Contact";
import axios from "axios";
import "../components/OnDuty.css";
import Timeout from "await-timeout";

export default function OnDuty() {
  const [doctorOnDuty, set_doctorOnDuty] = useState();

  useEffect(() => {
    async function dutyDoctors() {
      await Timeout.set(2000);
      const data = await axios.get(
        `https://my-json-server.typicode.com/Codaisseur/patient-doctor-data/doctors`
      );
      console.log("DATA", data.data);

      set_doctorOnDuty(data.data);
    }
    dutyDoctors();
  }, []);
  console.log("DATA DOCTORONDUTY", doctorOnDuty);
  return (
    <div>
      <h2>Who is on duty?</h2>
      {!doctorOnDuty
        ? "Loading ..."
        : doctorOnDuty.map((doctor) => {
            return (
              <div key={doctor.id}>
                <div className="pa4">
                  <div className="overflow-auto">
                    <table className="f6 w-100 mw8 center">
                      <thead>
                        <tr className="stripe-dark">
                          <th className="fw6 tl pa3 bg-white">Doctor</th>
                          <th className="fw6 tl pa3 bg-white">availability</th>
                        </tr>
                      </thead>

                      <tbody className="lh-copy">
                        <tr className="stripe-dark">
                          <td className="pa3">{doctor.doctor}</td>
                          <td className="pa3">
                            {doctor.onDuty === true ? "on duty" : "off duty"}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            );
          })}

      <Contact />
    </div>
  );
}
// {doctor.doctor}: {doctor.onDuty === true ? "on duty" : "off duty"}

import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function DetailPatientPage() {
  const [detailPatient, setdetailPatient] = useState([]);
  const [prescriptions, setPrescriptions] = useState([]);
  const route_parameters = useParams();

  useEffect(() => {
    async function detailPatient() {
      const responsedetailPatient = await axios.get(
        `https://my-json-server.typicode.com/Codaisseur/patient-doctor-data/patients/${route_parameters.id}`
      );
      console.log("RESPONSE DETAIL PATIENT", responsedetailPatient);
      setdetailPatient(responsedetailPatient.data);
      setPrescriptions(responsedetailPatient.data.prescriptions);
    }
    detailPatient();
  }, [route_parameters.id]);
  console.log("TESTINGGGG", detailPatient.prescriptions);

  return (
    <div>
      <h1>
        {detailPatient.firstName} {detailPatient.lastName}
      </h1>
      <p>{detailPatient.id} </p>
      <p>{detailPatient.dateOfBirth}</p>
      <p>{detailPatient.gender}</p>
      <br />
      <h4>contact details:</h4>
      <p>{detailPatient.email}</p>
      <p>{detailPatient.phoneNumber}</p>
      <br />
      <h4>Prescriptions:</h4>

      <ul>
        {prescriptions.length === 0
          ? "No prescriptions for this patient"
          : prescriptions.map((prescrip, index) => {
              return <p key={index}>{prescrip}</p>;
            })}
      </ul>
    </div>
  );
}

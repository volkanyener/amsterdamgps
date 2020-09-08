import React, { useState, useEffect } from "react";
import axios from "axios";
import "../components/PatientDataBase.css";
import PatientCard from "../components/PatientCard";

export default function PatientsDatabase() {
  const [dataPatients, setdataPatients] = useState([]);
  const [dataDoctors, setdataDoctors] = useState([]);
  const [selectDoctor, setselectDoctor] = useState("default");

  useEffect(() => {
    async function allDoctorsData() {
      const responseDoctors = await axios.get(
        `https://my-json-server.typicode.com/Codaisseur/patient-doctor-data/doctors`
      );
      console.log("RESPONSE DOCTORS", responseDoctors.data);
      setdataDoctors(responseDoctors.data);
    }
    allDoctorsData();
  }, []);
  console.log("DATA DOCTORS", dataDoctors);

  useEffect(() => {
    async function allPatientsData() {
      const response = await axios.get(
        `https://my-json-server.typicode.com/Codaisseur/patient-doctor-data/patients`
      );
      console.log("RESPONSE:", response.data);
      setdataPatients(response.data);
    }
    allPatientsData();
  }, []);
  // console.log("DATAPATIENTS", dataPatients);

  let filteredPatients;

  if (selectDoctor === "default") {
    filteredPatients = dataPatients;
  } else {
    filteredPatients = dataPatients.filter((patient) => {
      return patient.doctorId === parseInt(selectDoctor);
    });
  }

  console.log("FILTERED PATIENTS", filteredPatients);

  const sortedByLastname = [...filteredPatients].sort(function (a, b) {
    return a.lastName.localeCompare(b.lastName);
  });
  // console.log("SORTED BY LASTNAME:", sortedByLastname);

  return (
    <div>
      <h2>Patient Database</h2>

      <form>
        <label>
          Doctor
          <select
            style={{ marginLeft: 20 }}
            onChange={(event) => {
              setselectDoctor(event.target.value);
              console.log("EVENT TARGET VALUE", event.target.value);
            }}
          >
            <option value="default">all</option>
            {dataDoctors.map((doctor) => {
              return (
                <option value={doctor.id} key={doctor.id}>
                  {doctor.doctor}
                </option>
              );
            })}
          </select>
        </label>
      </form>

      <br />

      {sortedByLastname.map((patient) => {
        return (
          <div key={patient.id}>
            <PatientCard
              id={patient.id}
              firstName={patient.firstName}
              lastName={patient.lastName}
              dateOfBirth={patient.dateOfBirth}
            />
          </div>
        );
      })}
    </div>
  );
}

import React from "react";
import { Link } from "react-router-dom";

export default function PatientCard(props) {
  return (
    <div className="patientBox">
      <div>
        <div key={props.id}>
          <div
            className="f6 grow no-underline br-pill ba ph3 pv2 mb2 dib black"
            href="#0"
          >
            Name: {props.firstName} {props.lastName}
            <br />
            id: {props.id}
            <br />
            Date of birth: {props.dateOfBirth}
            <br />
            <Link
              to={`/detailpatient/${props.id}`}
              className="f6 grow no-underline br-pill ph3 pv2 mb2 dib white bg-dark-green"
              href="#0"
            >
              Show details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

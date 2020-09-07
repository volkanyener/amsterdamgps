import React from "react";
import { Link } from "react-router-dom";
import "./Buttons.css";

export default function Buttons() {
  return (
    <div>
      <Link
        to="/onduty"
        className="f6 grow no-underline br-pill ba bw2 ph3 pv2 mb2 dib dark-green"
        href="#0"
      >
        Who is on duty?
      </Link>
      <br />
      <Link
        to="/signup"
        className="f6 grow no-underline br-pill ba bw2 ph3 pv2 mb2 dib dark-green"
        href="#0"
      >
        I am a new patient
      </Link>
    </div>
  );
}

import React from "react";
import { NavLink } from "react-router-dom";
import "./buttons/Buttons.css";

export default function NavBar() {
  return (
    <div>
      <NavLink
        to="/"
        className="f6 grow no-underline br-pill ba bw2 ph3 pv2 mb2 dib dark-gray"
        href="#0"
      >
        Homepage
      </NavLink>
      <NavLink
        to="/onduty"
        className="f6 grow no-underline br-pill ba bw2 ph3 pv2 mb2 dib dark-gray"
        href="#0"
      >
        On Duty
      </NavLink>
      <NavLink
        to="/signup"
        className="f6 grow no-underline br-pill ba bw2 ph3 pv2 mb2 dib dark-gray"
        href="#0"
      >
        Sign Up
      </NavLink>
      <NavLink
        to="/patientsdatabase"
        className="f6 grow no-underline br-pill ba bw2 ph3 pv2 mb2 dib dark-gray"
        href="#0"
      >
        Patients Database
      </NavLink>
    </div>
  );
}

/* <button type="button" className="btn btn-primary">
<NavLink exact={true} activeStyle={{ fontWeight: "bold" }} to="/">
  Homepage
</NavLink>
</button>
<button type="button" className="btn btn-primary">
<NavLink activeStyle={{ fontWeight: "bold" }} to="/onduty">
  On Duty
</NavLink>
</button>
<button type="button" className="btn btn-primary">
<NavLink activeStyle={{ fontWeight: "bold" }} to="/signup">
  Sign Up!
</NavLink>
</button>
<button type="button" className="btn btn-primary">
<NavLink activeStyle={{ fontWeight: "bold" }} to="/patients">
  Patients Database
</NavLink>
</button> */

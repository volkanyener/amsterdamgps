import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import OnDuty from "./pages/OnDuty";
import SignUpPage from "./pages/SignUpPage";
import PatientsDatabase from "./pages/PatientDatabase";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/patientsdatabase" component={PatientsDatabase} />
        <Route exact path="/signup" component={SignUpPage} />
        <Route exact path="/" component={HomePage} />
        <Route exact path="/onduty" component={OnDuty} />
      </Switch>
    </div>
  );
}

export default App;

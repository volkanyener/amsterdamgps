import React, { useState } from "react";

export default function SignUpPage() {
  const [firstNameState, setfirstNameState] = useState("");
  const [lastNameState, setlastNameState] = useState("");
  const [emailState, setemailState] = useState("");
  const [phoneNumberState, setphoneNumberState] = useState("");
  const [genderState, setgenderState] = useState("");
  const [dateOfBirthState, setdateOfBirthState] = useState("");
  const [succesState, setsuccesState] = useState("");

  function submitForm(event) {
    event.preventDefault();
    console.log(`
      Firstname:    ${firstNameState}
      Lastname:     ${lastNameState}
      E-mail:       ${emailState}
      Phonenumber:  ${phoneNumberState}
      Gender:       ${genderState}
      Date of Birth:${dateOfBirthState}
    `);
    setsuccesState("succes!");
  }

  return (
    <div>
      <h2>Patient signup</h2>
      <form onSubmit={submitForm}>
        <label>
          First name
          <input
            style={{ marginLeft: 14 }}
            onChange={(event) => setfirstNameState(event.target.value)}
            name="firstname"
            type="text"
          />
        </label>
        <br />
        <label>
          Last name
          <input
            style={{ marginLeft: 15 }}
            onChange={(event) => setlastNameState(event.target.value)}
            name="lastname"
            type="text"
          />
        </label>
        <br />
        <label>
          E-mail
          <input
            style={{ marginLeft: 41 }}
            onChange={(event) => setemailState(event.target.value)}
            name="email"
            type="text"
          />
        </label>
        <br />
        <label>
          Phone
          <input
            style={{ marginLeft: 42 }}
            onChange={(event) => setphoneNumberState(event.target.value)}
            name="phone"
            type="text"
          />
        </label>
        <br />
        <label>
          Gender
          <select
            style={{ marginLeft: 153 }}
            onChange={(event) => setgenderState(event.target.value)}
          >
            <option value="default">gender</option>
            <option value="men">men</option>
            <option value="woman">woman</option>
          </select>
        </label>
        <br />
        <label>
          Date of birth
          <input
            onChange={(event) => setdateOfBirthState(event.target.value)}
            style={{ marginLeft: 29 }}
            type="date"
          ></input>
        </label>
        <br />
        <br />
        <button type="submit">Submit</button>
      </form>
      {succesState}
    </div>
  );
}

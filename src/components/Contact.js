import React from "react";

export default function Contact() {
  const date = new Date();
  const hours = date.getHours();

  function isOpen() {
    if (hours >= 8 && hours < 17) {
      return "open";
    } else {
      return "closed";
    }
  }

  return (
    <div>
      <h3>we are: {isOpen()} </h3>
      <h3>To make an appointment</h3>
      <h3>call: 020 555 5555</h3>
    </div>
  );
}

import React from "react";
import './Spinner.css'

function Spinner() {
  return (
    <div className="container spinner-grow text-light d-flex justify-content-center align-content-center"   role="status">
      <span className="sr-only"></span>
    </div>
  );
}

export default Spinner;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Dropdowndiv } from "./styles";

const Dropdown = () => {
  const [dropdownTitle, setdropdownTitle] = useState("select");
  return (
    <Dropdowndiv class="dropdown show">
      <a
        class="btn btn-secondary dropdown-toggle"
        href="#"
        role="button"
        id="dropdownMenuLink"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        {dropdownTitle}
      </a>

      <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
        <Link
          to={`/patients/`}
          onClick={() => setdropdownTitle("Patients")}
          class="dropdown-item"
          href="#"
        >
          Patients
        </Link>
        <Link
          to={`/doctors/`}
          onClick={() => setdropdownTitle("Doctors")}
          class="dropdown-item"
          href="#"
        >
          Doctors
        </Link>
      </div>
    </Dropdowndiv>
  );
};

export default Dropdown;

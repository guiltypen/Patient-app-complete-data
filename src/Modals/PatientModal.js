import React, { useState } from "react";
//Modal
import Modal from "react-modal";
//Patient store
import patientStore from "../store/patientStore";
// styles
import { PatientForm } from "../components/styles";
const PatientModal = (props) => {
  const oldPatient = props.oldPatient;
  const [patient, setPatient] = useState(
    oldPatient ?? {
      name: "",
      age: 0,
      case: "",
      // HospitalName: "",
      // DoctorName: "",
    }
  );

  const handleSubmit = (event) => {
    event.preventDefault();
    patientStore[oldPatient ? "UpdatePatient" : "createPatient"](patient);
    console.log(patient);
    props.closeModal();
  };
  console.log(oldPatient);
  const handleChange = (event) => {
    setPatient({ ...patient, [event.target.name]: event.target.value });
  };
  return (
    <Modal
      isOpen={props.IsOpen}
      onRequestClose={props.closeModal}
      contentLabel="Example Modal"
    >
      <h3>{oldPatient ? "Update Patient" : "Create Patient"}</h3>
      <PatientForm>
        <div className="form-group row">
          <div className="col-6">
            <label>patientName</label>
            <input
              type="text"
              className="form-control"
              name="name"
              value={patient.name}
              onChange={handleChange}
            />
          </div>
          <div className="col-6">
            <label>PatientAge</label>
            <input
              type="number"
              defaultValue={patient.age}
              className="form-control"
              onChange={handleChange}
              name="age"
            />
          </div>
        </div>
        <div className="form-group">
          <label>CaseDescription</label>
          <input
            type="text"
            value={patient.case}
            className="form-control"
            onChange={handleChange}
            name="case"
          />
        </div>

        <button onClick={handleSubmit}>
          {oldPatient ? "Update Patient" : "Create Patient"}
        </button>
      </PatientForm>
    </Modal>
  );
};

export default PatientModal;

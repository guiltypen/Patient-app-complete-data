import React from "react";
import { useState } from "react";
import PatientModal from "../../Modals/PatientModal";
import { Button } from "@material-ui/core";

const AddPatient = (props) => {
  const [IsOpen, setIsOpen] = useState(false);
  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);
  return (
    <div style={{ position: "fixed", marginTop: "-55px", marginLeft: "20px" }}>
      <Button
        style={{ width: "200px" }}
        onClick={openModal}
        variant="contained"
        oldPatient={props.patient}
      >
        add new Patient
      </Button>
      <PatientModal IsOpen={IsOpen} closeModal={closeModal} />
    </div>
  );
};

export default AddPatient;

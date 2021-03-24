import React from "react";
import { useState } from "react";
import DoctorModal from "../../Modals/DoctorModal";
import { Button } from "@material-ui/core";

const AddDoctor = () => {
  const [IsOpen, setIsOpen] = useState(false);
  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);
  return (
    <div style={{ position: "fixed", marginTop: "-55px", marginLeft: "20px" }}>
      <Button
        style={{ width: "200px" }}
        onClick={openModal}
        variant="contained"
      >
        add new Doctor
      </Button>
      <DoctorModal IsOpen={IsOpen} closeModal={closeModal} />
    </div>
  );
};

export default AddDoctor;

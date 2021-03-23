import React, { useState } from "react";

// one Doctor
import Doctor from "./Doctor";
// styles
import { ListWrapper, PatientListWrapper } from "./styles";
//SearchBar
import SearchBar from "./searchPatient";
//import from store
import doctorStore from "../store/doctorStore";
import { observer } from "mobx-react";
import AddDoctor from "./buttons/createDoctor";

const DoctorList = (props) => {
  const [query, setQuery] = useState("");

  // const patientList = patientStore.Patients.filter((patient) =>
  //   patient.name.includes(query)
  // ).map((patient) => (
  //   <Patient patient={patient} key={patient.id} setPatient={props.setPatient} />
  // ));

  const doctorList = doctorStore.Doctors.map((doctor) => (
    <Doctor doctor={doctor} key={doctor.id} setDoctor={props.setDoctor} />
  ));
  return (
    <PatientListWrapper>
      <SearchBar title="search for doctor name" setQuery={setQuery} />
      <ListWrapper>{doctorList}</ListWrapper>
      <AddDoctor />
    </PatientListWrapper>
  );
};

export default observer(DoctorList);

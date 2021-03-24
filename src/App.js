import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";

//Homepage
import Homepage from "./components/homepage";
//Data
// import Doctors from "../src/PatientData";
// Patients List
import PatientList from "./components/PatientList";
import DoctorList from "./components/DoctorList";
//styles
import {
  GlobalStyle,
  ListDetailWrapper,
  SearchBarStyled,
} from "./components/styles";
import PatientDetail from "./components/patientDetail";
import DoctorDetail from "./components/doctorDetail .js";
import patientStore from "./store/patientStore";
import Dropdown from "./components/Dropdown";
import SearchBar from "./components/searchPatient";
function App() {
  const [selected_Item, setSelected] = useState(null);
  console.log(selected_Item);
  return (
    <div
      style={{
        position: "absolute",
        left: "50%",
        transform: "translateX(-50%)",
      }}
    >
      <GlobalStyle />
      <Switch>
        <Route path="/" exact>
          <SearchBar />
          <Homepage />
        </Route>
        <Route path="/patients" exact>
          <PatientList />
        </Route>
        <Route path="/patients/:patientSlug">
          <ListDetailWrapper>
            <PatientList setSelected={setSelected} />
            <PatientDetail />
          </ListDetailWrapper>
        </Route>
        <Route path="/doctors" exact>
          <DoctorList />
        </Route>
        <Route path="/doctors/:doctorSlug">
          <ListDetailWrapper>
            <DoctorList setSelected={setSelected} />
            <DoctorDetail />
          </ListDetailWrapper>
        </Route>
      </Switch>
    </div>
  );
}

export default App;

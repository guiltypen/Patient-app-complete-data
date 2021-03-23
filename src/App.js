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
import { GlobalStyle, ListDetailWrapper } from "./components/styles";
import PatientDetail from "./components/patientDetail";
import DoctorDetail from "./components/doctorDetail .js";
import patientStore from "./store/patientStore";
import Dropdown from "./components/Dropdown";

function App() {
  const [selected_Item, setSelected] = useState(null);
  console.log(selected_Item);
  return (
    <div>
      <GlobalStyle />
      <Switch>
        <Route path="/" exact>
          <Dropdown />
          <Homepage />
        </Route>
        <Route path="/patients" exact>
          <Dropdown />
          <PatientList />
        </Route>
        <Route path="/patients/:patientSlug">
          <Dropdown />
          <ListDetailWrapper>
            <PatientList setSelected={setSelected} />
            <PatientDetail />
          </ListDetailWrapper>
        </Route>
        <Route path="/doctors" exact>
          <Dropdown />
          <DoctorList />
        </Route>
        <Route path="/doctors/:doctorSlug">
          <Dropdown />
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

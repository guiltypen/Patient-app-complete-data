import React from "react";
import { Title, HomeText } from "./styles";

function Homepage() {
  return (
    <div style={{ width: "500px", textAlign: "center" }}>
      <Title>Welcome To The Hospital App</Title>

      <HomeText>
        This WebApp is ment To demonstrate how we can link an Express Data Base
        with a React Front-end.Using Axios and taking while taking into
        concedration the relations between each models such as one to many and
        many to many relations.
      </HomeText>
    </div>
  );
}
export default Homepage;

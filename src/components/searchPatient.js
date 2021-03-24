import React from "react";
import Dropdown from "../components/Dropdown.js";
// Styling
import { SearchBarStyled } from "../components/styles";

const SearchBar = (props) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        width: "200px",
        height: "30px",
        overflow: "hidden",
        justifyContent: "center",
        alignContent: "center",
        marginTop: "26px",
        marginLeft: "20px",
        borderRadius: "8px",
      }}
    >
      <SearchBarStyled
        placeholder={props.title}
        onChange={(event) => props.setQuery(event.target.value)}
      ></SearchBarStyled>
      <Dropdown />
    </div>
  );
};

export default SearchBar;

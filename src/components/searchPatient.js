import React from "react";

// Styling
import { SearchBarStyled } from "../components/styles";

const SearchBar = (props) => {
  return (
    <SearchBarStyled
      placeholder={props.title}
      onChange={(event) => props.setQuery(event.target.value)}
    />
  );
};

export default SearchBar;

import React from "react";
import { useState } from "react";
import ErrorMessage from "./ErrorMessage";

function Searchbar() {
  const [inputValue, setInputValue] = useState("");
  const [loadingError, setLoadingError] = useState(false);
  const [search, setSearch] = useState([]);

  function handleTextChange(e) {
    setInputValue(e.target.value);
  }

  function handleOnClick(e) {
    e.preventDefault();
  }

  function handleInputReset() {
    setInputValue("");
  }

  return (
    <div className="searchbar">
      <label>
        <input
          type="text"
          id="search"
          placeholder="Search..."
          name="search"
          value={inputValue}
          onChange={handleTextChange}
        ></input>
        <button onClick={handleOnClick}>Search</button>
      </label>
    </div>
  );
}

export default Searchbar;

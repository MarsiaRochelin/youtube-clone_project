import React from "react";
import { useState, useEffect } from "react";
import ErrorMessage from "./ErrorMessage";

function Searchbar() {
  const [inputValue, setInputValue] = useState("");
  const [loadingError, setLoadingError] = useState(false);
  const [userSearch, setUserSearch] = useState([]);

  const URL = process.env.REACT_APP_API_BASE_URL;
  const search = process.env.REACT_APP_API_SEARCH;
  const key = process.env.REACT_APP_API_KEY;

  function handleTextChange(e) {
    setInputValue(e.target.value);
  }

  function handleOnClick(e) {
    e.preventDefault();
    if(inputValue.length === 0){
        setUserSearch([])
    } else {
        fetch(`${URL}${search}${inputValue}${key}`)
        .then(res => res.json())
        .then(res => {
            setUserSearch(res.items)
            console.log(userSearch)
            setLoadingError(false)
        })
        .catch(err => {console.log(err)
        setLoadingError(true)
    })
    }
  }

  function handleInputReset() {
    setInputValue("");
  }

  useEffect(() => {
    fetch(`${URL}${search}${inputValue}${key}`)
      .then(res => res.json())
      .then(res => {
          setUserSearch(res.items);
          console.log(res.items)
        setLoadingError(false);
      })
      .catch(err => {
        console.log(err);
        setLoadingError(true);
      });
  }, []);

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
      <section className="videos">
        {/* A ternary should go here saying if loading error is set to true return ErrorMessage component else return videos component to list out all the videos */}
      </section>
    </div>
  );
}

export default Searchbar;

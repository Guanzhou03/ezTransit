import React, { useState, useRef, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { mrtStationNames, dummy, dummyParsed } from "./data.js";

const SearchbarDropdown = (props) => {
  const { options, onInputChange } = props;
  const ulRef = useRef();
  const inputRef = useRef();
  useEffect(() => {
    inputRef.current.addEventListener('click', (event) => {
      event.stopPropagation();
      ulRef.current.style.display = 'flex';
      onInputChange(event);
    });
    document.addEventListener('click', (event) => {
      ulRef.current.style.display = 'none';
    });
  }, []);
  return (
    <div className="search-bar-dropdown">
      <input
        id="search-bar"
        type="text"
        className="form-control"
        placeholder={props.where}
        ref={inputRef}
        onChange={onInputChange}
      />
      <ul id="results" className="list-group" ref={ulRef}>
        {options.map((option, index) => {
          return (
            <button
              type="button"
              key={index}
              onClick={(e) => {
                inputRef.current.value = option;
              }}
              className="list-group-item list-group-item-action"
            >
              {option}
            </button>
          );
        })}
      </ul>
    </div>
  );
};

const defaultOptions = [];
const len = mrtStationNames.length;
for (var i = 0; i < len; i++)  {
  defaultOptions.push(mrtStationNames[i].mrt_station_english);
}

function App() {
  const [options, setOptions] = useState([]);
  const onInputChange = (event) => {
    setOptions(
      defaultOptions.filter((option) => option.includes(event.target.value))
    );
  };

  return (
    <div className="App container mt-2 mb-3">
      <h1>Find shortest path between 2 MRT stations</h1>
      <SearchbarDropdown options={options} onInputChange={onInputChange} where={"From"} />
      <SearchbarDropdown options={options} onInputChange={onInputChange} where={"To"}/>
      <br />
      <button className="btn btn-primary">Search</button>
    </div>
  );
}

export default App;
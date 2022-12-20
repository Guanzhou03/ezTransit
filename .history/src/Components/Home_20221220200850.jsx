import React, { useState } from 'react'
import SearchbarDropdown from './Search/SearchbarDropDown';
import { defaultOptions as mrtStationNames } from '../data/data';

function Home() {
  const [options, setOptions] = useState([]);
  const onInputChange = (event) => {
    setOptions(
      mrtStationNames.filter((option.toLowerCase().includes(event.target.value.toLowerCase())))
    );
  };

  return (
    <>
      <h1>Find shortest path between 2 MRT stations</h1>
      <SearchbarDropdown options={options} onInputChange={onInputChange} where={"From"} />
      <SearchbarDropdown options={options} onInputChange={onInputChange} where={"To"} />
      <br />
      <button className="btn btn-primary">Search</button>
    </>
  )
}

export default Home
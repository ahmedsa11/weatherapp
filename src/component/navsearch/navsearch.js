import React from "react";
import './navsearch.css'
const Navsearch = ({getWeatherr,locationInput,setlocationInput}) => {
    console.log(locationInput)
  return (
    <div className="navsearch">
      <input onKeyPress={getWeatherr} type="text" placeholder="Enter Location"onChange={e=>setlocationInput(e.target.value)}value={locationInput} />
    </div>
  );
};

export default Navsearch;

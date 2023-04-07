import React from 'react'
import './winds.css'
const Winds = ({dataW}) => {
  return (
    <div className='winds'>
        <div className='ww'>
            <h3>{dataW&&dataW.main?dataW.main.feels_like:null}</h3>
            <p>Feels Like</p>
        </div>
        <div className='ww'>
            <h3>{dataW&&dataW.main?dataW.main.humidity:null}</h3>
            <p>Humidity</p>
        </div>
        <div className='ww'>
            <h3>{dataW&&dataW.wind?dataW.wind.speed:null}</h3>
            <p>Wind Speed</p>
        </div>
    </div>
  )
}

export default Winds
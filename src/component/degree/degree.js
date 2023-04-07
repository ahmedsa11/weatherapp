import React from 'react'
import './degree.css'
const Degree = ({dataW}) => {
  return (
    <div className='degree'> 
        <div className='deg'>
            <h3>{dataW?dataW.name:null}</h3><span>{dataW&&dataW.sys?dataW.sys.country:null}</span>
            <hr/>
            <h1>{dataW&&dataW.main?dataW.main.temp:null}°</h1>
        </div>
        <div className='cloud'>
        {dataW&&dataW.weather?dataW.weather[0].main:null}
        </div>
    </div>
  )
}

export default Degree
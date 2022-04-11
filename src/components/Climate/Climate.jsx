import React, { useState } from 'react';
import './climate.css';

import temp from './img/temp.svg'

const Climate = ({temperature, humidity}) => {
   const [temper, setTemper] = useState(temperature)

   return (
      <div className='climate'>
         <div className='climate__icon'>
            <img src={temp} />
         </div>
         <div className='climate__content'>
            <div className='climate__temperature'>{temper}&deg;C</div>
            <div className='climate__humidity'>Vlhost vzduchu {humidity} &nbsp;%</div>
         </div>
         <div className='climate__controls'>
            <button class='botton' onClick={()=> {setTemper(temper+1)}}>+</button>
            <button class='botton' onClick={()=>{setTemper(temper-1)}}>-</button>
         </div>


      </div>
   )}


export default Climate

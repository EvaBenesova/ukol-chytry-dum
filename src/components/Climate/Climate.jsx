import React, { useState } from 'react';
import './climate.css';

import tempIcon from './img/temp.svg'

const Climate = ({temperature, humidity}) => {
   const [temper, setTemper] = useState(temperature)

   return (
      <div className='climate'>
         <div className='climate__icon'>
            <img src={tempIcon} />
         </div>
         <div className='climate__content'>
            <div className='climate__temperature'>{temper}&deg;C</div>
            <div className='climate__humidity'>Vlhkost vzduchu {humidity} &nbsp;%</div>
         </div>
         <div className='climate__controls'>
            <button class='button' onClick={()=> {setTemper(temper+1)}}>+</button>
            <button class='button' onClick={()=>{setTemper(temper-1)}}>-</button>
         </div>


      </div>
   )}


export default Climate

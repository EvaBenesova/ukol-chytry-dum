import React, {useState} from 'react';
import './light.css';


import lightIsOff from './images/light-off.svg';
import lightIsOn from './images/light-on.svg'


const Light = ( {name, state} ) => {
   const [lightOn, setLightOn ] = useState (state)

   const handleClick = () => {
         if (lightOn === 'off'){setLightOn('on')}
         else{setLightOn('off')}
      }
   return(
      <div onClick = {handleClick} className='light'>
         <div className='light__icon'>
            <img src={lightOn === 'on' ? lightIsOn : lightIsOff}/>
         </div>
         <div className='light__name'>{name}</div>
      </div>
   )

}

export default Light

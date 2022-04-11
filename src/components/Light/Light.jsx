import React, {useState} from 'react';
import './light.css';


import lightOnIcon from './images/light-off.svg';
import lightOffIcon from './images/light-on.svg'


const Light = ( {name, state} ) => {
   const [lightOn, setLightOn ] = useState (state)

   const handleClick = () => {
         if (lightOn === 'off'){setLightOn('on')}
         else{setLightOn('off')}
      }
   return(
      <div onClick = {handleClick} className='light'>
         <div className='light__icon'>
            <img src={lightOn === 'on' ? lightOnIcon : lightOffIcon}/>
         </div>
         <div className='light__name'>{name}</div>
      </div>
   )

}

export default Light

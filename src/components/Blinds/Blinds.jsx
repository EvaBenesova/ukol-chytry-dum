import React, {useState} from 'react';
import './blinds.css';

import blindOpen from './img/blinds-open.svg'
import blindClosed from './img/blinds-closed.svg'


const Blinds = ({state}) =>{
   const [blindsOp, setBlindsOp] = useState(state)
   const handleClick = () => {
      if (blindsOp === 'open') {setBlindsOp ('!open')}
      else{setBlindsOp('open')}
   }
   return(
      <div className='blinds'>
         <div className='blinds__icon'>
            <img src={blindsOp === 'open' ? blindOpen : blindClosed}/>
         </div>
         <div className='blinds__name'>
            Žaluzie
         </div>
         <div className='blinds__controls'>
            <button className='button button--active' onClick={handleClick}>Otevřeno</button>
            <button className='button' onClick={handleClick}>Zavřeno</button>
         </div>

      </div>
   )      
}

export default Blinds;



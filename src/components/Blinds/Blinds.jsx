import React, {useState} from 'react';
import './blinds.css';

import blindsOpen from './img/blinds-open.svg'
import blindsClosed from './img/blinds-closed.svg'


const Blinds = ({state}) =>{
   const [blindsOp, setBlindsOp] = useState(state)
   
   return(
      <div className='blinds'>
         <div className='blinds__icon'>
            <img src={blindsOp === 'open' ? blindsOpen : blindsClosed}/>
         </div>
         <div className='blinds__name'>
            Žaluzie
         </div>
         <div className='blinds__controls'>
            <button className='button button--active' onClick={()=> {setBlindsOp(state)}}>Otevřeno</button>
            <button className='button' onClick={()=>{setBlindsOp(!state)}}>Zavřeno</button>
         </div>

      </div>
   )      
}

export default Blinds;


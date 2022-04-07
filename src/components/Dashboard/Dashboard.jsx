import React from 'react';
import './dashboard.css';
import Lights from '../Lights/Lights';

const Dashboard = ({data} ) => {
   return(
      <main className='dashboard'>
         <Lights lights={data.lights}/>

      </main>
   )
}

export default Dashboard

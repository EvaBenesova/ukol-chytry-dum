import React from 'react';
import './dashboard.css';
import Lights from '../Lights/Lights';
import Climate from '../Climate/Climate';

const Dashboard = ({data} ) => {
   return(
      <main className='dashboard'>
         <Lights lights={data.lights}/>
         <Climate 
            temperature={data.climate.temperature}
            humidity={data.climate.humidity}/>

      </main>
   )
}

export default Dashboard


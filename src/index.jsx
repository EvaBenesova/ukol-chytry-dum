import React from 'react';
import { render } from 'react-dom';
import './style.css';

import smartHomeData from './smartHomeData';
import Header from './components/Header/Header';
import Dashboard from './components/Dashboard/Dashboard';

const App = () => {
  return(
    <div className='container'>
      <Header />
      <Dashboard data={smartHomeData}/>
    </div>
  )
};

render(<App />, document.querySelector('#app'));

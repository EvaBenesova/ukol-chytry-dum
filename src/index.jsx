import React from 'react';
import { render } from 'react-dom';
import './style.css';

import smartHomeData from './smartHomeData';
import Header from './components/Header/Header';

const App = () => {
  return(
    <div className='container'>
      <Header />
    </div>
  )
};

render(<App />, document.querySelector('#app'));

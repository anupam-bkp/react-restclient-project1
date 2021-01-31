import React from 'react';

import { BrowserRouter} from 'react-router-dom';

import Routes from './components/Routes';

import './App.css';

const app = () =>  {

  return (

    <BrowserRouter>
      <div className="App">
      
        <Routes />
        
      </div>
      
    </BrowserRouter>
    
  );
}

export default app;
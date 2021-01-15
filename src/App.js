import React from 'react';
import './App.css';
import HeaderComponent from './components/header-component/header-component';
import AboutSec from './components/about/about-component';
import IconComponent from './components/Serve/icons-component';
function App() 
{
  return (
    <div className='page'>
      <HeaderComponent />
      <AboutSec />
      <IconComponent />
    </div>
  );
}

export default App;

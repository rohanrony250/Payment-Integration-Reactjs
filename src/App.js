import React from 'react';
import './App.css';
import HeaderComponent from './components/header-component/header-component';
import AboutSec from './components/about/about-component';
import IconComponent from './components/Serve/icons-component';
import FooterComponent from './components/footer/footer-component';
function App() 
{
  return (
    <div className='page'>
      <HeaderComponent />
      <AboutSec />
      <IconComponent />
      <FooterComponent/>
    </div>
  );
}

export default App;

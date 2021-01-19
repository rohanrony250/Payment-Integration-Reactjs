import React from 'react';
import './App.css';
import HeaderComponent from './components/header-component/header-component';
import {Switch,Route} from 'react-router-dom';
import AboutSec from './components/about/about-component';
import DonatePage from './pages/donation-page/donation-component';
import FooterComponent from './components/footer/footer-component';

function App() 
{
  return (
    
    <div>
      
      <HeaderComponent />
        <Switch>
          <Route exact path='/' component={AboutSec}/>
          <Route path='/donate' component={DonatePage}/>
        </Switch>
      <FooterComponent/>
    </div>

      
    
  );
}

export default App;


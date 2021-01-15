import React from 'react';
import './header-styles.scss'
import CustomDiv from '../custom-div/custom-div-component';

const HeaderComponent = () =>
(
    

    <header id='page-header'>
        <div className='container-fluid' id='page-headerr'>
            <div className='row'>
                <div className='col-md-4 text-center mt-5 pt-5 text-white'>
                    <h2>
                        "The best way to find yourself is to lose yourself in the service of others."
                    </h2>
                    <small>-Mahatma Gandhi</small>
                </div>
            </div>
        </div>  
        <CustomDiv />
    </header>
   
               
    
)

export default HeaderComponent





import React from 'react';
import './header-styles.scss'
import CustomDiv from '../custom-div/custom-div-component';

const HeaderComponent = () =>
(
    

    <header id='page-header'>
        <div className='container-fluid' id='page-headerr'>
            <div className='row p-5'>
                <div className='col-md-6 text-center text-white'>
                    <h2 className='neon1'>
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





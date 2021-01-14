import React from 'react';
import './header-styles.scss'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

const HeaderComponent = () =>
(
    
    <div className='text-white' id='header'>
        <br/>
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-md-6'>
                    <h1>
                        "The best way to find yourself is to lose yourself in the service of others."
                    </h1>
                    <small className='mx-4'>-Mahatma Gandhi</small>
                </div>
            </div>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#000" fillOpacity="1" d="M0,128L21.8,133.3C43.6,139,87,149,131,160C174.5,171,218,181,262,186.7C305.5,192,349,192,393,165.3C436.4,139,480,85,524,53.3C567.3,21,611,11,655,26.7C698.2,43,742,85,785,106.7C829.1,128,873,128,916,144C960,160,1004,192,1047,197.3C1090.9,203,1135,181,1178,170.7C1221.8,160,1265,160,1309,181.3C1352.7,203,1396,245,1418,266.7L1440,288L1440,320L1418.2,320C1396.4,320,1353,320,1309,320C1265.5,320,1222,320,1178,320C1134.5,320,1091,320,1047,320C1003.6,320,960,320,916,320C872.7,320,829,320,785,320C741.8,320,698,320,655,320C610.9,320,567,320,524,320C480,320,436,320,393,320C349.1,320,305,320,262,320C218.2,320,175,320,131,320C87.3,320,44,320,22,320L0,320Z"></path></svg>
    </div>
               
    
)

export default HeaderComponent
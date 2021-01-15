import React from 'react';
import './icons-styles.scss';

const IconComponent = () =>
(
    <section id='summary-icons'>
        <div className='container'>
            <div className='row pt-3'>
                <div className='col-md-4 text-center text-success'>
                    <a href="">
                        <i className="fas fa-donate fa-4x donate text-success"></i>
                    </a>
                    <h3>
                        DONATE
                    </h3>
                    <p className='text-white'>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque, deleniti!
                    </p>
                </div>
                <div className='col-md-4 text-center text-danger icon2'>
                    <i className="fas fa-heart fa-4x heart"></i>
                    <h3>
                        SUPPORT
                    </h3>
                    <p className='text-white'>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque, deleniti!
                    </p>
                </div>
                <div className='col-md-4 text-center text-warning icon3'>
                    <i className="far fa-handshake fa-4x"></i>                   
                    <h3>
                        PURPOSE-DRIVEN
                    </h3>
                    <p className='text-white'>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque, deleniti!
                    </p>
                </div>
            </div>
        </div>
        <hr className='bg-danger'/>
    </section>
)

export default IconComponent;
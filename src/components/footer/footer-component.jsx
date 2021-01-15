import React from 'react';
import './footer-styles.scss';

const FooterComponent = () =>
(
    <footer id='only-footer' className='text-center text-white'>
        <div className='container'>
            <div className='row p-5'>
                <div className='col footer-heading'>
                    <span>
                        Created with <i class="fa fa-heart pulse"></i> by Rohan Rony
                    </span>
                </div>
            </div>
            <div className='row pb-4'>
                <div className='col'>
                    <a href="https://github.com/rohanrony250/Payment-Integration-Reactjs" target='_blank'>
                        <i class="fab fa-github fa-4x github"></i>
                    </a>
                </div>
            </div>
        </div>
    </footer>
)

export default FooterComponent




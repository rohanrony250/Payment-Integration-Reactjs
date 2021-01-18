import React from 'react'
import './navbar-styles.scss'
import {Container} from 'react-bootstrap';
import plogo from '../../resources/nav-logo.jpg';
import { Link } from 'react-router-dom';
const NavbarComponent = () =>
(            
             <Container className='option text-center' fluid>
                    <Link to='/'>
                        <img src={plogo} alt="" width='150' className='logo'/>
                    </Link>        
            </Container> 
            
    
)

export default NavbarComponent




            
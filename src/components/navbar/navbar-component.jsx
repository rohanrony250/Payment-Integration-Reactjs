import React from 'react'
import './navbar-styles.scss'
import {Container} from 'react-bootstrap';
import { Link } from 'react-router-dom';
const NavbarComponent = () =>
(
    <div id='navbar' className='pt-1'>
        
            <Container className='option'>
                    <Link to='/' className='nav-heading'>
                        GRIP DONOR
                    </Link>
                <div>
                    <Link to='/donate'  className='options'>
                        DONATION
                    </Link>
                </div>
            </Container>
    
    </div>
)

export default NavbarComponent
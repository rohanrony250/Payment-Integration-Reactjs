import React from 'react';
import './header-styles.scss';
//import pic1 from '../../resources/image5.jpg'
import CustomDiv from '../custom-div/custom-div-component';
import {Col,Row,Container} from 'react-bootstrap';
import NavbarComponent from '../navbar/navbar-component';
const HeaderComponent = () =>
(
    <div>
        
        <header id='page-header'>
            <NavbarComponent />
            <Container fluid className='mt-4'>
                <Row>
                    <Col className='text-center text-light pt-4'>
                        <h3 className='neon1'>
                            "THE BEST WAY TO FIND YOURSELF IS TO LOSE YOURSELF IN THE SERVICE OF OTHERS."
                        </h3>
                        <small className='neon2'>-MAHATMA GANDHI</small>
                    </Col>
                </Row>
            </Container>
            <CustomDiv />
        </header>
        
        

    </div>
   
               
    
)

export default HeaderComponent

// style={{backgroundImage: `url(${pic1})`}}



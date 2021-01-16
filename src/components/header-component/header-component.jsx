import React from 'react';
import './header-styles.scss';
import pic1 from '../../resources/image5.jpg'
import CustomDiv from '../custom-div/custom-div-component';
import {Col,Row,Container} from 'react-bootstrap';
import NavbarComponent from '../navbar/navbar-component';
const HeaderComponent = () =>
(
    <div>
        
        <header id='page-header' style={{backgroundImage: `url(${pic1})`}}>
            <NavbarComponent />
            <Container fluid>
                <Row className='pt-5'>
                    <Col lg={6} className='text-center text-white'>
                        <h3 className='neon1'>
                            "The best way to find yourself is to lose yourself in the service of others."
                        </h3>
                        <small className='neon2'>-Mahatma Gandhi</small>
                    </Col>
                </Row>
            </Container>
            <CustomDiv />
        </header>
        
        

    </div>
   
               
    
)

export default HeaderComponent





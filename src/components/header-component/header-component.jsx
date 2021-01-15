import React from 'react';
import './header-styles.scss';
import pic1 from '../../resources/image5.jpg'
import CustomDiv from '../custom-div/custom-div-component';
import {Col,Row,Container} from 'react-bootstrap';
const HeaderComponent = () =>
(
    <div>
        <header id='page-header' style={{backgroundImage: `url(${pic1})`}}>
        
            <Container fluid>
                <Row className='pt-5'>
                    <Col lg={6} className='text-center text-white'>
                        <h2 className='neon1'>
                            "The best way to find yourself is to lose yourself in the service of others."
                        </h2>
                        <small className='neon2'>-Mahatma Gandhi</small>
                    </Col>
                </Row>
            </Container>
            <CustomDiv />
        </header>
        
        

    </div>
   
               
    
)

export default HeaderComponent





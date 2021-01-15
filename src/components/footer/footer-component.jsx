import React from 'react';
import './footer-styles.scss';
import {Col,Row,Container} from 'react-bootstrap';

const FooterComponent = () =>
(
    <footer id='only-footer' className='text-center text-white'>
       <Container>
           <Row className='p-5'>
                <Col className='footer-heading'>
                    <span>
                        Created with <i class="fa fa-heart pulse"></i> by Rohan Rony
                    </span>
                </Col>
           </Row>
           <Row className='pb-4'>
                <Col>
                    <a href="https://github.com/rohanrony250/Payment-Integration-Reactjs" target='_blank'>
                        <i class="fab fa-github fa-4x github"></i>
                    </a>
                </Col>
           </Row>
       </Container>
       
       
       
        {/* <div className='container'>
            
            <div className='row pb-4'>
                <div className='col'>
                    <a href="https://github.com/rohanrony250/Payment-Integration-Reactjs" target='_blank'>
                        <i class="fab fa-github fa-4x github"></i>
                    </a>
                </div>
            </div>
        </div> */}
    </footer>
)

export default FooterComponent




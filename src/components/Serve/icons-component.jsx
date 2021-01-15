import React from 'react';
import './icons-styles.scss';
import {Col,Row,Container} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import FooterComponent from '../footer/footer-component';
const IconComponent = () =>
(
    <div>
        <section id='summary-icons'>
            <Container>
                <Row className='pt-3'>
                    <Col md={4} className='text-center text-success'>
                        <Link to='/donate'>
                            <i className="fas fa-donate fa-4x donate text-success"></i>
                        </Link>
                        <h3>
                            DONATE
                        </h3>
                        <p className='text-white'>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque, deleniti!
                        </p>
                    </Col>
                    <Col md={4} className='text-center text-danger'>
                        <i className="fas fa-heart fa-4x heart"></i>
                        <h3>
                            SUPPORT
                        </h3>
                        <p className='text-white'>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque, deleniti!
                        </p>
                    </Col>
                    <Col md={4} className='text-center text-warning'>
                        <i className="far fa-handshake fa-4x"></i>                   
                        <h3>
                            PURPOSE-DRIVEN
                        </h3>
                        <p className='text-white'>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque, deleniti!
                        </p>
                    </Col>
                </Row>
            </Container>
            <hr className='bg-danger hr'/>
        </section>
        <FooterComponent/>
    </div>
)

export default IconComponent;
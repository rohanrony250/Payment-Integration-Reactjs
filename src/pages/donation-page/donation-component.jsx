import React from 'react';
import HeaderComponent from '../../components/header-component/header-component';
import './donation-styles.scss';
import {Col,Row,Container,Button} from 'react-bootstrap';
import  pic2  from '../../resources/image1.jpg';
import  pic3  from '../../resources/image2.jpg';
import  pic4  from '../../resources/image3.jpg';
import FooterComponent from '../../components/footer/footer-component';

const DonatePage = () =>
(
    <div>
        <section id='donate'>
            <Container fluid>
                <Row>
                    <Col className='text-white text-center pt-2 pb-2'>
                        <h3 className='neon'>
                            HELP SUPPORT US
                        </h3>
                    </Col>
                </Row>
                <Row className='px-4'>
                    <Col className='text-white text-center pt-3 pl-4' md={6}>
                        <p>
                            " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem voluptatibus reiciendis animi iusto, veniam nostrum quam exercitationem molestiae id consequuntur modi, accusamus soluta, quibusdam ad error incidunt! Quia suscipit tempora explicabo beatae dignissimos culpa saepe adipisci reiciendis voluptates accusantium officia ullam eveniet optio ea corrupti porro nisi ducimus, ab consequatur? "
                        </p>
                        <Button variant='outline-light'block>
                            <p className='button1'>
                              DONATE  
                            </p>
                        </Button>
                    </Col>
                    <Col md={2} className='py-5'>
                        <img
                            width ={562}
                            className="img-fluid"
                            src={pic2}
                            alt="Generic placeholder"
                        />
                    </Col>
                    <Col md={2} className='py-5'> 
                        <img
                            
                            className="img-fluid"
                            src={pic3}
                            alt="Generic placeholder"
                        />
                    </Col>
                    <Col md={2} className='py-5'>
                        <img
                            
                            className="img-fluid"
                            src={pic4}
                            alt="Generic placeholder"
                        />
                    </Col>
                </Row>
                <hr className='bg-danger'/>
            </Container>
        </section>
        <FooterComponent/>        
    </div>

)

export default DonatePage
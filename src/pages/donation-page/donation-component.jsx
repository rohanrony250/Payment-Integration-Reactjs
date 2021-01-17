import React from 'react';
import './donation-styles.scss';
import {Col,Row,Container} from 'react-bootstrap';
import DonorDetails from '../../components/donor-details/donor-details-component';
import ImageGallery from '../../components/img-component/img-component';

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
                                <Col className='text-white text-center pt-4 pl-4' md={6}>
                                    <p>
                                        " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem voluptatibus reiciendis animi iusto, veniam nostrum quam exercitationem molestiae id consequuntur modi, accusamus soluta, quibusdam ad error incidunt! Quia suscipit tempora explicabo beatae dignissimos culpa saepe adipisci reiciendis voluptates accusantium officia ullam eveniet optio ea corrupti porro nisi ducimus, ab consequatur? "
                                    </p>
                                    <p className='display-3 slogan'>
                                        " Every penny counts "
                                    </p>
                                    <p className='query'>
                                        If you're willing to contribute, please fill the form below.
                                    </p>
                                    <DonorDetails />
                                </Col>
                                <Col className='py-5' md={6}>
                                    <ImageGallery/>
                                </Col>
                            </Row>
                            <hr className='bg-danger'/>
                        </Container>
                    </section>        
                </div>
        
)


export default DonatePage
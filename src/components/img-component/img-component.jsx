import React from 'react';
import './img-style.scss'
import {Container,Row,Col} from 'react-bootstrap'
import  pic2  from '../../resources/image1.jpg';
import  pic3  from '../../resources/image2.jpg';
import  pic4  from '../../resources/image3.jpg';
import  pic5  from '../../resources/image4.jpg';
const ImageGallery = () =>
(
    <div>
        <Container>
            <Row>
                <Col md={6} className='py-5 imges1'>
                    <img
                                        
                        className="img-fluid"
                        src={pic2}
                        alt="children"
                    />
                </Col>
                <Col md={6} className='py-5 imges2'>
                    <img
                                        
                        className="img-fluid"
                        src={pic3}
                        alt="children"
                    />
                </Col>      
            </Row>
            <Row>
                <Col md={6} className='py-5 imges3'>
                    <img
                                        
                        className="img-fluid"
                        src={pic4}
                        alt="children"
                    />
                </Col>
                <Col md={6} className='py-5 imges4'>
                    <img
                                        
                        className="img-fluid"
                        src={pic5}
                        alt="children"
                    />
                </Col>      
            </Row>   
        </Container>
    </div>
)

export default ImageGallery
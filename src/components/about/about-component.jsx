import React from 'react';
import './about-styles.scss';
import {Col,Row,Container} from 'react-bootstrap';
import IconComponent from '../Serve/icons-component';


const AboutSec = () =>
(
    <div>
        <section id='about'>
            <Container fluid>
                <Row>
                    <Col className='text-white text-center pt-2'>
                        <h3 className='neon'>
                            WHAT WE DO?
                        </h3>
                    </Col>
                </Row>
                <Row className='px-4'>
                    <Col className='text-white text-center mt-4 pl-4' md={6}>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores maxime unde, aut delectus nulla consectetur optio eum officia porro quisquam aspernatur, nostrum sed omnis neque recusandae ratione suscipit vitae atque vel fugiat dolorem quas tempore reiciendis quis. Enim obcaecati unde illo, provident deserunt quos magni commodi reprehenderit aspernatur minus, quisquam aut expedita atque natus saepe? Alias accusamus in, enim quisquam, aperiam rerum sapiente asperiores fugit ab similique nulla dolore ex ratione aspernatur labore distinctio odio corporis saepe quae iste assumenda esse sunt, dolor nisi! Ad delectus, odit, natus doloribus quisquam corrupti nesciunt nostrum tenetur dolorem iusto ipsum voluptatem aspernatur blanditiis.
                        </p>
                    </Col>
                    <Col className='text-white text-center mt-4' md={6}>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores maxime unde, aut delectus nulla consectetur optio eum officia porro quisquam aspernatur, nostrum sed omnis neque recusandae ratione suscipit vitae atque vel fugiat dolorem quas tempore reiciendis quis. Enim obcaecati unde illo, provident deserunt quos magni commodi reprehenderit aspernatur minus, quisquam aut expedita atque natus saepe? Alias accusamus in, enim quisquam, aperiam rerum sapiente asperiores fugit ab similique nulla dolore ex ratione aspernatur labore distinctio odio corporis saepe quae iste assumenda esse sunt, dolor nisi! Ad delectus, odit, natus doloribus quisquam corrupti nesciunt nostrum tenetur dolorem iusto ipsum voluptatem aspernatur blanditiis.
                        </p>
                    </Col>
                </Row>
                <hr className='bg-danger'/>
            </Container>
        </section>

        <IconComponent />
    </div>
)

export default AboutSec;
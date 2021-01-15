import React from 'react';
import './about-styles.scss';


const AboutSec = () =>
(
    <section id='about'>
        <div className='container-fluid'>
            <div className='row'>
                <div className='col text-white text-center pt-2'>
                    <h3 className='neon'>
                        WHAT WE DO?
                    </h3>
                </div>
            </div>
            <div className='row px-4'>
                <div className='col-md-6 text-white text-center mt-4 pl-4'>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores maxime unde, aut delectus nulla consectetur optio eum officia porro quisquam aspernatur, nostrum sed omnis neque recusandae ratione suscipit vitae atque vel fugiat dolorem quas tempore reiciendis quis. Enim obcaecati unde illo, provident deserunt quos magni commodi reprehenderit aspernatur minus, quisquam aut expedita atque natus saepe? Alias accusamus in, enim quisquam, aperiam rerum sapiente asperiores fugit ab similique nulla dolore ex ratione aspernatur labore distinctio odio corporis saepe quae iste assumenda esse sunt, dolor nisi! Ad delectus, odit, natus doloribus quisquam corrupti nesciunt nostrum tenetur dolorem iusto ipsum voluptatem aspernatur blanditiis.
                    </p>
                </div>
                <div className='col-md-6 text-white text-center mt-4'>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores maxime unde, aut delectus nulla consectetur optio eum officia porro quisquam aspernatur, nostrum sed omnis neque recusandae ratione suscipit vitae atque vel fugiat dolorem quas tempore reiciendis quis. Enim obcaecati unde illo, provident deserunt quos magni commodi reprehenderit aspernatur minus, quisquam aut expedita atque natus saepe? Alias accusamus in, enim quisquam, aperiam rerum sapiente asperiores fugit ab similique nulla dolore ex ratione aspernatur labore distinctio odio corporis saepe quae iste assumenda esse sunt, dolor nisi! Ad delectus, odit, natus doloribus quisquam corrupti nesciunt nostrum tenetur dolorem iusto ipsum voluptatem aspernatur blanditiis.
                    </p>
                </div>
            </div>
            <hr className='bg-danger'/>
        </div>
    </section>
)

export default AboutSec;
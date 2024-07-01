import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import secureimg from '../assets/images/secure-img1.webp'
import secure2 from '../assets/images/cropped_layer.webp'
import Common from '../common/Common'
import coin1 from '../assets/images/svg/svg1.svg'
import coin2 from '../assets/images/svg/svg2.svg'
import coin3 from '../assets/images/svg/svg3.svg'
import coin4 from '../assets/images/svg/svg4.svg'
import coin5 from '../assets/images/svg/svg5.svg'
import coin6 from '../assets/images/svg/svg6.svg'
import Slider from "react-slick";
const Secure = () => {
    var settings = {
        dots: false,
        autoplay: true,
        variableWidth: true,
        arrows: false,
        infinite: true,
        speed: 8000,
        autoplaySpeed: 0,
        cssEase: "linear",
        pauseOnHover: true,
    };
    return (
        <>
            <section className=' secure-bg  py-secure mt-decrease position-relative' id='Audit'>
                <Container id='Privacy' className=' position-relative z-2'>
                    <Row>
                        <Col lg={6} className=' d-flex justify-content-center' data-aos="fade-up-right">
                            <div className=' position-relative d-flex'>
                                <img className=' mx-auto' width="245px" height="245px" src={secureimg} alt="image" />
                                <img className=' layer-position mx-auto position-absolute max-layer ' src={secure2} alt="img2" />
                            </div>
                        </Col>
                        <Col lg={6} className=' mt-secure-text d-flex justify-content-center justify-content-lg-start align-items-lg-center ' data-aos="fade-up-left">
                            <div className=' d-flex align-items-center align-items-lg-start flex-column'>
                                <p className=' mb-0 manrope fw-400 text-20 lh-30 links text-center text-lg-start'>Rest easy knowing that $CLAIR is</p>
                                <p className=' manrope fw-600 text-32 lh-48 yellow pt-10 mb-0 text-center text-lg-start'>Fully Audited and 100% Secure.</p>
                                <p className=' manrope fw-400 text-20 lh-30 links mb-0 pt-10 text-center text-lg-start'>Zero Room for Rug Pulls: Invest with Confidence.</p>
                                <div className=' max-91 pt-32'>
                                    <Common name="Audit" />
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <div className=' my-yellow-line yellow-line w-100'>
                    </div>
                    <Row className=' d-flex flex-column-reverse flex-lg-row '>
                        <Col lg={6} className=' d-flex mt-5 justify-content-center justify-content-lg-end' data-aos="fade-right">
                            <div className=' d-flex flex-column'>
                                <p className=' mb-0 white manrope fw-600 text-32 lh-48 text-center text-lg-start'>Listing on <span className=' yellow'>Major Exchanges</span></p>
                                <p className=' mb-0 links manrope fw-400 text-20 lh-30 max-475 text-center text-lg-start pt-3'>Baby Sinclair’s Team is in action to secure the <span className=' yellow'>$CLAIR</span> listing on major exchanges. Exciting milestones ahead.</p>
                            </div>
                        </Col>
                        <Col lg={6} className=' d-flex justify-content-center justify-content-lg-end align-items-lg-center' data-aos="fade-left">
                            <div className=' slider_box w-100 gradient-border-slider d-flex flex-column '>
                                <Slider {...settings}>
                                    <div className=' white-box cursor position-relative z-2 mx-3'>
                                        <img src={coin1} alt="svg1" />
                                    </div>
                                    <div className=' white-box cursor position-relative z-2 mx-3'>
                                        <img src={coin2} alt="svg2" />
                                    </div>
                                    <div className=' white-box cursor position-relative z-2 mx-3'>
                                        <img src={coin3} alt="svg3" />
                                    </div>
                                    <div className=' white-box cursor position-relative z-2 mx-3'>
                                        <img src={coin4} alt="svg4" />
                                    </div>
                                    <div className=' white-box cursor position-relative z-2 mx-3'>
                                        <img src={coin5} alt="svg5" />
                                    </div>
                                    <div className=' white-box cursor position-relative z-2 mx-3'>
                                        <img src={coin6} alt="svg6" />
                                    </div>
                                </Slider>
                                <div className=' d-flex align-items-center gap-3 pt-lines'>
                                    <div className='w-100 box-line1'></div>
                                    <div className='w-100 box-line2'></div>
                                    <div className='w-100 box-line3'></div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <div className='yellow-ellipse-2 yellow-positon-d5 '></div>
                </Container>
                <div className='yellow-ellipse yellow-positon5 '></div>
            </section>
        </>
    )
}

export default Secure
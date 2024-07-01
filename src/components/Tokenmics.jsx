import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import tokenimg from '../assets/images/tokenomics.webp'
import icon1 from '../assets/images/svg/icon.svg'
import fox from '../assets/images/svg/fox.svg'
import ellipse from '../assets/images/svg/Ellipse.svg'
import pluss from '../assets/images/svg/pluss.svg'
const Tokenmics = () => {
    return (
        <>
            <section className=' bg-black bg-token-img pb-token mt-decrease position-relative' id='Tokenomics'>
                <Container className=' position-relative'>
                    <Row className=' py-token '>
                        <Col lg={6} className=' d-flex justify-content-center justify-content-lg-start align-items-lg-center' data-aos="fade-right">
                            <div className=' d-flex flex-column'>
                                <h2 className=' mb-0 white manrope fw-600 text-48 lh-57 text-center text-lg-start'>Tokenomics</h2>
                                <div className=' d-flex align-items-center gap-3 pt-3  justify-content-center justify-content-lg-start'>
                                    <p className=' mb-0 manrope fw-400 text-24 lh-36 links '>Baby Sinclair</p>
                                    <div className=' clair-box d-flex align-items-center justify-content-center'>
                                        <p className=' manrope fw-400 mb-0 text-24 lh-36 yellow'>$Clair</p>
                                    </div>
                                </div>
                                <p className=' mb-0 manrope fw-500 text-16 lh-24 links  pt-3 pt-md-4 text-center text-lg-start'>Total Tokens</p>
                                <p className=' pt-1 mb-0 yellow manrope fw-600 text-40 lh-48 text-center text-lg-start'>100,000,000,000</p>
                                <div className=' d-flex flex-column gap-12 pt-32'>
                                    <div className=' d-flex align-items-center gap-12'>
                                        <img src={icon1} alt="arrow" />
                                        <div className=' d-flex align-items-end gap-12'>
                                            <p className=' mb-0 manrope fw-500 text-24 lh-36 links'>1%</p>
                                            <p className=' mb-0 links manrope fw-400 text-16 lh-24'>Presale</p>
                                        </div>
                                    </div>
                                    <div className=' d-flex align-items-center gap-12'>
                                        <img src={icon1} alt="arrow" />
                                        <div className=' d-flex align-items-end gap-12'>
                                            <p className=' mb-0 manrope fw-500 text-24 lh-36 links'>3%</p>
                                            <p className=' mb-0 links manrope fw-400 text-16 lh-24'>Marketing</p>
                                        </div>
                                    </div>
                                    <div className=' d-flex align-items-center gap-12'>
                                        <img src={icon1} alt="arrow" />
                                        <div className=' d-flex align-items-end gap-12'>
                                            <p className=' mb-0 manrope fw-500 text-24 lh-36 links'>5%</p>
                                            <p className=' mb-0 links manrope fw-400 text-16 lh-24'>Team - locked for 24 months</p>
                                        </div>
                                    </div>
                                    <div className=' d-flex align-items-center gap-12'>
                                        <img src={icon1} alt="arrow" />
                                        <div className=' d-flex align-items-end gap-12'>
                                            <p className=' mb-0 manrope fw-500 text-24 lh-36 links'>10%</p>
                                            <p className=' mb-0 links manrope fw-400 text-16 lh-24'>Investors - locked for 24 months</p>
                                        </div>
                                    </div>
                                    <div className=' d-flex align-items-center gap-12'>
                                        <img src={icon1} alt="arrow" />
                                        <div className=' d-flex align-items-end gap-12'>
                                            <p className=' mb-0 manrope fw-500 text-24 lh-36 links'>21%</p>
                                            <p className=' mb-0 links manrope fw-400 text-16 lh-24'>Exchange listings & liquidity</p>
                                        </div>
                                    </div>
                                    <div className=' d-flex align-items-center gap-12'>
                                        <img src={icon1} alt="arrow" />
                                        <div className=' d-flex align-items-end gap-12'>
                                            <p className=' mb-0 manrope fw-500 text-24 lh-36 links'>60%</p>
                                            <p className=' mb-0 links manrope fw-400 text-16 lh-24'>Rewards and burns</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col lg={6} className=' d-flex justify-content-center justify-content-lg-end mt-4 mt-lg-0' data-aos="fade-left">
                            <img className=' d-sm-none w-100 max-491' src={tokenimg} alt="image" />
                            <img className='d-none d-sm-block' width="491px" height="565px" src={tokenimg} alt="image" />

                        </Col>
                    </Row>
                    <div className='community-box gradient-border2 w-100 d-flex justify-content-lg-between justify-content-center flex-wrap flex-lg-nowrap align-items-center mx-auto ' data-aos="fade-up">
                        <div className=' d-flex align-items-center gap-community-box  justify-content-center justify-content-lg-start'>
                            <div className=' circle1  z-2 cursor d-flex align-items-center justify-content-center '>
                                <img className=' z-2' src={fox} alt="svg" />
                            </div>
                            <img src={pluss} alt="icon" />
                            <div className=' z-2 circle1  cursor d-flex align-items-center justify-content-center '>
                                <img src={ellipse} alt="svg" />
                            </div>
                        </div>
                        <div className=' d-flex flex-column gap-10 ps-lg-4 pt-4 '>
                            <p className=' mb-0 white manrope fw-600 text-20 lh-30 text-center text-lg-start  z-2'>Baby Sinclair Stands Strong with the Shiba Inu Community</p>
                            <p className=' mb-0 manrope fw-400 text-16 lh-24 links text-center text-lg-start  z-2'>10% of every $CLAIR token sold post-presale will be dedicated to burning SHIB.</p>
                        </div>
                    </div>
                    <div className='yellow-ellipse-2 yellow-positon-d4 '></div>
                </Container>
                <div className='yellow-ellipse yellow-positon4 '></div>
            </section>
        </>
    )
}

export default Tokenmics
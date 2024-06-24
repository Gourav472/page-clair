import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import candle1 from '../assets/images/candles.webp'
import down from '../assets/images/svg/down.svg'
const Roadmap = () => {
    return (
        <>
            <section className=' roadmap-bg py-roadmap mt-decrease position-relative' id='Roadmap'>
                <Container className=' position-relative z-2'>
                    <h2 className=' mb-0 white text-center manrope fw-600 text-48 lh-57 py-roadmap-text'>Roadmap</h2>

                    <Row>
                        <Col md={6} lg={4} className=' mt-col-phase1 d-flex justify-content-center justify-content-md-end justify-content-lg-start'data-aos="flip-left">
                            <div className=' phase1  gradient-phase w-100  d-flex flex-column gap-2'>
                                <h2 className=' manrope fw-500 text-32 lh-48 white mb-0 z-2'>Phase 1</h2>
                                <div className=' d-flex align-items-center gap-2 ps-2 z-2'>
                                    <div className=' dot-grey'></div>
                                    <p className=' mb-0 links manrope fw-500 text-16 lh-24'>Team Recruitment</p>
                                </div>
                                <div className=' d-flex align-items-center gap-2 ps-2 z-2'>
                                    <div className=' dot-grey'></div>
                                    <p className=' mb-0 links manrope fw-500 text-16 lh-24'>Social Media</p>
                                </div>
                                <div className=' d-flex align-items-center gap-2 ps-2 z-2'>
                                    <div className=' dot-grey'></div>
                                    <p className=' mb-0 links manrope fw-500 text-16 lh-24'>Audit Smart Contract</p>
                                </div>
                                <div className=' d-flex align-items-center gap-2 ps-2 z-2'>
                                    <div className=' dot-grey'></div>
                                    <p className=' mb-0 links manrope fw-500 text-16 lh-24'>Whitepaper</p>
                                </div>
                                <div className=' d-flex align-items-center gap-2 ps-2 z-2'>
                                    <div className=' dot-grey'></div>
                                    <p className=' mb-0 links manrope fw-500 text-16 lh-24'>Presale Launch</p>
                                </div>
                                <div className=' d-flex align-items-center gap-2 ps-2 z-2'>
                                    <div className=' dot-grey'></div>
                                    <p className=' mb-0 links manrope fw-500 text-16 lh-24'>Community Growth</p>
                                </div>
                                <div className=' d-flex align-items-center gap-2 ps-2 z-2'>
                                    <div className=' dot-grey'></div>
                                    <p className=' mb-0 links manrope fw-500 text-16 lh-24'>AI Avatars Release</p>
                                </div>
                                <img className='down-position position-absolute d-none d-lg-block' src={down} alt="arrow" />
                            </div>
                        </Col>
                        <Col md={6} lg={4} className='mt-col-phase2 d-flex justify-content-center justify-content-md-start justify-content-lg-center'data-aos="flip-left">
                            <div className=' phase1 gradient-phase w-100  d-flex flex-column gap-2'>
                                <h2 className=' manrope fw-500 text-32 lh-48 white mb-0 z-2'>Phase 2</h2>
                                <div className=' d-flex align-items-center gap-2 ps-2 z-2'>
                                    <div className=' dot-grey'></div>
                                    <p className=' mb-0 links manrope fw-500 text-16 lh-24'>Official Launch</p>
                                </div>
                                <div className=' d-flex align-items-center gap-2 ps-2 z-2'>
                                    <div className=' dot-grey'></div>
                                    <p className=' mb-0 links manrope fw-500 text-16 lh-24'>Burns 5%</p>
                                </div>
                                <div className=' d-flex align-items-center gap-2 ps-2 z-2'>
                                    <div className=' dot-grey'></div>
                                    <p className=' mb-0 links manrope fw-500 text-16 lh-24'>Major DEX & CEX Listings</p>
                                </div>
                                <div className=' d-flex align-items-center gap-2 ps-2 z-2'>
                                    <div className=' dot-grey'></div>
                                    <p className=' mb-0 links manrope fw-500 text-16 lh-24'>Coinmarketcap</p>
                                </div>
                                <div className=' d-flex align-items-center gap-2 ps-2 z-2'>
                                    <div className=' dot-grey'></div>
                                    <p className=' mb-0 links manrope fw-500 text-16 lh-24'>CoinGecko</p>
                                </div>
                                <div className=' d-flex align-items-center gap-2 ps-2 z-2'>
                                    <div className=' dot-grey'></div>
                                    <p className=' mb-0 links manrope fw-500 text-16 lh-24'>Influencers Marketing</p>
                                </div>
                                <div className=' d-flex align-items-center gap-2 ps-2 z-2'>
                                    <div className=' dot-grey'></div>
                                    <p className=' mb-0 links manrope fw-500 text-16 lh-24'>More AI Avatars Release</p>
                                </div>
                                <img className='down-position position-absolute d-none d-lg-block' src={down} alt="arrow" />

                            </div>
                        </Col>
                        <Col md={12} lg={4} className=' mt-4 mt-lg-0 d-flex justify-content-center justify-content-lg-end'data-aos="flip-left">
                            <div className=' phase1 gradient-phase w-100   d-flex flex-column gap-2'>
                                <h2 className=' manrope fw-500 text-32 lh-48 white mb-0 z-2'>Phase 3</h2>
                                <div className=' d-flex align-items-center gap-2 ps-2 z-2'>
                                    <div className=' dot-grey'></div>
                                    <p className=' mb-0 links manrope fw-500 text-16 lh-24'>Burns (5% quarterly)</p>
                                </div>
                                <div className=' d-flex align-items-center gap-2 ps-2 z-2'>
                                    <div className=' dot-grey'></div>
                                    <p className=' mb-0 links manrope fw-500 text-16 lh-24'>Rewards Program</p>
                                </div>
                                <div className=' d-flex align-items-center gap-2 ps-2 z-2'>
                                    <div className=' dot-grey'></div>
                                    <p className=' mb-0 links manrope fw-500 text-16 lh-24'>Multiple Partnerships</p>
                                </div>
                                <div className=' d-flex align-items-center gap-2 ps-2 z-2'>
                                    <div className=' dot-grey'></div>
                                    <p className=' mb-0 links manrope fw-500 text-16 lh-24'>Create your own AI Avatar Voiceover.</p>
                                </div>
                                <div className=' d-flex align-items-center gap-2 ps-2 z-2'>
                                    <div className=' dot-grey'></div>
                                    <p className=' mb-0 links manrope fw-500 text-16 lh-24'>AI Metaverse Avatar Play-to-Earn</p>
                                </div>
                                <img className='down-position position-absolute d-none d-lg-block' src={down} alt="arrow" />

                            </div>
                        </Col>

                    </Row>
                </Container>
                <img className='candles-img position-absolute z-1' src={candle1} alt="candle" />
                <div className='yellow-ellipse yellow-positon6 '></div>
                <div className='yellow-ellipse yellow-positon7 '></div>
            </section>
        </>
    )
}

export default Roadmap
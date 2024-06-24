import React from 'react'
import { Container } from 'react-bootstrap'
import logo11 from '../assets/images/svg/logo11.svg'
import logo22 from '../assets/images/svg/logo22.svg'
import logo33 from '../assets/images/svg/logo33.svg'
import cartoon from "../assets/images/footer-cartoon.webp"
const Social = () => {
    return (
        <>
            <section className=' bg-black py-social position-relative mt-decrease' id='Disclaimer'>
                <Container>
                    <div className=' d-flex flex-column align-items-center'>
                        <div className=' w-100 social-box z-2 gradient-border-social social-box-bg d-flex flex-column' data-aos="zoom-in">
                            <h2 className='mb-0 z-2 manrope fw-600 text-48 lh-57 white text-center'>Our <span className=' yellow'>Socials</span></h2>
                            <p className='z-2 mb-0 grey manrope fw-400 text-16 lh-24 text-center pt-3'>Join us on social media for exclusive giveaways and stay connected!</p>
                            <p className='z-2 yellow mb-0 manrope fw-400 text-20 lh-30 text-center pt-exiting-text'>“Exciting Releases of 'Bad Players' Avatars Coming Soon: Be Ready for the Fun!"</p>
                            <div className=' justify-content-center d-flex align-items-center gap-3 pt-exiting-text'>
                                <a className='z-2' href="https://discord.com/" target='_blank'><img src={logo11} alt="icon" /></a>
                                <a className='z-2' href="https://x.com/?lang=en" target='_blank'><img src={logo22} alt="icon2" /></a>
                                <a className='z-2' href="https://telegram.org/" target='_blank'><img src={logo33} alt="icon3" /></a>
                            </div>
                        </div>
                    </div>
                </Container>
                <img className=' w-100 max-284 cartoon-position position-absolute d-none d-xl-block ' src={cartoon} alt="cartoon" />
                <div className='yellow-ellipse yellow-positon8 '></div>
            </section>
        </>
    )
}

export default Social
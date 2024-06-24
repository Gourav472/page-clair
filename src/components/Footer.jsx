import React from 'react'
import { Container } from 'react-bootstrap'
const Footer = () => {
    return (
        <>
            <footer className='  py-footer footer-bg-image mt-decrease position-relative'>
                <Container id='down'>
                    <div className=' d-flex flex-column align-items-center'>
                        <h2 className=' yellow mb-0 text-center manrope fw-600 text-60 lh-72'>$CLAIR</h2>
                        <p className=' mb-0 max-626 text-center manrope fw-400 text-16 lh-24 grey pt-20'>In this meme-driven world, laughter is not just a reaction; it's a powerful tool for chang
                            and Baby Sinclair is wielding it with style. The bad players better watch out;
                            the crypto defender is here, armed with memes and ready to act.</p>
                        <ul className='d-flex w-100 justify-content-md-center pb-1 align-items-center gap-footer-links pt-footer-links m-0 px-0 overflow_x_scroll w-758'>
                            <li><a href="#About" className=' footer-link-hover manrope fw-500 text-16 lh-24 grey2 text-nowrap'>About</a></li>
                            <li><a href="#Tokenomics" className=' footer-link-hover manrope fw-500 text-16 lh-24 grey2 text-nowrap'>Tokenomics</a></li>
                            <li><a href="#Audit" className=' footer-link-hover manrope fw-500 text-16 lh-24 grey2 text-nowrap'>Audit</a></li>
                            <li><a href="#Roadmap" className=' footer-link-hover manrope fw-500 text-16 lh-24 grey2 text-nowrap'>Roadmap</a></li>
                            <li><a href="#WhitePaper" className=' footer-link-hover manrope fw-500 text-16 lh-24 grey2 text-nowrap'>White Paper</a></li>
                            <li><a href="#Privacy" className=' footer-link-hover manrope fw-500 text-16 lh-24 grey2 text-nowrap'>Privacy</a></li>
                            <li><a href="#cookie" className=' footer-link-hover manrope fw-500 text-16 lh-24 grey2 text-nowrap'>Cookies</a></li>
                            <li><a href="#Disclaimer" className=' footer-link-hover manrope fw-500 text-16 lh-24 grey2 text-nowrap'>Disclaimer</a></li>
                        </ul>
                        <div className=' footer-line w-100'></div>
                        <div className=' d-flex flex-wrap gap-2 gap-sm-0 justify-content-center justify-content-sm-between w-100 align-items-center'>
                            <a className=' mb-0 manrope fw-400 text-16 lh-24 grey' href="mailto:clair@email.com">contact@clairmeme.com</a>
                            <p className=' cursor mb-0 manrope fw-400 text-16 lh-24 grey ps-2'>© 2024 Baby Sinclair All rights reserved</p>
                        </div>
                    </div>
                </Container>
                <div className='yellow-ellipse yellow-positon9 '></div>

            </footer>
        </>
    )
}

export default Footer
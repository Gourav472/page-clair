import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Common from '../common/Common'
import clock from '../assets/images/svg/solid.svg'
import dots from '../assets/images/svg/dots.svg'
import alien from '../assets/images/alien.webp'
import yline from '../assets/images/svg/y1.svg'
import yline1 from '../assets/images/svg/y2.svg'
const About = () => {
    const initialTime = { days: 0, hours: 12, minutes: 46, seconds: 19 };
    const [time, setTime] = useState(initialTime);

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(prevTime => {
                let { days, hours, minutes, seconds } = prevTime;

                // Decrease time by 1 second
                if (days === 0 && hours === 0 && minutes === 0 && seconds === 0) {
                    clearInterval(interval);
                    return { days, hours, minutes, seconds };
                }

                if (seconds === 0) {
                    seconds = 59;
                    if (minutes === 0) {
                        minutes = 59;
                        if (hours === 0) {
                            hours = 23;
                            if (days > 0) {
                                days--;
                            }
                        } else {
                            hours--;
                        }
                    } else {
                        minutes--;
                    }
                } else {
                    seconds--;
                }

                return { days, hours, minutes, seconds };
            });
        }, 1000); // Run every second

        return () => clearInterval(interval); // Clean up interval on component unmount
    }, []);

    const formatTime = (value) => {
        return value.toString().padStart(2, '0');
    };

    return (
        <>
            <section className=' bg-black about-mt position-relative overflow-hidden' id='About'>
                <Container>
                    <div className=' d-flex flex-column align-items-center'>
                        <div className=' about-box z-0 gradient-border w-100 ' data-aos="fade-up">
                            <Row className=' position-relative z-2'>
                                <Col lg={5} className=' d-flex justify-content-center justify-content-lg-start'>
                                    <div className='d-flex flex-column'>
                                        <div className=' d-flex align-items-center gap-about-box'>
                                            <div className=' d-flex flex-column'>
                                                <p className=' mb-0 manrope fw-400 text-16 lh-24 links'>1 $Clair</p>
                                                <p className=' mb-0 manrope fw-400 text-16 lh-24 yellow pt-1'>0.00387 $</p>
                                            </div>
                                            <div className=' gradient-line'>
                                            </div>
                                            <div className=' d-flex flex-column'>
                                                <p className=' mb-0 manrope fw-400 text-16 lh-24 links'>Raised Amount</p>
                                                <p className=' mb-0 manrope fw-400 text-16 lh-24 yellow pt-1'>332,123$</p>
                                            </div>

                                        </div>
                                        <div className=' d-flex align-items-center gap-14 pt-3'>
                                            <div className=' cursor coin-box d-flex align-items-center justify-content-center'>
                                                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <g clip-path="url(#clip0_4101_19)">
                                                        <path d="M15 30C23.3125 30 30 23.3125 30 15C30 6.68745 23.3125 0 15 0C6.68745 0 0 6.68745 0 15C0 23.3125 6.68745 30 15 30Z" fill="#F1F1F1" />
                                                        <path d="M19.1249 17.375C19.1249 15.1875 17.8124 14.4375 15.1874 14.1251C13.3124 13.875 12.9375 13.3751 12.9375 12.5C12.9375 11.6249 13.5625 11.0626 14.8124 11.0626C15.9374 11.0626 16.5625 11.4376 16.8749 12.3751C16.9375 12.5626 17.125 12.6875 17.3125 12.6875H18.3124C18.5624 12.6875 18.7499 12.5 18.7499 12.2501V12.1876C18.4999 10.8125 17.3749 9.75005 15.9374 9.6251V8.1251C15.9374 7.87505 15.75 7.68755 15.4375 7.625H14.5C14.2499 7.625 14.0625 7.8125 13.9999 8.1251V9.56255C12.1249 9.8126 10.9375 11.0625 10.9375 12.6251C10.9375 14.6876 12.1875 15.5 14.8124 15.8126C16.5625 16.1251 17.125 16.5001 17.125 17.5001C17.125 18.5002 16.2499 19.1876 15.0625 19.1876C13.4374 19.1876 12.8749 18.5 12.6874 17.5625C12.625 17.3126 12.4375 17.1875 12.25 17.1875H11.1874C10.9375 17.1875 10.75 17.375 10.75 17.6251V17.6876C10.9999 19.25 12 20.375 14.0624 20.6876V22.1876C14.0624 22.4375 14.25 22.625 14.5624 22.6876H15.4999C15.7499 22.6876 15.9375 22.5001 16 22.1876V20.6876C17.875 20.375 19.1249 19.0625 19.1249 17.375Z" fill="#313131" />
                                                        <path d="M11.8125 23.9374C6.9375 22.1875 4.43745 16.75 6.25005 11.9374C7.18755 9.3124 9.25005 7.31245 11.8125 6.37495C12.0625 6.25 12.1875 6.0625 12.1875 5.7499V4.87495C12.1875 4.6249 12.0625 4.4374 11.8125 4.375C11.7499 4.375 11.625 4.375 11.5624 4.4374C5.625 6.3124 2.37495 12.625 4.24995 18.5624C5.37495 22.0624 8.0625 24.7499 11.5624 25.8749C11.8125 25.9999 12.0625 25.8749 12.1249 25.6249C12.1875 25.5625 12.1875 25.4999 12.1875 25.375V24.4999C12.1875 24.3124 12 24.0625 11.8125 23.9374ZM18.4375 4.4374C18.1875 4.31245 17.9374 4.4374 17.875 4.68745C17.8125 4.75 17.8125 4.8124 17.8125 4.9375V5.81245C17.8125 6.0625 18 6.3124 18.1875 6.4375C23.0625 8.1874 25.5625 13.6249 23.7499 18.4375C22.8124 21.0625 20.7499 23.0624 18.1875 23.9999C17.9374 24.1249 17.8125 24.3124 17.8125 24.625V25.4999C17.8125 25.75 17.9374 25.9375 18.1875 25.9999C18.25 25.9999 18.375 25.9999 18.4375 25.9375C24.375 24.0625 27.625 17.7499 25.75 11.8124C24.625 8.24995 21.8749 5.5624 18.4375 4.4374Z" fill="#313131" />
                                                    </g>
                                                    <defs>
                                                        <clipPath id="clip0_4101_19">
                                                            <rect width="30" height="30" fill="white" />
                                                        </clipPath>
                                                    </defs>
                                                </svg>
                                            </div>
                                            <div className=' cursor coin-box d-flex align-items-center justify-content-center'>
                                                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <g clip-path="url(#clip0_2540_24)">
                                                        <path d="M15 0C23.2833 0 30 6.71667 30 15C30 23.2833 23.2833 30 15 30C6.71667 30 0 23.2875 0 15C0 6.7125 6.71667 0 15 0Z" fill="#F1F1F1" />
                                                        <path d="M17.1124 13.3277V11.0943H22.2165V7.69434H8.3207V11.0943H13.4249V13.3277C9.27904 13.5193 6.1582 14.3402 6.1582 15.3235C6.1582 16.3068 9.27904 17.1277 13.4249 17.3193V24.4652H17.1165V17.3193C21.2582 17.1277 24.3707 16.3068 24.3707 15.3235C24.3665 14.3402 21.254 13.5193 17.1124 13.3277ZM17.1165 16.7152C17.0124 16.7193 16.479 16.7527 15.2874 16.7527C14.3332 16.7527 13.6665 16.7277 13.429 16.7152V16.7193C9.76654 16.5568 7.02904 15.9193 7.02904 15.1568C7.02904 14.3943 9.76237 13.7568 13.429 13.5943V16.0777C13.6707 16.0943 14.354 16.136 15.304 16.136C16.4415 16.136 17.0124 16.0902 17.1207 16.0777V13.586C20.779 13.7485 23.5082 14.386 23.5082 15.1485C23.4999 15.911 20.7707 16.5485 17.1165 16.7152Z" fill="#313131" />
                                                    </g>
                                                    <defs>
                                                        <clipPath id="clip0_2540_24">
                                                            <rect width="30" height="30" fill="white" />
                                                        </clipPath>
                                                    </defs>
                                                </svg>

                                            </div>
                                            <div className=' cursor coin-box d-flex align-items-center justify-content-center'>
                                                <svg width="19" height="30" viewBox="0 0 19 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <g clip-path="url(#clip0_2540_29)">
                                                        <path d="M9.20694 0L9.00586 0.683453V20.5157L9.20694 20.7164L18.4128 15.2748L9.20694 0Z" fill="#F1F1F1" />
                                                        <path d="M9.20688 0L0.000976562 15.2748L9.20688 20.7165V11.0905V0Z" fill="#F1F1F1" />
                                                        <path d="M9.2073 22.4596L9.09399 22.5977V29.6624L9.2073 29.9933L18.4187 17.0208L9.2073 22.4596Z" fill="#F1F1F1" />
                                                        <path d="M9.20688 29.9932V22.4594L0.000976562 17.0205L9.20688 29.9932Z" fill="#F1F1F1" />
                                                        <path d="M9.20703 20.7166L18.4128 15.2751L9.20703 11.0908V20.7166Z" fill="#D9D9D9" />
                                                        <path d="M0.000976562 15.2751L9.20673 20.7167V11.0908L0.000976562 15.2751Z" fill="#C1C1C1" />
                                                    </g>
                                                    <defs>
                                                        <clipPath id="clip0_2540_29">
                                                            <rect width="18.42" height="30" fill="white" />
                                                        </clipPath>
                                                    </defs>
                                                </svg>
                                            </div>
                                            <div className=' cursor coin-box d-flex align-items-center justify-content-center'>
                                                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <g clip-path="url(#clip0_2540_37)">
                                                        <path d="M9.1771 12.6056L15.0037 6.78146L20.8326 12.6104L24.2209 9.21965L15.0037 0L5.78638 9.21728L9.1771 12.6056Z" fill="#F1F1F1" />
                                                        <path d="M0 15.0011L3.38836 11.6104L6.77909 15.0011L3.38836 18.3894L0 15.0011Z" fill="#F1F1F1" />
                                                        <path d="M9.17686 17.394L15.0034 23.2205L20.8323 17.3916L24.2231 20.7776L15.0058 29.9972L5.78613 20.7847L9.17686 17.394Z" fill="#F1F1F1" />
                                                        <path d="M23.2209 15.0011L26.6093 11.6104L30 14.9987L26.6093 18.3918L23.2209 15.0011Z" fill="#F1F1F1" />
                                                        <path d="M18.4417 14.9991L15.0035 11.5586L12.4611 14.101L12.1673 14.3925L11.5654 14.9943L15.0035 18.4301L18.4417 15.0015V14.9991Z" fill="#F1F1F1" />
                                                    </g>
                                                    <defs>
                                                        <clipPath id="clip0_2540_37">
                                                            <rect width="30" height="30" fill="white" />
                                                        </clipPath>
                                                    </defs>
                                                </svg>

                                            </div>
                                        </div>
                                        <div className=' mt-about-btn about-btn'>
                                            <Common name="Buy Now" />
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={7} className=' d-flex  mt-4 mt-md-5 mt-lg-0 ' >
                                    <div className=' d-flex align-items-center align-items-lg-end flex-column w-100'>
                                        <div className=' d-flex justify-content-between w-100 align-items-center max-404'>
                                            <div className=' d-flex flex-column  ps-sm-3'>
                                                <p className=' mb-0 manrope fw-400 text-16 lh-24 links'>Tokens are Sold</p>
                                                <p className=' mb-0 manrope fw-400 text-16 lh-24 yellow pt-1'>98,212,738</p>
                                            </div>
                                            <div className=' d-flex flex-column  pe-4'>
                                                <p className=' mb-0 manrope fw-400 text-16 lh-24 links'>Tokens Remaining</p>
                                                <p className=' mb-0 manrope fw-400 text-16 lh-24 yellow pt-1'>80,212,738</p>
                                            </div>
                                        </div>
                                        <div className=' position-relative w-100 max-404'>
                                            <input type="range" name="range-input" />
                                            <img className='y-line1 position-absolute' src={yline} alt="yellow-line" />
                                            <img className='y-line2 position-absolute' src={yline1} alt="white-line" />
                                        </div>
                                        <p className=' mb-0 grey manrope fw-400 text-14 lh-21 pt-purchase-text'>Purchase $Clair fast until the price increase.</p>
                                        <div className=' d-flex align-items-center flex-wrap justify-content-center gap-time pt-17 '>
                                            <div className=' d-flex align-items-center gap-10'>
                                                <img src={clock} alt="clock" />
                                                <p className=' mb-0 manrope fw-400 text-16 lh-20 white'>Price <span className=' d-sm-block '>increase in</span></p>
                                            </div>
                                            <div className=' d-flex align-items-end gap-2'>
                                                <div className=' d-flex flex-column align-items-center'>
                                                    <p className=' mb-0 manrope fw-400 text-14 lh-21 grey'>Days</p>
                                                    <div className=' time-box d-flex align-items-center justify-content-center'>
                                                        <p className=' mb-0 manrope fw-400 text-24 lh-36 white '>{`${formatTime(time.days)}`}</p>
                                                    </div>
                                                </div>
                                                <img className=' mb-12' src={dots} alt="dots" />
                                                <div className=' d-flex flex-column align-items-center'>
                                                    <p className=' mb-0 manrope fw-400 text-14 lh-21 grey'>Hours</p>
                                                    <div className=' time-box d-flex align-items-center justify-content-center'>
                                                        <p className=' mb-0 manrope fw-400 text-24 lh-36 white'>{`${formatTime(time.hours)}`}</p>
                                                    </div>
                                                </div>
                                                <img className=' mb-12' src={dots} alt="dots" />
                                                <div className=' d-flex flex-column align-items-center'>
                                                    <p className=' mb-0 manrope fw-400 text-14 lh-21 grey'>Mins</p>
                                                    <div className=' time-box d-flex align-items-center justify-content-center'>
                                                        <p className=' mb-0 manrope fw-400 text-24 lh-36 white'>{`${formatTime(time.minutes)}`}</p>
                                                    </div>
                                                </div>
                                                <img className=' mb-12' src={dots} alt="dots" />
                                                <div className=' d-flex flex-column align-items-center'>
                                                    <p className=' mb-0 manrope fw-400 text-14 lh-21 grey'>Secs</p>
                                                    <div className=' time-box d-flex align-items-center justify-content-center'>
                                                        <p className=' mb-0 manrope fw-400 text-24 lh-36 white'>{`${formatTime(time.seconds)}`}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                        <div className=' position-relative '>
                            <h2 className='  mb-0 manrope fw-600 text-48 lh-57 text-center white pt-about-text' data-aos="zoom-in">About <span className=' yellow fw-700'>$CLAIR</span></h2>
                            <div className=' d-flex align-items-center flex-column gap-about-clair '>
                                <p className='z-2 max-776 text-center pt-3 manrope fw-400 text-16 lh-24 grey mb-0' data-aos="fade-right">As you navigate through the avatars, you'll find each one has a unique voice, bringing laughter and a touch of sarcasm to the otherwise serious discussions in the crypto space.</p>
                                <p className='z-2 max-776 text-center manrope fw-400 text-16 lh-24 grey mb-0' data-aos="fade-left">In a landscape where tensions can run high, Baby Sinclair’s memes serve as a reminder that, sometimes, the best way to confront challenges is with a good laugh.</p>
                                <p className='z-2 max-776 text-center manrope fw-400 text-16 lh-24 grey mb-0' data-aos="fade-right">In this meme-driven world, laughter is not just a reaction; it's a powerful tool for change, and Baby Sinclair is wielding it with style. The bad players better watch out; the crypto defender is here, armed with memes and ready to act.</p>
                                <div className='z-2 py-about-btn max-135 d-flex justify-content-center' data-aos="fade-left">
                                    <Common name="Learn More" />
                                </div>
                            </div>
                            <img className='d-none d-sm-block w-100 position-absolute z-1 alien-position max-284' src={alien} alt="alien" />
                        </div>
                    </div>
                </Container>
                <div className='yellow-ellipse yellow-positon2 '></div>
            </section>
        </>
    )
}

export default About
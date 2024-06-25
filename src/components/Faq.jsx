import React from 'react'
import { Accordion, Container } from 'react-bootstrap'

const Faq = () => {
    return (
        <>
            <section className='faq-bg py-faq mt-decrease' id='WhitePaper'>
                <Container>
                    <div className=' flex-column d-flex align-items-center'>
                        <h2 className=' mb-0 manrope fw-600 text-48 lh-57 white text-center' data-aos="fade-right">Frequently Asked <span className='yellow'>Questions</span></h2>
                        <div className='max-w-800 z-30 w-100 mx-auto mt-acordian'>
                            <Accordion defaultActiveKey="0" >
                                <Accordion.Item eventKey="0" data-aos="fade-left">
                                    <Accordion.Header className=' manrope lh-24 text-16 para-color fw-400 '>WHAT IS $CLAIR?</Accordion.Header>
                                    <Accordion.Body className=' '>
                                        <span className=' manrope fw-400 text-16 lh-24 para-color'>
                                            Built on the Ethereum blockchain and powered by the most advanced<span className=' d-block'></span>AI technology, Baby Sinclair has the potential to make millions.   </span>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1" className='mt_accordian' data-aos="fade-right">
                                    <Accordion.Header className=' manrope lh-24 text-16 para-color fw-400 '>Arcu in pellentesque sit odio.</Accordion.Header>
                                    <Accordion.Body className=' '>
                                        <span className=' manrope fw-400 text-16 lh-24 para-color'>
                                            Built on the Ethereum blockchain and powered by the most advanced<span className=' d-block'></span>AI technology, Baby Sinclair has the potential to make millions.   </span>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="3" className='mt_accordian' data-aos="fade-left">
                                    <Accordion.Header className=' manrope lh-24 text-16 para-color fw-400 '>Lorem gravida feugiat aliquet arcu porttitor sodales tellus habitant sed.</Accordion.Header>
                                    <Accordion.Body className=' '>
                                        <span className=' manrope fw-400 text-16 lh-24 para-color'>
                                            Built on the Ethereum blockchain and powered by the most advanced<span className=' d-block'></span>AI technology, Baby Sinclair has the potential to make millions.   </span>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="4" className='mt_accordian' data-aos="fade-right">
                                    <Accordion.Header className=' manrope lh-24 text-16 para-color fw-400 '>Metus augue dictumst sit amet.</Accordion.Header>
                                    <Accordion.Body className=' '>
                                        <span className=' manrope fw-400 text-16 lh-24 para-color'>
                                            Built on the Ethereum blockchain and powered by the most advanced<span className=' d-block'></span>AI technology, Baby Sinclair has the potential to make millions.   </span>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="5" className='mt_accordian' data-aos="fade-left">
                                    <Accordion.Header className=' manrope lh-24 text-16 para-color fw-400 '>Elementum viverra tellus tincidunt nunc odio at id ipsum.</Accordion.Header>
                                    <Accordion.Body className=' '>
                                        <span className=' manrope fw-400 text-16 lh-24 para-color'>
                                            Built on the Ethereum blockchain and powered by the most advanced<span className=' d-block'></span>AI technology, Baby Sinclair has the potential to make millions.   </span>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="6" className='mt_accordian' data-aos="fade-right">
                                    <Accordion.Header className=' manrope lh-24 text-16 para-color fw-400 '>Sagittis morbi aliquam facilisis ornare lacus tempus massa.</Accordion.Header>
                                    <Accordion.Body className=' '>
                                        <span className=' manrope fw-400 text-16 lh-24 para-color'>
                                            Built on the Ethereum blockchain and powered by the most advanced<span className=' d-block'></span>AI technology, Baby Sinclair has the potential to make millions.   </span>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="7" className='mt_accordian' data-aos="fade-left">
                                    <Accordion.Header className=' manrope lh-24 text-16 para-color fw-400 '>Elementum at dui varius consequat fringilla.</Accordion.Header>
                                    <Accordion.Body className=' '>
                                        <span className=' manrope fw-400 text-16 lh-24 para-color'>
                                            Built on the Ethereum blockchain and powered by the most advanced<span className=' d-block'></span>AI technology, Baby Sinclair has the potential to make millions.   </span>
                                    </Accordion.Body>
                                </Accordion.Item>

                            </Accordion>
                        </div>
                    </div>
                </Container>
            </section>
        </>
    )
}

export default Faq
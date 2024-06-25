import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import Common from '../common/Common';

const Address = () => {
    const [inputValue, setInputValue] = useState('0xFD1929755F73f974648daD00ab491a7C44a00eeD');
    const [buttonText, setButtonText] = useState('Copy');

    const handleCopy = () => {
        const inputField = document.getElementById('myInput');

        if (inputField) {
            inputField.select();
            document.execCommand('copy');
            setButtonText('Copied');
            setTimeout(() => {
                alert("Copied successfully!");
                setButtonText('Copy');
            }, 100);
        }
    };
    return (
        <>
            <section className='address-bg mt-decrease position-relative ' id='cookie'>
                <Container>
                    <div className='d-flex flex-column align-items-center py-address'>
                        <h2 className='mb-0 manrope fw-600 text-48 lh-57 text-center white'data-aos="fade-up">
                            <span className='yellow'>$CLAIR</span> Smart Contract Address
                        </h2>
                        <div className='w-100 copy-box d-flex justify-content-between mt-4'data-aos="fade-up">
                            <input
                                className='w-100 input-copy manrope fw-400 text-16 lh-24 links'
                                type="text"
                                id="myInput"
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                            />
                            <div className='ps-3' onClick={handleCopy} >
                                <Common name={buttonText} />
                            </div>
                        </div>
                        <p className='max-806 pt-32 manrope fw-400 text-16 lh-24 text-center mb-0 grey'data-aos="fade-up">
                            Built on the Ethereum blockchain and powered by the most advanced AI technology, Baby Sinclair has the potential to make millions in both early stages and long-term investment. Our strategic burn system, which will burn millions of $CLAIR quarterly, aims to increase its value significantly. Don't miss out! Get in early and secure your chance to become the next millionaire.
                        </p>
                    </div>
                </Container>
                <div className='yellow-ellipse yellow-positon3 '></div>
            </section>
        </>
    );
};

export default Address;

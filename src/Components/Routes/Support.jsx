import React, { useEffect, useState } from 'react'

export const Support = () => {

    const [resizes, setResizes] = new useState(window.innerWidth);

    useEffect(() => {
        const screenSize = () => {
            setResizes(window.innerWidth);
        };
        window.addEventListener('resize', screenSize());
        return () => window.removeEventListener('resize', screenSize());
    }, [])

    return (
        <div className='support-content display-center'>


            <section className="logotype-web display-center">
                <div className="logotype-web-content display-center">
                    <img src="./Images/logo.png" alt="" className="logotype-support" />
                </div>
                <div className='text-description-page-content display-center'>
                    <h5>Write to me, I will be happy to read your messages and start a pleasant conversation!</h5>
                </div>
            </section>


            <section className="contact-info display-center">
                <div className="contacts-content">
                    <div className="contacts-image-content display-center">
                        <img src="./Images/email.png" alt="Ícono de email" title='Email directo del desarrollador' className='image-contacts' />
                    </div>
                    <div className="contacts-info-content">
                        <h4 className="title-contacts-info">Email:</h4>
                        <p className="description-contacts-info">juliancastrillon681@gmail.com<br />julian.castrillon234@pascualbravo.edu.co</p>
                    </div>
                </div>
                <div className="contacts-content">
                    <div className="contacts-image-content display-center">
                        <img src="./Images/phone.png" alt="Ícono de dispositivo movil" title='Número de teléfono directo del desarrollador' className='image-contacts' />
                    </div>
                    <div className="contacts-info-content">
                        <h4 className="title-contacts-info">Phone Number:</h4>
                        <p className="description-contacts-info">(+57) 3192110866</p>
                    </div>
                </div>
            </section>
        </div>
    )
}

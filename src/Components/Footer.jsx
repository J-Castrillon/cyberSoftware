import React from 'react'

const git = 'https://github.com/J-Castrillon?tab=repositories';
const linkedIn = 'https://www.linkedin.com/in/juli%C3%A1n-castrill%C3%B3n-364056168/';
const instagram = 'https://www.instagram.com/juliancastrillon17/';

export const Footer = () => {
    return (
        <footer className='footer-component display-center'>
            <section className='footer-section display-center'>
                <div className="nets display-center
                ">
                    <a href={git} target='_blank' className='link-footer display-center'>
                        <img src="./Images/github.png"
                            alt="Ir al repositorio del desarrollador"
                            title='Repositorio del desarrollador'
                            className="img-nets" />
                    </a>
                </div>
                <div className="nets display-center
                ">
                    <a href={linkedIn} target='_blank' className='link-footer display-center'>
                        <img src="./Images/linkedin.png"
                            alt="Ir al perfil de Linkedin del desarrollador"
                            title='Perfil de Linkedin del desarrollador'
                            className="img-nets" />
                    </a>
                </div>
                <div className="nets display-center
                ">
                    <a href={instagram} target='_blank' className='link-footer display-center'>
                        <img src="./Images/instagram.png"
                            alt=" al perfil de Instagram del desarrollador"
                            title="Perfil de Instagram del desarrollador"
                            className="img-nets" />
                    </a>
                </div>
            </section>
            <section className='footer-section display-center'>
                <div className="paragraph-footer display-center">
                    <h4 id='copy-message'>&copy;2023 All rights reserved</h4>
                </div>
            </section>
        </footer>
    )
}

import React from 'react'
import { Link } from 'react-router-dom'; 

export const Error = () => {
    return (
        <div id='landing-error' className='display-center'>
            <div id="info-error" className='display-center error-contents'>
                <h2 id='error-title'>Error...</h2>
                <p className='error-paragraph'>La url no pudo encontrarse dentro del sitio</p>
                <Link to='/features' id='backToHome' className='display-center'><p>Volver al inicio</p></Link>
            </div>
            <div id="image-error-content" className='display-center error-contents'>
                <img src='/images/errorImage.jpg'
                    id='image-error'
                    alt="Esta url dentro de este sitio no está disponible - Error image"
                    title='Error-image' />
            </div>
        </div>
    )
}

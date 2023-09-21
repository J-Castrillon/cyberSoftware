import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import Nav from './Nav';

export const Header = () => {

    const [resizes, setResizes] = new useState(window.innerWidth);

    useEffect(() => {
        window.addEventListener('resize', screenSize());
        return () => window.removeEventListener('resize', screenSize());
    }, [])

    useEffect(()=>{screenSize()},[resizes]);

    const screenSize = () => {
        setResizes(window.innerWidth);
    };

    return (
        <header className='header-component display-center'>
            {/* Nav */}
            <Nav />
            {/* Logo */}
            {
                resizes > 600 &&
                    (<div id='logo-header' className='display-center'>
                        <img src="./Images/logo.png" alt="Logotipo CyberSoftware" title="Logotipo CyberSoftware" />
                    </div>)
            }
            {/* Posible botón */}
            <div id='button-session' className='display-center'>
                <button className='buttons header-button'>Sign in</button>
            </div>
        </header>
    )
}

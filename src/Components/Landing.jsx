import React, { useState } from 'react'
import { Header } from './Header'
import { Outlet } from 'react-router-dom'
import { Footer } from './Footer'
import { Error } from './Routes/Error'

// Este es el componente donde se van a imprimir todos los demás componentes; 

export const Landing = () => {

    return (
        <div id='landing-component'>
            <Header />
            <main className='main display-center'>
                <Outlet /> {/* Salida del router */}
            </main>
            <aside className='aside'>

            </aside>
            <Footer />
        </div>
    )
}

import React from 'react'
import { Routes, Route, Link, NavLink, BrowserRouter, Navigate } from 'react-router-dom';
import { Landing } from '../Components/Landing';
import { Features } from '../Components/Routes/Features';
import { Error } from '../Components/Routes/Error';
import { Saves } from '../Components/Routes/Saves';
import { Support } from '../Components/Routes/Support';
import { Detail } from '../Components/Routes/Detail';

export const MainRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Landing />}>
                    <Route path='' element={<Navigate to={'features'}/>} />
                    <Route path='features' element={<Features />} />
                    <Route path='saves' element={<Saves />} />
                    <Route path='support' element={<Support />} />
                    <Route path='features/:title' element={<Detail />} />
                </Route>
                <Route path='/*' element={<Error />}></Route>
            </Routes>
        </BrowserRouter>
    )
}
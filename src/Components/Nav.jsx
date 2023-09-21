import React from 'react'
import { NavLink } from 'react-router-dom';

const Nav = ({showList}) => {

    const show = showList; 

    const active = isActive => {
        return isActive ? 'navLink active' : 'navlink';
    }

    return (
        <nav id='nav-main'>
            <ul className='display-center'>
                <li><NavLink to="/features" className={({ isActive }) => active(isActive)}>Features</NavLink></li>
                <li><NavLink to="/saves" className={({ isActive }) => active(isActive)}>Favorites</NavLink></li>
                <li><NavLink to="/support" className={({ isActive }) => active(isActive)}>Support</NavLink></li>
            </ul>
        </nav>
    )
}

export default Nav
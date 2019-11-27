import React from 'react';
import './navbar.scss';
import logo from '../../images/logo.png';
export default function navbar() {
    return (
        <nav className='navbar'> 
        <img src={logo} alt='logo' />
        <ul className='navlinks'>
            <li> <a href='' className='navlink active'> Home </a> </li>
            <li> <a href='' className='navlink'> About </a> </li>
            <li> <a href='' className='navlink'> Tours </a> </li>
        </ul>
         </nav>
    );
}

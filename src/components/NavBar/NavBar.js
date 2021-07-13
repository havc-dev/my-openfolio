import React, { useState } from "react"
import { NavLink } from 'react-router-dom';

import Logo from '../Logo/Logo';
import './NavBar.css';

const NavBar = () => {

    const [isHidden, setIsHidden] = useState(true)
    
    return (
        <div className='nav-bar'>
            <div className='nav-logo'>
                    <a href='/' className="logo-link">
                        <Logo id="nav"/>
                    </a>
            </div>
                <button  onClick={ () => setIsHidden(!isHidden)} 
                    className='menu'
                    >
                    <i className="fas fa-bars fa-2x" ></i>
                </button>
            <nav className={!isHidden ? "nav-links menu-enter menu-enter-active" : "nav-links menu-exit menu-exit-active" }>
                <NavLink activeClassName="current" className='nav-link' to="/" exact={true}>
                    Home
                </NavLink>
                <NavLink activeClassName="current" className='nav-link' to="/about">
                    About Me
                </NavLink>
                <NavLink activeClassName="current" className='nav-link' to="/projects">
                    Projects
                </NavLink>
                <NavLink activeClassName="current" className='nav-link' to="/contact">
                    Contact
                </NavLink>
            </nav>
        </div>
    )
}

export default NavBar


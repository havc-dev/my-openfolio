import { NavLink } from 'react-router-dom';

import Logo from '../Logo/Logo';
import './NavBar.css';

const NavBar = () => {
    return (
        <div className='nav-bar'>
            <div className='nav-logo'>
                    <a href='/' className="logo-link">
                        <Logo id="nav"/>
                    </a>
                </div>
            <nav className='nav-links'>
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

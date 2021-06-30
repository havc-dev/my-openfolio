import { NavLink } from 'react-router-dom';

import Logo from '../Logo/Logo';
import './NavBar.css';

const NavBar = () => {
    return (
        <div className='nav-container'>
            <div className='nav-bar'>
                <div className='nav-logo'>
                    <a href='/'>
                        <Logo id="nav"/>
                    </a>
                </div>
                <nav className='nav-links'>
                    <ul>
                        <div className='nav-link-wrapper'>
                            <NavLink activeClassName="current" className='nav-link' to="/" exact={true}>
                                Home
                            </NavLink>
                        </div>
                        <div className='nav-link-wrapper'>
                            <NavLink activeClassName="current" className='nav-link' to="/about">
                                About Me
                            </NavLink>
                        </div>
                        <div className='nav-link-wrapper'>
                            <NavLink activeClassName="current" className='nav-link' to="/projects">
                                Projects
                            </NavLink>
                        </div>
                        <div className='nav-link-wrapper'>
                            <NavLink activeClassName="current" className='nav-link' to="/contact">
                                Contact
                            </NavLink>
                        </div>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default NavBar

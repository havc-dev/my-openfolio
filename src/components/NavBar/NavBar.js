import { useContext } from 'react';
import { AppContext } from '../../context/appContext';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    const ctx = useContext(AppContext)
    return (
        <div className="nav-container">
            <div className='nav-bar'>
                <div className='nav-logo'>
                    <NavLink to="/" exact={true}>
                        <div className='nav-logo-pt1'>{ctx.info.navbar.logo.div}<span className='nav-logo-pt2'>{ctx.info.navbar.logo.span}</span></div>
                    </NavLink>
                </div>
                <nav className="nav-links">
                    <NavLink activeClassName="current" className='nav-link' to="/" exact={true}>
                        Home
                    </NavLink>
                    <NavLink activeClassName="current" className='nav-link' to="/about">
                        About
                    </NavLink>
                    <NavLink activeClassName="current" className='nav-link' to="/projects">
                        Projects
                    </NavLink>
                    <NavLink activeClassName="current" className='nav-link' to="/contact">
                        Contact
                    </NavLink>
                </nav>
            </div>
        </div>
    )
}

export default NavBar


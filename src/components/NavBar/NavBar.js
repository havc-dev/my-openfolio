import { NavLink } from 'react-router-dom';

import './NavBar.css';

const NavBar = (props) => {
    
    const { info } = props;
    const { logo } = info;
    const { div, span } = logo;

    return (
        <div className="nav-container">
        <div className='nav-bar'>
            <div className='nav-logo'>
                <a href="/">
                    <h1 className='nav-logo-pt1'>{div}<span className='nav-logo-pt2'>{span}</span></h1>
                </a>
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


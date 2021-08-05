import { NavLink } from "react-router-dom";
import ContactLinks from '../ContactLinks/ContactLinks'
import './Footer.css'

const Footer = (props) => {

    const { info } = props;
    const year = new Date().getFullYear();
    
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-rights">
                    <NavLink to="/" className="footer-text">Adrián Curiel</NavLink>
                    <p className="footer-year">&#174; {year}</p>
                </div>
                <div className="footer-contact">
                    <ContactLinks links={ info }/>
                </div>
            </div>
        </footer>
    )
}

export default Footer

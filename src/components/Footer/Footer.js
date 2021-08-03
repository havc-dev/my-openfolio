import ContactLinks from '../ContactLinks/ContactLinks'
import './Footer.css'

const Footer = (props) => {

    console.log(props.info);
    const { info } = props;
    const year = new Date().getFullYear();
    
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-rights">
                    <a href="/">
                        <p className="footer-text">Adrián Curiel</p>
                    </a>
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

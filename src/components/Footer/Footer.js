import ContactLinks from '../ContactLinks/ContactLinks'
import './Footer.css'

const Footer = (props) => {

    console.log(props.info);
    const { info } = props;

    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-rights">
                    <p className="footer-rights-text">Adrián Curiel <span>&#174; {new Date().getFullYear()}</span></p>
                </div>
                <div className="footer-contact">
                    <ContactLinks links={ info }/>
                </div>
            </div>
        </footer>
    )
}

export default Footer

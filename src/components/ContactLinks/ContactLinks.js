import './ContactLinks.css';

const ContactLinks = (props) => {
    const { links } = props;
    const { my_email, my_phone_unformatted, my_repo } = links;
    const whatsapp = `https://wa.me/${my_phone_unformatted}`;
    const phoneHref = `tel:+${my_phone_unformatted}`;
    const mailto = `mailto:${my_email}`;

    return (
        <div className="contact-links">
            <div className="contact-link">
                <a className="anchor" href={phoneHref}>
                <i className="fas fa-phone contact-icon"></i>
                 Call me
                </a>
            </div>
            <div className="contact-link">
                <a className="anchor" href={whatsapp}>
                    <i className="fa fa-whatsapp contact-icon" aria-hidden="true"></i>
                     WhatsApp
                </a>
            </div>
            <div className="contact-link">
                <a className="anchor" href={mailto}>
                    <i className="fas fa-at contact-icon"></i>
                     E-mail
                </a>
            </div>
            <div className="contact-link">
                <a className="anchor" href={my_repo} target={my_repo}>
                    <i className="fas fa-code-branch contact-icon"></i>
                     My repository
                </a>
            </div>
        </div>
    )
}

export default ContactLinks

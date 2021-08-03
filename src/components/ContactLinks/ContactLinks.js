import ContactLink from './ContactLink';
import './ContactLinks.css';

const ContactLinks = (props) => {

    const { links } = props;
    const { my_email, my_phone_unformatted, my_repo } = links;
    const whatsapp = `https://wa.me/${my_phone_unformatted}`;
    const phoneHref = `tel:+${my_phone_unformatted}`;
    const mailto = `mailto:${my_email}`;
    const iconPhone = "fas fa-phone";
    const iconWhatsapp = "fa fa-whatsapp";
    const iconMail = "fas fa-at";
    const iconRepository = "fas fa-code-branch";

    return (
        <div className="contact-links">
            <ContactLink href={phoneHref} name="Call Me" icon={iconPhone} />
            <ContactLink href={whatsapp} name="WhatsApp" icon={iconWhatsapp} />
            <ContactLink href={mailto} name="E-mail" icon={iconMail} />
            <ContactLink href={my_repo} newtab={my_repo} name="Repository" icon={iconRepository} />
        </div>
    )
}

export default ContactLinks

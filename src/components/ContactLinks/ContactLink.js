const ContactLink = (props) => {

    const { href, name, icon, newtab } = props;
    const classes = `${icon} anchor-icon`;

    return (
        <div className="contact-link">
            <a className="anchor" href={href} target={!newtab ? null : newtab}>
                <i className={classes}></i>
                <p className="anchor-text">{name}</p>
            </a>
        </div>
    )
}

export default ContactLink

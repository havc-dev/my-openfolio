import './Link.css'

const Link = (props) => {

    const { link } = props;
    const { className, btn_text, icon, href } = link;
    const classes = `link-icon ${icon}`;

    return (
                <a href={href} className={className}>
                    <i className={classes}/>{btn_text}
                </a>
    )
}

export default Link

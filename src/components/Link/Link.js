import './Link.css'

const Link = (props) => {

    const { link } = props;
    const { className, btn_text, icon, href } = link;
    const a_classes = `link-${className}`;
    const i_classes = `link-icon ${icon}`;

    return (
        <>
                <a href={href} className={a_classes}>
                    <i className={i_classes}/>{btn_text}
                </a>
        </>
    )
}

export default Link

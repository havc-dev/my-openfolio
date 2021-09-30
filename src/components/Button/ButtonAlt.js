const ButtonAlt = (props) => {

    const classes = `btn-alt ${props.className}`;

    const { onClick, btn_text, icon, type } = props;

    return (
        <div className="btn-container">
            <button className={classes} onClick={onClick} type={type}>
                <i className={icon}></i>{btn_text}
            </button>
        </div>
    )
}

export default ButtonAlt

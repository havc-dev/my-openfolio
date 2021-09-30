const Button = (props) => {

    const classes = `btn ${props.className}`;

    const { onClick, btn_text, icon, type } = props;

    return (
        <div className="btn-container">
            <button className={classes} onClick={onClick} type={type}>
                <i className={icon}></i>{btn_text}
            </button>
        </div>
    )
}

export default Button

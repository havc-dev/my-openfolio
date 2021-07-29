import './Button.css'

const ButtonAlt = (props) => {

    const classes = `btn-alt ${props.className}`;

    const { onClick, btn_text, icon, type } = props;

    return (

        <button className={classes} onClick={onClick} type={type}>
            <i className={icon}></i>{btn_text}
        </button>

    )
}

export default ButtonAlt

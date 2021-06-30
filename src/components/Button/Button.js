import './Button.css'
import ButtonWrapper from './ButtonWrapper';

const Button = (props) => {

    const classes = `btn-${props.className}`;

    const { onClick, btn_text, icon, type } = props;

    return (

        <ButtonWrapper>
            <button className={classes} onClick={onClick} type={type}>
                <i className={icon}></i>{btn_text}
            </button>
        </ButtonWrapper>

    )
}

export default Button

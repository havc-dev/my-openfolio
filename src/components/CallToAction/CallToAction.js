import ButtonWrapper from '../Button/ButtonWrapper';
import Button from '../Button/Button';
import './CallToAction.css'

const CallToAction = (props) => {

    function clickHandler(e) {
        e.preventDefault();
        console.log('You clicked cta hire me.');
        console.log(icon)
      }

    const { className, btn_text, icon, type } = props;
    return (
        <ButtonWrapper>
            <Button
                className={className}
                icon={icon}
                btn_text={btn_text}
                type={type}
                onClick={clickHandler}
            />
        </ButtonWrapper>
    )
}

export default CallToAction

import ButtonWrapper from '../Button/ButtonWrapper';
import './Link.css'

const Link = (props) => {

    const { link } = props;
    const { className, btn_text, icon, href } = link;
    const classes = `link-icon ${icon}`;

    return (
        <ButtonWrapper>
                <a href={href} className={className}>
                    <i className={classes}></i>
                    {btn_text}
                </a>
        </ButtonWrapper>
    )
}

export default Link

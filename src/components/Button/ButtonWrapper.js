import './ButtonWrapper.css';

const ButtonWrapper = (props) => {
    return (
        <div className="btn-wrapper">
            {props.children}
        </div>
    )
}

export default ButtonWrapper

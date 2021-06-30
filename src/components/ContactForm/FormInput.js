const FormInput = (props) => {

    const { label, name, type, placeholder } = props;

    return (
        <div className="col">
            <label>{label}</label>
            <input type={type} name={name} className="form-control" placeholder={placeholder} required></input>
        </div>
    )
}

export default FormInput

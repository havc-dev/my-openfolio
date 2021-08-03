const TextArea = ( props ) => {

    const { label,placeholder, name } = props;

    return (
        <div className="text-area">
            <input type="hidden" name="_subject" value="New submission!"></input>
            <label>{label}</label>
            <textarea placeholder={placeholder} className="form-control" name={name} rows="10" required></textarea>
        </div>
    )
}

export default TextArea

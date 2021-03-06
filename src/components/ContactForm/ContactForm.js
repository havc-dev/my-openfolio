import Button from "../Button/Button";
import FormInput from "./FormInput";
import TextArea from "./TextArea";
import Header from "../layout/Header";

import './ContactForm.css';

const ContactForm = (props) => {

    const { my_email, input_fields, text_area, button, title } = props;
    const { className, icon, btn_text, type } = button;

    const action = `https://formsubmit.co/${my_email}`;

    return (
        <form target="_blank" action={action} method="POST" className="contact-form">
            <div className="form-header">
                    <Header title={title}/>
                </div>
            <div className="form-group">
                {input_fields.map((input_field) =>
                    <FormInput
                        key={input_field.label}
                        label={input_field.label}
                        name={input_field.name}
                        type={input_field.type}
                        placeholder={input_field.placeholder}
                    />
                )}
            </div>
            <div className="form-group">
                <TextArea 
                    label={text_area.label}
                    placeholder={text_area.placeholder}
                    name={text_area.name}
                />
            </div>
            <Button type={type} icon={icon} btn_text={btn_text} className={className} />
        </form>
    )
}

export default ContactForm

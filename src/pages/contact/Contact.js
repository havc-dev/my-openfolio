import Header from '../../components/layout/Header';
import ContactForm from '../../components/ContactForm/ContactForm';

import './Contact.css';

const Contact = (props) => {

    const { info } = props;
    const { title, my_email, input_fields, text_area, button } = info;

    return (
        <div className="page-wrapper">
            <main className="contact">
                <div className="header">
                    <Header title={title}/>
                </div>
                <p className="contact-text">If you want us to work together or you are a recruiter and want to talk about it, do not hesitate and contact me.</p>
                <ContactForm 
                    my_email={my_email}
                    input_fields={input_fields}
                    text_area={text_area}
                    button={button}
                />
            </main>
        </div>
)
    }
 
 export default Contact;
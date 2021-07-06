import Main from '../../components/layout/Main';
import ContactForm from '../../components/ContactForm/ContactForm';

import './Contact.css';
import NavBar from '../../components/NavBar/NavBar';

const Contact = (props) => {

    const { info } = props;
    const { title, my_email, input_fields, text_area, button } = info;

    return (
        <div className="contact-wrapper">
            <NavBar />
            <main className="contact">
                <ContactForm 
                    my_email={my_email}
                    input_fields={input_fields}
                    text_area={text_area}
                    button={button}
                    title={title}               
                />
            </main>
        </div>
)
    }
 
 export default Contact;
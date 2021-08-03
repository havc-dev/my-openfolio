import Header from '../../components/layout/Header';
import ContactForm from '../../components/ContactForm/ContactForm';
import ContactLinks from '../../components/ContactLinks/ContactLinks';

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
                    <div className="contact-links-container">
                        <h4 className="contact-links-title">Contact options:</h4>
                        <ContactLinks links={ info } />
                        <h4 className="contact-links-subtitle">Or you can save time using this form:</h4>
                    </div>
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
import ContactForm from '../../components/ContactForm/ContactForm';
import ContactLinks from '../../components/ContactLinks/ContactLinks';
import Header from '../../components/layout/Header';

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
                <ContactForm 
                    my_email={my_email}
                    input_fields={input_fields}
                    text_area={text_area}
                    button={button}       
                />
                {/* <ContactLinks links={info}/> */}
            </main>
        </div>
)
    }
 
 export default Contact;
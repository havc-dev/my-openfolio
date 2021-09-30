import { useContext } from 'react';
import AppContext from '../context/appContext';

import ContactForm from '../components/ContactForm/ContactForm';


const Contact = () => {
    const ctx = useContext(AppContext)
    console.log(ctx)
    const { title, my_email, input_fields, text_area, button } = ctx.info.contact;

    return (
        <div className="page-wrapper-contact">
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
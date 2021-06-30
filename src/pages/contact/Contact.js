import Main from '../../components/layout/Main';
import NavBarSpacer from '../../components/layout/NavBarSpacer'; 
import ContactForm from '../../components/ContactForm/ContactForm';

import './Contact.css';

const Contact = (props) => {

    const { info } = props;
    const { title, my_email, input_fields, text_area, button } = info;

    return (
    <>
        <Main>
            <NavBarSpacer />
            <ContactForm 
                my_email={my_email}
                input_fields={input_fields}
                text_area={text_area}
                button={button}
                title={title}               
            />
        </Main>
    </>
)
    }
 
 export default Contact;
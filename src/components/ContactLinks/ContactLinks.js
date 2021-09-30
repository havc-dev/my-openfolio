import ContactLink from "./ContactLink";

const ContactLinks = ({ links }) => {
//   let whatsapp = `https://wa.me/${links.my_phone_unformatted}`;
//   let phoneHref = `tel:+${links.my_phone_unformatted}`;
//   let mailto = `mailto:${links.my_email}`;

  const exampleWhatsApp = `https://wa.me/000000000000`;
  const examplePhone = `tel:+000000000000`;
  const exampleMail = `mailto:example@email.com`;

  const my_repo = 'repo link'
  const iconPhone = "fas fa-phone";
  const iconWhatsapp = "fa fa-whatsapp";
  const iconMail = "fas fa-at";
  const iconRepository = "fas fa-code-branch";

  return (
    <div className='contact-links'>
      <ContactLink
        href={links ? null : examplePhone}
        name='Call Me'
        icon={iconPhone}
      />
      <ContactLink
        href={links ? null : exampleWhatsApp}
        name='WhatsApp'
        icon={iconWhatsapp}
      />
      <ContactLink
        href={links ? null : exampleMail}
        name='E-mail'
        icon={iconMail}
      />
      <ContactLink
        href={my_repo}
        newtab={my_repo}
        name='Repository'
        icon={iconRepository}
      />
    </div>
  );
};

export default ContactLinks;

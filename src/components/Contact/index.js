import React from 'react';

import './contact.scss';
import contact from './contact.png';
import Field from './Field';

const Contact = ({ contactValue, handleChange }) => (
<div className="contact">
  <form className="contact__form">
    <div className="form__container">
      <h2 className="contact__h2">Contactez-moi</h2>
      <Field
        placeholder="Nom"
        value={contactValue.lastname}
        name="lastname"
        handleChange={handleChange}
      />
      <Field
        placeholder="Prénom"
        value={contactValue.firstname}
        name="firstname"
        handleChange={handleChange}
      />
      <Field
        placeholder="Email"
        value={contactValue.mail}
        name="mail"
        handleChange={handleChange}
      />
      <textarea
        className="contact__field
        contact__field--textarea"
        type="text"
        placeholder="Dites moi tout"
        value={contactValue.message}
        name="message"
        onChange={(e) => {
          handleChange(e.target);
        }}
      />
      <button className="btn-contact btn-contact--form" type="submit">Envoyer</button>
    </div>
  </form>
  <div className="contact__illu">
      <img src={contact} alt="" />
  </div>
</div>
);

export default Contact;

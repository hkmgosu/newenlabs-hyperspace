import React from 'react';

const ContactForm = () => (
  <section>
    <form
      method="post"
      name="email_form"
      onSubmit={() => {
        document.email_form.action =
          'mailto:contact@newenlabs.dev?subject=Consulta&body=' +
          document.getElementById('email_message').value;
        return false;
      }}
    >
      <div className="fields">
        <div className="field half">
          <label htmlFor="name">Nombre</label>
          <input type="text" name="name" id="name" />
        </div>
        <div className="field half">
          <label htmlFor="email">Email</label>
          <input type="text" name="email" id="email" />
        </div>
        <div className="field">
          <label htmlFor="message">Mensaje</label>
          <textarea name="message" id="email_message" rows="5" />
        </div>
      </div>
      <ul className="actions">
        <li>
          <button className="button submit" type="submit">
            Enviar Mensaje
          </button>
        </li>
      </ul>
    </form>
  </section>
);

export default ContactForm;

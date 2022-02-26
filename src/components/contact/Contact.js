import React from 'react';

import ContactForm from './ContactForm';
import ContactInformation from './ContactInformation';

const Contact = () =>
  <section id="contact" className="wrapper style1 fade-up">
    <div className="inner">
      <h2>Contacto</h2>
      <p>
        En la primera conversación, se puede ver el honor detrás de las palabras.
      </p>
      <div className="split style1">
        <ContactForm />
        <ContactInformation />
      </div>
    </div>
  </section>

export default Contact;

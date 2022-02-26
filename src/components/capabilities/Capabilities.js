import React from 'react';
import Scroll from '../common/Scroll';

import CapabilityList from './CapabilityList';

const Capabilities = () =>
  <section id="newentools" className="wrapper style3 fade-up">
    <div className="inner">
      <h2>NewenTools</h2>
      <p>
        Ofrecemos las herramientas para el bienestar de la sociedad. Soluciones a negocios o comunidades familiares, start-ups, y empresas privadas o públicas tipo:
      </p>
      <div className="features">
        <CapabilityList />
      </div>
      <ul className="actions">
        <li>
          <Scroll type="id" element="contact">
            <a href="/#contact" className="button">
              Instalar
            </a>
          </Scroll>
        </li>
      </ul>
    </div>
  </section>

export default Capabilities;

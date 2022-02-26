import React from 'react';
import Scroll from '../common/Scroll';

const Introduction = () =>
  <section id="intro" className="wrapper style1 fullscreen fade-up">
    <div className="inner">
      <h1>NewenLabs</h1>
      <p>
        Basado en el conocimiento que se ha protegido por milenios...
      </p>
      <ul className="actions">
        <li>
          <Scroll type="id" element="about">
            <a href="#about" className="button">
              sobre nosotros
            </a>
          </Scroll>
        </li>
      </ul>
    </div>
  </section>


export default Introduction;

import React from "react";

const ContactInformation = () =>
  <section>
    <ul className="contact">
      <li>
        <h3>Ubicación</h3>
        <span>
          WallMapu
        </span>
      </li>
      <li>
        <h3>Email</h3>
        <a href="mailto:contact:@newenlabs.dev">contact@newenlabs.dev</a>
      </li>
      <li>
        <h3>Social</h3>
        <ul className="icons">
          <li>
            <a href="/#" className="fa-twitter">
              <span className="label">Twitter</span>
            </a>
          </li>
          <li>
            <a href="/#" className="fa-facebook">
              <span className="label">Facebook</span>
            </a>
          </li>
          <li>
            <a href="/#" className="fa-github">
              <span className="label">GitHub</span>
            </a>
          </li>
          <li>
            <a href="/#" className="fa-instagram">
              <span className="label">Instagram</span>
            </a>
          </li>
          <li>
            <a href="/#" className="fa-linkedin">
              <span className="label">LinkedIn</span>
            </a>
          </li>
        </ul>
      </li>
    </ul>
  </section>

export default ContactInformation;

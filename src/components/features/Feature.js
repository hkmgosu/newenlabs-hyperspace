import React from 'react';
import { Link } from 'gatsby';

const Feature = ({href, image, heading, description, to}) =>
  <section>
    <a href={href} className="image" alt="image" style={{'backgroundImage': `url('${image}')`, 'backgroundPosition': 'center center'}}>
      <img src={image} alt="" data-position="center center" style={{ display: 'none'}}/>
    </a>
    <div className="content">
      <div className="inner">
        <h2>{heading}</h2>
        <p>{description}</p>
        <ul className="actions">
          <li>
            <Link className="button" to={to.href}>
              {to.label}
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </section>

export default Feature;

import React from 'react';
import { Link } from 'gatsby';

import '../../assets/sass/main.scss';

const Header = () => (
  <header id="header">
    <Link className="title" to="/">
      NewenApps
    </Link>
    <nav>
      <ul>
        <li>
          <Link to="/">Bienvenidos</Link>
        </li>
        <li>
          <Link to="/about">Sociedad</Link>
        </li>
        <li>
          <Link to="/#newentools">NewenTools</Link>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;

import React from 'react';
import { NavLink } from 'react-router-dom';

import './header.scss';

const Header = () => (
  <header className="header">
    <h1 className="header__logo">BL</h1>
    <nav className="header__nav">
      <NavLink to="/" exact activeClassName="selected">
        accueil
      </NavLink>
      <NavLink to="/portfolio" exact activeClassName="selected">
        réalisations
      </NavLink>
      <NavLink to="/contact" activeClassName="selected">
        contact
      </NavLink>
    </nav>
  </header>
)

export default Header;

/* eslint-disable react/jsx-no-target-blank */
import React from 'react';

import './footer.scss';

const Footer = () => (
  <footer>
    <nav className="footer__nav">
      <a href="tel:+33669584619">0669584619</a>
      <a href="mailto:benoit.lacombled@gmail.com">benoit.lacombled@gmail.com</a>
      <div className="footer__social">
      <a href="https://github.com/benlac" target="_blank"><i className="fab fa-github fa-lg"></i></a> 
      <a href="https://www.linkedin.com/in/benoitlacombled/" target="_blank"><i className="fab fa-linkedin fa-lg"></i></a> 
      <a href="https://twitter.com/LacombledBenoit" target="_blank"><i className="fab fa-twitter fa-lg"></i></a> 
      </div>
    </nav>
  </footer>
);

export default Footer;

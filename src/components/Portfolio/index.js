import React from 'react';

import './portfolio.scss';
import Card from './Card';

const Portfolio = ({ projets }) => (
  <div className="portfolio">
    {projets.map((projet) => (
      <Card key={projet.id} {...projet} />
    ))}
  </div>
);

export default Portfolio;

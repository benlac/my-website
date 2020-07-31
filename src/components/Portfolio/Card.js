import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Card = ({ name, description, technology, buttonClass, mainPicture }) => (
  <div className="card" >
    <img src={mainPicture} className="card__img" alt=""/>
    <div className="card__body">
      <h5 className="card__title">{name}</h5>
      <p className="card__text">Développeur full-stack</p>
      <p className="card__text">{description}</p>
      <p className="card__text-2">Techno : Html/css, javascript</p>
      <Link to="/projet" className={buttonClass}>
      Voir le projet
      </Link>
    </div>
  </div>
);


Card.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  technology: PropTypes.array.isRequired,
  buttonClass: PropTypes.string.isRequired,
  mainPicture: PropTypes.string.isRequired,
}
export default Card;

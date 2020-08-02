import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Card = ({
  name,
  buttonClass,
  mainPicture,
  id,
}) => (
  <div className="card" >
    <Link to={`portfolio/${id}`}>
      <div className="card__img">
        <img src={mainPicture} alt=""/>
      </div>
      <div className="card__body">
        <div className="card__body__content">
          <h4 className="card__title">{name}</h4>
          <p className="card__text">Développeur full-stack</p>
          <div className={buttonClass}>
            Voir le projet
          </div>
        </div>
      </div>
    </Link>
  </div>
);

Card.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  buttonClass: PropTypes.string.isRequired,
  mainPicture: PropTypes.string.isRequired,
}
export default Card;

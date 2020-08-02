import React from 'react';

import './home.scss';
import home from './home.png';

const Home = () => (
  <main className="home">
    <section className="home__section-1">
        <p className="home__section-1__p">
        Bienvenue, je suis <br/><span>Benoit Lacombled.</span><br/>Développeur web <br/> <span>front-end.</span>
        </p>
    </section>
    <section className="home__section-2">
      <img src={home} alt="Illustration d'un développeur expliquant son travail à un collègue" />
    </section>
  </main>
);

export default Home;

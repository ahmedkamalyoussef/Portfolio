import React, { useEffect } from 'react';
import './Home.css';
import Social from './Social';
import Data from './Data';
import ScrollDown from './ScrollDown';

function Home() {
  useEffect(() => {
    const img = document.querySelector('.home-img');
    img.classList.add('animate');
  }, []);

  return (
    <section className="home section" id="home">
      <div className="home-container container grid">
        <div className="home-content grid">
          <Social />
          <div className="home-img"></div>
          <Data />
        </div>
        <ScrollDown />
      </div>
    </section>
  );
}

export default Home;
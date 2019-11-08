import React from 'react';
import BlackKing from '../../assets/chess-icons/bk.png';
import WhitePawn from '../../assets/chess-icons/wp.png';
import BlackKnight from '../../assets/chess-icons/bkn.png';
import WhiteQueen from '../../assets/chess-icons/wq.png';
import Nav from '../banner/banner.js';
import './about-us.css';
import '../../App.css';

export default function about() {
  return (
    <>
      {/* <Nav /> */}
      <div>
        <span id="banner-text">ULTIMATE CHESS TEAM</span>
      </div>
      <div className="about-container">
        <ul className="about">
          <li>
            <h1>Pratiibh</h1>
            <img src={BlackKnight} width="300" />
            <p>I like to code</p>
          </li>
          <li>
            <h1>Lee</h1>
            <img src={WhiteQueen} width="300" />
            <p>I like to code</p>
          </li>
          <li>
            <h1>AJ</h1>
            <img src={BlackKing} width="300" />
            <p>After serving 6 years in the military as a Persian Farsi linguist and Intelligence analyst, I decided to apply those language learning and analytic skills to a career in coding. Incidentally, I enjoyed learning JavaScript so much I dropped everything and moved across the country to puruse my new goal.</p>
          </li>
          <li>
            <h1>Brandyn</h1>
            <img src={WhitePawn} width="300" />
            <p>I like to code</p>
          </li>
        </ul>
      </div>
    </>
  );
}

import React from 'react';
import PuppyOne from '../../assets/puppy-one.jpg';
import PuppyTwo from '../../assets/puppy-two.jpg';
import PuppyThree from '../../assets/puppy-three.jpg';
import PuppyFour from '../../assets/puppy-four.jpg';
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
            <img src={PuppyOne} width="300" />
            <p>I'm a a Software Developer born and raised in Washington!</p>
            <p>
              Hobbies that I keep up with are computer-building,
              aquarium/fishkeeping, and basketball!
            </p>
          </li>
          <li>
            <h1>Lee</h1>
            <img src={PuppyTwo} width="300" />
            <p>I like to code</p>
          </li>
          <li>
            <h1>AJ</h1>
            <img src={PuppyThree} width="300" />
            <p>I like to code</p>
          </li>
          <li>
            <h1>Brandyn</h1>
            <img src={PuppyFour} width="300" />
            <p>I like to code</p>
          </li>
        </ul>
      </div>
    </>
  );
}

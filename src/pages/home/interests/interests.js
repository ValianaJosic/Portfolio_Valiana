import React from 'react';
import './interests.css';
import beach from '../../../assets/images/beach.jpg'
import family from '../../../assets/images/family.jpg'
import candle from '../../../assets/images/candle.jpg'
import gym from '../../../assets/images/gym.jpeg'
import coffee from '../../../assets/images/coffee.jpeg'
import vegan from '../../../assets/images/vegan.jpeg'
import code from '../../../assets/images/code.jpeg'
import dogs from '../../../assets/images/dogs.jpeg'
import mom from '../../../assets/images/mom.jpg'
import travel from '../../../assets/images/travel.jpeg'
import blue from '../../../assets/images/blue.jpeg'

function Interests() {
  return (
    <div className='int-wrapper'>
    <div className='int-text intro'>Things I Love and Some Interests</div>
      <div className='img-grid'>
        <div className='int-text'><img alt='' src={family} className="img-grid grid-pic"></img></div> 
        <p className="img-hov">I Love my Famliy</p> 
        <div className='int-text'><img alt='' src={gym} className="img-grid grid-pic"></img></div>
        <p className="img-hov">Coffeee Obsessed</p>
        <div className='int-text'><img alt='' src={coffee} className="img-grid grid-pic"></img></div>
        <p className="img-hov">Enjoy Weight Lifting</p>
        <div className='int-text'><img alt='' src={vegan} className="img-grid grid-pic"></img></div>
        <p className="img-hov">Vegan for the Planet</p>
        <div className='int-text'><img alt='' src={code} className="img-grid grid-pic"></img></div>
        <p className="img-hov">Dogs are the best</p>
        <div className='int-text'><img alt='' src={dogs} className="img-grid grid-pic"></img></div>
        <p className="img-hov">Passion for Code</p>
        <div className='int-text'><img alt='' src={candle} className="img-grid grid-pic"></img></div>
        <p className="img-hov">I'm a Cool Mom</p>
        <div className='int-text'><img alt='' src={mom} className="img-grid grid-pic"></img></div>
        <p className="img-hov">Candle Aficionado</p>
        <div className='int-text'><img alt='' src={beach} className="img-grid grid-pic"></img></div>
        <p className="img-hov">Let's Leave a healthy environment<br></br> for future generations</p>
        <div className='int-text'><img alt='' src={travel} className="img-grid grid-pic"></img></div>
        <p className="img-last">Wanderlust.....</p>
        <div className='int-text'><img alt='' src={blue} className="img-grid grid-pic"></img></div>
        </div>
    </div>
  );
}

export default Interests;
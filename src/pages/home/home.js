import React from 'react';
import './home.css';
import Video from '../../assets/videos/hero.mp4'
import Scroll from '../home/scroll/scroll'
import Actionbtn from '../home/action-btn/action-btn'


function Home() {
  return (
    <div>
    <div className="video-div" >
      <video autoPlay="autoplay" loop="loop" muted className="video">
        <source src={Video} type="video/mp4" />
        Your browser does not support the video tag.
    </video>
    <Actionbtn/>
    <Scroll/>
    </div>
    </div>
  );
}

export default Home;
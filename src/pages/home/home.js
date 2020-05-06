import React from 'react';
import './home.css';
import Video from '../../assets/videos/data1.mp4'
import Scroll from '../home/scroll/scroll'
import Actionbtn from '../home/action-btn/action-btn'
import About from './about-me/about-me'

function Home() {
  return (
    <div>
      <div className="video-div" >
        <video autoPlay="autoplay" loop="loop" muted className="video">
          <source src={Video} type="video/mp4" />
        Your browser does not support the video tag.
    </video>
        <Actionbtn />
        <Scroll />
      </div>
      <About />
    </div>
  );
}

export default Home;
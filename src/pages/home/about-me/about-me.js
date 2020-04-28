import React from 'react';
import '../../home/about-me/about-me.css'
import Carousel from  '../about-me/carousel/carousel'



function About() {

    return (
        <div className="profile-wrapper">
            <div className="about">
                <div className="contact-profile"> Valiana Josic
        <br></br>
        </div>
        <div className="info">
            I worked in hospitality for 9 years and entered a coding bootcamp ( Wyncode !) wanting to create a better future for my daughter and I.
            <br></br>
            <br></br>
            Hispanic women are considered  minorities in the tech field so I wanted to break these norms and create more possibilities for my daughters future.  Now as a Web Developer I've already shown my daughter you can do anything with persitance and hard work.
            <br></br>
            <br></br>
            I strongly believe in using tech for good by implementing solutions to improve our society and environment in a positive direction. 
            <br></br>
            <br></br>
            </div>   
        </div>
        <div className="img">
            <Carousel/>
            </div> 
        </div>
        
        
    )
};


export default About;
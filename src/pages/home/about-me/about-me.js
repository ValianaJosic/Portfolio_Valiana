import React from 'react';
import '../../home/about-me/about-me.css'
import Vali from '../../../assets/images/vali.jpg'


function About() {

    return (
        <div className="profile-wrapper">
            <div className="profile">
            </div>
            <div className="about">
                <div className="contact-profile">Thais Reyes
    <br></br>
                Real Estate Advisor
    <br></br>
                </div>
            Thais Reyes is an experienced Real Estate advisor, a Venezuelan native, who moved to Miami in 1995, captivated by the beauty of Miami, from its pristine beaches, excellent year round weather, cultural diversity, lifestyle, and ever-growing industries. Thais is adamant about the advantages of owning property in South Florida.
        <br></br>
            Thais has a passion for the real estate profession, dedication, attention to detail, strong negotiation skills, efficient real estate transactions process and has successfully closed commercial leases as well as residential real estate transactions.<br></br>
                <br></br>
            </div>
            <div className="img">
                <img src={Vali} alt="vali" className="vali" />
            </div>
        </div>
    )
};


export default About;
import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Vali from '../../../../assets/images/vali.jpg';
import '../carousel/carousel.css'
import Me from '../../../../assets/images/me.jpg'
import Wyn from '../../../../assets/images/wyn.jpg'

 
class DemoCarousel extends Component {
    render() {
        return (
            <Carousel className="carousel"  autoPlay="autoplay" >
                <div className="carousel-wrapper">
                    <img className="carousel-img"alt='Vali' src={Vali}/>
                    <p className="legend" style= {{backgroundColor :'#16697A'}}>I Love Traveling</p>
                </div>
                <div className="carousel-wrapper">
                    <img className="carousel-img" alt= '' src={Me} />
                    <p className="legend" style= {{backgroundColor :'#16697A'}}>Wyncode Graduate</p>
                </div>
                <div className="carousel-wrapper">
                    <img className="carousel-img" alt= '' src={Wyn} />
                    <p className="legend" style= {{backgroundColor :'#16697A'}}>C35</p>
                </div>
            </Carousel>
        );
    }
};
 
// ReactDOM.render(<DemoCarousel />, document.querySelector('.demo-carousel'));

export default DemoCarousel

import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Vali from '../../../../assets/images/vali.jpg';
import '../carousel/carousel.css'

 
class DemoCarousel extends Component {
    render() {
        return (
            <Carousel className="carousel"  autoPlay="autoplay" >
                <div className="carousel-wrapper">
                    <img alt='Vali' src={Vali} />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img alt= '' src="assets/2.jpeg" />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img alt= '' src="assets/3.jpeg" />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
        );
    }
};
 
// ReactDOM.render(<DemoCarousel />, document.querySelector('.demo-carousel'));

export default DemoCarousel

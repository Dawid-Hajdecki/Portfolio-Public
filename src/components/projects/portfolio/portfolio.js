import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import  { Carousel } from 'react-responsive-carousel';

import ProjectImage from './portfolio.jpg';

const Portfolio = () => {
    return (
        <>
            <div className="project-text">
                <a href="http://hajdecki.com/" target="_blank" rel="noreferrer">Web</a>
                <a href="https://github.com/Voxuuu/Portfolio-Public" target="_blank" rel="noreferrer" className="mx-4">Github</a>
            </div>
            <Carousel className="project-image">
                <div>
                    <img src={ProjectImage}/>
                    <p className="legend">Top of Page</p>
                </div>
            </Carousel>
            <div className="row">
                <div className="grid-center">
                    <div className="ml-4 technology-info">HTML</div>
                </div>
                <div className="grid-center">
                    <div className="ml-4 technology-info">React.js</div>
                </div>
            </div>
            <p className="mt-4">
                <p className="overflow-200px">
                    <b>This is my current portfolio</b>
                </p>
            </p>
        </>
  );
}

export default Portfolio;

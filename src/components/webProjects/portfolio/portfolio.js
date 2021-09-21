import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Portfolio = () => {
    return (
        <>
            <div className="project-text">
                <a href="https://github.com/Voxuuu/Portfolio-Public" target="_blank" rel="noreferrer">Github</a>
            </div>
            <div className="row">
                <div className="grid-center">
                    <div className="ml-4 technology-info">HTML</div>
                </div>
                <div className="grid-center">
                    <div className="ml-4 technology-info">React.js</div>
                </div>
            </div>
            <p className="mt-4 ">
                <p className="overflow-200px">
                    <b>This is my current portfolio</b>
                </p>
            </p>
        </>
  );
}

export default Portfolio;

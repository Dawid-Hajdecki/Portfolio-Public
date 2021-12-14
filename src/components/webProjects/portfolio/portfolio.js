import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Portfolio = () => {
    return (
        <>
            <div className="row ml-1">
                <a href="https://github.com/Voxuuu/Portfolio-Public" className="projects-button mr-3 my-2" target="_blank" rel="noreferrer">Github</a>
            </div>
            <div className="row my-2 ml-1">
                <div className="mr-3 my-2 technology-info">HTML</div>
                <div className="mr-3 my-2 technology-info">React.js</div>
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

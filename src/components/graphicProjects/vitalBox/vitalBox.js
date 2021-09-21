import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import  { Carousel } from 'react-responsive-carousel';

import ProjectImageLogo from './Logo_512px.png';
import ProjectImageLogoColours from './Logo_Colours_512px.png';

const Boats = () => {
    return (
        <>
            <Carousel className="project-graphic-image">
                <div>
                    <img src={ProjectImageLogo} alt="Logo"/>
                    <p className="legend">Logo</p>
                </div>
                <div>
                    <img src={ProjectImageLogoColours} alt="Logo Colours"/>
                    <p className="legend">Logo Colours</p>
                </div>
            </Carousel>
            <div className="row">
                <div className="grid-center my-2">
                    <div className="ml-4 technology-info">Illustrator</div>
                </div>
            </div>
            <p className="mt-4 project-paragraph-background">
                <p className="overflow-200px">
                <b>Vital Box</b>
                    <br/><br/>During my free time, I like to take on challenges like these. This was done for me; for my portfolio, but I had in mind a starting catering company on Facebook which I did contact when the logo was finished.
                    <br/><br/>When I create these projects I always think of my portfolio and how I can use different techniques to widen my skills palette. This time I used gradients to show the outlines of the "leaf" and give depth to the "stick". I always try to contact the company or person I did the project for. As of now (21/09/2021) the company has not gotten back to me and this project is not used anywhere.
                </p>
            </p>
        </>
    );
}

export default Boats;

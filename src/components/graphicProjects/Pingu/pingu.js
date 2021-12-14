import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import  { Carousel } from 'react-responsive-carousel';

import ProjectImageLogo from './Pingu_500px.png';
import ProjectImageLogoUsed from './PinguUsed.png';

const Boats = () => {
    return (
        <>
            <a href="https://www.twitch.tv/mudda_tm" className="projects-button mr-3 my-2" target="_blank" rel="noreferrer">Image can be viewed here</a>
            <Carousel className="project-graphic-image">
                <div>
                    <img src={ProjectImageLogo} alt="Logo"/>
                    <p className="legend">Logo</p>
                </div>
                <div>
                    <img src={ProjectImageLogoUsed} alt="Logo Used"/>
                    <p className="legend">Logo Used</p>
                </div>
            </Carousel>
            <div className="row">
                <div className="grid-center my-2">
                    <div className="ml-4 technology-info">Illustrator</div>
                </div>
                <div className="grid-center my-2">
                    <div className="ml-4 technology-info">Photoshop</div>
                </div>
            </div>
            <p className="mt-4 project-paragraph-background">
                <p className="overflow-200px">
                <b>Pingu</b>
                    <br/><br/>This was a project for a friend. It is an emote that can be used anywhere. From merchandise to an emote used on platforms like Twitch. This project is finished and can be live viewed on Mudda_TM twitch channel. It is positioned in the bottom part of the twitch chat (Logo for Penguin coins as shown in the screenshot).
                </p>
            </p>
        </>
    );
}

export default Boats;

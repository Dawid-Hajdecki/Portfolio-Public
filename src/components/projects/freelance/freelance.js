import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import  { Carousel } from 'react-responsive-carousel';

import ProjectImageFreelance from './freelance.jpg';
import ProjectImageFreelanceShowcase from './freelance-showcase.jpg';

const Freelance = () => {
    return (
        <>
            <div className="project-text">
                <a href="http://freelance.hajdecki.com/" target="_blank" rel="noreferrer">Web</a>
                <a href="https://github.com/Voxuuu/Freelance-public" target="_blank" rel="noreferrer" className="mx-4">Github</a>
            </div>
            <Carousel className="project-image">
                <div>
                    <img src={ProjectImageFreelance} alt="Top of Page"/>
                    <p className="legend">Top of Page</p>
                </div>
                <div>
                    <img src={ProjectImageFreelanceShowcase} alt="Showcase Open"/>
                    <p className="legend">Showcase Open</p>
                </div>
            </Carousel>
            <div className="row">
                <div className="grid-center my-2">
                    <div className="ml-4 technology-info">HTML</div>
                </div>
                <div className="grid-center my-2">
                    <div className="ml-4 technology-info">jQuery</div>
                </div>
            </div>
            <p className="mt-4 project-paragraph-background">
                <p className="overflow-200px">
                <b>This was a freelance project for a family member</b>
                    <br/><br/>My idea behind this project was to learn new technology, develop my skills and create something from scratch for a "client". A member of my family needed a portfolio for their university and I took on a challenge to create it.
                    <br/><br/>This was a fun project, I was trying to use as many new techniques and technologies as possible, creating something that I could showcase and be proud of. Although the development of this project was finished, I didn't find time to compress the images and fill out the dummy text. So, this project was never actually used in a university interview.
                    <br/><br/>This project is mostly HTML. jQuery was used to show and hide the images.
                </p>
            </p>
        </>
    );
}

export default Freelance;

import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import  { Carousel } from 'react-responsive-carousel';

import ProjectImageBoats from './boats.jpg';
import ProjectImageBoatsSpeakers from './boats-speakers.jpg';
import ProjectImageBoatsLogin from './boats-login.jpg';

const Boats = () => {
    return (
        <>
            <div className="project-text">
                <a href="https://boats-conference.herokuapp.com/" target="_blank" rel="noreferrer">Web</a>
                <a href="https://github.com/Voxuuu/Boats-Public" target="_blank" rel="noreferrer" className="mx-4">Github</a>
            </div>
            <Carousel className="project-image">
                <div>
                    <img src={ProjectImageBoats} alt="Home Page"/>
                    <p className="legend">Home Page</p>
                </div>
                <div>
                    <img src={ProjectImageBoatsSpeakers} alt="Speakers Page"/>
                    <p className="legend">Speakers Page</p>
                </div>
                <div>
                    <img src={ProjectImageBoatsLogin} alt="Login Page"/>
                    <p className="legend">Login Page</p>
                </div>
            </Carousel>
            <div className="row">
                <div className="grid-center my-2">
                    <div className="ml-4 technology-info">HTML</div>
                </div>
                <div className="grid-center my-2">
                    <div className="ml-4 technology-info">CSS</div>
                </div>
                <div className="grid-center my-2">
                    <div className="ml-4 technology-info">MongoDb</div>
                </div>
                <div className="grid-center my-2">
                    <div className="ml-4 technology-info">Express</div>
                </div>
                <div className="grid-center my-2">
                    <div className="ml-4 technology-info">React.js</div>
                </div>
                <div className="grid-center my-2">
                    <div className="ml-4 technology-info">Node.js</div>
                </div>
            </div>
            <p className="mt-4 project-paragraph-background">
                <p className="overflow-200px">
                <b>This was a group project in my 4th year of Uni</b>
                    <br/><br/>This was my first project working with React. We split our group into front and back end. This was where I actually started playing around with React but also reminding myself of the basics of HTML and CSS.
                    <br/><br/>This idea was to create a conference app, where a user could join, create an account and a profile. They were also able to read through the information about the existing conference and the previous conferences.
                </p>
            </p>
        </>
    );
}

export default Boats;

import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import  { Carousel } from 'react-responsive-carousel';

import ProjectImageBoats from './boats.jpg';
import ProjectImageBoatsSpeakers from './boats-speakers.jpg';
import ProjectImageBoatsLogin from './boats-login.jpg';

const Boats = () => {
    return (
        <>
            <div className="row ml-1">
                <a href="https://boats-conference.herokuapp.com/" className="projects-button mr-3 my-2" target="_blank" rel="noreferrer">Web</a>
                <a href="https://github.com/Voxuuu/Boats-Public" className="projects-button mr-3 my-2" target="_blank" rel="noreferrer">Github</a>
            </div>
            <Carousel className="project-web-image">
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
            <div className="row my-2 ml-1">
                <div className="mr-3 my-2 technology-info">HTML</div>
                <div className="mr-3 my-2 technology-info">CSS</div>
                <div className="mr-3 my-2 technology-info">MongoDb</div>
                <div className="mr-3 my-2 technology-info">Express</div>
                <div className="mr-3 my-2 technology-info">React.js</div>
                <div className="mr-3 my-2 technology-info">Node.js</div>
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

import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import  { Carousel } from 'react-responsive-carousel';

import ProjectImageHissy from './hissy.jpg';
import ProjectImageHissyRed from './hissy-red.jpg';
import ProjectImageHissyQuiz from './hissy-quiz.jpg';

const Hissy = () => {
    return (
        <>
            <div className="row ml-1">
                <a href="http://hissy.hajdecki.com" className="projects-button mr-3 my-2" target="_blank" rel="noreferrer">Web</a>
                <a href="https://github.com/Voxuuu/Hissy-Public" className="projects-button mr-3 my-2" target="_blank" rel="noreferrer">Github</a>
            </div>
            <Carousel className="project-web-image">
                <div>
                    <img src={ProjectImageHissy} alt="Home Page"/>
                    <p className="legend">Home Page</p>
                </div>
                <div>
                    <img src={ProjectImageHissyRed} alt="Red Colour Scheme"/>
                    <p className="legend">Red Colour Scheme</p>
                </div>
                <div>
                    <img src={ProjectImageHissyQuiz} alt="Quiz Page"/>
                    <p className="legend">Quiz Page</p>
                </div>
            </Carousel>
            <div className="row my-2 ml-1">
                <div className="mr-3 my-2 technology-info">PHP</div>
                <div className="mr-3 my-2 technology-info">HTML</div>
                <div className="mr-3 my-2 technology-info">JS</div>
            </div>
            <p className="mt-4 project-paragraph-background">
                <p className="overflow-200px">
                <b>This was a project in my 2nd year of College</b>
                    <br/><br/>This project was how I actually started with dynamic web development. I was in a Software Development Class and the majority of the projects were made in either C# or Java. Up until that momnet, I had only coded in plain HTML and something that I annoyed me, was the fact that I couldn't understand how to store variables in plain HTML the same way it's done in C# or Java. After picking Hissy as my 2nd-year course work, I started to enjoy PHP and dynamic web development.
                    <br/><br/>This project was focused on creating a web application, where a user could perform full CRUD on their account. There was also an option to finish quizzes and score some points, but it was never fully developed.
                    <br/><br/>PHP was the main technology used here but I did add a little bit of JavaScript to make the quizzes scoring system function.
                </p>
            </p>
        </>
    );
}

export default Hissy;

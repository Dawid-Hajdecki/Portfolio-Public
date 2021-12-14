import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import  { Carousel } from 'react-responsive-carousel';

import ProjectImageProfessionalism from './professionalism.jpg';
import ProjectImageProfessionalismResponsive from './professionalism-responsive.jpg';

const Professionalism = () => {
    return (
        <>
            <div className="row ml-1">
                <a href="http://professionalism.hajdecki.com/" className="projects-button mr-3 my-2" target="_blank" rel="noreferrer">Web</a>
                <a href="https://github.com/Voxuuu/Professionalism-Public" className="projects-button mr-3 my-2" target="_blank" rel="noreferrer">Github</a>
            </div>
            <Carousel className="project-web-image">
                <div>
                    <img src={ProjectImageProfessionalism} alt="Top of Page"/>
                    <p className="legend">Top of Page</p>
                </div>
                <div>
                    <img src={ProjectImageProfessionalismResponsive} alt="Responsive layout"/>
                    <p className="legend">Responsive layout</p>
                </div>
            </Carousel>
            <div className="row my-2 ml-1">
                <div className="mr-3 my-2 technology-info">HTML</div>
                <div className="mr-3 my-2 technology-info">JS</div>
            </div>
            <p className="mt-4 project-paragraph-background">
                <p className="overflow-200px">
                <b>This was a project in my 3rd year of Uni</b>
                    <br/><br/>This was a project for my module: Creative Technologies Professionalism. We had to write a blog about Freelancing, Creative Industries and Professionalism. As a web student who at that moment had a bit more free time, I thought that I would create my own simple blog.
                    <br/><br/>This project is mostly HTML, working with CSS and producing a blog that is aesthetically pleasing. There is a small amount of JavaScript, that is used to make this blog responsive. The sidebar collapses and has a button to expand and collapse again.
                </p>
            </p>
        </>
  );
}

export default Professionalism;

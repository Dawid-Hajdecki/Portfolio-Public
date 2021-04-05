import React, {useState} from 'react';

import ProjectImage from './hissy.jpg';

const Hissy = () => {
    const [style, setStyle] = useState({display: 'none'});
    return (
        <>
            <div className="project-image box-shadow" style={{ backgroundImage: `url(${ProjectImage})`}} onMouseEnter={e => {setStyle({display: 'grid'});}} onMouseLeave={e => {setStyle({display: 'none'})}}>
                <div className="row project-text-height">
                    <div className="col" style={style}>
                        <a href="http://hissy.hajdecki.com/" target="_blank"  rel="noreferrer">
                            <div className="project-text grid-center">
                                Web
                            </div>
                        </a>
                    </div>
                    <div className="col" style={style}>
                        <a href="https://github.com/Voxuuu/Hissy-Public" target="_blank" rel="noreferrer">
                            <div className="project-text grid-center">
                                Github
                            </div>
                        </a>
                    </div>
                </div>
                <div className="row project-technologies-height">
                    <div className="col grid-center" style={style}>
                        <div className="ml-4 technology-info">PHP</div>
                    </div>
                    <div className="col grid-center" style={style}>
                        <div className="ml-4 technology-info">HTML</div>
                    </div>
                    <div className="col grid-center" style={style}>
                        <div className="ml-4 technology-info">JS</div>
                    </div>
                </div>
            </div>
            <p className="mt-4">
                <p className="overflow-200px">
                <b>This was a project in my 2nd year of College</b>
                    <br/><br/>This project was how I actually started with dynamic web development. I was in a Software Development Class and the majority of the projects were made in either C# or Java. Up until that momnet, I had only coded in plain HTML and something that I annoyed me, was the fact that I couldn't understand how to store variables in plain HTML the same way it's done in C# or Java. After picking Hissy as my 2nd-year course work, I started to enjoy PHP and dynamic web development.
                    <br/><br/>This project was focused on creating a web application, where a user could perform full CRUD on their account. There was also an option to finish quizzes and score some points, but it was never fully developed.
                    <br/><br/>PHP was the main technology used here but I did add a little bit of JavaScript to make the quizzes scoring system function.
                </p>
                <small>Last Update: 01/04/2021</small>
            </p>
            <div>
                <a href="http://hissy.hajdecki.com" target="_blank" rel="noreferrer" className="mr-2">Web</a>
                <a href="https://github.com/Voxuuu/Hissy-Public" target="_blank" rel="noreferrer">Github</a>
            </div>
        </>
    );
}

export default Hissy;

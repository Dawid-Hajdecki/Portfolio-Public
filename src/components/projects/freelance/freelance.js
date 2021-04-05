import React, {useState} from 'react';

import ProjectImage from './freelance.jpg';

const Freelance = () => {
    const [style, setStyle] = useState({display: 'none'});
    return (
        <>
            <div className="project-image box-shadow" style={{ backgroundImage: `url(${ProjectImage})`}} onMouseEnter={e => {setStyle({display: 'grid'});}} onMouseLeave={e => {setStyle({display: 'none'})}}>
                <div className="row project-text-height">
                    <div className="col" style={style}>
                        <a href="http://freelance.hajdecki.com/" target="_blank"  rel="noreferrer">
                            <div className="project-text grid-center">
                                Web
                            </div>
                        </a>
                    </div>
                    <div className="col" style={style}>
                        <a href="https://github.com/Voxuuu/Freelance-public" target="_blank" rel="noreferrer">
                            <div className="project-text grid-center">
                                Github
                            </div>
                        </a>
                    </div>
                </div>
                <div className="row project-technologies-height">
                    <div className="col grid-center" style={style}>
                        <div className="ml-4 technology-info">HTML</div>
                    </div>
                    <div className="col grid-center" style={style}>
                        <div className="ml-4 technology-info">jQuery</div>
                    </div>
                </div>
            </div>
            <p className="mt-4">
                <p className="overflow-200px">
                <b>This was a freelance project for a family member</b>
                    <br/><br/>My idea behind this project was to learn new technology, develop my skills and create something from scratch for a "client". A member of my family needed a portfolio for their university and I took on a challenge to create it.
                    <br/><br/>This was a fun project, I was trying to use as many new techniques and technologies as possible, creating something that I could showcase and be proud of. Although the development of this project was finished, I didn't find time to compress the images and fill out the dummy text. So, this project was never actually used in a university interview.
                    <br/><br/>This project is mostly HTML. jQuery was used to show and hide the images.
                </p>
                <small>Last Update: 01/04/2021</small>
            </p>
            <div>
                <a href="http://freelance.hajdecki.com/" target="_blank" rel="noreferrer" className="mr-2">Web</a>
                <a href="https://github.com/Voxuuu/Freelance-public" target="_blank" rel="noreferrer">Github</a>
            </div>
        </>
    );
}

export default Freelance;

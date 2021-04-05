import React, {useState} from 'react';

import ProjectImage from './boats.jpg';

const Boats = () => {
    const [style, setStyle] = useState({display: 'none'});
    return (
        <>
            <div className="project-image box-shadow" style={{ backgroundImage: `url(${ProjectImage})`}} onMouseEnter={e => {setStyle({display: 'grid'});}} onMouseLeave={e => {setStyle({display: 'none'})}}>
                <div className="row project-text-height">
                    <div className="col" style={style}>
                        <a href="https://boats-conference.herokuapp.com/" target="_blank" rel="noreferrer">
                            <div className="project-text grid-center">
                                Web
                            </div>
                        </a>
                    </div>
                    <div className="col" style={style}>
                        <a href="https://github.com/Voxuuu/Boats-Public" target="_blank" rel="noreferrer">
                            <div className="project-text grid-center">
                                Github
                            </div>
                        </a>
                    </div>
                </div>
                <div className="row project-technologies-height">
                    <div className="col grid-center" style={style}>
                        <div className="ml-4 technology-info">MERN</div>
                    </div>
                    <div className="col grid-center" style={style}>
                        <div className="ml-4 technology-info">HTML</div>
                    </div>
                </div>
            </div>
            <p className="mt-4">
                <p className="overflow-200px">
                <b>This was a group project in my 4th year of Uni</b>
                    <br/><br/>This was my first project working with React. We split our group into front and back end. This was where I actually started playing around with react but also reminding myself of the basics of HTML and CSS.
                    <br/><br/>This idea was to create a conference app, where a user could join, create an account and a profile. They were also able to read through the information about the existing conference and the previous conefences.
                </p>
                <small>Last Update: 01/04/2021</small>
            </p>
            <div>
                <a href="https://boats-conference.herokuapp.com/" target="_blank" rel="noreferrer" className="mr-2">Web</a>
                <a href="https://github.com/Voxuuu/Boats-Public" target="_blank" rel="noreferrer">Github</a>
            </div>
        </>
    );
}

export default Boats;

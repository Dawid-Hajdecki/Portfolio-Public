import React, {useState} from 'react';

import ProjectImage from './professionalism.jpg';

const Professionalism = () => {
    const [style, setStyle] = useState({display: 'none'});
    return (
        <>
            <div className="project-image box-shadow" style={{ backgroundImage: `url(${ProjectImage})`}} onMouseEnter={e => {setStyle({display: 'grid'});}} onMouseLeave={e => {setStyle({display: 'none'})}}>
                <div className="row project-text-height">
                    <div className="col" style={style}>
                        <a href="http://professionalism.hajdecki.com/" target="_blank"  rel="noreferrer">
                            <div className="grid-center project-text">
                                Web
                            </div>
                        </a>
                    </div>
                    <div className="col" style={style}>
                        <a href="https://github.com/Voxuuu/Professionalism-Public" target="_blank" rel="noreferrer">
                            <div className="grid-center project-text">
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
                        <div className="ml-4 technology-info">JS</div>
                    </div>
                </div>
            </div>
            <p className="mt-4">
                <p className="overflow-200px">
                <b>This was a project in my 3rd year of Uni</b>
                    <br/><br/>This was a project for my module: Creative Technologies Professionalism. We had to write a blog about Freelancing, Creative Industries and Professionalism. Because I was a web student and at that time I had a bit more free time, I though that I would create my own simple blog.
                    <br/><br/>This project is mostly HTML, working with CSS and producing a blog which is aestheticall pleasing. There is a small amount of JavaScript, that is used to make this blog responsive. The side bar collapses and has a button to expand and collapse again.
                </p>
                <small>Last Update: 01/04/2021</small>
            </p>
            <div>
                <a href="http://professionalism.hajdecki.com/" target="_blank" rel="noreferrer" className="mr-2">Web</a>
                <a href="https://github.com/Voxuuu/Professionalism-Public" target="_blank" rel="noreferrer">Github</a>
            </div>
        </>
  );
}

export default Professionalism;

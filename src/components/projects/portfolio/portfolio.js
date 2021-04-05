import React, {useState} from 'react';

import ProjectImage from './portfolio.jpg';

const Portfolio = () => {
    const [style, setStyle] = useState({display: 'none'});
    return (
        <>
            <div className="project-image box-shadow" style={{ backgroundImage: `url(${ProjectImage})`}} onMouseEnter={e => {setStyle({display: 'grid'});}} onMouseLeave={e => {setStyle({display: 'none'})}}>
                <div className="row project-text-height">
                    <div className="col" style={style}>
                        <a href="http://hajdecki.com/" target="_blank"  rel="noreferrer">
                            <div className="grid-center project-text">
                                Web
                            </div>
                        </a>
                    </div>
                    <div className="col" style={style}>
                        <a href="https://github.com/Voxuuu/Portfolio-Public" target="_blank" rel="noreferrer">
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
                        <div className="ml-4 technology-info">React</div>
                    </div>
                </div>
            </div>
            <p className="mt-4">
                <p className="overflow-200px">
                    <b>This is my current portfolio</b>
                </p>
                <small>Last Update: 05/04/2021</small>
            </p>
            <div>
                <a href="http://hajdecki.com/" target="_blank" rel="noreferrer" className="mr-2">Web</a>
                <a href="https://github.com/Voxuuu/Portfolio-Public" target="_blank" rel="noreferrer">Github</a>
            </div>
        </>
  );
}

export default Portfolio;
